const SelectSingleSource = `import React, { Component } from "react";

import Select from "react-select";
import { colourOptions } from "./selectData";

class SingleSelect extends Component {

   render() {
      return (
         <Select
            className="basic-single"
            classNamePrefix="select"
            defaultValue={colourOptions[0]}
            name="color"
            options={colourOptions}
         />
      );
   }
}
export default SingleSelect;
`;

export default SelectSingleSource;