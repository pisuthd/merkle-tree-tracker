const ButtonsIconSource = `import React from "react";
import { Button } from "reactstrap";
import {
   Settings,
   Info,
   ThumbsUp,
   AlertOctagon,
   AlertTriangle
} from "react-feather";

class ButtonsIcon extends React.Component {
   render() {
      return (
         <div>
            <div className="btn-toolbar">
               <Button color="primary">
                  <Settings size={16} color="#FFF" /> primary
               </Button>{" "}
               <Button color="secondary">
                  <Settings size={16} color="#FFF" /> secondary
               </Button>{" "}
               <Button color="success">
                  <ThumbsUp size={16} color="#FFF" /> success
               </Button>{" "}
               <Button color="info">
                  info <Info size={16} color="#FFF" />{" "}
               </Button>{" "}
               <Button color="warning">
                  warning <AlertOctagon size={16} color="#FFF" />
               </Button>{" "}
               <Button color="danger">
                  danger <AlertTriangle size={16} color="#FFF" />
               </Button>{" "}
            </div>
            <div className="btn-toolbar">
               <Button outline color="primary">
                  <Settings size={16} color="#009DA0" /> primary
               </Button>{" "}
               <Button outline color="secondary">
                  <Settings size={16} color="#868e96" /> secondary
               </Button>{" "}
               <Button outline color="success">
                  <ThumbsUp size={16} color="#0CC27E" />
                  success
               </Button>{" "}
               <Button outline color="info">
                  info <Info size={16} color="#1CBCD8" />
               </Button>{" "}
               <Button outline color="warning">
                  warning <AlertOctagon size={16} color="#FF8D60" />
               </Button>{" "}
               <Button outline color="danger">
                  danger <AlertTriangle size={16} color="#FF586B" />
               </Button>
            </div>
         </div>
      );
   }
}

export default ButtonsIcon;`;

export default ButtonsIconSource;