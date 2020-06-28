# Merkle Tree Tracker

A privacy-preserved IoT tracking device that make use of AWS managed services include AWS IoT Core and Serverless.

For the public: Privacy-First
- Protect the public’s privacy and health
- Dispel concerns about personal data leakage
- Build a tool for the public to notify their Covid-19 exposure

For the government: Better notification system
- Increase the usage by this new proof-of-health verification
- Build a better system for the government
- Help the government build a Covid-19 database while show respect for people’s privacy

# Zero Knowledge Covid-19 Notification is offering the solution
- No user data is send to server
- User get virus notification without revealing their identity
- Embedded hardware to integrate to all location sharing device

![mockup][mockup]

[mockup]: https://i.imgur.com/lBwS0Qt.png "mockup"


# Architecture diagram

![digram][diagram]

[diagram]: https://d36kpcgjcb00m3.cloudfront.net/images/tracker-1.png "Diagram"

## Getting Started

Backend services can be automated deploying through [Pulumi](https://www.pulumi.com/) by following:

```
pulumi up
```

This will setup Lambda, DynamoDB and API Gateway then you can run the client application from /client folder with:

```
yarn
yarn start
```
Don't forget to change API_URL that provisioned from the deployment stage on a constant file.


## Hardware

The hardware tracking device is used in conjunction with:

* ESP8266 NodeMCU v.3
* Ublox NEO-6M GPS Module

This wiring can be found in [here](https://iotdesignpro.com/projects/nodemcu-esp8266-gps-module-interfacing-to-display-latitude-and-longitude). And the source code is resided in /arduino folder , SSL certificates must be uploaded to the board to made it able to connect with AWS IoT Core as [this intruction](https://electronicsinnovation.com/how-to-connect-nodemcu-esp8266-with-aws-iot-core-using-arduino-ide-mqtt/).

The prototype hardware doesn't generate the merkle tree proof inside the hardware by rather rely on the lambda proxy that you can find at /arduino/lambda.js to being collected the gps coordinates and transform into merkle tree.

## Merkle Tree

The project utilizes Merkle tree technology as its core, basically it's impossible to uses a hashing function for GPS location, we make an array of coordinates in various precision prior to hasing those into Merkle Tree which later we can verify the authenticity in either Lambda backend or Public blockchain node. 

Example Origin : 13.910114339, 100.60267145296

|Pre-hashed   |Accuracy   |SHA256   |
|---|---|---|
|13,100   | <100km  | ABD7B...75082  |
|13.9, 100.6   | <10km  | 477752...3C854   |
|13.91, 100.60   | <1km  | 00FFEF...3FFF6D |
|13.910, 100.602   | <100m  | 8DA2F...5F6D01 |
|13.9101, 100.6026   | <10m  | 45ADE3...B062E |
|13.91011, 100.60267   | <1m  | 3C8DA...5FB3C |

* Degree of pecision is based on the equator. (Thailand for example)

DynamoDB stores only the roof (verifying the whole dataset is authentic) and leaves (hashes of GPS coordinates in 6 orders) of the Merkle Tree.  We can find contact tracing by generate the new Merkle tree from the exact location then compares with all leaves in the DB, if matched mean the owner (shown in public key) of the leaf was in the area according to the order of its leaf.


## Live Demo

https://d36kpcgjcb00m3.cloudfront.net

The app contains a generate proof screen that allows to input data into the system without the need of the IoT device.

## Extra reading material
[Merkle tree tracker slide](https://www.slideshare.net/NAPATCHARUPHANT/merkle-tree-tracker "Merkle tree tracker")
