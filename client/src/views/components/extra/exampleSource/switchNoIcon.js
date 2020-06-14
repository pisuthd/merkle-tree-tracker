const NoIconSource = `import React, { Component } from "react";
import Toggle from "react-toggle";

class NoIcon extends Component {
   state = {
      tofuIsReady: false,
   };

   render() {
      return (
         <form ref="breakfastForm">

            {/* No icons */}

            <div className="example">
               <label>
                  <Toggle
                     defaultChecked={this.state.tofuIsReady}
                     icons={false}
                     onChange={this.handleTofuChange}
                  />
                  <span className="label-text">No icons</span>
               </label>
            </div>
         </form>
      );
   }
}
export default NoIcon;
`;

export default NoIconSource;
