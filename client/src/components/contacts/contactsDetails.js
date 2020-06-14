import React, { Fragment } from "react";
import { Row, Col, Media, Table, Button, Input } from "reactstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import * as Icon from "react-feather";

const ContactsDetails = ({ selectedContacts, onEditClick, editContactFlag, onChange }) => (
   <Fragment>
      {selectedContacts ? (
         <div className="contact-app-content-detail">
            <Row>
               <Col className="text-right">
                  <Button className="btn-outline-success mr-1 mt-1" size="sm" onClick={onEditClick}>
                     {editContactFlag ? <Icon.Check size={16} /> : <Icon.Edit2 size={16} />}
                  </Button>
               </Col>
            </Row>
            <PerfectScrollbar>
               <Media>
                  <Media left href="#">
                     <Media
                        object
                        src={selectedContacts.image}
                        alt="Generic placeholder image"
                        className="img-fluid rounded-circle"
                     />
                  </Media>
                  <Media body>
                     <Media heading>
                        {selectedContacts.firstname} {selectedContacts.lastname}
                     </Media>
                     {selectedContacts.department}
                  </Media>
               </Media>
               <Table responsive borderless size="sm" className="mt-4">
                  <tbody>
                     <tr className="d-flex">
                        <td className="col-3 text-bold-400">First Name</td>
                        <td className="col-9">
                           {editContactFlag ? (
                              <Input
                                 type="text"
                                 name="firstName"
                                 id="firstName"
                                 defaultValue={selectedContacts.firstname}
                                 onChange={e => onChange(selectedContacts.id, "firstname", e.target.value)}
                              />
                           ) : (
                              ": " + selectedContacts.firstname
                           )}
                        </td>
                     </tr>
                     <tr className="d-flex">
                        <td className="col-3 text-bold-400">Last Name</td>
                        <td className="col-9">
                           {editContactFlag ? (
                              <Input
                                 type="text"
                                 name="lastName"
                                 id="lastName"
                                 defaultValue={selectedContacts.lastname}
                                 onChange={e => onChange(selectedContacts.id, "lastname", e.target.value)}
                              />
                           ) : (
                              ": " + selectedContacts.lastname
                           )}
                        </td>
                     </tr>
                     <tr className="d-flex">
                        <td className="col-3 text-bold-400">Company</td>
                        <td className="col-9">
                           {editContactFlag ? (
                              <Input
                                 type="text"
                                 name="company"
                                 id="company"
                                 defaultValue={selectedContacts.company}
                                 onChange={e => onChange(selectedContacts.id, "company", e.target.value)}
                              />
                           ) : (
                              ": " + selectedContacts.company
                           )}
                        </td>
                     </tr>
                     <tr className="d-flex">
                        <td className="col-3 text-bold-400">Department:</td>
                        <td className="col-9">
                           {editContactFlag ? (
                              <Input
                                 type="text"
                                 name="department"
                                 id="department"
                                 defaultValue={selectedContacts.department}
                                 onChange={e => onChange(selectedContacts.id, "department", e.target.value)}
                              />
                           ) : (
                              ": " + selectedContacts.department
                           )}
                        </td>
                     </tr>
                     <tr className="d-flex">
                        <td className="col-3 text-bold-400">Email</td>
                        <td className="col-9">
                           {editContactFlag ? (
                              <Input
                                 type="text"
                                 name="email"
                                 id="email"
                                 defaultValue={selectedContacts.email}
                                 onChange={e => onChange(selectedContacts.id, "email", e.target.value)}
                              />
                           ) : (
                              ": " + selectedContacts.email
                           )}
                        </td>
                     </tr>
                     <tr className="d-flex">
                        <td className="col-3 text-bold-400">Phone</td>
                        <td className="col-9">
                           {editContactFlag ? (
                              <Input
                                 type="text"
                                 name="phone"
                                 id="phone"
                                 defaultValue={selectedContacts.phone}
                                 onChange={e => onChange(selectedContacts.id, "phone", e.target.value)}
                              />
                           ) : (
                              ": " + selectedContacts.phone
                           )}
                        </td>
                     </tr>
                     <tr className="d-flex">
                        <td className="col-3 text-bold-400">Address</td>
                        <td className="col-9">
                           {editContactFlag ? (
                              <Input
                                 type="text"
                                 name="address"
                                 id="address"
                                 defaultValue={selectedContacts.address}
                                 onChange={e => onChange(selectedContacts.id, "address", e.target.value)}
                              />
                           ) : (
                              ": " + selectedContacts.address
                           )}
                        </td>
                     </tr>
                     <tr className="d-flex">
                        <td className="col-3 text-bold-400">Note</td>
                        <td className="col-9">
                           {editContactFlag ? (
                              <Input
                                 type="text"
                                 name="notes"
                                 id="notes"
                                 defaultValue={selectedContacts.notes}
                                 onChange={e => onChange(selectedContacts.id, "notes", e.target.value)}
                              />
                           ) : (
                              ": " + selectedContacts.notes
                           )}
                        </td>
                     </tr>
                  </tbody>
               </Table>
            </PerfectScrollbar>
         </div>
      ) : (
         <div className="row h-100">
            <div className="col-sm-12 my-auto">
               <div className="text-center">
                  <Icon.MessageSquare size={84} color="#ccc" className="pb-3"/>
                  <h4>Please select a contact to show details.</h4>
               </div>
            </div>
         </div>
      )}
   </Fragment>
);

ContactsDetails.prototype = {
   selectedContacts: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.number.isRequired,
         firstname: PropTypes.string.isRequired,
         lastname: PropTypes.string,
         image: PropTypes.string,
         department: PropTypes.string,
         company: PropTypes.string,
         phone: PropTypes.number.isRequired,
         email: PropTypes.string.isRequired,
         address: PropTypes.string,
         notes: PropTypes.string,
         frequentlycontacted: PropTypes.bool.isRequired,
         starred: PropTypes.bool.isRequired,
         deleted: PropTypes.bool.isRequired
      }).isRequired
   ).isRequired
};
export default ContactsDetails;
