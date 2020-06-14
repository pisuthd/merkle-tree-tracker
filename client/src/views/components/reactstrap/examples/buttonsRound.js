import React from "react";
import { Button } from "reactstrap";

class ButtonsRound extends React.Component {
   render() {
      return (
         <div>
            <div className="btn-toolbar">
               <Button className="btn-round" color="primary">primary</Button>{" "}
               <Button className="btn-round" color="secondary">secondary</Button>{" "}
               <Button className="btn-round" color="success">success</Button>{" "}
               <Button className="btn-round" color="info">info</Button>{" "}
               <Button className="btn-round" color="warning">warning</Button>{" "}
               <Button className="btn-round" color="danger">danger</Button>{" "}
            </div>
            <div className="btn-toolbar">
               <Button className="btn-round" outline color="primary">
                  primary
               </Button>{" "}
               <Button className="btn-round" outline color="secondary">
                  secondary
               </Button>{" "}
               <Button className="btn-round" outline color="success">
                  success
               </Button>{" "}
               <Button className="btn-round" outline color="info">
                  info
               </Button>{" "}
               <Button className="btn-round" outline color="warning">
                  warning
               </Button>{" "}
               <Button className="btn-round" outline color="danger">
                  danger
               </Button>
            </div>
         </div>
      );
   }
}

export default ButtonsRound;
