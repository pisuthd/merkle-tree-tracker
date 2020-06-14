import React from "react";
import { Button, ButtonGroup, ButtonToolbar } from "reactstrap";

class ButtonsGroup extends React.Component {
   render() {
      return (
         <div>
            <h5>Group</h5>
            <ButtonGroup>
               <Button className="btn-info">Left</Button>
               <Button className="btn-info">Middle</Button>
               <Button className="btn-info">Right</Button>
            </ButtonGroup>

            <h5>Toolbar</h5>
            <ButtonToolbar>
               <ButtonGroup className="mr-2">
                  <Button className="btn-success">1</Button>
                  <Button className="btn-success">2</Button>
                  <Button className="btn-success">3</Button>
                  <Button className="btn-success">4</Button>
               </ButtonGroup>
               <ButtonGroup className="mr-2">
                  <Button className="btn-success">5</Button>
                  <Button className="btn-success">6</Button>
                  <Button className="btn-success">7</Button>
               </ButtonGroup>
               <ButtonGroup className="mr-2">
                  <Button className="btn-success">8</Button>
               </ButtonGroup>
            </ButtonToolbar>
         </div>
      );
   }
}

export default ButtonsGroup;