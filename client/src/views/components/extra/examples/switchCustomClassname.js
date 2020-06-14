import React, { Component } from "react";
import Toggle from "react-toggle";

class CustomClassName extends Component {
   state = {
      aubergineIsReady: false
   };

   render() {
      return (
         <form ref="breakfastForm">

            {/* Custom className */}

            <div className="example">
               <label>
                  <Toggle
                     defaultChecked={this.state.aubergineIsReady}
                     className="custom-classname"
                     onChange={this.handleAubergineChange}
                  />
                  <span className="label-text">Custom className</span>
               </label>
            </div>
         </form>
      );
   }
}

export default CustomClassName;
