import React from "react";
// import "../../styles/tictactoeReactDev.css";
// import Board from "../component/tictactoeReactDev/Board.jsx";
// import Game from "../component/secondAttempt/titctactoe.jsx";
// import MyTicTacToe from "../component/secondAttempt/tictactoe/appMyTicTacToe.jsx";
import Somex from "../component/third/Somex.jsx";
import "../../styles/home.css";
import { NavTab } from "../component/navTab.jsx";


export const Home = () => (
	<>
		<NavTab />
		<div className="text-center board-container">
			<Somex />
		</div>
	</>
);
