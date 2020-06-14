import React, { Fragment } from "react";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";

//Prism
// eslint-disable-next-line
import Prism from "prismjs";  //Include JS
import "prismjs/themes/prism-okaidia.css"; //Include CSS
import { PrismCode } from "react-prism"; //Prism Component

import CustomTabs from "../../../components/tabs/customTabs";
import ContentHeader from "../../../components/contentHead/contentHeader";
import ContentSubHeader from "../../../components/contentHead/contentSubHeader";

// Import examples
import MediaObject from "./examples/mediaObject";
import MediaObjectRound from "./examples/mediaObjectRound";
import MediaObjectBordered from "./examples/mediaObjectBordered";
import MediaObjectNesting from "./examples/mediaObjectNesting";
import MediaObjectAlignment from "./examples/mediaObjectAlignment";
import MediaObjectList from "./examples/mediaObjectList";

// Import Example Source Code
import MediaObjectSource from "./exampleSource/mediaObject";
import MediaObjectRoundSource from "./exampleSource/mediaObjectRound";
import MediaObjectBorderedSource from "./exampleSource/mediaObjectBordered";
import MediaObjectNestingSource from "./exampleSource/mediaObjectNesting";
import MediaObjectAlignmentSource from "./exampleSource/mediaObjectAlignment";
import MediaObjectListSource from "./exampleSource/mediaObjectList";

export default () => {
   return (
      <Fragment>
         <ContentHeader>Media Object</ContentHeader>
         <ContentSubHeader>Abstract object styles for building various types of components that feature a left- or right-aligned image alongside textual content.</ContentSubHeader>
         <Row className="row-eq-height">
            <Col sm="12" xl="6" >
               <Card>
                  <CardBody>
                     <CardTitle>Media Object</CardTitle>
                     <CustomTabs
                        TabContent1={<MediaObject />}
                        TabContent2={
                           <PrismCode
                              component="pre"
                              className="language-javascript"
                           >
                              {MediaObjectSource}
                           </PrismCode>
                        }
                     />
                  </CardBody>
               </Card>
            </Col>

            <Col sm="12" xl="6" >
               <Card>
                  <CardBody>
                     <CardTitle>Round Media Object</CardTitle>
                     <CustomTabs
                        TabContent1={<MediaObjectRound />}
                        TabContent2={
                           <PrismCode
                              component="pre"
                              className="language-javascript"
                           >
                              {MediaObjectRoundSource}
                           </PrismCode>
                        }
                     />
                  </CardBody>
               </Card>
            </Col>
         </Row>

         <Row className="row-eq-height">
            <Col sm="12" xl="6" >
               <Card>
                  <CardBody>
                     <CardTitle>Bordered Media Object</CardTitle>
                     <CustomTabs
                        TabContent1={<MediaObjectBordered />}
                        TabContent2={
                           <PrismCode
                              component="pre"
                              className="language-javascript"
                           >
                              {MediaObjectBorderedSource}
                           </PrismCode>
                        }
                     />
                  </CardBody>
               </Card>
            </Col>

            <Col sm="12" xl="6" >
               <Card>
                  <CardBody>
                     <CardTitle>Nesting</CardTitle>
                     <CustomTabs
                        TabContent1={<MediaObjectNesting />}
                        TabContent2={
                           <PrismCode
                              component="pre"
                              className="language-javascript"
                           >
                              {MediaObjectNestingSource}
                           </PrismCode>
                        }
                     />
                  </CardBody>
               </Card>
            </Col>
         </Row>

         <Row className="row-eq-height">
            <Col sm="12" xl="6" >
               <Card>
                  <CardBody>
                     <CardTitle>Alignment</CardTitle>
                     <CustomTabs
                        TabContent1={<MediaObjectAlignment />}
                        TabContent2={
                           <PrismCode
                              component="pre"
                              className="language-javascript"
                           >
                              {MediaObjectAlignmentSource}
                           </PrismCode>
                        }
                     />
                  </CardBody>
               </Card>
            </Col>

            <Col sm="12" xl="6" >
               <Card>
                  <CardBody>
                     <CardTitle>List</CardTitle>
                     <CustomTabs
                        TabContent1={<MediaObjectList />}
                        TabContent2={
                           <PrismCode
                              component="pre"
                              className="language-javascript"
                           >
                              {MediaObjectListSource}
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
