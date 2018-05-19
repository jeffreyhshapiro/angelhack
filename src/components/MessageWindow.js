import React, { Component } from 'react';
import '../styles/MessageWindow.css';

//WE WILL NEED INDIVIDUAL MESSAGE COMPONENTS

class MessageWindow extends Component {
    render() {

        const messageSeed = ["Hello World", "How are you doing today?", "Lorem ipsum dolor sit amet", "Let's write some code"];

        return (
            <div className="MessageWindow">
                
                {
                    messageSeed.map((msg, i) => {
                        return <div key={i}>{ msg }</div>
                    })
                }

            </div>
        );
    }
}

export default MessageWindow;
