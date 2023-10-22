import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";


export const NavTab = () => {
	return (
		<nav className="navbar text-center  navTab navbar-light bg-secondary mb-3">
			{/* <Link to="/"> */}
				<span className=" ms-3 navbar-brand mb-0 h1">BATTLESHIP</span>
			{/* </Link> */}
			{/* <div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">BATTLESHIP</button>
				</Link>
			</div> */}
		</nav>
	);
};
