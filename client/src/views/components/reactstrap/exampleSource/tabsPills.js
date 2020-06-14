const TabsPillsSource = `import React, { Component } from "react";
import {
   TabContent,
   TabPane,
   Nav,
   NavItem,
   NavLink,
   Card,
   Button,
   CardTitle,
   CardText,
   Row,
   Col
} from "reactstrap";
import classnames from "classnames";

class TabsPills extends Component {
   state = {
      activeTab: "1"
   };

   toggle = tab => {
      if (this.state.activeTab !== tab) {
         this.setState({
            activeTab: tab
         });
      }
   };
   render() {
      return (
         <div>
            <Nav pills>
               <NavItem>
                  <NavLink
                     className={classnames({
                        active: this.state.activeTab === "1"
                     })}
                     onClick={() => {
                        this.toggle("1");
                     }}
                  >
                     Pill1
                  </NavLink>
               </NavItem>
               <NavItem>
                  <NavLink
                     className={classnames({
                        active: this.state.activeTab === "2"
                     })}
                     onClick={() => {
                        this.toggle("2");
                     }}
                  >
                     Pill2
                  </NavLink>
               </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
               <TabPane tabId="1">
                  <Row>
                     <Col sm="12">
                        <h4>Pill 1 Contents</h4>
                        <p>Lemon drops pastry chocolate. Jujubes sweet roll tootsie roll. Oat cake donut bonbon chocolate croissant candy candy brownie. Wafer jelly beans jelly ice cream caramels. Cookie bonbon lemon drops cheesecake brownie cake macaroon sweet. Toffee pie icing candy ice cream croissant caramels jelly. Muffin jelly gummies icing cheesecake chocolate cake. Sweet chupa chups croissant pudding sesame snaps soufflé. Marzipan cotton candy jujubes halvah cheesecake. Cupcake wafer gummies croissant candy brownie jelly. Sweet wafer chocolate halvah. Danish sweet roll cheesecake candy canes marzipan liquorice. Sugar plum halvah lemon drops donut sesame snaps lollipop oat cake. Cake dessert topping tiramisu jelly beans. Gummies oat cake sugar plum cookie carrot cake halvah powder sesame snaps. Bear claw gummi bears marzipan powder pudding lemon drops cotton candy sweet roll chupa chups. Marzipan tootsie roll tart lemon drops gummies. Cheesecake wafer carrot cake chocolate jelly beans candy liquorice fruitcake pastry. Gummi bears cheesecake macaroon jelly beans wafer cookie. Gingerbread chocolate bar icing. Candy canes donut icing macaroon cupcake. Ice cream ice cream cake pudding gummi bears.</p>
                     </Col>
                  </Row>
               </TabPane>
               <TabPane tabId="2">
                  <Row>
                     <Col sm="6">
                        <Card body>
                           <CardTitle>Special Title Treatment</CardTitle>
                           <CardText>
                              With supporting text below as a natural lead-in to
                              additional content.
                           </CardText>
                           <Button className="btn btn-success">Go somewhere</Button>
                        </Card>
                     </Col>
                     <Col sm="6">
                        <Card body>
                           <CardTitle>Special Title Treatment</CardTitle>
                           <CardText>
                              With supporting text below as a natural lead-in to
                              additional content.
                           </CardText>
                           <Button className="btn btn-danger">Go somewhere</Button>
                        </Card>
                     </Col>
                  </Row>
               </TabPane>
            </TabContent>
         </div>
      );
   }
}

export default TabsPills;`;

export default TabsPillsSource