import React from "react";
import { UncontrolledTooltip } from "reactstrap";

function TooltipUncontrolled() {
   return (
      <div>
         <p>
            Somewhere in here is a{" "}
            <span
               style={{ textDecoration: "underline", color: "blue" }}
               href="#"
               id="UncontrolledTooltipExample"
            >
               tooltip
            </span>
            .
         </p>
         <UncontrolledTooltip
            placement="right"
            target="UncontrolledTooltipExample"
         >
            Hello world!
         </UncontrolledTooltip>
      </div>
   );
}

export default TooltipUncontrolled;