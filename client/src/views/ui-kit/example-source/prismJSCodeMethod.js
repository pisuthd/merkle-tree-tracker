const PrismJSCodeExampleSource = ` import React from "react";

//Prism
// eslint-disable-next-line
import Prism from "prismjs";  //Include JS
import "prismjs/themes/prism-okaidia.css"; //Include CSS
import { PrismCode } from "react-prism"; //Prism Component

export default class Example extends React.Component {
   render() {
      return (
         <PrismCode component="pre" className="language-javascript">
            {\`
            const id = x => x
            \`}
         </PrismCode>
      );
   }
}`;
export default PrismJSCodeExampleSource;