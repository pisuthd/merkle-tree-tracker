import React, { Component } from "react";
import {toastr} from 'react-redux-toastr';
import { Row, Col, Button } from "reactstrap";

class ToastrTypes extends Component {
   render() {
      return (
         <Row>
            <Col sm="12" md="6" lg="3">
                <Button outline block color="success" onClick={() => toastr.success('The title', 'The message')}>
                    success
                </Button>{" "}
            </Col>

            <Col sm="12" md="6" lg="3">
                <Button outline block color="info" onClick={() => toastr.info('The title', 'The message')}>
                    info
                </Button>{" "}
            </Col>

            <Col sm="12" md="6" lg="3">
                <Button outline block color="warning" onClick={() => toastr.warning('The title', 'The message')}>
                    warning
                </Button>{" "}
            </Col>

            <Col sm="12" md="6" lg="3">
                <Button outline block color="danger" onClick={() => toastr.error('The title', 'The message')}>
                    danger
                </Button>{" "}
            </Col>
         </Row>
      );
   }
}

export default ToastrTypes;
