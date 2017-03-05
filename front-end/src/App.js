import React, { Component } from 'react';
import logo from './logo.svg';
import moment from 'moment';
import Navbar from './components/Navbar';
import ChatWindow from './components/ChatWindow';
import {ask} from './lib/request';
import './App.css';

const messages = [
  {
    author:'Bot',
    text: 'Hello, ask me a question',
    createdAt: moment().format(),
  },
  {
    author:'Me',
    text: 'Kepo',
    createdAt: moment().format(),
  }
];


class App extends Component {
  constructor(){
    super();
    this.state={
      messages: messages,
    }
  }

  componentDidUpdate(){
    this.scrollToBottom();
  }

  scrollToBottom(){
    const chatWindow = document.querySelector('.message-list');
    const to = chatWindow.scrollHeight;
    chatWindow.scrollTop=to;
  }

  onMessageSubmit(messageText){
    const message = {
      author: 'Me',
      text : messageText,
      createdAt : moment().format(),
    }

    //cara 1
    this.setState(prevState => ({
      messages: prevState.messages.concat(message),
    }));

    ask(messageText).then(botMessageReply => {
      this.setState(prevState => ({
        messages: prevState.messages.concat(botMessageReply),
      }));
    });    
    /*cara 2
      const {message} = this.state;
      this.setState({
        messages: messages.concat(message),
      })
    */
  }
  render() {
    const messages = this.state.messages;
    // es 6 : const{messages}=this.state;
    return (
      <div className="App">
        <Navbar name="Aldi Tampan"/>
        <div className="page page--gray"> 
          <div className="container">
           <ChatWindow 
              messages={this.state.messages} 
              onMessageSubmit={
                (message) => this.onMessageSubmit(message)
              }
           />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
