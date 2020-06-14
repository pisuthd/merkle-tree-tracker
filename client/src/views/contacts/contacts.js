import React, { Component, Fragment } from "react";
import { Row } from "reactstrap";

import ContactsFilter from "../../components/contacts/contactsFilter";
import ContactsSearch from "../../components/contacts/contactsSearch";

// import ContactsList from "../../components/contacts/contacsList";
import ContactsList from "../../containers/contacts/visibleContactsList";
import ContactsDetails from "../../containers/contacts/visibleContactsDetails";

class Contacts extends Component {
   render() {
      return (
         <Fragment>
            <div className="contact-application">
               <div className="content-overlay" />
               <ContactsFilter />
               <Row className="contact-app-content">
                  <div className="contact-app-content-area w-100">
                     <div className="contact-app-list-mails p-0">
                        <ContactsSearch />
                        <ContactsList />
                     </div>
                     <div className="contact-app-mail-content d-none d-md-block">
                        <ContactsDetails />
                     </div>
                  </div>
               </Row>
            </div>
         </Fragment>
      );
   }
}

export default Contacts;
