# Merkle Tree Tracker

A privacy-preserved IoT tracking device that make use of AWS managed services include AWS IoT Core and Serverless.

For the public: Privacy-First
- Protect the public’s privacy and health 
- Dispel concerns about personal data leakage
- Build a tool for the public to tracking their Covid-19 exposure

For the government: Better notification system
- Increase the usage by this new proof-of-health verification 
- Build a better system for the government
- Help the government build a Covid-19 database while show respect for people’s privacy

# Zero Knowledge Covid-19 Notification is offering the solution
- No user data is send to server
- User get virus notification without revealing their identity
- Embedded hardware to integrate to all location sharing device


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

## Live Demo

https://d36kpcgjcb00m3.cloudfront.net 

The app contains a generate proof screen that allows to input data into the system without the need of the IoT device.
