import { connect } from "react-redux";
import { setTodoVisibilityFilter } from "../../redux/actions/todo/todoActions";
import Link from "../../components/todo/Link";

const mapStateToProps = (state, ownProps) => ({
   active: ownProps.filter === state.todoApp.todoVisibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
   onClick: () => dispatch(setTodoVisibilityFilter(ownProps.filter))
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Link);
