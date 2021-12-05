import React from 'react';
import './Message.css';

class Message extends React.Component {

  render() {
    return <div className="Message">
      <div className="info-text">{this.props.username}</div>
      <div className="message-text">{this.props.message}</div>
      <div className="info-text">{this.props.dateTime}</div>
    </div>;
  }
}

export default Message;
