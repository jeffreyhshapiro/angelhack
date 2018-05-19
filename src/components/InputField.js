import React, { Component } from 'react';

class InputField extends Component {
    constructor() {
        super()

        this.state = {
            userMessage: ""
        }
    }

    render() {
        return (
            <div className="InputField">
                <form method="POST" action="" onSubmit={ this.props.createMessage.bind(this) }>
                    <input type="text" onChange={this.props.setMessage.bind(this)} className="inputField" /> 
                    <input type="submit"  className="submitText" />
                </form>

            </div>
        );
    }
}

export default InputField;
