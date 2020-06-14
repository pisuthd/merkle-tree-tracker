import React, { Component, Fragment } from "react";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";

//Prism
// eslint-disable-next-line
import Prism from "prismjs";  //Include JS
import "prismjs/themes/prism-okaidia.css"; //Include CSS
import { PrismCode } from "react-prism"; //Prism Component

import "rc-slider/assets/index.css";

import CustomTabs from "../../../components/tabs/customTabs";
import ContentHeader from "../../../components/contentHead/contentHeader";
import ContentSubHeader from "../../../components/contentHead/contentSubHeader";

// Import examples
import RangeSlider from "./examples/rangeSlider";

// Import Example Source Code
import RangeSliderSource from "./exampleSource/rangeSlider";

class Slider extends Component {
   render() {
      return (
         <Fragment>
            <ContentHeader>Range Slider</ContentHeader>
            <ContentSubHeader>
               <p>Range Slider UI component for React.</p>
               <a href="https://github.com/react-component/slider/" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.shields.io/github/stars/react-component/slider.svg?style=social" alt="Stars" />
                  <img src="https://img.shields.io/npm/dm/rc-slider.svg" alt="Downloads"/>
               </a>
            </ContentSubHeader>
            <Row>
               <Col sm="12">
                  <Card>
                     <CardBody>
                        <CardTitle>Slider UI component</CardTitle>
                        <CustomTabs
                           TabContent1={<RangeSlider />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {RangeSliderSource}
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

export default Slider;
