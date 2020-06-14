import React, { Component, Fragment } from "react";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";

//Prism
// eslint-disable-next-line
import Prism from "prismjs";  //Include JS
import "prismjs/themes/prism-okaidia.css"; //Include CSS
import { PrismCode } from "react-prism"; //Prism Component

import "../../../assets/scss/views/components/extra/upload.scss";

import CustomTabs from "../../../components/tabs/customTabs";
import ContentHeader from "../../../components/contentHead/contentHeader";
import ContentSubHeader from "../../../components/contentHead/contentSubHeader";

// Import examples
import ToastrTypes from "./examples/toastrTypes";
import ToastrPositions from "./examples/toastrPositions";
import ToastrTransitions from "./examples/toastrTransitions";

// Import Example Source Code
import ToastrTypesSource from "./exampleSource/toastrTypes";
import ToastrPositionsSource from "./exampleSource/toastrPositions";
import ToastrTransitionsSource from "./exampleSource/toastrTransitions";

class Toastr extends Component {

   render() {
      return (
         <Fragment>
            <ContentHeader>React Redux Toastr</ContentHeader>
            <ContentSubHeader>
               <p>react-redux-toastr is a toastr message implemented with Redux.</p>
               <a href="https://github.com/diegoddox/react-redux-toastr" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.shields.io/github/stars/react-redux-toastr/react-redux-toastr.svg?style=social" alt="Stars" />
                  <img src="https://img.shields.io/npm/dm/react-redux-toastr.svg" alt="Downloads"/>
               </a>
            </ContentSubHeader>
            <Row>
               <Col sm="12">
                  <Card>
                     <CardBody>
                        <CardTitle>Types</CardTitle>
                        <p>
                           Types of Toastr
                        </p>
                        <CustomTabs
                           TabContent1={<ToastrTypes />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {ToastrTypesSource}
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
                        <CardTitle>Positions</CardTitle>
                        <p>
                            Available positions
                        </p>
                        <CustomTabs
                           TabContent1={<ToastrPositions />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {ToastrPositionsSource}
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
                        <CardTitle>Transitions</CardTitle>
                        <p>
                            Available transitions
                        </p>
                        <CustomTabs
                           TabContent1={<ToastrTransitions />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {ToastrTransitionsSource}
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

export default Toastr;
