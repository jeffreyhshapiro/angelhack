import React, {Component} from 'react';
import {auth} from '../utils/firebaseAuth';

class Authbutton extends Component {
  constructor() {
        super();
        this.state = {
          output: `click here to authenticate`,
          provider: null,
          user: null
        }
    }
 openAuthPopup = ()=>{
   let provider = new auth.GoogleAuthProvider();
    auth().signInWithPopup(provider).then((result) => {
      console.log(result.user);
      this.setState({
        output: `welcome back ${result.user.displayName}`
      });
    })
  }
  render() {
    let {output} = this.state;
    return (
      <div>
        <a onClick={this.openAuthPopup}>
          {output}
        </a>
      </div>
    )
  }
}

export default Authbutton;
