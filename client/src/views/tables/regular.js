import React, { Component, Fragment } from "react";
import CustomTabs from "../../components/tabs/customTabs";
import ContentHeader from "../../components/contentHead/contentHeader";
import ContentSubHeader from "../../components/contentHead/contentSubHeader";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";

//Prism
// eslint-disable-next-line
import Prism from "prismjs";  //Include JS
import "prismjs/themes/prism-okaidia.css"; //Include CSS
import { PrismCode } from "react-prism"; //Prism Component

// Table exmple pages
import TableExample from "./examples/table";
import TableDarkExample from "./examples/tableDark";
import TableStripedExample from "./examples/tableStriped";
import TableBorderedExample from "./examples/tableBordered";
import TableBorderlessExample from "./examples/tableBorderless";
import TableHoverExample from "./examples/tableHover";
import TableSizingExample from "./examples/tableSizing";
import TableResponsiveExample from "./examples/tableResponsive";

//Table exmple souece pages
import TableExampleSource from "./example-source/table";
import TableProperties from "./example-source/tableProperties";
import TableDarkExampleSource from "./example-source/tableDark";
import TableStripedExampleSource from "./example-source/tableStriped";
import TableBorderedExampleSource from "./example-source/tableBordered";
import TableBorderlessExampleSource from "./example-source/tableBorderless";
import TableHoverExampleSource from "./example-source/tableHover";
import TableSizingExampleSource from "./example-source/tableSizing";
import TableResponsiveExampleSource from "./example-source/tableResponsive";

class regular extends Component {
   render() {
      return (
         <Fragment>
            <ContentHeader>Basic Tables </ContentHeader>
            <ContentSubHeader>
               All table styles are inherited in Bootstrap 4, meaning any nested
               tables will be styled in the same manner as the parent.
            </ContentSubHeader>
            <Row>
               <Col sm="12">
                  <Card>
                     <CardBody>
                        <CardTitle>Simple Table</CardTitle>
                        <p>
                           Simple bootstrap table component{" "}
                           <code>&lt;Table&gt;</code>.
                        </p>
                        <CustomTabs
                           TabContent1={<TableExample />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {TableExampleSource}
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
                        <CardTitle>Table Properties</CardTitle>
                        <PrismCode
                           component="pre"
                           className="language-javascript"
                        >
                           {TableProperties}
                        </PrismCode>
                     </CardBody>
                  </Card>
               </Col>
            </Row>
            <Row>
               <Col sm="12">
                  <Card>
                     <CardBody>
                        <CardTitle>Dark Table</CardTitle>
                        <p>
                           You can also invert the colors—with light text on
                           dark backgrounds—with <code>&lt;Table dark&gt;</code>
                           .
                        </p>
                        <CustomTabs
                           TabContent1={<TableDarkExample />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {TableDarkExampleSource}
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
                        <CardTitle>Striped Rows</CardTitle>
                        <p>
                           Add zebra-striping to any table row with{" "}
                           <code>&lt;Table striped&gt;</code>.
                        </p>
                        <CustomTabs
                           TabContent1={<TableStripedExample />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {TableStripedExampleSource}
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
                        <CardTitle>Bordered Tables</CardTitle>
                        <p>
                           Add borders on all sides of the table and cells with{" "}
                           <code>&lt;Table bordered&gt;</code>.
                        </p>
                        <CustomTabs
                           TabContent1={<TableBorderedExample />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {TableBorderedExampleSource}
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
                        <CardTitle>Borderless Table</CardTitle>
                        <p>
                           Table without borders, use{" "}
                           <code>&lt;Table borderless&gt;</code>.
                        </p>
                        <CustomTabs
                           TabContent1={<TableBorderlessExample />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {TableBorderlessExampleSource}
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
                        <CardTitle>Hoverable Rowse</CardTitle>
                        <p>
                           Table with hover state on table rows, use{" "}
                           <code>&lt;Table hover&gt;</code>.
                        </p>
                        <CustomTabs
                           TabContent1={<TableHoverExample />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {TableHoverExampleSource}
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
                        <CardTitle>Small Table</CardTitle>
                        <p>
                           Table with size varient, use{" "}
                           <code>&lt;Table size="sm"&gt;</code>.
                        </p>
                        <CustomTabs
                           TabContent1={<TableSizingExample />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {TableSizingExampleSource}
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
                        <CardTitle>Responsive Table</CardTitle>
                        <p>
                           Responsive tables allow tables to be scrolled
                           horizontally with ease. Make any table responsive
                           across all viewports by{" "}
                           <code>&lt;Table responsive&gt;</code>.
                        </p>
                        <CustomTabs
                           TabContent1={<TableResponsiveExample />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {TableResponsiveExampleSource}
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

export default regular;
