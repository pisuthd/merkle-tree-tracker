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
import Alerts from "./examples/alerts";
import AlertsLinkColor from "./examples/alertsLinkColor";
import AlertsClosable from "./examples/alertsClosable";
import AlertsUncontrolled from "./examples/alertsUncontrolled";
import AlertsNoFade from "./examples/alertsNoFade";

// Import Example Source Code
import AlertsSource from "./exampleSource/alerts";
import AlertsLinkColorSource from "./exampleSource/alertsLinkColor";
import AlertsClosableSource from "./exampleSource/alertsClosable";
import AlertsUncontrolledSource from "./exampleSource/alertsUncontrolled";
import AlertsNoFadeSource from "./exampleSource/alertsNoFade";

class alerts extends Component {
   render() {
      return (
         <Fragment>
            <ContentHeader>Alerts</ContentHeader>
            <ContentSubHeader>Alerts React Component.</ContentSubHeader>
            <Row>
               <Col sm="12">
                  <Card>
                     <CardBody>
                        <CardTitle>Alerts</CardTitle>
                        <CustomTabs
                           TabContent1={<Alerts />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {AlertsSource}
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
                        <CardTitle>Link Color</CardTitle>
                        <CustomTabs
                           TabContent1={<AlertsLinkColor />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {AlertsLinkColorSource}
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
                        <CardTitle>Closable Alerts</CardTitle>
                        <CustomTabs
                           TabContent1={<AlertsClosable />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {AlertsClosableSource}
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
                        <CardTitle>Uncontrolled [disable] Alerts</CardTitle>
                        <CustomTabs
                           TabContent1={<AlertsUncontrolled />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {AlertsUncontrolledSource}
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
                        <CardTitle>Alerts without fade</CardTitle>
                        <CustomTabs
                           TabContent1={<AlertsNoFade />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {AlertsNoFadeSource}
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

export default alerts;
