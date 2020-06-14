import React, { Component, Fragment } from "react";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";

//Prism
// eslint-disable-next-line
import Prism from "prismjs";  //Include JS
import "prismjs/themes/prism-okaidia.css"; //Include CSS
import { PrismCode } from "react-prism"; //Prism Component

import CustomTabs from "../../../components/tabs/customTabs";
import ContentHeader from "../../../components/contentHead/contentHeader";
import ContentSubHeader from "../../../components/contentHead/contentSubHeader";

// Import examples
import InputTags from "./examples/inputTags";

// Import Example Source Code
import InputTagsSource from "./exampleSource/inputTags";

class TagsInput extends Component {
   render() {
      return (
         <Fragment>
            <ContentHeader>Input Tags</ContentHeader>
            <ContentSubHeader>
               <p>Highly customizable React component for inputing tags.</p>
               <a href="https://github.com/olahol/react-tagsinput" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.shields.io/github/stars/olahol/react-tagsinput.svg?style=social" alt="Stars" />
                  <img src="https://img.shields.io/npm/dm/react-tagsinput.svg" alt="Downloads"/>
               </a>
            </ContentSubHeader>
            <Row>
               <Col sm="12">
                  <Card>
                     <CardBody>
                        <CardTitle>Tags Input</CardTitle>
                        <p>Transforms an input field into a Tags component, in an easy, customizable way, with great performance and tiny code footprint.</p>
                        <p>Install <a href="https://github.com/JedWatson/react-input-autosize" target="_blank" rel="noopener noreferrer">react-input-autosize</a> to make the input dynamically grow in size.</p>
                        <p>Use <a href="https://github.com/moroshko/react-autosuggest" target="_blank" rel="noopener noreferrer">react-autosuggest</a> to add the support of auto suggestion.</p>
                        <CustomTabs
                           TabContent1={<InputTags />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {InputTagsSource}
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

export default TagsInput;
