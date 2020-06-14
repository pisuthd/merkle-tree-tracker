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
import VerticalList from "./examples/dndVerticalList";
import HorizontalList from "./examples/dndHorizontalList";
import MultipleTarget from "./examples/dndMultipleTarget";

// Import Example Source Code
import VerticalListSource from "./exampleSource/dndVerticalList";
import HorizontalListSource from "./exampleSource/dndHorizontalList";
import MultipleTargetSource from "./exampleSource/dndMultipleTarget";

class DragAndDrop extends Component {
   render() {
      return (
         <Fragment>
            <ContentHeader>Drag And Drop</ContentHeader>
            <ContentSubHeader>
               <p>Beautiful and accessible drag and drop for lists with React.</p>
               <a href="https://github.com/atlassian/react-beautiful-dnd" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.shields.io/github/stars/atlassian/react-beautiful-dnd.svg?style=social" alt="Stars" />
                  <img src="https://img.shields.io/npm/dm/react-beautiful-dnd.svg" alt="Downloads"/>
               </a>
            </ContentSubHeader>
            <Row>
               <Col sm="12" md="6">
                  <Card>
                     <CardBody>
                        <CardTitle>Vertical List</CardTitle>
                        <CustomTabs
                           TabContent1={<VerticalList />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {VerticalListSource}
                              </PrismCode>
                           }
                        />
                     </CardBody>
                  </Card>
               </Col>

               <Col sm="12" md="6">
                  <Card>
                     <CardBody>
                        <CardTitle>Horizontal List</CardTitle>
                        <CustomTabs
                           TabContent1={<HorizontalList />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {HorizontalListSource}
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
                        <CardTitle>Multiple Drop Targets</CardTitle>
                        <CustomTabs
                           TabContent1={<MultipleTarget />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {MultipleTargetSource}
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

export default DragAndDrop;
