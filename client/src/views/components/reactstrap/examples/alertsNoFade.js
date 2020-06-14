import React, { Component } from "react";
import { Alert } from "reactstrap";

class AlertsNoFade extends Component {
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
               color="primary"
               isOpen={this.state.visible}
               toggle={this.onDismiss}
               fade={false}
            >
               I am a primary alert and I can be dismissed without animating!
            </Alert>
         </div>
      );
   }
}

export default AlertsNoFade;
