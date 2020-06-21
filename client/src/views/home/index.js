
import React, { Component, Fragment, useState, useCallback, useEffect } from "react";
import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Card,
    ButtonGroup,
    CardHeader,
    Button,
    CardTitle,
    CardText,
    Row,
    Col,
    CardBody,
    Form,
    FormGroup,
    Input,
    Label
} from "reactstrap";
import * as Icon from "react-feather";
import { Link } from "react-router-dom";
import GoogleMapReact from 'google-map-react';
import styled from "styled-components"
import useAPI from "../../hooks/api"
import MinimalStatistics from "../../components/cards/minimalStatisticsCard";
import MinimalStatisticsBG from "../../components/cards/minimalStatisticsBGCard";
import Actitivies from "../../containers/activities"
import Notifications from "../../containers/notifications"
import classnames from "classnames";

import Marker from "../../components/marker";

const Home = () => {

    const [center, setCenter] = useState({ lat: 13.910114339752786, lng: 100.6026710452396 });
    const [position, setPosition] = useState({ lat: 13.910114339752786, lng: 100.6026710452396 });
    const [zoom, setZoom] = useState(14);
    const [draggable, setDraggable] = useState(true);
    const [searching, setSearching] = useState(false);
    const [result, setResult] = useState("Total : 0");
    const [date, setDate] = useState();
    const [time, setTime] = useState(8);
    const [radius, setRadius] = useState(0);
    const { getStats , search } = useAPI();
    const [stats, setStats] = useState({
        totalUsers: 0,
        totalRecords: 0,
        totalLastDay: 0
    })

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

    const handleDate = (e) => {
        setDate(e.target.value)
    }

    useEffect(() => {
        (async () => {
            const { totalRecords, totalUsers, totalLastDay } = await getStats()
            setStats({
                totalUsers,
                totalRecords,
                totalLastDay
            })
        })()
    }, [])

    const onSearch = useCallback(async () => {
        if (!date) {
            alert("Date is not set!")
            return
        }
        if (!time) {
            alert("Time is not set!")
            return
        } 
      
        setSearching(true)
        try {
            const { users } = await search(position.lat, position.lng, radius, date, time );
             
            let result = `Total : ${users.length}`
            if (users.length > 0) {
                result += `\nIdentities:`
            }   
            for (let user of users) {
                result += `\n${user}`
            }
            setResult(result)
        } catch (error) {
            alert(`Error : ${error.message}`)
        }
        setSearching(false)

    },[date, time, radius, position])


    return (
        <Fragment>
            <Card>
                <CardHeader>
                    <h4 className="mt-2 mb-0 text-bold-400">Dashboard</h4>
                </CardHeader>
                <CardBody>
                    <Row className="row-eq-height">
                        <Col sm="6" md="3">
                            <MinimalStatisticsBG cardBgColor="bg-success" statistics={`${stats.totalUsers}`} text="Users" iconSide="right">
                                <Icon.User size={56} strokeWidth="1.3" color="#fff" />
                            </MinimalStatisticsBG>
                        </Col>
                        <Col sm="6" md="3">
                            <MinimalStatisticsBG cardBgColor="bg-danger" statistics={`${stats.totalLastDay}`} text="Records 24h" iconSide="right">
                                <Icon.Heart size={56} strokeWidth="1.3" color="#fff" />
                            </MinimalStatisticsBG>
                        </Col>
                        <Col sm="6" md="3">
                            <MinimalStatisticsBG cardBgColor="bg-warning" statistics={`0`} text="Notifications" iconSide="right">
                                <Icon.LifeBuoy size={56} strokeWidth="1.3" color="#fff" />
                            </MinimalStatisticsBG>
                        </Col>

                    </Row>

                     

                    <Row>
                        {/*

                        <Col sm="12">
                            <Nav tabs>
                                <NavItem>
                                    <NavLink
                                        className={classnames({
                                            active: activeTab === "1"
                                        })}
                                        onClick={() => {
                                            toggle("1");
                                        }}
                                    >
                                        Dashboard
                                            </NavLink>
                                </NavItem>
                                
                                <NavItem>
                                    <NavLink
                                        className={classnames({
                                            active: activeTab === "2"
                                        })}
                                        onClick={() => {
                                            toggle("2");
                                        }}
                                    >
                                        Search for Contact Tracing
                                        </NavLink>
                                </NavItem>
                               

                            </Nav>
                            <TabContent activeTab={activeTab}>
                                <TabPane tabId="1">
                                    Dashboard
                                    <Actitivies />
                                    <h4>Search for Contact Tracing</h4>
                                    <Row>
                                        <Col sm="6">
                                            <h4>Tab 1 Contents</h4>
                                            <p>Lemon drops pastry chocolate. Jujubes sweet roll tootsie roll. Oat cake donut bonbon chocolate croissant candy candy brownie. Wafer jelly beans jelly ice cream caramels. Cookie bonbon lemon drops cheesecake brownie cake macaroon sweet. Toffee pie icing candy ice cream croissant caramels jelly. Muffin jelly gummies icing cheesecake chocolate cake. Sweet chupa chups croissant pudding sesame snaps soufflé. Marzipan cotton candy jujubes halvah cheesecake. Cupcake wafer gummies croissant candy brownie jelly. Sweet wafer chocolate halvah.</p>
                                        </Col>
                                        <Col sm="6">
                                            <div style={{ height: "calc(100vh - 250px)", width: "100%", marginTop: 20 }}>
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
                                </TabPane>
                            
                            </TabContent>
                        </Col>*/}
                    </Row>
                    <h4 className="mt-4 mb-0 text-bold-400">Search for Contact Tracing</h4>
                    <Row style={{ marginTop: 20 }}>
                        <Col sm="6">

                            <div style={{ marginTop: 0 }}>
                                <Form className="form-horizontal">
                                    <div className="form-body">
                                        {/*
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
                                        */}
                                        <h4 className="form-section">Conditions</h4>
                                        <FormGroup row>
                                            <Label for="radius" sm={2}>Radius:</Label>
                                            <Col sm={10}>
                                                <Button
                                                    onClick={() => setRadius(0)}
                                                    style={{ marginRight: 5 }}
                                                    color={radius === 0 ? "primary" : "secondary"}
                                                >100km</Button>
                                                <Button
                                                    onClick={() => setRadius(1)}
                                                    style={{ marginRight: 5 }}
                                                    color={radius === 1 ? "primary" : "secondary"}
                                                >10km</Button>
                                                <Button
                                                    onClick={() => setRadius(2)}
                                                    style={{ marginRight: 5 }}
                                                    color={radius === 2 ? "primary" : "secondary"}
                                                >1km</Button>
                                                <Button
                                                    onClick={() => setRadius(3)}
                                                    style={{ marginRight: 5 }}
                                                    color={radius === 3 ? "primary" : "secondary"}
                                                >100m</Button>
                                                <Button
                                                    onClick={() => setRadius(4)}
                                                    style={{ marginRight: 5 }}
                                                    color={radius === 4 ? "primary" : "secondary"}
                                                >1m</Button>
                                                <Button
                                                    onClick={() => setRadius(5)}
                                                    style={{ marginRight: 5 }}
                                                    color={radius === 5 ? "primary" : "secondary"}
                                                >10cm</Button>
                                            </Col>
                                        </FormGroup>

                                        <FormGroup row>
                                            <Label for="time" sm={2}>Time:</Label>
                                            <Col sm={10}>

                                                <Button
                                                    onClick={() => setTime(8)}
                                                    style={{ marginRight: 5 }}
                                                    color={time === 8 ? "primary" : "secondary"}
                                                >08:00</Button>
                                                <Button
                                                    onClick={() => setTime(9)}
                                                    style={{ marginRight: 5 }}
                                                    color={time === 9 ? "primary" : "secondary"}
                                                >09:00</Button>
                                                <Button
                                                    onClick={() => setTime(10)}
                                                    style={{ marginRight: 5 }}
                                                    color={time === 10 ? "primary" : "secondary"}
                                                >10:00</Button>
                                                <Button
                                                    onClick={() => setTime(11)}
                                                    style={{ marginRight: 5 }}
                                                    color={time === 11 ? "primary" : "secondary"}
                                                >11:00</Button>
                                                <Button
                                                    onClick={() => setTime(12)}
                                                    style={{ marginRight: 5 }}
                                                    color={time === 12 ? "primary" : "secondary"}
                                                >12:00</Button>

                                                <Button
                                                    onClick={() => setTime(13)}
                                                    style={{ marginRight: 5 }}
                                                    color={time === 13 ? "primary" : "secondary"}
                                                >13:00</Button>
                                                <Button
                                                    onClick={() => setTime(14)}
                                                    style={{ marginRight: 5 }}
                                                    color={time === 14 ? "primary" : "secondary"}
                                                >14:00</Button>
                                                <Button
                                                    onClick={() => setTime(15)}
                                                    style={{ marginRight: 5 }}
                                                    color={time === 15 ? "primary" : "secondary"}
                                                >15:00</Button>
                                                <Button
                                                    onClick={() => setTime(16)}
                                                    style={{ marginRight: 5 }}
                                                    color={time === 16 ? "primary" : "secondary"}
                                                >16:00</Button>
                                                <Button
                                                    onClick={() => setTime(17)}
                                                    style={{ marginRight: 5 }}
                                                    color={time === 17 ? "primary" : "secondary"}
                                                >17:00</Button>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="date" sm={2}>Date:</Label>
                                            <Col sm={4}>
                                                <Input onChange={handleDate} value={date} type="date" id="date" name="date" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Col sm={2}>{` `}</Col>
                                            <Col sm={4}>
                                                <Button disabled={searching} onClick={onSearch} color="primary">Search</Button>{` `}
                                                { searching &&
                                                <span style={{marginLeft: 5}} className="font-small-2">Searching...</span>

                                                }
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="result" sm={2}>Result:</Label>
                                            <Col sm={10}>
                                                <Input type="textarea" disabled value={result} style={{ fontSize: 12 }} id="basictextarea" rows="8" name="basictextarea" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Col sm={2}>{` `}</Col>
                                            <Col sm={4}>
                                                <Button disabled={false} onClick={{}} color="danger">Notify All</Button>{` `}
                                                <Button disabled={false} onClick={{}} color="secondary">Clear</Button>{` `}
                                            </Col>
                                        </FormGroup>

                                    </div>
                                </Form>
                            </div>
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

const Buttons = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
`;

const StyledLink = styled(Link)`
    color: inherit;

    &:hover {
        color: inherit;
        text-decoration: underline;
    }

`;

export default Home;
