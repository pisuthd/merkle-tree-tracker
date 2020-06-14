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
import Pagination from "./examples/pagination";
import PaginationDisabledActive from "./examples/paginationDisabledActive";
import PaginationLargeSize from "./examples/paginationLargeSize";
import PaginationSmallSize from "./examples/paginationSmallSize";

// Import Example Source Code
import PaginationSource from "./exampleSource/pagination";
import PaginationDisabledActiveSource from "./exampleSource/paginationDisabledActive";
import PaginationLargeSizeSource from "./exampleSource/paginationLargeSize";
import PaginationSmallSizeSource from "./exampleSource/paginationSmallSize";

export default () => {
   return (
      <Fragment>
         <ContentHeader>Pagination</ContentHeader>
         <ContentSubHeader>Pagination React Component.</ContentSubHeader>
         <Row className="row-eq-height">
            <Col sm="12" md="6">
               <Card>
                  <CardBody>
                     <CardTitle>Pagination</CardTitle>
                     <CustomTabs
                        TabContent1={<Pagination />}
                        TabContent2={
                           <PrismCode
                              component="pre"
                              className="language-javascript"
                           >
                              {PaginationSource}
                           </PrismCode>
                        }
                     />
                  </CardBody>
               </Card>
            </Col>

            <Col sm="12" md="6">
               <Card>
                  <CardBody>
                     <CardTitle>Disabled and active states</CardTitle>
                     <CustomTabs
                        TabContent1={<PaginationDisabledActive />}
                        TabContent2={
                           <PrismCode
                              component="pre"
                              className="language-javascript"
                           >
                              {PaginationDisabledActiveSource}
                           </PrismCode>
                        }
                     />
                  </CardBody>
               </Card>
            </Col>
         </Row>

         <Row className="row-eq-height">
            <Col sm="12" md="6">
               <Card>
                  <CardBody>
                     <CardTitle>Large Size</CardTitle>
                     <CustomTabs
                        TabContent1={<PaginationLargeSize />}
                        TabContent2={
                           <PrismCode
                              component="pre"
                              className="language-javascript"
                           >
                              {PaginationLargeSizeSource}
                           </PrismCode>
                        }
                     />
                  </CardBody>
               </Card>
            </Col>

            <Col sm="12" md="6">
               <Card>
                  <CardBody>
                     <CardTitle>Small Size</CardTitle>
                     <CustomTabs
                        TabContent1={<PaginationSmallSize />}
                        TabContent2={
                           <PrismCode
                              component="pre"
                              className="language-javascript"
                           >
                              {PaginationSmallSizeSource}
                           </PrismCode>
                        }
                     />
                  </CardBody>
               </Card>
            </Col>
         </Row>
      </Fragment>
   );
};
