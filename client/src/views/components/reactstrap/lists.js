// import external modules
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
import ListGroup from "./examples/listGroup";
import ListGroupTags from "./examples/listGroupTags";
import ListGroupDisabled from "./examples/listGroupDisabled";
import ListGroupAnchor from "./examples/listGroupAnchor";
import ListGroupButtons from "./examples/listGroupButtons";
import ListGorupContextualClass from "./examples/listGroupContextualClass";
import ListGroupCustomContent from "./examples/listGroupCustomContent";
import ListGroupFlush from "./examples/listGroupFlush";

// Import Example Source Code
import ListGroupSource from "./exampleSource/listGroup";
import ListGroupTagsSource from "./exampleSource/listGroupTags";
import ListGroupDisabledSource from "./exampleSource/listGroupDisabled";
import ListGroupAnchorSource from "./exampleSource/listGroupAnchor";
import ListGroupButtonsSource from "./exampleSource/listGroupButtons";
import ListGorupContextualClassSource from "./exampleSource/listGroupContextualClass";
import ListGroupCustomContentSource from "./exampleSource/listGroupCustomContent";
import ListGroupFlushSource from "./exampleSource/listGroupFlush";

const List = props => {
   return (
      <Fragment>
         <ContentHeader>ListGroup</ContentHeader>
         <ContentSubHeader>ListGroup React Component.</ContentSubHeader>
         <Row className="row-eq-height">
            <Col sm="12" md="6">
               <Card>
                  <CardBody>
                     <CardTitle>ListGroup</CardTitle>
                     <CustomTabs
                        TabContent1={<ListGroup />}
                        TabContent2={
                           <PrismCode
                              component="pre"
                              className="language-javascript"
                           >
                              {ListGroupSource}
                           </PrismCode>
                        }
                     />
                  </CardBody>
               </Card>
            </Col>

            <Col sm="12" md="6">
               <Card>
                  <CardBody>
                     <CardTitle>Tags</CardTitle>
                     <CustomTabs
                        TabContent1={<ListGroupTags />}
                        TabContent2={
                           <PrismCode
                              component="pre"
                              className="language-javascript"
                           >
                              {ListGroupTagsSource}
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
                     <CardTitle>Disabled items</CardTitle>
                     <CustomTabs
                        TabContent1={<ListGroupDisabled />}
                        TabContent2={
                           <PrismCode
                              component="pre"
                              className="language-javascript"
                           >
                              {ListGroupDisabledSource}
                           </PrismCode>
                        }
                     />
                  </CardBody>
               </Card>
            </Col>
            <Col sm="12" md="6">
               <Card>
                  <CardBody>
                     <CardTitle>Anchors</CardTitle>
                     <p>
                        Be sure to{" "}
                        <strong>
                           not use the standard <code>.btn</code> classes here
                        </strong>
                        .
                     </p>
                     <CustomTabs
                        TabContent1={<ListGroupAnchor />}
                        TabContent2={
                           <PrismCode
                              component="pre"
                              className="language-javascript"
                           >
                              {ListGroupAnchorSource}
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
                     <CardTitle>Buttons</CardTitle>
                     <CustomTabs
                        TabContent1={<ListGroupButtons />}
                        TabContent2={
                           <PrismCode
                              component="pre"
                              className="language-javascript"
                           >
                              {ListGroupButtonsSource}
                           </PrismCode>
                        }
                     />
                  </CardBody>
               </Card>
            </Col>

            <Col sm="12" md="6">
               <Card>
                  <CardBody>
                     <CardTitle>Contextual classes</CardTitle>
                     <CustomTabs
                        TabContent1={<ListGorupContextualClass />}
                        TabContent2={
                           <PrismCode
                              component="pre"
                              className="language-javascript"
                           >
                              {ListGorupContextualClassSource}
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
                     <CardTitle>Custom content</CardTitle>
                     <CustomTabs
                        TabContent1={<ListGroupCustomContent />}
                        TabContent2={
                           <PrismCode
                              component="pre"
                              className="language-javascript"
                           >
                              {ListGroupCustomContentSource}
                           </PrismCode>
                        }
                     />
                  </CardBody>
               </Card>
            </Col>

            <Col sm="12" md="6">
               <Card>
                  <CardBody>
                     <CardTitle>Flush</CardTitle>
                     <CustomTabs
                        TabContent1={<ListGroupFlush />}
                        TabContent2={
                           <PrismCode
                              component="pre"
                              className="language-javascript"
                           >
                              {ListGroupFlushSource}
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

export default List;
