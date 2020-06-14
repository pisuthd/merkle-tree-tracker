import React from "react";
import { Row, Col } from "reactstrap";
import PropTypes from "prop-types";
import { Star, Trash } from "react-feather";

const Contact = ({
   onContactClick,
   onStarredClick,
   onDeleteClick,
   id,
   firstname,
   lastname,
   image,
   department,
   starred,
   active
}) => (
   <li className={"list-group-item list-group-item-action no-border " + ((active === id) ? "bg-grey bg-lighten-4" : "")}>
      <Row>
         <Col xs={3} onClick={onContactClick}>
            <img src={image} className="rounded-circle width-50" alt={image} />
         </Col>
         <Col xs={7} onClick={onContactClick}>
            <p className="mb-0 text-truncate">
            {firstname} {lastname}
            </p>
            <p className="mb-0 text-muted font-small-3">{department}</p>
         </Col>
         <Col xs={2}>
            <Trash size={18} onClick={onDeleteClick} className="float-right mt-1 mb-2 width-25 d-block" style={{ color: "#FF586B" }} />
            <Star
               size={18}
               onClick={onStarredClick}
               className="float-right width-25 d-block"
               style={{ color: starred ? "#FFC107" : "#495057" }}
            />
         </Col>
      </Row>
   </li>
);

Contact.propTypes = {
   firstname: PropTypes.string.isRequired,
   lastname: PropTypes.string.isRequired,
   image: PropTypes.string.isRequired,
   department: PropTypes.string.isRequired,
   starred: PropTypes.bool.isRequired,
   onStarredClick: PropTypes.func.isRequired,
   onDeleteClick: PropTypes.func.isRequired,
   onContactClick: PropTypes.func.isRequired
};

export default Contact;
