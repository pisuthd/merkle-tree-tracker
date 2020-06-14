const toastrTransitionsSource = `import React, { Component } from "react";
import {toastr} from 'react-redux-toastr';
import { Row, Col, Button } from "reactstrap";

class ToastrTransitions extends Component {
   render() {
      return (
         <Row>
            <Col sm="12" md="6" lg="4">
                <Button outline block color="danger" onClick={() => toastr.success('The title', 'The message', { transitionIn: 'bounceIn', transitionOut: 'bounceOut' })}>
                    Bounce 1
                </Button>{" "}
            </Col>
            <Col sm="12" md="6" lg="4">
                <Button outline block color="danger" onClick={() => toastr.info('The title', 'The message', { transitionIn: 'bounceInDown', transitionOut: 'bounceOutUp' })}>
                    Bounce 2
                </Button>{" "}
            </Col>
            <Col sm="12" md="6" lg="4">
                <Button outline block color="danger" onClick={() => toastr.success('The title', 'The message', { transitionIn: 'fadeIn', transitionOut: 'fadeOut' })}>
                    Fade
                </Button>{" "}
            </Col>
         </Row>
      );
   }
}

export default ToastrTransitions;`;

export default toastrTransitionsSource;
