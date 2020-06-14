import { connect } from "react-redux";
import { setEditTodoFlag,updateTodo, toggleStarredTodo, togglePriorityTodo} from "../../redux/actions/todo/todoActions";
import todoDetails from "../../components/todo/todoDetails";

const mapStateToProps = (state, ownProps) => ({
   selectedTodo: state.todoApp.todo[state.todoApp.todoDetails],
   editTodoFlag: state.todoApp.editTodo
});

const mapDispatchToProps = dispatch => ({
   onEditClick: () => dispatch(setEditTodoFlag()),
   onChange:(id, field, value) => dispatch(updateTodo(id , field, value)),
   toggleStarredTodo: id => dispatch(toggleStarredTodo(id)),
   togglePriorityTodo: id => dispatch(togglePriorityTodo(id))
   
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(todoDetails);
