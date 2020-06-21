const { MerkleTree } = require('merkletreejs')
const SHA256 = require('crypto-js/sha256')
const { round, generatePoints } = require("./utils")

const sampleLat = "13.886686703721859"
const sampleLng =  "100.57703234849387"

const sampleLat2 = "13.896545990050342"
const sampleLng2 = "100.5614496155516"

const leaves = ["0x7fd13fe2512ca61e07f54417a0e509c7e720aaa31c2cd6356803c3b70b535062","0xe6becc360239cdc532c1a8478433fe5fe3f8fa37852cf18660e5a929ea489d7d", "0x4b9f3f74443e7fe3a5ce4eaacb04d0d9e1cdf9af2045d9f81f860e4a4180c7af", "0xf98167001a6040904202aae5d8536b6439e40fe64f6c7ae57d383e5b8de4c27b", "0x29c1d67279856e0433d07262f3482febefc3e07749df577d2a32995771e7a0de", "0x3e019e37d272e38d61a73035484ba637436d5710b3e7c73ef157ac090f419539", "0x35161d67f499dffda21c3440ae4fa7f52d59ed46b5f2f4a9d5a0454836bd8f60", "0xea9e0acc87dbef8475c428c138831139c806fd1e151aa0bc5ee60bd4f75d7f39", "0xd36ac669729f8abfbd44ce8e41d2db84dc4c920d72bd47700daef55915b6150a", "0x4f9defdb7b22cad02a4f4ccea0f53386bd7fcbb9d3283a311d4b0d9225084590", "0x8262f1104b1250f7dcffec6669d1f61c20a99e87454d2caa20b292d830f2bd1a", "0x18d9c11d91fb6ef7278e14af6d6dddd2a4d82a59316fe37b971bf3fc28ade067", "0xfbe4424f7bea424b87a978c593ef392730905bb96a7fcfcc40dedcf6f8f6e6bb", "0x9eaa28046054e5dfc68304f07130023eb7f832fe6931697a2a33e62ad94bb2ba"]


/*
Degree precision versus length
decimal places / Object that can be unambiguously recognized / Depth at Equator
0 / country or large region / 100km
1 / large city or district / 10km
2 / town or village / 1km
3 / neighborhood, street / 100m
4 / individual street, land parcel / 10m
5 / individual trees, door entrance / 1m
6 / individual humans / 10cm
*/

const simulate = async () => {
    console.log("start simulation...")
    const lat = Number(sampleLat)
    const lng = Number(sampleLng)
    
    const latManyPrecisions = generatePoints(lat);
    const lngManyPrecisions = generatePoints(lng);

    const finalCoordinates = latManyPrecisions.map((item, index) => `${item},${lngManyPrecisions[index]}`)
    console.log("Final output --> ", finalCoordinates);
    const leaves = finalCoordinates.map(x => SHA256(x))
    // console.log("leves --> ", leaves.toString('hex'))
    const tree = new MerkleTree(leaves, SHA256)
    console.log("Merkle tree proof --> ")
    console.log(tree.toString())
    const root = tree.getRoot().toString('hex');
    const leaf = SHA256("13,100");
    const proof = tree.getProof(leaf)
    console.log("proofing co-ordinates -->  13,100 : ",tree.verify(proof, leaf, root))

    console.log("\nGenerate second point of interest...")
    const lat2 = Number(sampleLat2)
    const lng2 = Number(sampleLng2)
    const latManyPrecisions2 = generatePoints(lat2);
    const lngManyPrecisions2 = generatePoints(lng2);
    const finalCoordinates2 = latManyPrecisions2.map((item, index) => `${item},${lngManyPrecisions2[index]}`)
    
    console.log("Checking Person A and Person B are in 100km range : ");
    const leaf100km = SHA256(finalCoordinates2[0]);
    const proof100km = tree.getProof(leaf100km);
    console.log(tree.verify(proof100km, leaf100km, root))
    console.log("Checking Person A and Person B are in 10km range : ");
    const leaf10km = SHA256(finalCoordinates2[1]);
    const proof10km = tree.getProof(leaf10km);
    console.log(tree.verify(proof10km, leaf10km, root));
    console.log("Checking Person A and Person B are in 1km range : ");
    const leaf1km = SHA256(finalCoordinates2[2]);
    const proof1km = tree.getProof(leaf1km);
    console.log(tree.verify(proof1km, leaf1km, root));
    console.log("Checking Person A and Person B are in 100m range : ");
    const leaf100m = SHA256(finalCoordinates2[3]);
    const proof100m = tree.getProof(leaf100m);
    console.log(tree.verify(proof100m, leaf1km, root));
    console.log("Checking Person A and Person B are in 10m range : ");
    const leaf10m = SHA256(finalCoordinates2[4]);
    const proof10m = tree.getProof(leaf10m);
    console.log(tree.verify(proof10m, leaf10m, root));
    console.log("Checking Person A and Person B are in 1m range : ");
    const leaf1m = SHA256(finalCoordinates2[5]);
    const proof1m = tree.getProof(leaf1m);
    console.log(tree.verify(proof1m, leaf1m, root));

    // Checks with DynamoDB formats
    /*
    console.log("\nChecking with Dynamo DB format : ");
    
    const leavesBuffer = leaves.map((item) => MerkleTree.bufferify(item))
    const treeDB = new MerkleTree(leavesBuffer, SHA256)
    const rootDB = treeDB.getRoot().toString('hex');
    const leafDB = SHA256("13,100");
    const proofDB = treeDB.getProof(leafDB);
    console.log("proofing co-ordinates -->  13,100 : ",treeDB.verify(proofDB, leafDB, rootDB))
    */
}


simulate()