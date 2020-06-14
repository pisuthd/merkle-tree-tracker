const ButtonsRadioSource = `import React, { Component } from "react";
import { Button, ButtonGroup } from "reactstrap";

class ButtonsRadio extends Component {
   state = { rSelected: [] };

   onRadioBtnClick = (rSelected) => {
      this.setState({ rSelected });
   }

   render() {
      return (
         <div>
            <ButtonGroup>
               <Button
                  color="primary"
                  onClick={() => this.onRadioBtnClick(1)}
                  active={this.state.rSelected === 1}
               >
                  One
               </Button>
               <Button
                  color="primary"
                  onClick={() => this.onRadioBtnClick(2)}
                  active={this.state.rSelected === 2}
               >
                  Two
               </Button>
               <Button
                  color="primary"
                  onClick={() => this.onRadioBtnClick(3)}
                  active={this.state.rSelected === 3}
               >
                  Three
               </Button>
            </ButtonGroup>
            <p>Selected: {this.state.rSelected}</p>
         </div>
      );
   }
}

export default ButtonsRadio;`;

export default ButtonsRadioSource;