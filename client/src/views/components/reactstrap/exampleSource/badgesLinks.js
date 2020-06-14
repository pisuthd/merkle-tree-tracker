const BadgesLinksSource = `import React, { Component } from "react";
import { Badge } from "reactstrap";

class BadgeLinks extends Component {
   render() {
      return (
         <div>
            <Badge href="#" color="primary">
               Primary
            </Badge>
            <Badge href="#" color="secondary">
               Secondary
            </Badge>
            <Badge href="#" color="success">
               Success
            </Badge>
            <Badge href="#" color="danger">
               Danger
            </Badge>
            <Badge href="#" color="warning">
               Warning
            </Badge>
            <Badge href="#" color="info">
               Info
            </Badge>
            <Badge href="#" color="light">
               Light
            </Badge>
            <Badge href="#" color="dark">
               Dark
            </Badge>
         </div>
      );
   }
}

export default BadgeLinks;`

export default BadgesLinksSource;
