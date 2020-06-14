import React, { Component } from "react";
import { UncontrolledAlert } from "reactstrap";

class AlertsUncontrolled extends Component {
   render() {
      return (
         <div>
            <UncontrolledAlert color="dark">
               I am an alert and I can be dismissed!
            </UncontrolledAlert>
            <UncontrolledAlert color="info">
               I am an alert and I can be dismissed!
            </UncontrolledAlert>
            <UncontrolledAlert color="success">
               I am an alert and I can be dismissed!
            </UncontrolledAlert>
            <UncontrolledAlert color="warning">
               I am an alert and I can be dismissed!
            </UncontrolledAlert>
            <UncontrolledAlert color="primary">
               I am an alert and I can be dismissed!
            </UncontrolledAlert>
         </div>
      );
   }
}

export default AlertsUncontrolled;
