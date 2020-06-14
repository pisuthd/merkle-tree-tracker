import React, {Component} from "react";
import { Form, Input } from 'reactstrap';
import { Image } from 'react-feather';

// import PropTypes from 'prop-types'
import PropTypes from 'prop-types';

class ChatMsgForm extends Component {
    state = {
        msg: ""
    };
    handleChatMsgChange = e => {
        this.setState({
           msg: e.target.value
        });
    };

    onChatMsgSubmit = e => {
        e.preventDefault();
        e.stopPropagation();
        this.props.onClick(this.props.id, this.state.msg)
        this.setState({msg: ""})
    }

    render() {
        return (
            <section className="chat-app-form bg-blue-grey bg-lighten-5">
                <Form className="chat-app-input row" onSubmit={this.onChatMsgSubmit}>
                    <fieldset className="col-lg-10 col-8 m-0"> 
                        <Input 
                            type="text" 
                            className="form-control" 
                            id="iconLeft4" 
                            placeholder="Type your message" 
                            onChange={this.handleChatMsgChange}
                            value={this.state.msg} 
                        />
                        <div className="form-control-position control-position-right">
                            <Image size={18} />
                        </div>
                    </fieldset>
                    <fieldset className="form-group position-relative has-icon-left col-lg-2 col-4 m-0">
                        <button type="button" className="btn btn-raised btn-primary" onClick={() => {
                            this.props.onClick(this.props.id, this.state.msg)
                            this.setState({msg: ""})
                            } }>
                            <i className="fa fa-paper-plane-o hidden-lg-up"></i> Send
                        </button>
                    </fieldset>
                </Form>
            </section>
        );
    }
}

ChatMsgForm.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default ChatMsgForm;
