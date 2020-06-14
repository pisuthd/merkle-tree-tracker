import React from "react";
import Tooltip from "rc-tooltip";
import Slider, { Range } from "rc-slider";

import "rc-slider/assets/index.css";

const Handle = Slider.Handle;

const handle = props => {
   const { value, dragging, index, ...restProps } = props;
   return (
      <Tooltip
         prefixCls="rc-slider-tooltip"
         overlay={value}
         visible={dragging}
         placement="top"
         key={index}
      >
         <Handle value={value} {...restProps} />
      </Tooltip>
   );
};

const wrapperStyle = { width: 400, margin: 50 };

const RCSlider = props => {
   return (
      <div>
         <div style={wrapperStyle}>
            <p>Slider with custom handle</p>
            <Slider min={0} max={20} defaultValue={3} handle={handle} />
         </div>
         <div style={wrapperStyle}>
            <p>Range with custom handle</p>
            <Range
               min={0}
               max={20}
               defaultValue={[3, 10]}
               tipFormatter={value => `${value}%`}
            />
         </div>
      </div>
   );
};

export default RCSlider;
