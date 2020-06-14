import React from "react";
import FilterSearch from "../../containers/contacts/contactsFilterSearch";

class ContactSearch extends React.Component {
   render() {
      return (
         <div className="contact-search-box w-100 bg-white pt-4 px-2 pb-2">
            <div className="media">
               <span className="contact-app-sidebar-toggle ft-align-justify font-large-1 mr-2 d-xl-none" />
               <div className="media-body">
                  <FilterSearch />
               </div>
            </div>
         </div>
      );
   }
}

export default ContactSearch;
