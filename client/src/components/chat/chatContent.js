import React, {Component} from "react";
// import { Button } from "reactstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from 'prop-types';
import { MoreVertical } from 'react-feather';

import UserImg from "../../assets/img/portrait/small/avatar-s-1.png";

// import PropTypes from 'prop-types'
// import { AlertOctagon, Trash2 } from "react-feather";

class ChatContent extends Component {
    
    render() {
    let chatDetails = this.props.chatDetails;
     return <div>
        <div className="chat-name p-2 bg-white">
            <div className="media">
                <span className="chat-app-sidebar-toggle ft-align-justify font-large-1 mr-2 d-none d-block d-sm-block d-md-none"></span>
                <div className="media-body">
                <img src={ chatDetails.thumb } width="37" className="rounded-circle mr-1" alt="avatar" />
                <span>{ chatDetails.name }</span>
                <MoreVertical size={18} className="ft-more-vertical float-right mt-1" />
                </div>
            </div>
        </div>

        <PerfectScrollbar 
            containerRef={(ref) => {
                this.chatScrollHandler = ref;
            }}
        >
            <section className="chat-app-window">
                <div className="badge badge-dark mb-1">Chat History</div>
                    <div className="chats">
                        {Object.keys(chatDetails.chatHistory).map((chat) =>
                            (Object.keys(chatDetails.chatHistory[chat]).map((key) =>
                                (Object.keys(chatDetails.chatHistory[chat][key]).map((k) => 
                                    ( k === 'from') ?
                                        <div className="chat chat-left" key={k}>
                                            <div className="chat-avatar">
                                                <img src={chatDetails.thumb } className="width-50 rounded-circle" alt="avatar" />
                                            </div>
                                            <div className="chat-body">
                                                {(chatDetails.chatHistory[chat][key][k]).map((v) =>    
                                                    <div className="chat-content" key={v}>
                                                        <p>{v}</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    :
                                        <div className="chat" key={k}>
                                            <div className="chat-avatar">
                                                <img src={UserImg} className="width-50 rounded-circle" alt="avatar" />
                                            </div>
                                            <div className="chat-body">
                                                    {(chatDetails.chatHistory[chat][key][k]).map((v) =>
                                                        <div className="chat-content" key={v}> 
                                                            <p>{v}</p>
                                                        </div>
                                                    )}
                                            </div>
                                        </div>
                                ))
                            ))
                        )}
                    </div>
            </section>
        </PerfectScrollbar>
    </div>
}
}

export default ChatContent;

ChatContent.propTypes = {
    chatDetails: PropTypes.object.isRequired
}