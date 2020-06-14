import React, { Component, Fragment } from "react";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";

//Prism
// eslint-disable-next-line
import Prism from "prismjs";  //Include JS
import "prismjs/themes/prism-okaidia.css"; //Include CSS
import { PrismCode } from "react-prism"; //Prism Component

// import classnames from "classnames";
import CustomTabs from "../../../components/tabs/customTabs";
import ContentHeader from "../../../components/contentHead/contentHeader";
import ContentSubHeader from "../../../components/contentHead/contentSubHeader";

// Import examples
import InputGroup from "./examples/inputGroup";
import InputGroupAddons from "./examples/inputGroupAddons";
import InputGroupAddonSizing from "./examples/inputGroupAddonSizing";
import InputGroupButtons from "./examples/inputGroupButtons";

// Import Example Source Code
import InputGroupSource from "./exampleSource/inputGroup";
import InputGroupAddonsSource from "./exampleSource/inputGroupAddons";
import InputGroupAddonSizingSource from "./exampleSource/inputGroupAddonSizing";
import InputGroupButtonsSource from "./exampleSource/inputGroupButtons";

class inputGroup extends Component {

   render() {
      return (
         <Fragment>
            <ContentHeader>Input Group</ContentHeader>
            <ContentSubHeader>Input Group React Component.</ContentSubHeader>
            <Row>
               <Col sm="12">
                  <Card>
                     <CardBody>
                        <CardTitle>Input Group</CardTitle>
                        <CustomTabs
                           TabContent1={<InputGroup />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {InputGroupSource}
                              </PrismCode>
                           }
                        />
                     </CardBody>
                  </Card>
               </Col>
            </Row>

            <Row>
               <Col sm="12">
                  <Card>
                     <CardBody>
                        <CardTitle>Addons</CardTitle>
                        <CustomTabs
                           TabContent1={<InputGroupAddons />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {InputGroupAddonsSource}
                              </PrismCode>
                           }
                        />
                     </CardBody>
                  </Card>
               </Col>
            </Row>

            <Row>
               <Col sm="12">
                  <Card>
                     <CardBody>
                        <CardTitle>Addon Sizing</CardTitle>
                        <CustomTabs
                           TabContent1={<InputGroupAddonSizing />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {InputGroupAddonSizingSource}
                              </PrismCode>
                           }
                        />
                     </CardBody>
                  </Card>
               </Col>
            </Row>

            <Row>
               <Col sm="12">
                  <Card>
                     <CardBody>
                        <CardTitle>Buttons / Dropdowns</CardTitle>
                        <CustomTabs
                           TabContent1={<InputGroupButtons />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {InputGroupButtonsSource}
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

export default inputGroup;
