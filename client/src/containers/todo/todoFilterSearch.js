import { connect } from "react-redux";
import { todoSearch } from "../../redux/actions/todo/todoActions";
import Search from "../../components/todo/Search";

const mapStateToProps = (state) => ({
   value: state.todoApp.todoSearch
});

const mapDispatchToProps = (dispatch) => ({
   onChange:  value => dispatch(todoSearch(value)),
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Search);
