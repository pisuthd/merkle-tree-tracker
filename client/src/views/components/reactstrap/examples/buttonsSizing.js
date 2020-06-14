import React from "react";
import { Button } from "reactstrap";

class ButtonsSizing extends React.Component {
   render() {
      return (
         <div>
            <h5>Large Size</h5>
            <div className="btn-toolbar">
               <Button color="primary" size="lg">primary</Button>{" "}
               <Button color="success" size="lg">success</Button>{" "}
               <Button color="info" size="lg">info</Button>{" "}
               <Button color="danger" size="lg">danger</Button>{" "}
            </div>

            <h5>Small Size</h5>
            <div className="btn-toolbar">
               <Button color="primary" size="sm">primary</Button>{" "}
               <Button color="success" size="sm">success</Button>{" "}
               <Button color="info" size="sm">info</Button>{" "}
               <Button color="danger" size="sm">danger</Button>{" "}
            </div>
         </div>
      );
   }
}

export default ButtonsSizing;
