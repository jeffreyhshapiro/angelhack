import React, { Component } from 'react';
import InputField from './InputField.js';
import MessageWindow from './MessageWindow.js';
import '../styles/ChatWindow.css'
import { isUserLoggedIn, onboardUser } from '../utils/utils.js'

class ChatWindow extends Component {
    constructor() {
        super();

        this.state = {
            messages: [],
            currentOnboardingQuestion: 0
        }
    }

    componentWillMount() {
        const status = isUserLoggedIn();
        
        if(status) {
            //do something
        } else {
            const questions = onboardUser();
        }
    }

    createMessage(message) {

        const messageData = { message }

        this.setState({
            messages: [ ...this.state.messages, messageData ]
        })
    }


    render() {
        return (
            <div className="ChatWindow">
                <MessageWindow messages={this.state.messages} currentQuestion={this.state.currentOnboardingQuestion} />
                <InputField createMessage={this.createMessage.bind(this) } />
            </div>
        );
    }
}

export default ChatWindow;
