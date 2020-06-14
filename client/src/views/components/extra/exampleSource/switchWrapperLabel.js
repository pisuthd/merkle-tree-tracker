const WrapperLabelSource = `import React, { Component } from "react";
import Toggle from "react-toggle";

class WrapperLabel extends Component {
   state = {
      baconIsReady: false
   };

   render() {
      return (
         <form ref="breakfastForm">
            {/* Bacon */}

            <label>
               <Toggle
                  defaultChecked={this.state.baconIsReady}
                  onChange={this.handleBaconChange}
               />
               <span className="label-text">Wrapper label tag</span>
            </label>
         </form>
      );
   }
}
export default WrapperLabel;
`;

export default WrapperLabelSource;
