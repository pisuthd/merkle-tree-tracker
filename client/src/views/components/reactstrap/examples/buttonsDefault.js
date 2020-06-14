import React from "react";
import { Button } from "reactstrap";

class ButtonsDefault extends React.Component {
   render() {
      return (
         <div>
            <div className="btn-toolbar">
               <Button color="primary">primary</Button>{" "}
               <Button color="secondary">secondary</Button>{" "}
               <Button color="success">success</Button>{" "}
               <Button color="info">info</Button>{" "}
               <Button color="warning">warning</Button>{" "}
               <Button color="danger">danger</Button>{" "}
            </div>
            <div className="btn-toolbar">
               <Button outline color="primary">
                  primary
               </Button>{" "}
               <Button outline color="secondary">
                  secondary
               </Button>{" "}
               <Button outline color="success">
                  success
               </Button>{" "}
               <Button outline color="info">
                  info
               </Button>{" "}
               <Button outline color="warning">
                  warning
               </Button>{" "}
               <Button outline color="danger">
                  danger
               </Button>
            </div>
         </div>
      );
   }
}

export default ButtonsDefault;
