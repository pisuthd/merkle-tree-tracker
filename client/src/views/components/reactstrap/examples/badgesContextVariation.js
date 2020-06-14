import React, { Component } from "react";
import { Badge } from "reactstrap";

class BadgesContextVariation extends Component {
   render() {
      return (
         <div className="badge-toolbar">
            <Badge color="primary">Primary</Badge>
            <Badge color="secondary">Secondary</Badge>
            <Badge color="success">Success</Badge>
            <Badge color="danger">Danger</Badge>
            <Badge color="warning">Warning</Badge>
            <Badge color="info">Info</Badge>
            <Badge color="light">Light</Badge>
            <Badge color="dark">Dark</Badge>
         </div>
      );
   }
}

export default BadgesContextVariation;
