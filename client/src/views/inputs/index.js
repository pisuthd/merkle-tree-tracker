
import React, { Component, Fragment, useState, useCallback } from "react";
import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Row,
    Col,
    Alert,
    Button,
    Card,
    CardBody,
    CardTitle,
    Form,
    FormGroup,
    Input,
    Label,
    CardHeader
} from "reactstrap";
import GoogleMapReact from 'google-map-react';
import classnames from "classnames";
import styled from "styled-components";
import Marker from "../../components/marker";
import useAPI from "../../hooks/api"
import useInterval from "../../hooks/interval";
import { useWallet } from "../../hooks/wallet"


const Inputs = () => {

    const { address } = useWallet()
    const { generateProof, uploadProof } = useAPI();
    const [saving, setSaving] = useState(false);

    const [date, setDate] = useState();
    const [times, setTimes] = useState([]);
    const [center, setCenter] = useState({ lat: 13.910114339752786, lng: 100.6026710452396 });
    const [position, setPosition] = useState({ lat: 13.910114339752786, lng: 100.6026710452396 });
    const [zoom, setZoom] = useState(14);
    const [draggable, setDraggable] = useState(true);
    const [output, setOutput] = useState();

    const [activeTab, setActiveTab] = useState("1");

    const toggle = useCallback(tab => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    }, [activeTab])

    const mapChange = ({ center, zoom }) => {
        setCenter(center);
        setZoom(zoom);
    }

    const onCircleInteraction = (childKey, childProps, mouse) => {
        setDraggable(false);
        setPosition({
            lat: mouse.lat,
            lng: mouse.lng
        })
    }

    const onCircleInteraction3 = (childKey, childProps, mouse) => {
        setDraggable(true);
    }

    const updateProof = useCallback(async () => {
        const result = await generateProof(position.lat, position.lng);
        const message =
            `Merkle Tree: 
${result.merkleTree}
`
        setOutput(message)
    }, [position])

    useInterval(updateProof, 3000)


    const handleDate = (e) => {
        setDate(e.target.value)
    }

    const handleTimes = (e) => {
        let selected = []
        for (let i = 0, len = e.target.options.length; i < len; i++) {
            const opt = e.target.options[i];
            if (opt.selected) {
                selected.push(opt.value);
            }
        }

        setTimes(selected);
    }

    const onSubmit = useCallback(async () => {

        if (!date) {
            alert("Date is not set!")
            return
        }

        if (times.length === 0) {
            alert("Times are not set!")
            return;
        }
        setSaving(true)
        try {

            const result = await generateProof(position.lat, position.lng);
            const leaves = result.leaves;
            const root = result.root;
            for (let time of times) {
                const timestamp = (new Date(date)).valueOf() + (3600000 * Number(time))
                const payload = {
                    timestamp: Math.floor(timestamp / 1000),
                    publicKey: address,
                    leaves,
                    root
                }
                console.log("payload --> ", payload)
                await uploadProof(payload)
            }
            alert("Submitted!")

        } catch (error) {
            alert(`Error : ${error.message}`)
        }
        setSaving(false)

    }, [date, position, times, address])




    return (
        <Fragment>
            <Card>
                <CardHeader>
                    <h4 className="mt-2 mb-0 text-bold-400">Generate Proof</h4>
                </CardHeader>
                <CardBody>
                    <Row>
                        <Col sm="6">
                            <Card>
                                <div >
                                    <Form className="form-horizontal">
                                        <div className="form-body">
                                            <FormGroup row>
                                                <Label for="lat" sm={2}>Latitude:</Label>
                                                <Col sm={4}>
                                                    <Input value={position.lat} type="text" id="lat" name="lat" disabled />
                                                </Col>
                                                <Label for="lng" sm={2}>Longitude:</Label>
                                                <Col sm={4}>
                                                    <Input value={position.lng} type="text" id="lng" name="lng" disabled />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Label for="date" sm={2}>Date:</Label>
                                                <Col sm={4}>
                                                    <Input onChange={handleDate} value={date} type="date" id="date" name="date" />
                                                </Col>
                                                <Label for="time" sm={2}>Time:</Label>
                                                <Col sm={4}>
                                                    <Input value={times} onChange={handleTimes} style={{ cursor: "pointer", height: 120 }} type="select" name="time" id="time" multiple>
                                                        <option value={8}>08:00</option>
                                                        <option value={9}>09:00</option>
                                                        <option value={10}>10:00</option>
                                                        <option value={11}>11:00</option>
                                                        <option value={12}>12:00</option>
                                                        <option value={13}>13:00</option>
                                                        <option value={14}>14:00</option>
                                                        <option value={15}>15:00</option>
                                                        <option value={16}>16:00</option>
                                                        <option value={17}>17:00</option>
                                                    </Input>
                                                    <div className="text-center">
                                                        <p style={{ fontSize: 12 }}>hold ctrl to select multiple times</p>
                                                    </div>
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Label for="date" sm={2}>Public Key:</Label>
                                                <Col sm={10}>
                                                    <Input disabled value={address} type="text" id="publicKey" name="publicKey" />
                                                    <p style={{ fontSize: 12 }}>You can generate a new public key at settings page</p>
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Label for="date" sm={2}>Output:</Label>
                                                <Col sm={10}>
                                                    <Input type="textarea" disabled style={{ fontSize: 12 }} value={output} id="basictextarea" rows="8" name="basictextarea" />
                                                </Col>
                                            </FormGroup>

                                            <div className="text-center">
                                                <Button disabled={saving} onClick={onSubmit} color="primary">Submit Proof</Button>{` `}
                                                {
                                                    saving && (
                                                        <div className="font-small-3">Saving...</div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </Form>
                                </div>
                            </Card>
                        </Col>
                        <Col sm="6">
                            <div style={{ height: "calc(100vh - 250px)", width: "100%" }}>
                                <GoogleMapReact
                                    bootstrapURLKeys={{
                                        key: "AIzaSyBDkKetQwosod2SZ7ZGCpxuJdxY3kxo5Po"
                                    }}
                                    defaultCenter={center}
                                    defaultZoom={zoom}
                                    draggable={draggable}
                                    onChange={mapChange}
                                    onChildMouseDown={onCircleInteraction}
                                    onChildMouseMove={onCircleInteraction}
                                    onChildMouseUp={onCircleInteraction3}

                                >
                                    <Marker
                                        lat={position.lat}
                                        lng={position.lng}
                                        name="My Marker"
                                        color="blue"
                                    />
                                </GoogleMapReact>
                            </div>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Fragment>
    )
}


export default Inputs;
