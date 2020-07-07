import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./signedInLinks";
import SignedOutLinks from "./signedOutLinks";
import { connect } from "react-redux";
import M from "materialize-css/dist/js/materialize.min.js";

class NavBar extends Component {
	componentDidMount() {
		let sidenav = document.querySelector("#slide-out");
		M.Sidenav.init(sidenav, {
			edge: "right",
			inDuration: 250,
			draggable: true,
		});
	}
	render() {
		const { auth, profile } = this.props;
		//tracking auth status and which links to show
		const links = auth.uid ? (
			<SignedInLinks profile={profile} />
		) : (
			<SignedOutLinks />
		);
		return (
			<nav className="nav-wrapper purple lighten-1">
				<div className="container">
					<a
						href="#"
						data-target="slide-out"
						className=" right sidenav-trigger"
					>
						<i className="material-icons">menu</i>
					</a>
					<ul id="slide-out" className="sidenav">
						{links}
					</ul>
					<Link to="/" className=" left brand-logo ">
						<i className="Large material-icons">assignment</i>
						Projects Plan
					</Link>
					<div className="hide-on-med-and-down">{links}</div>
				</div>
			</nav>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth,
		profile: state.firebase.profile,
	};
};

export default connect(mapStateToProps)(NavBar);
