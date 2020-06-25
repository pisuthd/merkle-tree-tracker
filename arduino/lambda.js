/*
    A Lambda proxy for being called by the device which redirected from AWS IOT
*/
const https = require('https');
const PUBLIC_KEY = "0xb4124cEB3451635DAcedd11767f004d8a28c6eE7";
const HOST = "vnwcmhghm7.execute-api.ap-southeast-1.amazonaws.com";
const BASE_PATH = "stage";
// const API = "https://vnwcmhghm7.execute-api.ap-southeast-1.amazonaws.com/stage/";

exports.handler = async (event) => {
    // example payload  { latitude: '13.899283', longitude: '100.426248' }
    const { latitude, longitude } = event;
    console.log(`Receives lat : ${latitude} lng : ${longitude}`)
    
    const getProof = async () => {
        return new Promise((resolve, reject) =>  {
            https.get(`https://${HOST}/${BASE_PATH}/generate-proof?lat=${latitude}&lng=${longitude}`, (res) => {
                let data = '';
                console.log('STATUS: ' + res.statusCode);
                res.setEncoding('utf8');
                res.on('data', function(chunk) {
                    data += chunk;
                });
                res.on('end', function() {
                    console.log("DONE");
                    resolve(JSON.parse(data));
                });
              }).on('error', (e) => {
                reject(Error(e))
              })
            })
    }
    
    const proof = await getProof();
    // console.log("proof : ", proof);
    const leaves = proof.leaves;
    const root = proof.root;
    
    
    const roundMinutes = (date) => {
        date.setHours(date.getHours() + Math.floor(date.getMinutes()/60) +7);
        date.setMinutes(0, 0, 0); // Resets also seconds and milliseconds
        return date;
    }
    
    const now = roundMinutes(new Date());
    
    const payload = {
        timestamp: Math.floor(now.valueOf() / 1000),
        publicKey: PUBLIC_KEY,
        leaves,
        root
    }
    console.log("payload : ", payload);
    
    const uploadProof = async () => {
        return new Promise((resolve, reject) => {
            const options = {
              host: HOST,
              port : 443,
              path: `/${BASE_PATH}/capture`,
              method: 'POST',
              headers: {
                  "Content-Type": "application/x-www-form-urlencoded"
              }
            };

            const req = https.request(options, (res) => {
              resolve(JSON.stringify(res.statusCode));
            });

            // handle the possible errors
            req.on('error', (e) => {
                console.log("error : ", e)
              reject(e.message);
            });

            //do the request
            req.write(JSON.stringify(payload));

            //finish the request
            req.end();
        });
    }
    
    const status = await uploadProof();
    
    console.log("upload status : ", status);
    
    return true;
};
