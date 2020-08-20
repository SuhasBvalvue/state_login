import React, { Component } from "react";
import { render } from "react-dom";

class Message extends Component {
	constructor(props) {
		super(props);

		this.state = {
			password: "abc",
			c_password: "pqr",
		};

		this.submitData = this.submitData.bind(this);
	}
	inputPassword = event => {
		this.setState({ password: this.state.password });
	};

	confirmPassword = event => {
		this.setState({ c_password: this.state.c_password });
	};
	submitData(event) {
		event.preventDefault();
		const { password } = this.state;
		const { c_password } = this.state;

		var usr = document.loginform.password.value;
		var psw = document.loginform.c_password.value;

		const matches = usr === password && psw === c_password;
		matches ? alert("MATCHED") : alert("NO MATCH");
	}
	render() {
		return (
			<div className="container">
				<form name="loginform" onSubmit={this.submitData} id="contact">
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

export default Message;
