import React, { Component } from "react";
import Toggle from "react-toggle";

const Heart = () => (
   <div
      style={{
         color: "#fff",
         fontSize: "1.2em",
         position: "absolute",
         top: "0.4em"
      }}
   >
      ❤
   </div>
);

class CustomICon extends Component {
   state = {
      soupIsReady: true
   };

   render() {
      return (
         <form ref="breakfastForm">

            {/* Custom icons */}

            <div className="example">
               <label>
                  <Toggle
                     defaultChecked={this.state.soupIsReady}
                     icons={{
                        checked: <Heart />,
                        unchecked: null
                     }}
                     onChange={this.handleSoupChange}
                  />
                  <span className="label-text">Custom icons</span>
               </label>
            </div>
         </form>
      );
   }
}

export default CustomICon;
