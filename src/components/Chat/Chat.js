import React from 'react';
import './Chat.css';
import Message from '../Message/Message.js'
import axios from 'axios';

class Chat extends React.Component {

  componentDidMount() {
    this.fetchLatestMessages();
  }

  sendMessage = (event) => {
    event.preventDefault();
    event.stopPropagation();
  }

  updateMessage = () => {

  }

  fetchLatestMessages = () => {
    axios.get("http://localhost:8080/message/all").then((response) => {
      if (response.status === 200)
        this.setState({
          messages: response.data
        })
    }).catch((error) => {
      console.error(error)
    });
  }

  displayAllMessages = () => {
    const messages = this.state?.messages ? this.state.messages : [];
    return messages.map((m, index) => <Message key={index} username={m.username} message={m.message} dateTime={m.datetimeCreated} />)
  }

  render() {
    return <div className="Chat">
      <div className="messages-list">
        {this.displayAllMessages()}
      </div>
      <form className="text-input-form" onSubmit={this.sendMessage} >
        <input type="text" onChange={this.updateMessage}></input>
        <button type="submit">Send</button>
      </form>
    </div>;
  }
}

export default Chat;
