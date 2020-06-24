"use strict";
const pulumi = require("@pulumi/pulumi");
const aws = require("@pulumi/aws");
const awsx = require("@pulumi/awsx");
const mime = require("mime");
const { generateProof, capture, getStats, search } = require("./lambda-functions/merkleTree");



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

exports.apiEndpoint = endpoint.url;
