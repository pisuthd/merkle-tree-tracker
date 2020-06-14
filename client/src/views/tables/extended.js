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
import TableActionButtonsExample from "./examples/tableActionButtons";
import TableShoppingCartExample from "./examples/tableShoppingCart";

//Table exmple souece pages
import TableActionButtonSource from "./example-source/tableActionButtons";
import TableShoppingSource from "./example-source/tableShoppingCart";

class extended extends Component {
   render() {
      return (
         <Fragment>
            <ContentHeader>Extended Tables </ContentHeader>
            <ContentSubHeader>Tables with some extra elements and feathers.</ContentSubHeader>
            <Row>
               <Col sm="12">
                  <Card>
                     <CardBody>
                        <CardTitle>Actions Buttons</CardTitle>
                        <p>Simple table with check boxes and action buttons.</p>
                        <CustomTabs
                           TabContent1={<TableActionButtonsExample />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {TableActionButtonSource}
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
                        <CardTitle>Shoping Cart</CardTitle>
                        <p>Table with shopping cart elements.</p>
                        <CustomTabs
                           TabContent1={<TableShoppingCartExample />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {TableShoppingSource}
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

export default extended;
