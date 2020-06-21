"use strict";
const pulumi = require("@pulumi/pulumi");
const aws = require("@pulumi/aws");
const awsx = require("@pulumi/awsx");
const mime = require("mime");
const { generateProof, capture, getStats, search } = require("./lambda-functions/merkleTree");


const siteBucket = new aws.s3.Bucket("merkle-tree-tracker-web", {
    website: {
        indexDocument: "index.html",
    },
});

const siteDir = "www";

for (let item of require("fs").readdirSync(siteDir)) {
    let filePath = require("path").join(siteDir, item);
    let object = new aws.s3.BucketObject(item, {
        bucket: siteBucket,
        source: new pulumi.asset.FileAsset(filePath),     // use FileAsset to point to a file
        contentType: mime.getType(filePath) || undefined, // set the MIME type of the file
    });
}

function publicReadPolicyForBucket(bucketName) {
    return JSON.stringify({
        Version: "2012-10-17",
        Statement: [{
            Effect: "Allow",
            Principal: "*",
            Action: [
                "s3:GetObject"
            ],
            Resource: [
                `arn:aws:s3:::${bucketName}/*` // policy refers to bucket name explicitly
            ]
        }]
    })
}

// Set the access policy for the bucket so all objects are readable
const bucketPolicy = new aws.s3.BucketPolicy("bucketPolicy", {
    bucket: siteBucket.bucket, // depends on siteBucket -- see explanation below
    policy: siteBucket.bucket.apply(publicReadPolicyForBucket)
    // transform the siteBucket.bucket output property -- see explanation below
});


// Create tables
const dataTable = new aws.dynamodb.Table(
    "dataTable",
    {
        attributes: [
            {
                name: "publicKey",
                type: "S"
            },
            {
                name: "timestamp",
                type: "N"
            }
        ],
        hashKey: "publicKey",
        rangeKey: "timestamp",
        readCapacity: 5,
        writeCapacity: 5
    }
)

// Create API endpoints
const endpoint = new awsx.apigateway.API("merkle-tree-tracker-api", {
    routes: [
        {
            path: "/generate-proof",
            method: "GET",
            eventHandler: generateProof,
        },
        {
            path: "/capture",
            method: "POST",
            eventHandler: async (event) => await capture(event, dataTable.name.get())
        },
        {
            path: "/stats",
            method: "GET",
            eventHandler: async (event) => await getStats(event, dataTable.name.get())
        },
        {
            path:"/search",
            method: "GET",
            eventHandler: async (event) => await search(event, dataTable.name.get())
        }
    ],
})



exports.bucketName = siteBucket.bucket;
exports.websiteUrl = siteBucket.websiteEndpoint;
exports.apiEndpoint = endpoint.url;
