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
import ButtonsDefault from "./examples/buttonsDefault";
import ButtonsIcon from "./examples/buttonsIcon";
import ButtonsSquare from "./examples/buttonsSquare";
import ButtonsRound from "./examples/buttonsRound";
import ButtonsSizing from "./examples/buttonsSizing";
import ButtonsGradient from "./examples/buttonsGradient";
import ButtonsGroup from "./examples/buttonsGroup";
import ButtonsDropdown from "./examples/buttonsDropdown";
import ButtonsRadio from "./examples/buttonRadio";
import ButtonsCheckbox from "./examples/buttonsCheckbox";

// Import Example Source Code
import ButtonsDefaultSource from "./exampleSource/buttonsDefault";
import ButtonsIconSource from "./exampleSource/buttonsIcon";
import ButtonsSquareSource from "./exampleSource/buttonsSquare";
import ButtonsRoundSource from "./exampleSource/buttonsRound";
import ButtonsSizingSource from "./exampleSource/buttonsSizing";
import ButtonsGradientSource from "./exampleSource/buttonsGradient";
import ButtonsGroupSource from "./exampleSource/buttonsGroup";
import ButtonsDropdownSource from "./exampleSource/buttonsDropdown";
import ButtonsRadioSource from "./exampleSource/buttonRadio";
import ButtonsCheckboxSource from "./exampleSource/buttonsCheckbox";


class buttons extends Component {

   render() {
      return (
         <Fragment>
            <ContentHeader>Buttons</ContentHeader>
            <ContentSubHeader>Buttons React Component.</ContentSubHeader>
            <Row className="row-eq-height">
               <Col lg="12" xl="6">
                  <Card>
                     <CardBody>
                        <CardTitle>Default Buttons</CardTitle>
                        <CustomTabs
                           TabContent1={<ButtonsDefault />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {ButtonsDefaultSource}
                              </PrismCode>
                           }
                        />
                     </CardBody>
                  </Card>
               </Col>

               <Col lg="12" xl="6">
                  <Card>
                     <CardBody>
                        <CardTitle>Icon Buttons</CardTitle>
                        <CustomTabs
                           TabContent1={<ButtonsIcon />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {ButtonsIconSource}
                              </PrismCode>
                           }
                        />
                     </CardBody>
                  </Card>
               </Col>
            </Row>

            <Row className="row-eq-height">
               <Col lg="12" xl="6">
                  <Card>
                     <CardBody>
                        <CardTitle>Square Buttons</CardTitle>
                        <CustomTabs
                           TabContent1={<ButtonsSquare />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {ButtonsSquareSource}
                              </PrismCode>
                           }
                        />
                     </CardBody>
                  </Card>
               </Col>

               <Col lg="12" xl="6">
                  <Card>
                     <CardBody>
                        <CardTitle>Round Buttons</CardTitle>
                        <CustomTabs
                           TabContent1={<ButtonsRound />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {ButtonsRoundSource}
                              </PrismCode>
                           }
                        />
                     </CardBody>
                  </Card>
               </Col>
            </Row>

            <Row className="row-eq-height">
               <Col lg="12" xl="6">
                  <Card>
                     <CardBody>
                        <CardTitle>Buttons Sizing</CardTitle>
                        <CustomTabs
                           TabContent1={<ButtonsSizing />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {ButtonsSizingSource}
                              </PrismCode>
                           }
                        />
                     </CardBody>
                  </Card>
               </Col>

               <Col lg="12" xl="6">
                  <Card>
                     <CardBody>
                        <CardTitle>Gradient & Shadow Buttons</CardTitle>
                        <CustomTabs
                           TabContent1={<ButtonsGradient />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {ButtonsGradientSource}
                              </PrismCode>
                           }
                        />
                     </CardBody>
                  </Card>
               </Col>
            </Row>

            <Row className="row-eq-height">
               <Col lg="12" xl="6">
                  <Card>
                     <CardBody>
                        <CardTitle>Radio Buttons</CardTitle>
                        <CustomTabs
                           TabContent1={<ButtonsRadio />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {ButtonsRadioSource}
                              </PrismCode>
                           }
                        />
                     </CardBody>
                  </Card>
               </Col>

               <Col lg="12" xl="6">
                  <Card>
                     <CardBody>
                        <CardTitle>Checkbox Buttons</CardTitle>
                        <CustomTabs
                           TabContent1={<ButtonsCheckbox />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {ButtonsCheckboxSource}
                              </PrismCode>
                           }
                        />
                     </CardBody>
                  </Card>
               </Col>
            </Row>

            <Row className="row-eq-height">
               <Col lg="12" xl="6">
                  <Card>
                     <CardBody>
                        <CardTitle>Buttons Group</CardTitle>
                        <CustomTabs
                           TabContent1={<ButtonsGroup />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {ButtonsGroupSource}
                              </PrismCode>
                           }
                        />
                     </CardBody>
                  </Card>
               </Col>

               <Col lg="12" xl="6">
                  <Card>
                     <CardBody>
                        <CardTitle>Buttons Dropdown</CardTitle>
                        <CustomTabs
                           TabContent1={<ButtonsDropdown />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {ButtonsDropdownSource}
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

export default buttons;
