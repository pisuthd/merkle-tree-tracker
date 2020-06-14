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
            <SideMenu.MenuMultiItems
               name="Dashboard"
               Icon={<Home size={18} />}
               ArrowRight={<ChevronRight size={16} />}
               collapsedSidebar={this.props.collapsedSidebar}
            >
               <NavLink to="/" exact className="item" activeclassname="active">
                  <span className="menu-item-text">eCommerce</span>
               </NavLink>
               <NavLink to="/analytics-dashboard" exact className="item" activeclassname="active">
                  <span className="menu-item-text">Analytics</span>
               </NavLink>
               <NavLink to="/sales-dashboard" exact className="item" activeclassname="active">
                  <span className="menu-item-text">Sales</span>
               </NavLink>
            </SideMenu.MenuMultiItems>
            <SideMenu.MenuSingleItem badgeColor="danger" badgeText="6">
               <NavLink to="/email" activeclassname="active">
                  <i className="menu-icon">
                     <Mail size={18} />
                  </i>
                  <span className="menu-item-text">Email</span>
               </NavLink>
            </SideMenu.MenuSingleItem>
            <SideMenu.MenuSingleItem>
               <NavLink to="/chat" activeClassName="active">
                  <i className="menu-icon">
                     <MessageSquare size={18} />
                  </i>
                  <span className="menu-item-text">Chat</span>
               </NavLink>
            </SideMenu.MenuSingleItem>
            <SideMenu.MenuSingleItem>
               <NavLink to="/contacts" activeclassname="active">
                  <i className="menu-icon">
                     <Users size={18} />
                  </i>
                  <span className="menu-item-text">Contacts</span>
               </NavLink>
            </SideMenu.MenuSingleItem>
            <SideMenu.MenuSingleItem>
               <NavLink to="/todo" activeclassname="active">
                  <i className="menu-icon">
                     <CheckSquare size={18} />
                  </i>
                  <span className="menu-item-text">Todo</span>
               </NavLink>
            </SideMenu.MenuSingleItem>
            <SideMenu.MenuSingleItem>
               <NavLink to="/calendar" activeclassname="active">
                  <i className="menu-icon">
                     <Calendar size={18} />
                  </i>
                  <span className="menu-item-text">Calender</span>
               </NavLink>
            </SideMenu.MenuSingleItem>

            <SideMenu.MenuMultiItems
               name="Pages"
               Icon={<Copy size={18} />}
               ArrowRight={<ChevronRight size={16} />}
               collapsedSidebar={this.props.collapsedSidebar}
            >
               <NavLink to="/pages/user-profile" className="item" activeclassname="active">
                  <span className="menu-item-text">User Profile</span>
               </NavLink>
               <NavLink to="/pages/horizontal-timeline" className="item" activeclassname="active">
                  <span className="menu-item-text">Horizontal Timeline</span>
               </NavLink>
               <NavLink to="/pages/vertical-timeline" className="item" activeclassname="active">
                  <span className="menu-item-text">Vertical Timeline</span>
               </NavLink>
               <NavLink to="/pages/faq" className="item" activeclassname="active">
                  <span className="menu-item-text">FAQ</span>
               </NavLink>
               <NavLink to="/pages/knowledge-base" className="item" activeclassname="active">
                  <span className="menu-item-text">Knowledge Base</span>
               </NavLink>
               <NavLink to="/pages/gallery" className="item" activeclassname="active">
                  <span className="menu-item-text">Gallery</span>
               </NavLink>
               <NavLink to="/pages/search" className="item" activeclassname="active">
                  <span className="menu-item-text">Search</span>
               </NavLink>
               <NavLink to="/pages/invoice" className="item" activeclassname="active">
                  <span className="menu-item-text">Invoice</span>
               </NavLink>
               <NavLink to="/pages/blank-page" className="item" activeclassname="active">
                  <span className="menu-item-text">Blank Page</span>
               </NavLink>
               <NavLink to="/pages/login" className="item" activeclassname="active">
                  <span className="menu-item-text">Login</span>
               </NavLink>
               <NavLink to="/pages/register" className="item" activeclassname="active">
                  <span className="menu-item-text">Register</span>
               </NavLink>
               <NavLink to="/pages/forgot-password" className="item" activeclassname="active">
                  <span className="menu-item-text">Forgot Password</span>
               </NavLink>
               <NavLink to="/pages/lockscreen" className="item" activeclassname="active">
                  <span className="menu-item-text">Lock Screen</span>
               </NavLink>
               <NavLink to="/pages/error" className="item" activeclassname="active">
                  <span className="menu-item-text">Error</span>
               </NavLink>
               <NavLink to="/pages/maintenance" className="item" activeclassname="active">
                  <span className="menu-item-text">Maintenance</span>
               </NavLink>
            </SideMenu.MenuMultiItems>
            <SideMenu.MenuMultiItems
               name="Cards"
               badgeColor="success"
               badgeText="New"
               Icon={<Layers size={18} />}
               ArrowRight={<ChevronRight size={16} />}
               collapsedSidebar={this.props.collapsedSidebar}
            >
               <NavLink to="/cards/basic-card" className="item" activeclassname="active">
                  <span className="menu-item-text">Basic Cards</span>
               </NavLink>
               <NavLink to="/cards/extended-card" className="item" activeclassname="active">
                  <span className="menu-item-text">Extended Cards</span>
               </NavLink>
               <NavLink to="/cards/statistic-card" className="item" activeclassname="active">
                  <span className="menu-item-text">Statistic Cards</span>
               </NavLink>
               <NavLink to="/cards/advanced-card" className="item" activeclassname="active">
                  <span className="menu-item-text">Advanced Cards</span>
               </NavLink>
            </SideMenu.MenuMultiItems>
            <SideMenu.MenuMultiItems
               name="UI Kit"
               Icon={<Aperture size={18} />}
               ArrowRight={<ChevronRight size={16} />}
               collapsedSidebar={this.props.collapsedSidebar}
            >
               <NavLink to="/uikit/grids" className="item" activeclassname="active">
                  <span className="menu-item-text">Grid</span>
               </NavLink>
               <NavLink to="/uikit/typography" className="item" activeclassname="active">
                  <span className="menu-item-text">Typography</span>
               </NavLink>
               <NavLink to="/uikit/syntaxhighlighter" className="item" activeclassname="active">
                  <span className="menu-item-text">Syntax HighLighter</span>
               </NavLink>
               <NavLink to="/uikit/textutilities" className="item" activeclassname="active">
                  <span className="menu-item-text">Text Utility</span>
               </NavLink>
               <NavLink to="/colorpalettes" className="item" activeclassname="active">
                  <span className="menu-item-text">Color Pallete</span>
               </NavLink>
               <NavLink to="/uikit/feather" className="item" activeclassname="active">
                  <span className="menu-item-text">Icons</span>
               </NavLink>
            </SideMenu.MenuMultiItems>

            <SideMenu.MenuMultiItems
               name="Components"
               badgeColor="warning"
               badgeText="22"
               Icon={<Box size={18} />}
               ArrowRight={<ChevronRight size={16} />}
               collapsedSidebar={this.props.collapsedSidebar}
            >
               <SideMenu toggleSidebarMenu={this.props.toggleSidebarMenu}>
                  <SideMenu.MenuMultiItems
                     name="Bootstrap"
                     ArrowRight={<ChevronRight size={16} />}
                     collapsedSidebar={this.props.collapsedSidebar}
                  >
                     <NavLink to="/components/bootstrap/lists" className="item" activeclassname="active">
                        <span className="menu-item-text">Lists</span>
                     </NavLink>
                     <NavLink to="/components/bootstrap/buttons" className="item" activeclassname="active">
                        <span className="menu-item-text">Buttons</span>
                     </NavLink>
                     <NavLink to="/components/bootstrap/breadcrumbs" className="item" activeclassname="active">
                        <span className="menu-item-text">Breadcrumbs</span>
                     </NavLink>
                     <NavLink to="/components/bootstrap/alerts" className="item" activeclassname="active">
                        <span className="menu-item-text">Alerts</span>
                     </NavLink>
                     <NavLink to="/components/bootstrap/badges" className="item" activeclassname="active">
                        <span className="menu-item-text">Badges</span>
                     </NavLink>
                     <NavLink to="/components/bootstrap/dropdowns" className="item" activeclassname="active">
                        <span className="menu-item-text">Dropdowns</span>
                     </NavLink>
                     <NavLink to="/components/bootstrap/input-groups" className="item" activeclassname="active">
                        <span className="menu-item-text">Input Groups</span>
                     </NavLink>
                     <NavLink to="/components/bootstrap/tabs" className="item" activeclassname="active">
                        <span className="menu-item-text">Tabs</span>
                     </NavLink>
                     <NavLink to="/components/bootstrap/media-objects" className="item" activeclassname="active">
                        <span className="menu-item-text">Media Objects</span>
                     </NavLink>
                     <NavLink to="/components/bootstrap/pagination" className="item" activeclassname="active">
                        <span className="menu-item-text">Pagination</span>
                     </NavLink>
                     <NavLink to="/components/bootstrap/progress-bars" className="item" activeclassname="active">
                        <span className="menu-item-text">Progress Bars</span>
                     </NavLink>
                     <NavLink to="/components/bootstrap/modals" className="item" activeclassname="active">
                        <span className="menu-item-text">Modals</span>
                     </NavLink>
                     <NavLink to="/components/bootstrap/collapse" className="item" activeclassname="active">
                        <span className="menu-item-text">Collapse</span>
                     </NavLink>
                     <NavLink to="/components/bootstrap/tooltips" className="item" activeclassname="active">
                        <span className="menu-item-text">Tooltips</span>
                     </NavLink>
                     <NavLink to="/components/bootstrap/popover" className="item" activeclassname="active">
                        <span className="menu-item-text">Popover</span>
                     </NavLink>
                  </SideMenu.MenuMultiItems>
                  <SideMenu.MenuMultiItems
                     name="Extra"
                     ArrowRight={<ChevronRight size={16} />}
                     collapsedSidebar={this.props.collapsedSidebar}
                  >
                     <NavLink to="/components/extra/select" className="item" activeclassname="active">
                        <span className="menu-item-text">Select</span>
                     </NavLink>
                     <NavLink to="/components/extra/slider" className="item" activeclassname="active">
                        <span className="menu-item-text">Range Slider</span>
                     </NavLink>
                     <NavLink to="/components/extra/upload" className="item" activeclassname="active">
                        <span className="menu-item-text">Upload</span>
                     </NavLink>
                     <NavLink to="/components/extra/editor" className="item" activeclassname="active">
                        <span className="menu-item-text">Editor</span>
                     </NavLink>
                     <NavLink to="/components/extra/drag-and-drop" className="item" activeclassname="active">
                        <span className="menu-item-text">Drag and Drop</span>
                     </NavLink>
                     <NavLink to="/components/extra/input-tags" className="item" activeclassname="active">
                        <span className="menu-item-text">Input Tags</span>
                     </NavLink>
                     <NavLink to="/components/extra/switches" className="item" activeclassname="active">
                        <span className="menu-item-text">Switches</span>
                     </NavLink>
                     <NavLink to="/components/extra/toastr" className="item" activeclassname="active">
                        <span className="menu-item-text">Toastr</span>
                     </NavLink>
                  </SideMenu.MenuMultiItems>
               </SideMenu>
            </SideMenu.MenuMultiItems>

            <SideMenu.MenuMultiItems
               name="Forms"
               Icon={<Edit size={18} />}
               ArrowRight={<ChevronRight size={16} />}
               collapsedSidebar={this.props.collapsedSidebar}
            >
               <SideMenu toggleSidebarMenu={this.props.toggleSidebarMenu}>
                  <SideMenu.MenuMultiItems
                     name="Elements"
                     ArrowRight={<ChevronRight size={16} />}
                     collapsedSidebar={this.props.collapsedSidebar}
                  >
                     <NavLink to="/forms/elements/inputs" className="item" activeclassname="active">
                        <span className="menu-item-text">Inputs</span>
                     </NavLink>
                     <NavLink to="/forms/elements/input-grids" className="item" activeclassname="active">
                        <span className="menu-item-text">Input Grids</span>
                     </NavLink>
                  </SideMenu.MenuMultiItems>
                  <SideMenu.MenuMultiItems
                     name="Layouts"
                     ArrowRight={<ChevronRight size={16} />}
                     collapsedSidebar={this.props.collapsedSidebar}
                  >
                     <NavLink to="/forms/layouts/basic-forms" className="item" activeclassname="active">
                        <span className="menu-item-text">Basic Form</span>
                     </NavLink>
                     <NavLink to="/forms/layouts/horizontal-forms" className="item" activeclassname="active">
                        <span className="menu-item-text">Horizontal Forms</span>
                     </NavLink>
                     <NavLink to="/forms/layouts/hidden-labels" className="item" activeclassname="active">
                        <span className="menu-item-text">Hidden Labels</span>
                     </NavLink>
                     <NavLink to="/forms/layouts/form-actions" className="item" activeclassname="active">
                        <span className="menu-item-text">Form Actions</span>
                     </NavLink>
                     <NavLink to="/forms/layouts/bordered-forms" className="item" activeclassname="active">
                        <span className="menu-item-text">Borderd Form</span>
                     </NavLink>
                     <NavLink to="/forms/layouts/striped-rows" className="item" activeclassname="active">
                        <span className="menu-item-text">Striped Rows</span>
                     </NavLink>
                  </SideMenu.MenuMultiItems>
               </SideMenu>
               <NavLink to="/forms/validation" className="item" activeclassname="active">
                  <span className="menu-item-text">Validation</span>
               </NavLink>
               <NavLink to="/forms/wizard" className="item" activeclassname="active">
                  <span className="menu-item-text">Wizard</span>
               </NavLink>
            </SideMenu.MenuMultiItems>

            <SideMenu.MenuMultiItems
               name="Tables"
               Icon={<Grid size={18} />}
               ArrowRight={<ChevronRight size={16} />}
               collapsedSidebar={this.props.collapsedSidebar}
            >
               <NavLink to="/tables/regular" className="item" activeclassname="active">
                  <span className="menu-item-text">Regular</span>
               </NavLink>
               <NavLink to="/tables/extended" className="item" activeclassname="active">
                  <span className="menu-item-text">Extended</span>
               </NavLink>
            </SideMenu.MenuMultiItems>

            <SideMenu.MenuMultiItems
               name="React Tables"
               Icon={<Grid size={18} />}
               ArrowRight={<ChevronRight size={16} />}
               collapsedSidebar={this.props.collapsedSidebar}
            >
               <NavLink to="/react-tables/regular" className="item" activeclassname="active">
                  <span className="menu-item-text">Regular</span>
               </NavLink>
               <NavLink to="/react-tables/extended" className="item" activeclassname="active">
                  <span className="menu-item-text">Extended</span>
               </NavLink>
            </SideMenu.MenuMultiItems>
            <SideMenu.MenuMultiItems
               name="Charts"
               Icon={<BarChart2 size={18} />}
               ArrowRight={<ChevronRight size={16} />}
               collapsedSidebar={this.props.collapsedSidebar}
            >
               <NavLink to="/charts/chartjs" className="item" activeclassname="active">
                  <span className="menu-item-text">ChartJS</span>
               </NavLink>
               <NavLink to="/charts/chartist" className="item" activeclassname="active">
                  <span className="menu-item-text">ChartistJS</span>
               </NavLink>
            </SideMenu.MenuMultiItems>
            <SideMenu.MenuSingleItem>
               <NavLink to="/google-maps" activeclassname="active">
                  <i className="menu-icon">
                     <Map size={18} />
                  </i>
                  <span className="menu-item-text">Google Map</span>
               </NavLink>
            </SideMenu.MenuSingleItem>
            <SideMenu.MenuMultiItems
               name="Menu Levels 1"
               Icon={<Sliders size={18} />}
               ArrowRight={<ChevronRight size={16} />}
               collapsedSidebar={this.props.collapsedSidebar}
            >
               <SideMenu toggleSidebarMenu={this.props.toggleSidebarMenu}>
                  <SideMenu.MenuMultiItems
                     name="Menu Levels 2"
                     ArrowRight={<ChevronRight size={16} />}
                     collapsedSidebar={this.props.collapsedSidebar}
                  >
                     <NavLink to="/components/bootstrap/lists" className="item" activeclassname="active">
                        <span className="menu-item-text">Menu Levels 3.1</span>
                     </NavLink>
                     <NavLink to="/components/bootstrap/lists" className="item" activeclassname="active">
                        <span className="menu-item-text">Menu Levels 3.2</span>
                     </NavLink>
                  </SideMenu.MenuMultiItems>
               </SideMenu>
            </SideMenu.MenuMultiItems>
            
            <SideMenu.MenuSingleItem>
               <NavLink to="/pages/change-log" activeclassname="active">
                  <i className="menu-icon">
                     <Map size={18} />
                  </i>
                  <span className="menu-item-text">Change Log</span>
               </NavLink>
            </SideMenu.MenuSingleItem>
            <SideMenu.MenuSingleItem>
               <a
                  href="https://docs.apex-react.pixinvent.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  activeclassname="active"
               >
                  <i className="menu-icon">
                     <Book size={18} />
                  </i>
                  <span className="menu-item-text">Documentaion</span>
               </a>
            </SideMenu.MenuSingleItem>
            <SideMenu.MenuSingleItem>
               <a href="https://pixinvent.ticksy.com" target="_blank" rel="noopener noreferrer" activeclassname="active">
                  <i className="menu-icon">
                     <LifeBuoy size={18} />
                  </i>
                  <span className="menu-item-text">Support</span>
               </a>
            </SideMenu.MenuSingleItem>
         </SideMenu>
      );
   }
}

export default SideMenuContent;
