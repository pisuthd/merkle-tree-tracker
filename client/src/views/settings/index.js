
import React, { Component, Fragment } from "react";
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
import { useWallet } from "../../hooks/wallet"


const Settings = () => {

    const { address, publicKey, privateKey, generateNew } = useWallet()

    return (
        <Fragment>
            <Card>
                <CardHeader>
                    <h4 className="mt-2 mb-0 text-bold-400">Settings</h4>
                </CardHeader>
                <CardBody>
                    <Row>
                        <Col sm="6">
                            <div>
                                <Form className="form-horizontal">
                                    <FormGroup row>
                                        <Label for="privateKey" sm={3}>Private Key:</Label>
                                        <Col sm={9}>
                                            <Input value={privateKey} rows="2" type="textarea" id="privateKey" name="privateKey" disabled />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="address" sm={3}>Public Key:</Label>
                                        <Col sm={9}>
                                            <Input value={address} type="text" id="address" name="address" disabled />
                                        </Col>
                                    </FormGroup>

                                    <div className="text-right">
                                        <Button color="primary" onClick={() => generateNew()}>Generate New</Button>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                    </Row>

                </CardBody>
            </Card>
        </Fragment>
    )
}

export default Settings;
