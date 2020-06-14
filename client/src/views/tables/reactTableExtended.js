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
import ReactTreeTableExample from "./examples/reactTreeTable";
import ReactSelectTableExample from "./examples/reactSelectTable";
import ReactFoldableTableExample from "./examples/reactFoldableTable";


//Table exmple souece pages
import ReactTreeTableSource from "./example-source/reactTreeTable";
import ReactSelectTableSource from "./example-source/reactSelectTable";
import ReactFoldableTableSource from "./example-source/reactFoldableTable";

class reactTableExtended extends Component {
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
                        <CardTitle>React Tree Table! YES! Really! HOC</CardTitle>
                        <CustomTabs
                           TabContent1={<ReactTreeTableExample />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {ReactTreeTableSource}
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
                        <CardTitle>Select Table</CardTitle>
                        <CustomTabs
                           TabContent1={<ReactSelectTableExample />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {ReactSelectTableSource}
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
                        <CardTitle>Foldable Table</CardTitle>
                        <CustomTabs
                           TabContent1={<ReactFoldableTableExample />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {ReactFoldableTableSource}
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

export default reactTableExtended;
