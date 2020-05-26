import React, { Component } from "react";
import create from "../img/create.png";
class CreateProject extends Component {
	state = {
		title: "",
		details: "",
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
				<div className=" card row">
					<div className="  col s12 m6">
						<form onSubmit={this.handleSubmit} className="card-content white ">
							<h5 className="purple-text text-darken-3">Create Project</h5>
							<div className="input-field"></div>
							<label htmlFor="title">Project Title</label>
							<input
								type="text"
								name=""
								id="title"
								onChange={this.handleChange}
							/>
							<div className="input-field"></div>
							<label htmlFor="details">Details</label>
							<textarea
								id="details"
								cols="30"
								rows="10"
								className="materialize-textarea"
								onChange={this.handleChange}
							></textarea>

							<div className="input-field center">
								<button className="btn grey lighten-1 z-depth-0 purple-text center">
									Create
								</button>
							</div>
						</form>
					</div>
					<div className="col s12 m5">
						<img className="materialboxed" width="300" src={create} alt="" />
					</div>
				</div>
			</div>
		);
	}
}

export default CreateProject;
