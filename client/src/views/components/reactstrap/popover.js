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
import Popovers from "./examples/popovers";

// Import Example Source Code
import PopoversSource from "./exampleSource/popovers";

class PopoverExampleMulti extends React.Component {

   render() {
      return (
         <Fragment>
            <ContentHeader>Popovers</ContentHeader>
            <ContentSubHeader>Popovers React Component.</ContentSubHeader>
            <Row>
               <Col sm="12">
                  <Card>
                     <CardBody>
                        <CardTitle>Popovers</CardTitle>
                        <CustomTabs
                           TabContent1={<Popovers />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {PopoversSource}
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

export default PopoverExampleMulti;
