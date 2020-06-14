import React, { Component } from "react";
import Toggle from "react-toggle";

class NoLabel extends Component {
   state = {
      eggsAreReady: false
   };

   render() {
      return (
         <form ref="breakfastForm">

            {/* Eggs */}

            <div className="example">
               <Toggle
                  defaultChecked={this.state.eggsAreReady}
                  aria-label="No label"
                  onChange={this.handleEggsChange}
               />
               <span className="label-text">No label tag</span>
            </div>
         </form>
      );
   }
}

export default NoLabel;
