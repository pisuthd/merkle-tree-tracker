import React, { Fragment } from "react";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";

//Prism
// eslint-disable-next-line
import Prism from "prismjs"; //Include JS
import "prismjs/themes/prism-okaidia.css"; //Include CSS
import { PrismCode } from "react-prism"; //Prism Component

// import classnames from "classnames";
import CustomTabs from "../../../components/tabs/customTabs";
import ContentHeader from "../../../components/contentHead/contentHeader";
import ContentSubHeader from "../../../components/contentHead/contentSubHeader";

// Import examples
import ProgressDefault from "./examples/progress";
import ProgressColors from "./examples/progressColors";
import ProgressLabels from "./examples/progressLabels";
import ProgressStriped from "./examples/progressStriped";
import ProgressAnimated from "./examples/progressAnimated";
import ProgressStacked from "./examples/progressStacked";
import ProgressMaxValue from "./examples/progressMaxValue";

// Import Example Source Code
import ProgressDefaultSource from "./exampleSource/progress";
import ProgressColorsSource from "./exampleSource/progressColors";
import ProgressLabelsSource from "./exampleSource/progressLabels";
import ProgressStripedSource from "./exampleSource/progressStriped";
import ProgressAnimatedSource from "./exampleSource/progressAnimated";
import ProgressStackedSource from "./exampleSource/progressStacked";
import ProgressMaxValueSource from "./exampleSource/progressMaxValue";

export default () => {
   return (
      <Fragment>
         <ContentHeader>Progress Bars</ContentHeader>
         <ContentSubHeader>Progress bar React Component.</ContentSubHeader>
         <Row>
            <Col sm="12">
               <Card>
                  <CardBody>
                     <CardTitle>Progress</CardTitle>
                     <CustomTabs
                        TabContent1={<ProgressDefault />}
                        TabContent2={
                           <PrismCode
                              component="pre"
                              className="language-javascript"
                           >
                              {ProgressDefaultSource}
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
                     <CardTitle>Color Variants</CardTitle>
                     <CustomTabs
                        TabContent1={<ProgressColors />}
                        TabContent2={
                           <PrismCode
                              component="pre"
                              className="language-javascript"
                           >
                              {ProgressColorsSource}
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
                     <CardTitle>Labels</CardTitle>
                     <CustomTabs
                        TabContent1={<ProgressLabels />}
                        TabContent2={
                           <PrismCode
                              component="pre"
                              className="language-javascript"
                           >
                              {ProgressLabelsSource}
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
                     <CardTitle>Striped</CardTitle>
                     <CustomTabs
                        TabContent1={<ProgressStriped />}
                        TabContent2={
                           <PrismCode
                              component="pre"
                              className="language-javascript"
                           >
                              {ProgressStripedSource}
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
                     <CardTitle>Animated</CardTitle>
                     <p>The <code>animated</code> prop also adds the <code>striped</code> prop; there is no need to pass both.</p>
                     <CustomTabs
                        TabContent1={<ProgressAnimated />}
                        TabContent2={
                           <PrismCode
                              component="pre"
                              className="language-javascript"
                           >
                              {ProgressAnimatedSource}
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
                     <CardTitle>Multiple bars / Stacked</CardTitle>
                     <CustomTabs
                        TabContent1={<ProgressStacked />}
                        TabContent2={
                           <PrismCode
                              component="pre"
                              className="language-javascript"
                           >
                              {ProgressStackedSource}
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
                     <CardTitle>Max value</CardTitle>
                     <CustomTabs
                        TabContent1={<ProgressMaxValue />}
                        TabContent2={
                           <PrismCode
                              component="pre"
                              className="language-javascript"
                           >
                              {ProgressMaxValueSource}
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
