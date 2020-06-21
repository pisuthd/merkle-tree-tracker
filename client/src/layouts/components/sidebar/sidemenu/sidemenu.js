// import external modules
import React, { Component } from "react";

import {
   Home,
   Mail,
   MessageSquare,
   ChevronRight,
   Aperture,
   Box,
   Edit,
   Grid,
   Layers,
   Sliders,
   Map,
   Settings,
   BarChart2,
   Calendar,
   Copy,
   Book,
   CheckSquare,
   LifeBuoy,
   Users
} from "react-feather";
import { NavLink } from "react-router-dom";

// Styling
import "../../../../assets/scss/components/sidebar/sidemenu/sidemenu.scss";
// import internal(own) modules
import SideMenu from "../sidemenuHelper";

class SideMenuContent extends Component {
   render() {
      return (
         <SideMenu className="sidebar-content" toggleSidebarMenu={this.props.toggleSidebarMenu}>
            <SideMenu.MenuSingleItem>
               <NavLink to="/home" activeclassname="active">
                  <i className="menu-icon">
                     <Home size={18} />
                  </i>
                  <span className="menu-item-text">Dashboard</span>
               </NavLink>
            </SideMenu.MenuSingleItem>
            <SideMenu.MenuSingleItem>
               <NavLink to="/inputs" activeclassname="active">
                  <i className="menu-icon">
                     <Map size={18} />
                  </i>
                  <span className="menu-item-text">Generate Proof</span>
               </NavLink>
            </SideMenu.MenuSingleItem>
            
            <SideMenu.MenuSingleItem>
               <NavLink to="/settings" activeclassname="active">
                  <i className="menu-icon">
                     <Settings size={18} />
                  </i>
                  <span className="menu-item-text">Settings</span>
               </NavLink>
            </SideMenu.MenuSingleItem>
         
         </SideMenu>
      );
   }
}

export default SideMenuContent;
