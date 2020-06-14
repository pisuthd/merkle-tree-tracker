const ButtonsSquareSource = `import React from "react";
import { Button } from "reactstrap";

class ButtonsSquare extends React.Component {
   render() {
      return (
         <div>
            <div className="btn-toolbar">
               <Button className="btn-square" color="primary">primary</Button>{" "}
               <Button className="btn-square" color="secondary">secondary</Button>{" "}
               <Button className="btn-square" color="success">success</Button>{" "}
               <Button className="btn-square" color="info">info</Button>{" "}
               <Button className="btn-square" color="warning">warning</Button>{" "}
               <Button className="btn-square" color="danger">danger</Button>{" "}
            </div>
            <div className="btn-toolbar">
               <Button className="btn-square" outline color="primary">
                  primary
               </Button>{" "}
               <Button className="btn-square" outline color="secondary">
                  secondary
               </Button>{" "}
               <Button className="btn-square" outline color="success">
                  success
               </Button>{" "}
               <Button className="btn-square" outline color="info">
                  info
               </Button>{" "}
               <Button className="btn-square" outline color="warning">
                  warning
               </Button>{" "}
               <Button className="btn-square" outline color="danger">
                  danger
               </Button>
            </div>
         </div>
      );
   }
}

export default ButtonsSquare;`;

export default ButtonsSquareSource;