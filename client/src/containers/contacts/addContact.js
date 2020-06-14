import React from "react";
import { Col, Row, Form, FormGroup, Label, Button, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import { addContact } from "../../redux/actions/contacts";

const mapStateToProps = state => ({
   id: state.contactApp.contacts.length
});

const AddContact = ({ id, dispatch }) => {
   let firstname, lastname, department, company, phone, email, address, notes;

   return (
      <React.Fragment>
         <Form
            onSubmit={e => {
               e.preventDefault();
               if (!firstname.value.trim() || !phone.value.trim() || !email.value.trim()) {
                  return;
               }
               dispatch(
                  addContact(
                     id,
                     firstname.value,
                     lastname.value,
                     company.value,
                     department.value,
                     email.value,
                     phone.value,
                     address.value,
                     notes.value
                  )
               );
               firstname.value = "";
               lastname.value = "";
               company.value = "";
               department.value = "";
               email.value = "";
               phone.value = "";
               address.value = "";
               notes.value = "";
            }}
         >
            <ModalBody>
               <Row>
                  <Col md={6}>
                     <img
                        src={"https://randomuser.me/api/portraits/men/" + id + ".jpg"}
                        className="rounded-circle"
                        alt={id}
                     />
                  </Col>
                  <Col md={6}>
                     <FormGroup>
                        <Label for="firstName">First Name</Label>
                        <input
                           className="form-control"
                           type="text"
                           name="firstname"
                           id="firstName"
                           ref={node => (firstname = node)}
                           required
                        />
                     </FormGroup>
                     <FormGroup>
                        <Label for="lastName">Last Name</Label>
                        <input
                           className="form-control"
                           type="text"
                           name="lastname"
                           id="lastName"
                           ref={node => (lastname = node)}
                        />
                     </FormGroup>
                  </Col>
               </Row>
               <Row>
                  <Col md={6}>
                     <FormGroup>
                        <Label for="department">Department</Label>
                        <input
                           className="form-control"
                           type="text"
                           name="department"
                           id="department"
                           ref={node => (department = node)}
                        />
                     </FormGroup>
                  </Col>
                  <Col md={6}>
                     <FormGroup>
                        <Label for="company">Company</Label>
                        <input
                           className="form-control"
                           type="text"
                           name="company"
                           id="company"
                           ref={node => (company = node)}
                        />
                     </FormGroup>
                  </Col>
               </Row>
               <Row>
                  <Col md={6}>
                     <FormGroup>
                        <Label for="phone">Phone</Label>
                        <input
                           className="form-control"
                           type="phone"
                           name="phone"
                           id="phone"
                           ref={node => (phone = node)}
                           required
                        />
                     </FormGroup>
                  </Col>
                  <Col md={6}>
                     <FormGroup>
                        <Label for="email">Email</Label>
                        <input
                           className="form-control"
                           type="email"
                           name="email"
                           id="email"
                           ref={node => (email = node)}
                           required
                        />
                     </FormGroup>
                  </Col>
               </Row>
               <Row>
                  <Col md={6}>
                     <FormGroup>
                        <Label for="address">Address</Label>
                        <input
                           className="form-control"
                           type="text"
                           name="address"
                           id="address"
                           ref={node => (address = node)}
                        />
                     </FormGroup>
                  </Col>
                  <Col md={6}>
                     <FormGroup>
                        <Label for="notes">Notes</Label>
                        <input
                           className="form-control"
                           type="textarea"
                           name="notes"
                           id="notes"
                           ref={node => (notes = node)}
                        />
                     </FormGroup>
                  </Col>
               </Row>
            </ModalBody>
            <ModalFooter>
               <Button color="primary" type="submit">
                  Add Contact
               </Button>
            </ModalFooter>
         </Form>
      </React.Fragment>
   );
};

export default connect(mapStateToProps)(AddContact);
