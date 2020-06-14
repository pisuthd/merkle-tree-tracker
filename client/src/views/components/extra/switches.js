import React, { Component, Fragment } from "react";

//Prism
// eslint-disable-next-line
import Prism from "prismjs";  //Include JS
import "prismjs/themes/prism-okaidia.css"; //Include CSS
import { PrismCode } from "react-prism"; //Prism Component

import "react-toggle/style.css";
import "../../../assets/scss/views/components/extra/switch.scss";

// import classnames from "classnames";
import CustomTabs from "../../../components/tabs/customTabs";
import ContentHeader from "../../../components/contentHead/contentHeader";
import ContentSubHeader from "../../../components/contentHead/contentSubHeader";
import {
   Card,
   CardBody,
   CardTitle,
   Row,
   Col
} from "reactstrap";

// Import examples
import WrapperLabel from "./examples/switchWrapperLabel";
import AdjacentLabel from "./examples/switchAdjacentLabel";
import NoLabel from "./examples/switchNoLabel";
import FormData from "./examples/switchFormData";
import Controlled from "./examples/switchControlled";
import Disbaled from "./examples/switchDisabled";
import CustomClassname from "./examples/switchCustomClassname";
import CustomIcon from "./examples/switchCustomIcon";
import NoIcon from "./examples/switchNoIcon";

// Import Example Source Code
import WrapperLabelSource from "./exampleSource/switchWrapperLabel";
import AdjacentLabelSource from "./exampleSource/switchAdjacentLabel";
import NoLabelSource from "./exampleSource/switchNoLabel";
import FormDataSource from "./exampleSource/switchFormData";
import ControlledSource from "./exampleSource/switchControlled";
import DisbaledSource from "./exampleSource/switchDisabled";
import CustomClassnameSource from "./exampleSource/switchCustomClassname";
import CustomIconSource from "./exampleSource/switchCustomIcon";
import NoIconSource from "./exampleSource/switchNoIcon";


class Switches extends Component {
   render() {
      return (
         <Fragment>
            <ContentHeader>Switches</ContentHeader>
            <ContentSubHeader>
               <p>Elegant, accessible toggle component for React.</p>
               <a href="https://github.com/aaronshaf/react-toggle" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.shields.io/github/stars/aaronshaf/react-toggle.svg?style=social" alt="Stars" />
                  <img src="https://img.shields.io/npm/dm/react-toggle.svg" alt="Downloads"/>
               </a>
            </ContentSubHeader>
            <Row>
               <Col sm="12" md="6">
                  <Card>
                     <CardBody>
                        <CardTitle>Wrapper label tag</CardTitle>
                        <CustomTabs
                           TabContent1={<WrapperLabel />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {WrapperLabelSource}
                              </PrismCode>
                           }
                        />
                     </CardBody>
                  </Card>
               </Col>
               <Col sm="12" md="6">
                  <Card>
                     <CardBody>
                        <CardTitle>Adjacent label tag</CardTitle>
                        <CustomTabs
                           TabContent1={<AdjacentLabel />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {AdjacentLabelSource}
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
                        <CardTitle>No label tag</CardTitle>
                        <CustomTabs
                           TabContent1={<NoLabel />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {NoLabelSource}
                              </PrismCode>
                           }
                        />
                     </CardBody>
                  </Card>
               </Col>
               <Col sm="12" md="6">
                  <Card>
                     <CardBody>
                        <CardTitle>Using form data</CardTitle>
                        <CustomTabs
                           TabContent1={<FormData />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {FormDataSource}
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
                        <CardTitle>Controlled Component</CardTitle>
                        <CustomTabs
                           TabContent1={<Controlled />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {ControlledSource}
                              </PrismCode>
                           }
                        />
                     </CardBody>
                  </Card>
               </Col>
               <Col sm="12" md="6">
                  <Card>
                     <CardBody>
                        <CardTitle>Disabled</CardTitle>
                        <CustomTabs
                           TabContent1={<Disbaled />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {DisbaledSource}
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
                        <CardTitle>Custom className</CardTitle>
                        <CustomTabs
                           TabContent1={<CustomClassname />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {CustomClassnameSource}
                              </PrismCode>
                           }
                        />
                     </CardBody>
                  </Card>
               </Col>
               <Col sm="12" md="6">
                  <Card>
                     <CardBody>
                        <CardTitle>Custom icons</CardTitle>
                        <CustomTabs
                           TabContent1={<CustomIcon />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {CustomIconSource}
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
                        <CardTitle>No icons</CardTitle>
                        <CustomTabs
                           TabContent1={<NoIcon />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {NoIconSource}
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

export default Switches;
