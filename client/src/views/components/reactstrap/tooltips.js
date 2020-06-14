import React, { Fragment } from "react";
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
import TooltipsDefault from "./examples/tooltips";
import TooltipsUncontrolled from "./examples/tooltipsUncontrolled";

// Import Example Source Code
import TooltipsDefaultSource from "./exampleSource/tooltips";
import TooltipsUncontrolledSource from "./exampleSource/tooltipsUncontrolled";

class TooltipExampleMulti extends React.Component {
   render() {
      return (
         <Fragment>
            <ContentHeader>Tooltips</ContentHeader>
            <ContentSubHeader>Tooltip React Component.</ContentSubHeader>
            <Row>
               <Col sm="12">
                  <Card>
                     <CardBody>
                        <CardTitle>Tooltips</CardTitle>
                        <CustomTabs
                           TabContent1={<TooltipsDefault />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {TooltipsDefaultSource}
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
                        <CardTitle>Alerts</CardTitle>
                        <CustomTabs
                           TabContent1={<TooltipsUncontrolled />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {TooltipsUncontrolledSource}
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

export default TooltipExampleMulti;
