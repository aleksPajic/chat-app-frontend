import React from 'react';
import './Message.css';

class Message extends React.Component {

  render() {
    return <div className="Message">
      <p>{this.props.username}</p>
      <p>{this.props.message}</p>
      <p>{this.props.dateTime}</p>
    </div>;
  }
}

export default Message;
