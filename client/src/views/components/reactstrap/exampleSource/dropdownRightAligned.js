const DropdownRightAlignedSource = `import React from "react";
import {
   Dropdown,
   DropdownToggle,
   DropdownMenu,
   DropdownItem
} from "reactstrap";

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
            <DropdownToggle caret>
               This dropdown's menu is right-aligned
            </DropdownToggle>
            <DropdownMenu right>
               <DropdownItem header>Header</DropdownItem>
               <DropdownItem disabled>Action</DropdownItem>
               <DropdownItem>Another Action</DropdownItem>
               <DropdownItem divider />
               <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
         </Dropdown>
      );
   }
}

export default DropdownRightAligned;`;

export default DropdownRightAlignedSource;