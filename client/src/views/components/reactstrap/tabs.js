import React, { Fragment } from "react";
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
import TabsExample from "./examples/tabs";
import TabsJustified from "./examples/tabsJustified";
import TabsBorderBottom from "./examples/tabsBorderBottom";
import TabsVertical from "./examples/tabsVertical";
import TabsPills from "./examples/tabsPills";

// Import Example Source Code
import TabsExampleSource from "./exampleSource/tabs";
import TabsJustifiedSource from "./exampleSource/tabsJustified";
import TabsBorderBottomSource from "./exampleSource/tabsBorderBottom";
import TabsVerticalSource from "./exampleSource/tabsVertical";
import TabsPillsSource from "./exampleSource/tabsPills";

class Tabs extends React.Component {
   
   render() {
      return (
         <Fragment>
            <ContentHeader>Tabs</ContentHeader>
            <ContentSubHeader>Tabs React Component.</ContentSubHeader>
            <Row>
               <Col md="12" lg="6">
                  <Card>
                     <CardBody>
                        <CardTitle>Tabs</CardTitle>
                        <CustomTabs
                           TabContent1={<TabsExample />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {TabsExampleSource}
                              </PrismCode>
                           }
                        />
                     </CardBody>
                  </Card>
               </Col>
               <Col md="12" lg="6">
                  <Card>
                     <CardBody>
                        <CardTitle>Justified Tabs</CardTitle>
                        <CustomTabs
                           TabContent1={<TabsJustified />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {TabsJustifiedSource}
                              </PrismCode>
                           }
                        />
                     </CardBody>
                  </Card>
               </Col>
            </Row>

            <Row>
               <Col md="12" lg="6">
                  <Card>
                     <CardBody>
                        <CardTitle>Border Bottom Tabs</CardTitle>
                        <CustomTabs
                           TabContent1={<TabsBorderBottom />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {TabsBorderBottomSource}
                              </PrismCode>
                           }
                        />
                     </CardBody>
                  </Card>
               </Col>
               <Col md="12" lg="6">
                  <Card>
                     <CardBody>
                        <CardTitle>Vertical Tabs</CardTitle>
                        <CustomTabs
                           TabContent1={<TabsVertical />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {TabsVerticalSource}
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
                        <CardTitle>Pills</CardTitle>
                        <CustomTabs
                           TabContent1={<TabsPills />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {TabsPillsSource}
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

export default Tabs;
