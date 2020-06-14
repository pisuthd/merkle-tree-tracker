import React, { Component, Fragment } from "react";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";

//Prism
// eslint-disable-next-line
import Prism from "prismjs"; //Include JS
import "prismjs/themes/prism-okaidia.css"; //Include CSS
import { PrismCode } from "react-prism"; //Prism Component

// import classnames from "classnames";
import CustomTabs from "../../../components/tabs/customTabs";
import ContentHeader from "../../../components/contentHead/contentHeader";
import ContentSubHeader from "../../../components/contentHead/contentSubHeader";

// Import examples
import DropdownDefault from "./examples/dropdown";
import DropdownRightAligned from "./examples/dropdownRightAligned";
import DropdownSizing from "./examples/dropdownSizing";
import DropdownDirection from "./examples/dropdownDirection";
import DropdownUncontrolled from "./examples/dropdownUncontrolled";
import DropdownModifiers from "./examples/dropdownModifiers";

// Import Example Source Code
import DropdownDefaultSource from "./exampleSource/dropdown";
import DropdownRightAlignedSource from "./exampleSource/dropdownRightAligned";
import DropdownSizingSource from "./exampleSource/dropdownSizing";
import DropdownDirectionSource from "./exampleSource/dropdownDirection";
import DropdownUncontrolledSource from "./exampleSource/dropdownUncontrolled";
import DropdownModifiersSource from "./exampleSource/dropdownModifiers";

export default class Dropdowns extends Component {
   render() {
      return (
         <Fragment>
            <ContentHeader>Dropdowns</ContentHeader>
            <ContentSubHeader>
               The <code>Dropdown</code> component is used to pass the{" "}
               <code>isOpen</code> &amp; <code>toggle</code> props via context
               to the following components: <code>DropdownToggle</code>,{" "}
               <code>DropdownMenu</code>. The <code>DropdownToggle</code> uses
               the <code>Button</code> component internally, meaning it also
               accepts all the props the Button component accepts.
            </ContentSubHeader>

            <Row>
               <Col sm="12" md="6">
                  <Card>
                     <CardBody>
                        <CardTitle>Dropdown</CardTitle>
                        <CustomTabs
                           TabContent1={<DropdownDefault />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {DropdownDefaultSource}
                              </PrismCode>
                           }
                        />
                     </CardBody>
                  </Card>
               </Col>

               <Col sm="12" md="6">
                  <Card>
                     <CardBody>
                        <CardTitle>Right Aligned</CardTitle>
                        <CustomTabs
                           TabContent1={<DropdownRightAligned />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {DropdownRightAlignedSource}
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
                        <CardTitle>Dropdown Sizing</CardTitle>
                        <CustomTabs
                           TabContent1={<DropdownSizing />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {DropdownSizingSource}
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
                        <CardTitle>Dropdown Directions</CardTitle>
                        <CustomTabs
                           TabContent1={<DropdownDirection />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {DropdownDirectionSource}
                              </PrismCode>
                           }
                        />
                     </CardBody>
                  </Card>
               </Col>
            </Row>

            <Row>
               <Col sm="12" md="6">
                  <Card>
                     <CardBody>
                        <CardTitle>Uncontrolled</CardTitle>
                        <CustomTabs
                           TabContent1={<DropdownUncontrolled />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {DropdownUncontrolledSource}
                              </PrismCode>
                           }
                        />
                     </CardBody>
                  </Card>
               </Col>

               <Col sm="12" md="6">
                  <Card>
                     <CardBody>
                        <CardTitle>Modifiers</CardTitle>
                        <CustomTabs
                           TabContent1={<DropdownModifiers />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {DropdownModifiersSource}
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
