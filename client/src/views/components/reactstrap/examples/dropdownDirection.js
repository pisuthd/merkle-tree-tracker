import React from "react";
import { Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

class DropdownDirection extends React.Component {
   state = {
      dropdownOpen: false
   };

   toggle = () => {
      this.setState(prevState => ({
         dropdownOpen: !prevState.dropdownOpen
      }));
   };
   render() {
      return (
         <div className="d-flex justify-content-around">
            <Row>
               <Col sm="12" md="4">
                  <Dropdown direction="up" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                     <DropdownToggle caret>Dropup</DropdownToggle>
                     <DropdownMenu>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                     </DropdownMenu>
                  </Dropdown>
               </Col>

               <Col sm="12" md="4">
                  <Dropdown
                     direction="left"
                     isOpen={this.state.btnDropleft}
                     toggle={() => {
                        this.setState({ btnDropleft: !this.state.btnDropleft });
                     }}
                  >
                     <DropdownToggle caret>Dropleft</DropdownToggle>
                     <DropdownMenu>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                     </DropdownMenu>
                  </Dropdown>
               </Col>

               <Col sm="12" md="4">
                  <Dropdown
                     direction="right"
                     isOpen={this.state.btnDropright}
                     toggle={() => {
                        this.setState({ btnDropright: !this.state.btnDropright });
                     }}
                  >
                     <DropdownToggle caret>Dropright</DropdownToggle>
                     <DropdownMenu>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                     </DropdownMenu>
                  </Dropdown>
               </Col>
            </Row>
         </div>
      );
   }
}

export default DropdownDirection;
