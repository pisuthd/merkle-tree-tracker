import React from "react";
import { Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

class DropdownSizing extends React.Component {
   state = {
      lSizeDropdownOpen: false,
      mSizeDropdownOpen: false,
      sSizeDropdownOpen: false
   };

   lSizeToggle = () => {
      this.setState(prevState => ({
         lSizeDropdownOpen: !prevState.lSizeDropdownOpen
      }));
   };
   mSizeToggle = () => {
      this.setState(prevState => ({
         mSizeDropdownOpen: !prevState.mSizeDropdownOpen
      }));
   };
   sSizeToggle = () => {
      this.setState(prevState => ({
         sSizeDropdownOpen: !prevState.sSizeDropdownOpen
      }));
   };

   render() {
      return (
         <div className="d-flex justify-content-around">
            <Row>
               <Col sm="12" md="4">
                  <Dropdown group isOpen={this.state.lSizeDropdownOpen} size="lg" toggle={this.lSizeToggle}>
                     <DropdownToggle caret>Large Size</DropdownToggle>
                     <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                     </DropdownMenu>
                  </Dropdown>
               </Col>

               <Col sm="12" md="4">
                  <Dropdown isOpen={this.state.mSizeDropdownOpen} toggle={this.mSizeToggle}>
                     <DropdownToggle caret>Normal Size</DropdownToggle>
                     <DropdownMenu right>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                     </DropdownMenu>
                  </Dropdown>
               </Col>

               <Col sm="12" md="4">
                  <Dropdown group isOpen={this.state.sSizeDropdownOpen} size="sm" toggle={this.sSizeToggle}>
                     <DropdownToggle caret>Small Size</DropdownToggle>
                     <DropdownMenu right>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                     </DropdownMenu>
                  </Dropdown>
               </Col>
            </Row>
         </div>
      );
   }
}

export default DropdownSizing;
