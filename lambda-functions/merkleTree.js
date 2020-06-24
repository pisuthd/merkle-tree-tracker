const { MerkleTree } = require('merkletreejs')
const SHA256 = require('crypto-js/sha256')
const aws = require("@pulumi/aws");
const awsx = require("@pulumi/awsx");
const { round, generatePoints } = require("./utils")

const headers = {
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
}

exports.generateProof = async (event) => {

    let latitude;
    let longitude;
    if (event.queryStringParameters && event.queryStringParameters.lat) {
        latitude = event.queryStringParameters.lat;
    } else {
        return {
            statusCode: 400,
            headers: headers,
            body: JSON.stringify({
                status: "error",
                message: "Latitude is not provided"
            }),
        };
    }

    if (event.queryStringParameters && event.queryStringParameters.lng) {
        longitude = event.queryStringParameters.lng;
    } else {
        return {
            statusCode: 400,
            headers: headers,
            body: JSON.stringify({
                status: "error",
                message: "Longitude is not provided"
            }),
        };
    }

    const latWithPrecisions = generatePoints(latitude);
    const lngWithPrecisions = generatePoints(longitude);
    const finalWithPrecisions = latWithPrecisions.map((item, index) => `${item},${lngWithPrecisions[index]}`)
    const leaves = finalWithPrecisions.map(x => SHA256(x))
    const tree = new MerkleTree(leaves, SHA256)

    return {
        statusCode: 200,
        headers: headers,
        body: JSON.stringify({
            status: "ok",
            latitude: latitude,
            longitude: longitude,
            arrays: finalWithPrecisions,
            root: tree.getHexRoot(),
            leaves: tree.getHexLeaves(),
            merkleTree: tree.toString()
        })
    };
}

exports.capture = async (event, TableName) => {

    if (!event.body) {
        return {
            statusCode: 403,
            headers: headers,
            body: JSON.stringify({ "error": "Empty body" })
        };
    }

    let Item = JSON.parse(
        event.isBase64Encoded
            ? Buffer.from(event.body, "base64").toString()
            : event.body)

    const client = new aws.sdk.DynamoDB.DocumentClient();
    await client.put({ TableName, Item }).promise();

    return {
        statusCode: 200,
        headers: headers,
        body: JSON.stringify({
            status: "ok"
        })
    };
}


exports.search = async (event, TableName) => {
    let radius;
    let timestamp;
    let latitude;
    let longitude;
    if (event.queryStringParameters
        && event.queryStringParameters.lat
        && event.queryStringParameters.lng
        && event.queryStringParameters.radius
        && event.queryStringParameters.timestamp
    ) {
        latitude = Number(event.queryStringParameters.lat);
        longitude = Number(event.queryStringParameters.lng);
        radius = Number(event.queryStringParameters.radius);
        timestamp = event.queryStringParameters.timestamp;
    } else {
        return {
            statusCode: 400,
            headers: headers,
            body: JSON.stringify({
                status: "error",
                message: "Parameter is not provided"
            }),
        };
    }

    console.log(`Received event : ${latitude},${longitude} ${radius} ${timestamp}`)
    
    const params = {
        TableName,
        FilterExpression: "#tt = :tttt",
        ProjectionExpression: "publicKey, #tt, leaves",
        ExpressionAttributeNames: {
            "#tt": "timestamp"
        },
        ExpressionAttributeValues: {
            ":tttt": Number(timestamp)
        }
    }

    const client = new aws.sdk.DynamoDB.DocumentClient();
    const { Items } = await client.scan(params).promise();

    const latitudes = generatePoints(latitude);
    const longitudes = generatePoints(longitude);
    const targets = latitudes.map((item, index) => `${item},${longitudes[index]}`)

    const target = SHA256(targets[radius])
    // console.log("target : ", target)

    let users = [];

    for (let user of Items) {
        const leavesBuffer = user.leaves.map((item) => MerkleTree.bufferify(item));
        const tree = new MerkleTree(leavesBuffer, SHA256)
        const root = tree.getRoot().toString('hex');
        const proof = tree.getProof(target);
        
        if (tree.verify(proof, target, root)) {
            if (users.indexOf(user.publicKey) === -1) {
                users.push(user.publicKey)
            }
        }
    }

    return {
        statusCode: 200,
        headers: headers,
        body: JSON.stringify({
            status: "ok",
            users : users
        })
    };


}

exports.getStats = async (event, TableName) => {
    const client = new aws.sdk.DynamoDB.DocumentClient();
    const params = {
        ProjectionExpression: "publicKey, #tt",
        ExpressionAttributeNames: {
            "#tt": "timestamp"
        },
        TableName: TableName
    };
    const { Items } = await client.scan(params).promise();

    let totalLastDay = 0;
    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    const list = Items.reduce((prev, item) => {
        if (prev.indexOf(item.publicKey) === -1) {
            prev.push(item.publicKey)
        }
        if (((Number(item.timestamp) * 1000) >= Number(yesterday.valueOf()))) {
            totalLastDay += 1;
        }
        return prev;
    }, [])

    return {
        statusCode: 200,
        headers: headers,
        body: JSON.stringify({
            status: "ok",
            totalUsers: list.length,
            totalRecords: Items.length,
            totalLastDay: totalLastDay
        })
    };
}

