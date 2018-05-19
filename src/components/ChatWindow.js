import React, { Component } from 'react';
import InputField from './InputField.js';
import MessageWindow from './MessageWindow.js';
import '../styles/ChatWindow.css'

class ChatWindow extends Component {
    constructor() {
        super();

        this.state = {
            messages: ["Hello World", "How are you doing today?", "Lorem ipsum dolor sit amet", "Let's write some code"],
        }
    }

    createMessage(message) {

        this.setState({
            messages: [ ...this.state.messages, message ]
        })
    }


    render() {
        return (
            <div className="ChatWindow">
                <MessageWindow messages={this.state.messages} />
                <InputField createMessage={this.createMessage.bind(this) } />
            </div>
        );
    }
}

export default ChatWindow;
