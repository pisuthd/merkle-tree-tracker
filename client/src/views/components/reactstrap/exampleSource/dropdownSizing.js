const DropdownSizingSource = `import React from "react";
import {
   Dropdown,
   DropdownToggle,
   DropdownMenu,
   DropdownItem
} from "reactstrap";

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
            <div>
               <Dropdown
                  group
                  isOpen={this.state.lSizeDropdownOpen}
                  size="lg"
                  toggle={this.lSizeToggle}
               >
                  <DropdownToggle caret>Dropdown</DropdownToggle>
                  <DropdownMenu>
                     <DropdownItem header>Header</DropdownItem>
                     <DropdownItem disabled>Action</DropdownItem>
                     <DropdownItem>Another Action</DropdownItem>
                     <DropdownItem divider />
                     <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
               </Dropdown>
            </div>

            <div>
               <Dropdown
                  isOpen={this.state.mSizeDropdownOpen}
                  toggle={this.mSizeToggle}
               >
                  <DropdownToggle caret>Dropdown</DropdownToggle>
                  <DropdownMenu right>
                     <DropdownItem header>Header</DropdownItem>
                     <DropdownItem disabled>Action</DropdownItem>
                     <DropdownItem>Another Action</DropdownItem>
                     <DropdownItem divider />
                     <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
               </Dropdown>
            </div>

            <div>
               <Dropdown
                  group
                  isOpen={this.state.sSizeDropdownOpen}
                  size="sm"
                  toggle={this.sSizeToggle}
               >
                  <DropdownToggle caret>Dropdown</DropdownToggle>
                  <DropdownMenu right>
                     <DropdownItem header>Header</DropdownItem>
                     <DropdownItem disabled>Action</DropdownItem>
                     <DropdownItem>Another Action</DropdownItem>
                     <DropdownItem divider />
                     <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
               </Dropdown>
            </div>
         </div>
      );
   }
}

export default DropdownSizing;`;

export default DropdownSizingSource;
