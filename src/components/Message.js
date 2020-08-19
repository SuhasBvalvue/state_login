
import React, { Component } from "react";
import { render } from "react-dom";

class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "abc",
      c_password: "abc",
    };

    this.submitData = this.submitData.bind(this);
  }
  inputPassword = event => {
    this.setState({ password: this.state.password });
  };

  confirmPassword = event => {
    this.setState({ c_password: event.target.value });
  };
  submitData(event) {
    event.preventDefault();
    const { password, c_password } = this.state;
    const matches = password === c_password;
    matches ? alert("MATCHED") : alert("NO MATCH");  
  }
  render() {
    return (
      <div class="container">
        <form onSubmit={this.submitData}  id="contact" >
          Username:
          <input
            type="text"
            name="password"
            onChange={this.inputPassword}
          />
          <br></br>
          password
          <input
            type="password"
            name="c_password"
            onChange={this.confirmPassword}
          />
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Message