import React, { Component } from 'react';

class InputField extends Component {
    constructor() {
        super()

        this.state = {
            userMessage: ""
        }
    }

    setUserState(e) {
        const val = e.target.value;

        this.setState({
            userMessage: val
        });
    }

    createMessage(e) {
        e.preventDefault();

        this.props.createMessage(this.state.userMessage);
    }

    render() {
        return (
            <div className="InputField">
                <form method="POST" action="" onSubmit={ this.createMessage.bind(this) }>
                    <input type="text" onChange={this.setUserState.bind(this)} className="inputField" /> 
                    <input type="submit"  className="submitText" />
                </form>

            </div>
        );
    }
}

export default InputField;
