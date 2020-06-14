import React from "react";
import { Form, Input } from "reactstrap";
import { User } from "react-feather";
import PropTypes from 'prop-types';

const ChatSearch = ({onChange, searchTerm}) => (
    <div className="chat-fixed-search p-2">
        <Form>
            <div className="position-relative has-icon-left">
                <Input 
                    className="form-control"
                    id="searchUser"
                    name="searchUser"
                    type="text"
                    onChange={e => onChange(e.target.value)}
                    value= {searchTerm}
                />
                <div className="form-control-position">
                    <User size={16} />
                </div>
            </div>
        </Form>
    </div>
);

ChatSearch.propTypes = {
    onChange: PropTypes.func.isRequired,
    searchTerm: PropTypes.string.isRequired,
}

export default ChatSearch;