import React, { Component } from "react";
import { Alert } from "reactstrap";

class AlertsClosable extends Component {
   state = {
      visible: true
   };
   onDismiss = () => {
      this.setState({ visible: false });
   }
   render() {
      return (
         <div>
            <Alert
               color="info"
               isOpen={this.state.visible}
               toggle={this.onDismiss}
            >
               I am an alert and I can be dismissed!
            </Alert>
         </div>
      );
   }
}

export default AlertsClosable;
