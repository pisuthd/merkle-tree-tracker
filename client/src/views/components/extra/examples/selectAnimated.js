import React, { Component } from "react";

import Select from "react-select";
import makeAnimated from "react-select/lib/animated";
import { colourOptions } from "./selectData";

class AnimatedSelect extends Component {
   render() {
      return (
         <Select
            closeMenuOnSelect={false}
            components={makeAnimated()}
            defaultValue={[colourOptions[4], colourOptions[5]]}
            isMulti
            options={colourOptions}
         />
      );
   }
}

export default AnimatedSelect;
