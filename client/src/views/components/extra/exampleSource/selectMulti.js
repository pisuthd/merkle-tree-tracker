const SelectMultiSource = `import React, { Component } from "react";
import Select from "react-select";
import { colourOptions } from "./selectData";

class MultiSelect extends Component {
   render() {
      return (
         <Select
            defaultValue={[colourOptions[2], colourOptions[3]]}
            isMulti
            name="colors"
            options={colourOptions}
            className="basic-multi-select"
            classNamePrefix="select"
         />
      );
   }
}
export default MultiSelect;
`;

export default SelectMultiSource;