const AdjacentLabelSource = `import React, { Component } from "react";
import Toggle from "react-toggle";

class AdjacentLabel extends Component {
   state = {
      cheeseIsReady: false
   };

   render() {
      return (
         <form ref="breakfastForm">

            {/* Cheese */}

            <div className="example">
               <Toggle
                  id="cheese-status"
                  defaultChecked={this.state.cheeseIsReady}
                  onChange={this.handleCheeseChange}
               />
               <label htmlFor="cheese-status">Adjacent label tag</label>
            </div>
         </form>
      );
   }
}
export default AdjacentLabel;
`;

export default AdjacentLabelSource;
