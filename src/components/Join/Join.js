import React from 'react';
import { CHAT_APP_USERNAME_STORAGE_KEY } from '../../globals';
import './Join.css';

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
    localStorage.setItem(CHAT_APP_USERNAME_STORAGE_KEY, this.state.username);
  }

  updateUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    return <div className="whitesmoke-bgcolor join-wrapper">
      <form className="username-input-form" onSubmit={this.joinChat} action="/chat">
        <h2>Welcome to chat app!</h2>
        <p>Enter your username to start chatting!</p>
        <label>Username</label>
        <input type="text" className="form-input username-input" onChange={this.updateUsername}></input>
        <button type="submit" className="form-bordered-button">Join</button>
      </form>
    </div>;
  }
}

export default Join;
