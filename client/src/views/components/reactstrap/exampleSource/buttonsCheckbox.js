const ButtonsCheckboxSource = `import React, { Component } from "react";
import { Button, ButtonGroup } from "reactstrap";

class ButtonsCheckbox extends Component {
   state = { cSelected: [] };

   onCheckboxBtnClick = selected => {
      const index = this.state.cSelected.indexOf(selected);
      if (index < 0) {
         this.state.cSelected.push(selected);
      } else {
         this.state.cSelected.splice(index, 1);
      }
      this.setState({ cSelected: [...this.state.cSelected] });
   };

   render() {
      return (
         <div>
            <ButtonGroup>
               <Button
                  color="primary"
                  onClick={() => this.onCheckboxBtnClick(1)}
                  active={this.state.cSelected.includes(1)}
               >
                  One
               </Button>
               <Button
                  color="primary"
                  onClick={() => this.onCheckboxBtnClick(2)}
                  active={this.state.cSelected.includes(2)}
               >
                  Two
               </Button>
               <Button
                  color="primary"
                  onClick={() => this.onCheckboxBtnClick(3)}
                  active={this.state.cSelected.includes(3)}
               >
                  Three
               </Button>
            </ButtonGroup>
            <p>Selected: {JSON.stringify(this.state.cSelected)}</p>
         </div>
      );
   }
}

export default ButtonsCheckbox;`;

export default ButtonsCheckboxSource;