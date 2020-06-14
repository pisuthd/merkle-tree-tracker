const DropdownDirectionSource = `import React from "react";
import {
   Dropdown,
   DropdownToggle,
   DropdownMenu,
   DropdownItem
} from "reactstrap";

class DropdownDirection extends React.Component {
   render() {
      return (
         <div className="d-flex justify-content-around">
            <div>
               <Dropdown direction="up" isOpen={this.state.btnDropUp} toggle={() => { this.setState({ btnDropUp: !this.state.btnDropUp }); }}>
                  <DropdownToggle caret>Dropup</DropdownToggle>
                  <DropdownMenu>
                     <DropdownItem>Another Action</DropdownItem>
                     <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
               </Dropdown>
            </div>

            <div>
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
            </div>

            <div>
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
            </div>
         </div>
      );
   }
}

export default DropdownDirection;`;

export default DropdownDirectionSource;