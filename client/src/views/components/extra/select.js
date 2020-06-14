import React, { Component, Fragment } from "react";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";

//Prism
// eslint-disable-next-line
import Prism from "prismjs"; //Include JS
import "prismjs/themes/prism-okaidia.css"; //Include CSS
import { PrismCode } from "react-prism"; //Prism Component

import CustomTabs from "../../../components/tabs/customTabs";
import ContentHeader from "../../../components/contentHead/contentHeader";
import ContentSubHeader from "../../../components/contentHead/contentSubHeader";

// Import examples
import SelectSingle from "./examples/selectSingle";
import SelectMulti from "./examples/selectMulti";
import SelectGrouped from "./examples/selectGrouped";
import SelectAnimated from "./examples/selectAnimated";

// Import Example Source Code
import SelectSingleSource from "./exampleSource/selectSingle";
import SelectMultiSource from "./exampleSource/selectMulti";
import SelectGroupedSource from "./exampleSource/selectGrouped";
import SelectAnimatedSource from "./exampleSource/selectAnimated";

class Selects extends Component {
   render() {
      return (
         <Fragment>
            <ContentHeader>Select</ContentHeader>
            <ContentSubHeader>
               <p>
                  A flexible and beautiful Select Input control for ReactJS with multiselect, autocomplete, async and
                  creatable support.
               </p>
               <a href="https://github.com/JedWatson/react-select" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.shields.io/github/stars/JedWatson/react-select.svg?style=social" alt="Stars" />
                  <img src="https://img.shields.io/npm/dm/react-select.svg" alt="Downloads" />
               </a>
            </ContentSubHeader>
            <Row>
               <Col sm="12" md="6">
                  <Card>
                     <CardBody>
                        <CardTitle>Select Single</CardTitle>
                        <CustomTabs
                           TabContent1={<SelectSingle />}
                           TabContent2={
                              <PrismCode component="pre" className="language-javascript">
                                 {SelectSingleSource}
                              </PrismCode>
                           }
                        />
                     </CardBody>
                  </Card>
               </Col>
               <Col sm="12" md="6">
                  <Card>
                     <CardBody>
                        <CardTitle>Select Multiple</CardTitle>
                        <CustomTabs
                           TabContent1={<SelectMulti />}
                           TabContent2={
                              <PrismCode component="pre" className="language-javascript">
                                 {SelectMultiSource}
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
                        <CardTitle>Grouped</CardTitle>
                        <CustomTabs
                           TabContent1={<SelectGrouped />}
                           TabContent2={
                              <PrismCode component="pre" className="language-javascript">
                                 {SelectGroupedSource}
                              </PrismCode>
                           }
                        />
                     </CardBody>
                  </Card>
               </Col>
               <Col sm="12" md="6">
                  <Card>
                     <CardBody>
                        <CardTitle>Animated</CardTitle>
                        <p>Remove the values below to see them in action.</p>
                        <CustomTabs
                           TabContent1={<SelectAnimated />}
                           TabContent2={
                              <PrismCode component="pre" className="language-javascript">
                                 {SelectAnimatedSource}
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

export default Selects;