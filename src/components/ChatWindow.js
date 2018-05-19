import React, { Component } from 'react';
import InputField from './InputField.js';
import MessageWindow from './MessageWindow.js';
import '../styles/ChatWindow.css'

class ChatWindow extends Component {
    render() {
        return (
            <div className="ChatWindow">
                <MessageWindow />
                <InputField />
            </div>
        );
    }
}

export default ChatWindow;
