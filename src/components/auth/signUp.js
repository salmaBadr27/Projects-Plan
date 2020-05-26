import React, { Component } from "react";
import signup from "../img/signup.jpg";

class signUp extends Component {
	state = {
		firstname: "",
		lastname: "",
		email: "",
		password: "",
	};

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value,
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
	};

	render() {
		return (
			<div className="container">
				<div className="card row">
					<div className="col s12 m6">
						<form onSubmit={this.handleSubmit} className="white">
							<h5 className="purple-text text-darken-3">Sign Up</h5>
							<div className="input-field"></div>
							<label htmlFor="email">Email</label>
							<input type="email" id="email" onChange={this.handleChange} />
							<div className="input-field"></div>
							<label htmlFor="password">Password</label>
							<input
								type="password"
								id="password"
								onChange={this.handleChange}
							/>
							<div className="input-field"></div>
							<label htmlFor="firstname">First Name</label>
							<input type="text" id="firstname" onChange={this.handleChange} />
							<div className="input-field"></div>
							<label htmlFor="lastname">Last Name</label>
							<input type="text" id="lastname" onChange={this.handleChange} />
							<div className="input-field center">
								<button className="  btn grey lighten-1 z-depth-0 purple-text center">
									SignUp
								</button>
							</div>
						</form>
					</div>
					<div className="col s12 m5">
						<img className="materialboxed" src={signup} alt="" />
					</div>
				</div>
			</div>
		);
	}
}

export default signUp;
