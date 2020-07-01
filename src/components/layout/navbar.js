import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./signedInLinks";
import SignedOutLinks from "./signedOutLinks";
import { connect } from "react-redux";

const NavBar = (props) => {
	const { auth, profile } = props;
	//tracking auth status and which links to show
	const links = auth.uid ? (
		<SignedInLinks profile={profile} />
	) : (
		<SignedOutLinks />
	);
	return (
		<nav className="nav-wrapper purple lighten-1">
			<div className="container">
				<Link to="/" className=" brand-logo ">
					<i className="Large material-icons">assignment</i>
					Projects Plan
				</Link>
				{links}
			</div>
		</nav>
	);
};
const mapStateToProps = (state) => {
	console.log("state", state);
	return {
		auth: state.firebase.auth,
		profile: state.firebase.profile,
	};
};

export default connect(mapStateToProps)(NavBar);
