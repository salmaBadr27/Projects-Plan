import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./signedInLinks";
import SignedOutLinks from "./signedOutLinks";

const NavBar = () => {
	return (
		<nav className="nav-wrapper purple lighten-1">
			<div className="container">
				<Link to="/" class=" brand-logo ">
					<i class="Large material-icons">blur_on</i>
					Salma Plan
				</Link>

				<SignedInLinks />
				<SignedOutLinks />
			</div>
		</nav>
	);
};

export default NavBar;
