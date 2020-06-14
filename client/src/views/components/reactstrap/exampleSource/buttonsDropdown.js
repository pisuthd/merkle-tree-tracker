const ButtonsDropdownSource = `import React from "react";
import {
   ButtonDropdown,
   DropdownToggle,
   DropdownMenu,
   DropdownItem
} from "reactstrap";

class ButtonsDropdown extends React.Component {
   state = {
      dropdownOpen: false
   };

   toggle = () => {
      this.setState({
         dropdownOpen: !this.state.dropdownOpen
      });
   };

   render() {
      return (
         <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret className="btn-danger">Button Dropdown</DropdownToggle>
            <DropdownMenu>
               <DropdownItem header>Header</DropdownItem>
               <DropdownItem disabled>Action</DropdownItem>
               <DropdownItem>Another Action</DropdownItem>
               <DropdownItem divider />
               <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
         </ButtonDropdown>
      );
   }
}

export default ButtonsDropdown`;

export default ButtonsDropdownSource;