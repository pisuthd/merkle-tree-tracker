import React from "react";
import { Media } from 'reactstrap';
import { Link } from "react-router-dom";

// import { Star, Pocket } from "react-feather";
import PropTypes from 'prop-types';

const ChatListItem = ({ onClick, contactName, chatExcerpt, time, thumb }) => (
    <Link to="/chat" className="list-group-item no-border" onClick={onClick}>
        <Media>
            <Media left>
                <Media object src={thumb} alt="Generic placeholder image" className="media-object d-flex mr-3 bg-primary height-50 rounded-circle" />
            </Media>
            <Media body>
                <h6 className="list-group-item-heading">{contactName}
                  <span className="font-small-3 float-right primary">{time}</span>
                </h6>
                <p className="list-group-item-text text-muted"><i className="ft-check primary font-small-2"></i> {chatExcerpt} <span className="float-right primary"><i className="font-medium-1 icon-pin blue-grey lighten-3"></i></span></p>
            </Media>
        </Media>
    </Link>
);

ChatListItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    contactName: PropTypes.string.isRequired,
    chatExcerpt: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
}

export default ChatListItem;
