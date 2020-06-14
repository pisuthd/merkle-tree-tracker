const ButtonsGradientSource = `import React from "react";
import { Button } from "reactstrap";

class ButtonsGradient extends React.Component {
   render() {
      return (
         <div>
            <div>
               <h5>Gradient</h5>
               <div className="btn-toolbar">
                  <Button className="gradient-purple-bliss">primary</Button>{" "}
                  <Button className="gradient-mint">secondary</Button>{" "}
                  <Button className="gradient-pomegranate">success</Button>{" "}
                  <Button className="gradient-crystal-clear">info</Button>{" "}
                  <Button className="gradient-ibiza-sunset">warning</Button>{" "}
                  <Button className="gradient-nepal">danger</Button>{" "}
               </div>
            </div>

            <div>
               <h5>Shadow</h5>
               <div className="btn-toolbar">
                  <Button color="primary" className="shadow-z-2">primary</Button>{" "}
                  <Button color="secondary" className="shadow-z-2">secondary</Button>{" "}
                  <Button color="success" className="shadow-z-2">success</Button>{" "}
                  <Button color="info" className="shadow-z-2">info</Button>{" "}
                  <Button color="warning" className="shadow-z-2">warning</Button>{" "}
                  <Button color="danger" className="shadow-z-2">danger</Button>{" "}
               </div>
            </div>
         </div>
      );
   }
}

export default ButtonsGradient;`;

export default ButtonsGradientSource;