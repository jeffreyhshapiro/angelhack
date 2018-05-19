import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import ChatWindow from './components/ChatWindow.js'
import { isUserLoggedIn } from './utils/utils';
import Onboard from './components/Onboard.js'

class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedIn: false
    }
  }

  componentWillMount() {
    isUserLoggedIn();
  }

  render() {
    return (
      <div className="App">
          <ChatWindow/>
      </div>
    );
  }
}

export default App;
