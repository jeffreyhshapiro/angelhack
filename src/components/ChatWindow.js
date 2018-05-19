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

    createMessage(e) {
        e.preventDefault();

        console.log(this.state.userMessage)

        return;
        this.setState({
            messages: this.state.messages.push(this.state.userMessage)
        })
    }

    userMessage(e) {

        const message = e.target.value;

        console.log(e.target.value)

        this.setState({
            userMessage: message
        });
    }


    render() {
        return (
            <div className="ChatWindow">
                <MessageWindow messages={this.state.messages} />
                <InputField createMessage={this.createMessage} setMessage={this.userMessage} />
            </div>
        );
    }
}

export default ChatWindow;
