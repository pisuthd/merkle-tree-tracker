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
import BadgesScaleToParent from "./examples/badgesScaleToParent";
import BadgesWithComponents from "./examples/badgesWithComponents";
import BadgesContextVariation from "./examples/badgesContextVariation";
import BadgesPills from "./examples/badgesPills";
import BadgesLinks from "./examples/badgesLinks";

// Import Example Source Code
import BadgesScaleToParentSource from "./exampleSource/badgesScaleToParent";
import BadgesWithComponentsSource from "./exampleSource/badgesWithComponents";
import BadgesContextVariationSource from "./exampleSource/badgesContextVariation";
import BadgesPillsSource from "./exampleSource/badgesPills";
import BadgesLinksSource from "./exampleSource/badgesLinks";


const Badges = props => {
   return (
      <Fragment>
         <ContentHeader>Badges</ContentHeader>
         <ContentSubHeader>Badges React Component.</ContentSubHeader>
         <Row className="row-eq-height">
            <Col sm="12" md="6">
               <Card>
                  <CardBody>
                     <CardTitle>Badges Scale to Parent</CardTitle>
                     <CustomTabs
                        TabContent1={<BadgesScaleToParent />}
                        TabContent2={
                           <PrismCode
                              component="pre"
                              className="language-javascript"
                           >
                              {BadgesScaleToParentSource}
                           </PrismCode>
                        }
                     />
                  </CardBody>
               </Card>
            </Col>

            <Col sm="12" md="6">
               <Card>
                  <CardBody>
                     <CardTitle>Badge With Components</CardTitle>
                     <CustomTabs
                        TabContent1={<BadgesWithComponents />}
                        TabContent2={
                           <PrismCode
                              component="pre"
                              className="language-javascript"
                           >
                              {BadgesWithComponentsSource}
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
                     <CardTitle>Contextual variations</CardTitle>
                     <CustomTabs
                        TabContent1={<BadgesContextVariation />}
                        TabContent2={
                           <PrismCode
                              component="pre"
                              className="language-javascript"
                           >
                              {BadgesContextVariationSource}
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
                        TabContent1={<BadgesPills />}
                        TabContent2={
                           <PrismCode
                              component="pre"
                              className="language-javascript"
                           >
                              {BadgesPillsSource}
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
                     <CardTitle>Links</CardTitle>
                     <CustomTabs
                        TabContent1={<BadgesLinks />}
                        TabContent2={
                           <PrismCode
                              component="pre"
                              className="language-javascript"
                           >
                              {BadgesLinksSource}
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

export default Badges;
