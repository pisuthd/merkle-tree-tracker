import React, { Component } from "react";
import Toggle from "react-toggle";

class FormData extends Component {
   state = {
      milkIsReady: false
   };

   handleMilkChange = () => {
      const form = this.refs.breakfastForm;
      this.setState({
         formData: form.milkIsReady.checked
            ? { milkIsReady: form.milkIsReady.value }
            : {}
      });
   }

   render() {
      return (
         <form ref="breakfastForm">

            {/* Using form data */}

            <div className="example">
               <label>
                  <Toggle
                     defaultChecked={!!this.state.milkIsReady}
                     name="milkIsReady"
                     value="yes"
                     onChange={this.handleMilkChange}
                  />
                  <span className="label-text">Using form data</span>
               </label>
            </div>
         </form>
      );
   }
}

export default FormData;
