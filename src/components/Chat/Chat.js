import React from 'react';
import './Chat.css';
import Message from '../Message/Message.js'
import axios from 'axios';
import { CHAT_APP_USERNAME_STORAGE_KEY, getCurrentDateParsed } from '../../globals'

class Chat extends React.Component {

  componentDidMount() {
    this.setState({
      message: ''
    })
    this.fetchLatestMessages();
  }

  sendMessage = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const username = localStorage.getItem(CHAT_APP_USERNAME_STORAGE_KEY);
    if (!username) {
      console.log('username not defined');
      return;
    }
    if (!this.state.message) {
      this.setState({
        hasError: true
      });
      alert("Message can't be empty");
      return;
    }
    const datetimeCreated = getCurrentDateParsed();
    this.sendMessageRequest(username, this.state.message, datetimeCreated)
  }

  updateMessage = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  sendMessageRequest = (username, message, datetimeCreated) => {
    axios.post("http://localhost:8080/message/create", {
      username,
      message,
      datetimeCreated
    }).then(() => {
      console.log("Message sent");
    }).catch((error) => {
      console.error(error)
    });
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
