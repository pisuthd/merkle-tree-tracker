import React, { Component, Fragment } from "react";

import CustomTabs from "../../components/tabs/customTabs";
import ContentHeader from "../../components/contentHead/contentHeader";
import ContentSubHeader from "../../components/contentHead/contentSubHeader";
import { Card, CardBody, CardTitle, Alert, Row, Col } from "reactstrap";

//Prism
// eslint-disable-next-line
import Prism from "prismjs";  //Include JS
import "prismjs/themes/prism-okaidia.css"; //Include CSS
import { PrismCode } from "react-prism"; //Prism Component

// Table exmple pages
import ReactSimpleTableExample from "./examples/reactSimpleTable";
import ReactDefaultShortingTableExample from "./examples/reactDefaultShortingTable";
import ReactCustomColWidthExample from "./examples/reactCustomColWidth";
import ReactServerSideDataExample from "./examples/reactServerSideData";
import ReactSubComponentsExample from "./examples/reactSubComponents";
import ReactCustomFilteringExample from "./examples/reactCustomFiltering";
import ReactEditableTableExample from "./examples/reactEditableTable";
import ReactFixedHeaderTableExample from "./examples/reactFixedHeader";

//Table exmple souece pages
import ReactSimpleTableSource from "./example-source/reactSimpleTable";
import ReactDefaultShortingTableSource from "./example-source/reactDefaultShortingTable";
import ReactCustomColWidthSource from "./example-source/reactCustomColWidth";
import ReactServerSideDataSource from "./example-source/reactServerSideData";
import ReactSubComponentsSource from "./example-source/reactSubComponents";
import ReactCustomFilteringSource from "./example-source/reactCustomFiltering";
import ReactEditableTableSource from "./example-source/reactEditableTable";
import ReactFixedHeaderTableSource from "./example-source/reactFixedHeader";

class reactTableRegular extends Component {
   render() {
      return (
         <Fragment>
            <ContentHeader>React Tables</ContentHeader>
            <ContentSubHeader>
               <a
                  href="https://github.com/react-tools/react-table"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  React Tables
               </a>{" "}
               is lightweight, fast and extendable datagrid built for React
            </ContentSubHeader>

            <Alert color="info" className="mt-2">
               <strong>Note:</strong> Below example tables use{" "}
               <a
                  href="https://www.npmjs.com/package/namor"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  namor
               </a>{" "}
               for generating random data for table using utils.js file.
            </Alert>
            <Row>
               <Col sm="12">
                  <Card>
                     <CardBody>
                        <CardTitle>Simple Table</CardTitle>
                        <CustomTabs
                           TabContent1={<ReactSimpleTableExample />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {ReactSimpleTableSource}
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
                        <CardTitle>Default Shorting</CardTitle>
                        <CustomTabs
                           TabContent1={<ReactDefaultShortingTableExample />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {ReactDefaultShortingTableSource}
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
                        <CardTitle>Custom Column Widths</CardTitle>
                        <CustomTabs
                           TabContent1={<ReactCustomColWidthExample />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {ReactCustomColWidthSource}
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
                        <CardTitle>Server Side Data</CardTitle>
                        <CustomTabs
                           TabContent1={<ReactServerSideDataExample />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {ReactServerSideDataSource}
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
                        <CardTitle>Server Side Data</CardTitle>
                        <CustomTabs
                           TabContent1={<ReactSubComponentsExample />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {ReactSubComponentsSource}
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
                        <CardTitle>Table Sub Components</CardTitle>
                        <CustomTabs
                           TabContent1={<ReactSubComponentsExample />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {ReactSubComponentsSource}
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
                        <CardTitle>Table Custom Filtering</CardTitle>
                        <CustomTabs
                           TabContent1={<ReactCustomFilteringExample />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {ReactCustomFilteringSource}
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
                        <CardTitle>Editable Table</CardTitle>
                        <CustomTabs
                           TabContent1={<ReactEditableTableExample />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {ReactEditableTableSource}
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
                        <CardTitle>Fixed Header + Vertical Scroll Table</CardTitle>
                        <CustomTabs
                           TabContent1={<ReactFixedHeaderTableExample />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {ReactFixedHeaderTableSource}
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

export default reactTableRegular;
