import React, { Component } from "react";
import Toggle from "react-toggle";

class Disabled extends Component {
   render() {
      return (
         <form ref="breakfastForm">

            {/* Disabled */}

            <div className="example">
               <div style={{ marginBottom: "8px" }}>
                  <label>
                     <Toggle defaultChecked={false} disabled />
                     <span className="label-text">Diabled, Unchecked</span>
                  </label>
               </div>

               <div>
                  <label>
                     <Toggle defaultChecked disabled />
                     <span className="label-text">Disabled, Checked</span>
                  </label>
               </div>
            </div>
         </form>
      );
   }
}

export default Disabled;
