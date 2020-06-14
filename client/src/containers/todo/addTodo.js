import React from "react";
import { Col, Row, Form, FormGroup, Label, Button, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import { addTodo } from "../../redux/actions/todo/todoActions";

const mapStateToProps = state => ({
   id: state.todoApp.todo.length
});

const AddTodo = ({ id, dispatch }) => {
   let full_name, task, start_date, due_date, project, priority, tag, comments;

   return (
      <React.Fragment>
         <Form
            onSubmit={e => {
               e.preventDefault();
               if (!full_name.value.trim() || !task.value.trim() || !project.value.trim()) {
                  return;
               }
               dispatch(
                  addTodo(
                     id,
                     full_name.value,
                     task.value,
                     start_date.value,
                     due_date.value,
                     project.value,
                     priority.value,
                     tag.value,
                     comments.value
                  )
               );
               full_name.value = "";
               project.value = "";
               task.value = "";
               start_date.value = "";
               due_date.value = "";
               project.value = "";
               priority.value = false;
               tag.value = "";
               comments.value = "";
            }}
         >
            <ModalBody>
               <Row>
                  <Col md={12}>
                     <FormGroup>
                        <Label for="firstName">Title</Label>
                        <input
                           className="form-control"
                           type="text"
                           name="task"
                           id="task"
                           ref={node => (task = node)}
                           required
                        />
                     </FormGroup>
                  </Col>
                  <Col md={6}>
                     <FormGroup>
                        <Label for="fullName">Owner</Label>
                        <input
                           className="form-control"
                           type="text"
                           name="full_name"
                           id="fullName"
                           ref={node => (full_name = node)}
                           required
                        />
                     </FormGroup>
                  </Col>
                  <Col md={6}>
                     <FormGroup>
                        <Label for="lastName">Project</Label>
                        <select
                           className="form-control"
                           type="select"
                           name="project"
                           id="project"
                           ref={node => (project = node)}
                           required
                        >
                           <option value="Project A">Project A</option>
                           <option value="Project B">Project B</option>
                        </select>
                     </FormGroup>
                  </Col>
                  <Col md={6}>
                     <FormGroup>
                        <Label for="start-date">Start Date</Label>
                        <input
                           className="form-control"
                           type="text"
                           name="start-date"
                           id="start-date"
                           ref={node => (start_date = node)}
                        />
                     </FormGroup>
                  </Col>
                  <Col md={6}>
                     <FormGroup>
                        <Label for="due-date">Due Date</Label>
                        <input
                           className="form-control"
                           type="text"
                           name="due-date"
                           id="due-date"
                           ref={node => (due_date = node)}
                        />
                     </FormGroup>
                  </Col>
                  <Col md={6}>
                     <FormGroup>
                        <Label for="priority">Priority</Label>
                        <input
                           className="form-control"
                           type="checkbox"
                           name="priority"
                           id="priority"
                           ref={node => (priority = node)}
                        />
                     </FormGroup>
                  </Col>
                  <Col md={6}>
                     <FormGroup>
                        <Label for="tag">Tag</Label>
                        <select
                           className="form-control"
                           type="select"
                           name="tag"
                           id="tag"
                           ref={node => (tag = node)}
                           required
                        >
                           <option value="uiux">UI/UX</option>
                           <option value="frontend">Frontend</option>
                           <option value="backend">Backend</option>
                        </select>
                     </FormGroup>
                  </Col>
                  <Col md={12}>
                     <FormGroup>
                        <Label for="comments">Comments</Label>
                        <input
                           className="form-control"
                           type="comments"
                           name="comments"
                           id="comments"
                           ref={node => (comments = node)}
                        />
                     </FormGroup>
                  </Col>
               </Row>
            </ModalBody>
            <ModalFooter>
               <Button color="primary" type="submit">
                  Add Task
               </Button>
            </ModalFooter>
         </Form>
      </React.Fragment>
   );
};

export default connect(mapStateToProps)(AddTodo);
