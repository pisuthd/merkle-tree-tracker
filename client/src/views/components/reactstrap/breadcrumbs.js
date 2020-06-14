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
import BreadcrumbsDefault from "./examples/breadcrumbs";
import BreadcrumbsNoList from "./examples/breadcrumbsNoList";

// Import Example Source Code
import BreadcrumbsSource from "./exampleSource/breadcrumbs";
import BreadcrumbsNoListSource from "./exampleSource/breadcrumbsNoList";

const Breadcrumbs = props => {
   return (
      <Fragment>
         <ContentHeader>Breadcrumbs</ContentHeader>
         <ContentSubHeader>Breadcrumbs React Component.</ContentSubHeader>
         <Row>
            <Col sm="12">
               <Card>
                  <CardBody>
                     <CardTitle>Breadcrumbs</CardTitle>
                     <CustomTabs
                        TabContent1={<BreadcrumbsDefault />}
                        TabContent2={
                           <PrismCode
                              component="pre"
                              className="language-javascript"
                           >
                              {BreadcrumbsSource}
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
                     <CardTitle>No list</CardTitle>
                     <CustomTabs
                        TabContent1={<BreadcrumbsNoList />}
                        TabContent2={
                           <PrismCode
                              component="pre"
                              className="language-javascript"
                           >
                              {BreadcrumbsNoListSource}
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

export default Breadcrumbs;
