const BadgesWithComponentsSource = `import React, { Component } from "react";
import { Badge, Button } from "reactstrap";

class BadgesWithComponents extends Component {
   render() {
      return (
         <div>
            <Button color="primary" outline>
               Notifications <Badge color="secondary">4</Badge>
            </Button>
         </div>
      );
   }
}

export default BadgesWithComponents;`;

export default BadgesWithComponentsSource;
