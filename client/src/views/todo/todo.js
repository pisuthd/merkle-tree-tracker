
import React, { Component, Fragment } from "react";
import { Row } from "reactstrap";

import TodoFilter from "../../components/todo/todoFilter";
import TodoSearch from "../../components/todo/todoSearch";

// import TodoList from "../../components/todo/contacsList";
import TodoList from "../../containers/todo/visibleTodoList";
import TodoDetails from "../../containers/todo/visibleTodoDetails";

class Todo extends Component {
   render() {
      return (
         <Fragment>
            <div className="todo-application">
               <div className="content-overlay" />
               <TodoFilter />
               <Row className="todo-app-content">
                  <div className="todo-app-content-area w-100">
                     <div className="todo-app-list-mails p-0">
                        <TodoSearch />
                        <TodoList />
                     </div>
                     <div className="todo-app-mail-content d-none d-md-block">
                        <TodoDetails />
                     </div>
                  </div>
               </Row>
            </div>
         </Fragment>
      );
   }
}

export default Todo;
