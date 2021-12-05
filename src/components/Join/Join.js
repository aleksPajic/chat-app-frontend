import React from 'react';
import './Join.css';
import { CHAT_APP_USERNAME_STORAGE_KEY } from '../../globals'

class Join extends React.Component {

  componentDidMount() {
    this.setState({
      hasError: false,
      username: ''
    })
  }

  joinChat = (event) => {
    if (!this.state.username) {
      this.setState({
        hasError: true
      });
      alert("Username can't be empty");
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    localStorage.setItem(CHAT_APP_USERNAME_STORAGE_KEY);

  }

  updateUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    return <div className="gray-bgcolor">
      <form className="join-form" onSubmit={this.joinChat} action="/chat">
        <h2>Welcome to chat app!</h2>
        <p>Enter your username to start chatting!</p>
        <label>Username:</label>
        <input type="text" onChange={this.updateUsername}></input>
        <button type="submit">Join</button>
      </form>
    </div>;
  }
}

export default Join;
