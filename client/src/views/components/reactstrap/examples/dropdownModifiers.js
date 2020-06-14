import React from "react";
import {
   Dropdown,
   DropdownToggle,
   DropdownMenu,
   DropdownItem
} from "reactstrap";

class DropdownModifiers extends React.Component {
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
            <DropdownToggle>Dropdown</DropdownToggle>
            <DropdownMenu
               modifiers={{
                  setMaxHeight: {
                     enabled: true,
                     order: 890,
                     fn: data => {
                        return {
                           ...data,
                           styles: {
                              ...data.styles,
                              overflow: "auto",
                              maxHeight: 100
                           }
                        };
                     }
                  }
               }}
            >
               <DropdownItem>Another Action</DropdownItem>
               <DropdownItem>Another Action</DropdownItem>
               <DropdownItem>Another Action</DropdownItem>
               <DropdownItem>Another Action</DropdownItem>
               <DropdownItem>Another Action</DropdownItem>
               <DropdownItem>Another Action</DropdownItem>
               <DropdownItem>Another Action</DropdownItem>
               <DropdownItem>Another Action</DropdownItem>
               <DropdownItem>Another Action</DropdownItem>
               <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
         </Dropdown>
      );
   }
}

export default DropdownModifiers;
