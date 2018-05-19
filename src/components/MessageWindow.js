import React, { Component } from 'react';
import '../styles/MessageWindow.css';

//WE WILL NEED INDIVIDUAL MESSAGE COMPONENTS

class MessageWindow extends Component {

    render() {

        return (
            <div className="MessageWindow">
                
                {
                    this.props.messages.map((msg, i) => {
                        return <div key={i}>{ msg.message }</div>
                    })
                } 

            </div>
        );
    }
}

export default MessageWindow;
