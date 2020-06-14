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
import ModalDefault from "./examples/modal";
import ModalNoBackdrop from "./examples/modalNoBackdrop";
import ModalStaticBackdrop from "./examples/modalStaticBackdrop";
import ModalNested from "./examples/modalNested";
import ModalExternalButton from "./examples/modalExternalButton";
import ModalWithoutFade from "./examples/modalWithoutFade";

// Import Example Source Code
import ModalDefaultSource from "./exampleSource/modal";
import ModalNoBackdropSource from "./exampleSource/modalNoBackdrop";
import ModalStaticBackdropSource from "./exampleSource/modalStaticBackdrop";
import ModalNestedSource from "./exampleSource/modalNested";
import ModalExternalButtonSource from "./exampleSource/modalExternalButton";
import ModalWithoutFadeSource from "./exampleSource/modalWithoutFade";

class Modals extends Component {
   render() {
      return (
         <Fragment>
            <ContentHeader>Modals</ContentHeader>
            <ContentSubHeader>Modals React Component.</ContentSubHeader>
            <Row>
               <Col sm="12" md="6">
                  <Card>
                     <CardBody>
                        <CardTitle>Modal</CardTitle>
                        <p>Toggle a working modal demo by clicking the button below. It will slide down and fade in from the top of the page.</p>
                        <CustomTabs
                           TabContent1={<ModalDefault />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {ModalDefaultSource}
                              </PrismCode>
                           }
                        />
                     </CardBody>
                  </Card>
               </Col>

               <Col sm="12" md="6">
                  <Card>
                     <CardBody>
                        <CardTitle>No Backdrop</CardTitle>
                        <p>Modal without backdrop example. This modal is useful when you don't require a backdrop.</p>
                        <CustomTabs
                           TabContent1={<ModalNoBackdrop />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {ModalNoBackdropSource}
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
                        <CardTitle>Static Backdrop</CardTitle>
                        <p>Modal with static backdrop example. This modal does not close when you click on the backdrop.</p>
                        <CustomTabs
                           TabContent1={<ModalStaticBackdrop />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {ModalStaticBackdropSource}
                              </PrismCode>
                           }
                        />
                     </CardBody>
                  </Card>
               </Col>

               <Col sm="12" md="6">
                  <Card>
                     <CardBody>
                        <CardTitle>Nested Modals</CardTitle>
                        <p>Nested modals stack very nicely and it is very useful when you want to open another modal from active modal.</p>
                        <CustomTabs
                           TabContent1={<ModalNested />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {ModalNestedSource}
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
                        <CardTitle>Modals with external button</CardTitle>
                        <p>You can place any external button like shown in the example to close the modal widnow.</p>
                        <CustomTabs
                           TabContent1={<ModalExternalButton />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {ModalExternalButtonSource}
                              </PrismCode>
                           }
                        />
                     </CardBody>
                  </Card>
               </Col>

               <Col sm="12" md="6">
                  <Card>
                     <CardBody>
                        <CardTitle>Modals without Fade Effect</CardTitle>
                        <p>If you do not like fade animation effect while opening or closing the modal, you can use this modal.</p>
                        <CustomTabs
                           TabContent1={<ModalWithoutFade />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {ModalWithoutFadeSource}
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

export default Modals;
