import React, { Component } from 'react';

class InputField extends Component {
    render() {
        return (
            <div className="InputField">
                <form method="POST" action="">
                    <input type="text" className="inputField" /> 
                    <input type="submit" className="submitText" />
                </form>

            </div>
        );
    }
}

export default InputField;
