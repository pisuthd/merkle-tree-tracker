import { connect } from "react-redux";
import { toggleStarredContact, deleteContact, contactVisiblityFilter, contactDetails } from "../../redux/actions/contacts";
import contacsList from "../../components/contacts/contacsList";

const getVisibleContacts = (contacts, filter, contactsSearch) => {
   switch (filter) {
      case contactVisiblityFilter.SHOW_ALL:
         return contacts.filter(
            c =>
               !c.deleted &&
               c.firstname
                  .toLocaleLowerCase()
                  .concat(" ")
                  .concat(c.lastname.toLocaleLowerCase())
                  .includes(contactsSearch.toLocaleLowerCase())
         );
      case contactVisiblityFilter.FREQUENT_CONTACT:
         return contacts.filter(
            c =>
               c.frequentlycontacted &&
               !c.deleted &&
               c.firstname
                  .toLocaleLowerCase()
                  .concat(" ")
                  .concat(c.lastname.toLocaleLowerCase())
                  .includes(contactsSearch.toLocaleLowerCase())
         );
      case contactVisiblityFilter.STARRED_CONTACT:
         return contacts.filter(
            c =>
               c.starred &&
               !c.deleted &&
               c.firstname
                  .toLocaleLowerCase()
                  .concat(" ")
                  .concat(c.lastname.toLocaleLowerCase())
                  .includes(contactsSearch.toLocaleLowerCase())
         );
      case contactVisiblityFilter.ENGINEERING_DEPARTMENT_CONTACT:
         return contacts.filter(
            c =>
               c.department === "Engineering" &&
               !c.deleted &&
               c.firstname
                  .toLocaleLowerCase()
                  .concat(" ")
                  .concat(c.lastname.toLocaleLowerCase())
                  .includes(contactsSearch.toLocaleLowerCase())
         );
      case contactVisiblityFilter.SUPPORT_DEPARTMENT_CONTACT:
         return contacts.filter(
            c =>
               c.department === "Support" &&
               !c.deleted &&
               c.firstname
                  .toLocaleLowerCase()
                  .concat(" ")
                  .concat(c.lastname.toLocaleLowerCase())
                  .includes(contactsSearch.toLocaleLowerCase())
         );
      case contactVisiblityFilter.SALES_DEPARTMENT_CONTACT:
         return contacts.filter(
            c =>
               c.department === "Sales" &&
               !c.deleted &&
               c.firstname
                  .toLocaleLowerCase()
                  .concat(" ")
                  .concat(c.lastname.toLocaleLowerCase())
                  .includes(contactsSearch.toLocaleLowerCase())
         );
      case contactVisiblityFilter.DELETED_CONTACT:
         return contacts.filter(
            c =>
               c.deleted &&
               c.firstname
                  .toLocaleLowerCase()
                  .concat(" ")
                  .concat(c.lastname.toLocaleLowerCase())
                  .includes(contactsSearch.toLocaleLowerCase())
         );
      default:
         throw new Error("Unknown filter: " + filter);
   }
};

const mapStateToProps = (state, ownProps) => ({
   // Mapping contacts object and Visiblityfilter state to Object
   contacts: getVisibleContacts(
      state.contactApp.contacts,
      state.contactApp.contactsVisibilityFilter,
      state.contactApp.contactsSearch
   ),

   active: state.contactApp.contactsDetails
});

const mapDispatchToProps = (dispatch, ownProps) => ({
   toggleStarredContact: id => dispatch(toggleStarredContact(id)),
   deleteContact: id => dispatch(deleteContact(id)),
   contactDetails: id => dispatch(contactDetails(id))
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(contacsList);
