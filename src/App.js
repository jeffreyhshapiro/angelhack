import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import ChatWindow from './components/ChatWindow.js'
import Authbutton from './components/Authbutton';
class App extends Component {
  render() {
    return (
      <div className="App">
        <ChatWindow/>
        <Authbutton/>
      </div>
    );
  }
}

export default App;
