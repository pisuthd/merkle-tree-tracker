import React from "react";
import { Modal, ModalHeader } from "reactstrap";
import FilterLink from "../../containers/contacts/contactsFilterLink";
import { contactVisiblityFilter } from "../../redux/actions/contacts";
import AddContact from "../../containers/contacts/addContact";
import PerfectScrollbar from "react-perfect-scrollbar";
import * as Icon from "react-feather";

class ContactsFilter extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         modal: false
      };

      this.toggle = this.toggle.bind(this);
   }

   toggle() {
      this.setState({
         modal: !this.state.modal
      });
   }
   render() {
      return (
         <div className="contact-app-sidebar float-left d-none d-xl-block">
            <PerfectScrollbar>
               <div className="contact-app-sidebar-content">
                  <div className="contact-app-menu">
                     <div className="form-group form-group-compose text-center">
                        <button
                           type="button"
                           className="btn btn-raised btn-danger btn-block my-2 shadow-z-2"
                           onClick={this.toggle}
                        >
                           <Icon.UserPlus size={18} className="mr-1" /> New Contact
                        </button>
                     </div>
                     <h6 className="text-muted font-small-3 text-bold-600 text-uppercase my-3">Filters</h6>
                     <ul className="list-group list-group-messages">
                        <FilterLink filter={contactVisiblityFilter.SHOW_ALL}>
                           <Icon.Users size={18} className="mr-1" /> All Contacts
                        </FilterLink>
                        <FilterLink filter={contactVisiblityFilter.FREQUENT_CONTACT}>
                           <Icon.RefreshCw size={18} className="mr-1" /> Frequent
                        </FilterLink>
                        <FilterLink filter={contactVisiblityFilter.STARRED_CONTACT}>
                           <Icon.Star size={18} className="mr-1" /> Starred contacts
                        </FilterLink>
                     </ul>
                     <h6 className="text-muted font-small-3 text-bold-600 text-uppercase my-3">Department</h6>
                     <ul className="list-group list-group-messages">
                        <FilterLink
                           filter={contactVisiblityFilter.ENGINEERING_DEPARTMENT_CONTACT}
                           departmentValue="Engineering"
                        >
                           <Icon.Circle size={18} className="mr-1 danger" />
                           Engineering
                        </FilterLink>
                        <FilterLink filter={contactVisiblityFilter.SALES_DEPARTMENT_CONTACT} departmentValue="Sales">
                           <Icon.Circle size={18} className="mr-1 warning" />
                           Sales
                        </FilterLink>
                        <FilterLink filter={contactVisiblityFilter.SUPPORT_DEPARTMENT_CONTACT} departmentValue="Support">
                           <Icon.Circle size={18} className="mr-1 success" />
                           Support
                        </FilterLink>
                     </ul>
                  </div>
               </div>
               <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} size="md">
                  <ModalHeader toggle={this.toggle}>Add Contact</ModalHeader>
                  <AddContact />
               </Modal>
            </PerfectScrollbar>
         </div>
      );
   }
}

export default ContactsFilter;
