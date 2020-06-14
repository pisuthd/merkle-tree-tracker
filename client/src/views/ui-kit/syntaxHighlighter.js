import React, { Component, Fragment } from "react";
import ContentHeader from "../../components/contentHead/contentHeader";
import CustomTabs from "../../components/tabs/customTabs";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";

//Prism
// eslint-disable-next-line
import Prism from "prismjs"; //Include JS
import "prismjs/themes/prism-okaidia.css"; //Include CSS
import { PrismCode } from "react-prism"; //Prism Component

// Table exmple pages
import PrismJSCodeExample from "./examples/prismJSCodeMethod";
import PrismCSSCodeExample from "./examples/prismCSSCodeMethod";
import PrismHTMLCodeExample from "./examples/prismHTMLCodeMethod";

//Table exmple souece pages
import PrismJSCodeExampleSource from "./example-source/prismJSCodeMethod";
import PrismCSSCodeExampleSource from "./example-source/prismCSSCodeMethod";
import PrismHTMLCodeExampleSource from "./example-source/prismHTMLCodeMethod";

class SyntaxHighlighter extends Component {
   render() {
      return (
         <Fragment>
            <ContentHeader>Syntax Highlighter</ContentHeader>
            <p>
               Apex React use{" "}
               <a href="react-prism" terget="_blank">
                  react-prism
               </a>{" "}
               for Syntax Highlighter. Put your code inside{" "}
               <code>&lt;PrismCode&gt;</code> component, and it will highlight
               it and wraps it into a <code>&lt;code&gt;</code> component:
            </p>
            <Row>
               {/* JavaScript Example */}
               <Col sm="12">                  
                  <Card>
                     <CardBody>
                        <CardTitle>JavaScript Example</CardTitle>
                        <p>You can use this component for JavaScript code by using <code>&lt;PrismCode component="pre" className="language-javascript"&gt;..&lt;PrismCode&gt;</code></p>
                        <CustomTabs
                           TabContent1={<PrismJSCodeExample />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {PrismJSCodeExampleSource}
                              </PrismCode>
                           }
                        />
                     </CardBody>
                  </Card>
               </Col>

               {/* CSS Example */}
               <Col sm="12">                  
                  <Card>
                     <CardBody>
                        <CardTitle>CSS Example</CardTitle>
                        <p>You can use this component for CSS code by using <code>&lt;PrismCode component="pre" className="language-css"&gt;..&lt;PrismCode&gt;</code></p>
                        <CustomTabs
                           TabContent1={<PrismCSSCodeExample />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {PrismCSSCodeExampleSource}
                              </PrismCode>
                           }
                        />
                     </CardBody>
                  </Card>
               </Col>


               {/* JavaScript Example */}
               <Col sm="12">                  
                  <Card>
                     <CardBody>
                        <CardTitle>HTML Example</CardTitle>
                        <p>You can use this component for HTML code by using <code>&lt;PrismCode component="pre" className="language-markup"&gt;..&lt;PrismCode&gt;</code></p>
                        <CustomTabs
                           TabContent1={<PrismHTMLCodeExample />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {PrismHTMLCodeExampleSource}
                              </PrismCode>
                           }
                        />
                     </CardBody>
                  </Card>
               </Col>
            </Row>
         </Fragment>
      );
   }
}

export default SyntaxHighlighter;
