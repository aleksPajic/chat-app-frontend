import React from 'react';
import './Chat.css';
import Message from '../Message/Message.js'
import axios from 'axios';
import { CHAT_APP_USERNAME_STORAGE_KEY, parseDate } from '../../globals'
import { Navigate } from 'react-router-dom';

class Chat extends React.Component {

  constructor(props) {
    super(props);
    this.messagesEndRef = React.createRef();
  }

  componentDidMount() {
    const username = localStorage.getItem(CHAT_APP_USERNAME_STORAGE_KEY);

    if (username) {
      this.setState({
        message: '',
        username: username,
        scrollToBottom: true
      })
      this.fetchLatestMessages();
      this.scrollToBottom();
    }
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollTop = this.messagesEndRef.current.scrollHeight;
  }

  sendMessage = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (!this.state.username) {
      console.log('username not defined');
      return;
    }
    if (!this.state.message.trim()) {
      this.setState({
        hasError: true
      });
      alert("Message can't be empty");
      return;
    }
    const datetimeCreated = parseDate(new Date());
    this.sendMessageRequest(this.state.username, this.state.message, datetimeCreated)
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
      this.setState({
        scrollToBottom: true,
        message: ''
      })
    }).catch(() => alert('Error while sending message, please try later again!'));
  }

  poll(callBack, interval) {
    setTimeout(callBack, interval);
  };

  fetchLatestMessages = () => {
    axios.get("http://localhost:8080/message/all").then((response) => {
      if (response.status === 200)
        this.setState({
          messages: response.data
        })
    }).catch((error) => {
      console.error(error)
    }).finally(() => {
      if (this.state?.scrollToBottom) {
        this.scrollToBottom();
        this.setState({
          scrollToBottom: false
        });
      }
      this.poll(this.fetchLatestMessages, 1000)
    });
  }

  displayAllMessages = () => {
    const messages = this.state?.messages ? this.state.messages : [];
    return messages.map((m, index) => {
      if (m.username === this.state.username) {
        return <div key={index} className="your-message message-wrapper">
          <Message username={"You"} message={m.message} dateTime={m.datetimeCreated} />
        </div>
      } else {
        return <div key={index} className="message-wrapper">
          <Message username={m.username} message={m.message} dateTime={m.datetimeCreated} />
        </div>
      }
    })
  }

  render() {
    const username = localStorage.getItem(CHAT_APP_USERNAME_STORAGE_KEY);
    if (!username) {
      return <Navigate replace to="/" />;
    }
    return <div className="Chat">
      <div className="messages-list" ref={this.messagesEndRef} >
        {this.displayAllMessages()}
      </div>
      <form className="text-input-form" onSubmit={this.sendMessage} >
        <input type="text" className="form-input" onChange={this.updateMessage} value={this.state?.message ? this.state.message : ''}></input>
        <button type="submit" className="form-button">Send</button>
      </form>
    </div>;
  }
}

export default Chat;
