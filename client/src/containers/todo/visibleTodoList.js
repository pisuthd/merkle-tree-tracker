import { connect } from "react-redux";
import {
   toggleTodo,
   toggleStarredTodo,
   togglePriorityTodo,
   deleteTodo,
   todoVisiblityFilter,
   todoDetails
} from "../../redux/actions/todo/todoActions";
import todoList from "../../components/todo/todoList";

const getVisibleTodo = (todo, filter, todoSearch) => {
   switch (filter) {
      case todoVisiblityFilter.SHOW_ALL:
         return todo.filter(c => !c.deleted && c.task.toLocaleLowerCase().includes(todoSearch.toLocaleLowerCase()));

      // Project Filter
      case todoVisiblityFilter.PROJECT_A_TODO:
         return todo.filter(
            c =>
               c.project === "Project A" && !c.deleted && c.task.toLocaleLowerCase().includes(todoSearch.toLocaleLowerCase())
         );
      case todoVisiblityFilter.PROJECT_B_TODO:
         return todo.filter(
            c =>
               c.project === "Project B" && !c.deleted && c.task.toLocaleLowerCase().includes(todoSearch.toLocaleLowerCase())
         );

      // Filters
      case todoVisiblityFilter.STARRED_TODO:
         return todo.filter(
            c => c.starred && !c.deleted && c.task.toLocaleLowerCase().includes(todoSearch.toLocaleLowerCase())
         );
      case todoVisiblityFilter.PRIORITY_TODO:
         return todo.filter(
            c => c.priority && !c.deleted && c.task.toLocaleLowerCase().includes(todoSearch.toLocaleLowerCase())
         );
      case todoVisiblityFilter.COMPLETED_TODO:
         return todo.filter(
            c => c.completed && !c.deleted && c.task.toLocaleLowerCase().includes(todoSearch.toLocaleLowerCase())
         );

      // Tag filter
      case todoVisiblityFilter.UIUX_TODO:
         return todo.filter(
            c => c.tag === "uiux" && !c.deleted && c.task.toLocaleLowerCase().includes(todoSearch.toLocaleLowerCase())
         );
      case todoVisiblityFilter.FRONTEND_TODO:
         return todo.filter(
            c => c.tag === "frontend" && !c.deleted && c.task.toLocaleLowerCase().includes(todoSearch.toLocaleLowerCase())
         );
      case todoVisiblityFilter.BACKEND_TODO:
         return todo.filter(
            c => c.tag === "backend" && !c.deleted && c.task.toLocaleLowerCase().includes(todoSearch.toLocaleLowerCase())
         );
      default:
         throw new Error("Unknown filter: " + filter);
   }
};

const mapStateToProps = (state, ownProps) => ({
   // Mapping todo object and Visiblityfilter state to Object
   todo: getVisibleTodo(state.todoApp.todo, state.todoApp.todoVisibilityFilter, state.todoApp.todoSearch),
   active: state.todoApp.todoDetails
});

const mapDispatchToProps = (dispatch, ownProps) => ({
   toggleTodo: id => dispatch(toggleTodo(id)),
   toggleStarredTodo: id => dispatch(toggleStarredTodo(id)),
   togglePriorityTodo: id => dispatch(togglePriorityTodo(id)),
   deleteTodo: id => dispatch(deleteTodo(id)),
   todoDetails: id => dispatch(todoDetails(id))
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(todoList);
