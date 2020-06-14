import { connect } from "react-redux";
import { setEditContactFlag,updateContact } from "../../redux/actions/contacts";
import contactsDetails from "../../components/contacts/contactsDetails";

const mapStateToProps = (state, ownProps) => ({
   selectedContacts: state.contactApp.contacts[state.contactApp.contactsDetails],
   editContactFlag: state.contactApp.editContact
});

const mapDispatchToProps = dispatch => ({
   onEditClick: () => dispatch(setEditContactFlag()),
   onChange:(id, field, value) => dispatch(updateContact(id , field, value))
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(contactsDetails);
