const toastrPositionsSource = `import React, { Component } from "react";
import {toastr} from 'react-redux-toastr';
import { Row, Col, Button } from "reactstrap";

class ToastrPositions extends Component {
   render() {
      return (
         <Row>
            <Col sm="12" md="6" lg="4">
                <Button outline block color="danger" onClick={() => toastr.success('The title', 'The message', { position: 'top-left'})}>
                    Top Left
                </Button>{" "}
            </Col>
            
            <Col sm="12" md="6" lg="4">
                <Button outline block color="danger" onClick={() => toastr.info('The title', 'The message', { position: 'top-center'})}>
                    Top Center
                </Button>{" "}
            </Col>
            
            <Col sm="12" md="6" lg="4">
                <Button outline block color="danger" onClick={() => toastr.success('The title', 'The message', { position: 'top-right'})}>
                    Top Right
                </Button>{" "}
            </Col>
            
            <Col sm="12" md="6" lg="4">
                <Button outline block color="danger" onClick={() => toastr.info('The title', 'The message', { position: 'bottom-left'})}>
                    Bottom Left
                </Button>{" "}
            </Col>
            
            <Col sm="12" md="6" lg="4">
                <Button outline block color="danger" onClick={() => toastr.success('The title', 'The message', { position: 'bottom-center'})}>
                    Bottom Center
                </Button>{" "}
            </Col>
            
            <Col sm="12" md="6" lg="4">
                <Button outline block color="danger" onClick={() => toastr.info('The title', 'The message', { position: 'bottom-right'})}>
                    Bottom Right
                </Button>{" "}
            </Col>
         </Row>
      );
   }
}

export default ToastrPositions;`;

export default toastrPositionsSource;
