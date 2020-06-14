import React from "react";
import { Eye, Code } from 'react-feather';
import {
   TabContent,
   TabPane,
   Nav,
   NavItem,
   NavLink,   
   Row,
   Col
} from "reactstrap";
import classnames from "classnames";

export default class Example extends React.Component {
   constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
         activeTab: "1"
      };
   }

   toggle(tab) {
      if (this.state.activeTab !== tab) {
         this.setState({
            activeTab: tab
         });
      }
   }

   render() {
      return (
         <div className="nav-tabs-vc">
            <Nav tabs>
               <NavItem>
                  <NavLink
                     className={classnames({
                        active: this.state.activeTab === "1"
                     })}
                     onClick={() => {
                        this.toggle("1");
                     }}
                  >
                     <Eye size={18} />
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
                     <Code size={18} />
                  </NavLink>
               </NavItem>
            </Nav>
            
            <TabContent activeTab={this.state.activeTab} className="px-0">
               <TabPane tabId="1">
                  <Row>
                     <Col sm="12">
                        {this.props.TabContent1}
                     </Col>
                  </Row>
               </TabPane>
               <TabPane tabId="2">
                  <Row>
                     <Col sm="12">
                        {this.props.TabContent2}
                     </Col>
                  </Row>
               </TabPane>
            </TabContent>
         </div>
      );
   }
}
