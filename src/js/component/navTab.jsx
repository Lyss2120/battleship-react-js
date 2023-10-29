import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";


export const NavTab = () => {
	return (
		<nav className="navbar text-center navTab navbar-light bg-secondary ">
			<Link to="/">
				<span className=" ms-3 navbar-brand h1">BATTLESHIP</span>
			</Link>
		</nav>
	);
};
