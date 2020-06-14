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
import CollapseDefault from "./examples/collapse";
import CollapseUncontrolled from "./examples/collapseUncontrolled";

// Import Example Source Code
import CollapseDefaultSource from "./exampleSource/collapse";
import CollapseUncontrolledSource from "./exampleSource/collapseUncontrolled";

class Collapse extends Component {
   render() {
      return (
         <Fragment>
            <ContentHeader>Collapse</ContentHeader>
            <ContentSubHeader>Collapse React Component.</ContentSubHeader>
            <Row>
               <Col sm="12" md="6">
                  <Card>
                     <CardBody>
                        <CardTitle>Collapse</CardTitle>
                        <CustomTabs
                           TabContent1={<CollapseDefault />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {CollapseDefaultSource}
                              </PrismCode>
                           }
                        />
                     </CardBody>
                  </Card>
               </Col>

               <Col sm="12" md="6">
                  <Card>
                     <CardBody>
                        <CardTitle>Uncontrolled</CardTitle>
                        <CustomTabs
                           TabContent1={<CollapseUncontrolled />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {CollapseUncontrolledSource}
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

export default Collapse;
