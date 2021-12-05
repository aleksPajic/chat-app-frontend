import React from 'react';
import './Chat.css';
import Message from '../Message/Message.js'

class Chat extends React.Component {

  sendMessage = (event) => {
    event.preventDefault();
    event.stopPropagation();
  }

  updateMessage = () => {

  }

  displayAllMessages = () => {
    const messages = [{ username: 'aleks', message: "Test message", dateTime: "12/5/2021" }];
    return messages.map(m => <Message username={m.username} message={m.message} dateTime={m.dateTime} />)
  }

  render() {
    return <div className="Chat">
      {this.displayAllMessages()}
      <form className="text-input-form" onSubmit={this.sendMessage} >
        <input type="text" onChange={this.updateMessage}></input>
        <button type="submit">Send</button>
      </form>
    </div>;
  }
}

export default Chat;
