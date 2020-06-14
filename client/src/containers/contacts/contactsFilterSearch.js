import { connect } from "react-redux";
import { contactsSearch } from "../../redux/actions/contacts";
import Search from "../../components/contacts/Search";

const mapStateToProps = (state) => ({
   value: state.contactApp.contactsSearch
});

const mapDispatchToProps = (dispatch) => ({
   onChange:  value => dispatch(contactsSearch(value)),
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Search);
