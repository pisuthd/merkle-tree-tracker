import React from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

class DropdownRightAligned extends React.Component {
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
         <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>Right-aligned dropdown's</DropdownToggle>
            <DropdownMenu right>
               <DropdownItem header>Header</DropdownItem>
               <DropdownItem disabled>Action</DropdownItem>
               <DropdownItem>Another Action</DropdownItem>
               <DropdownItem divider />
               <DropdownItem>Another Really Really Long Action (Really!)</DropdownItem>
            </DropdownMenu>
         </Dropdown>
      );
   }
}

export default DropdownRightAligned;
