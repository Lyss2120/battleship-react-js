import React from "react";
import "../../styles/home.css";
// import Game from "../component/secondAttempt/titctactoe.jsx";
import MyTicTacToe from "../component/secondAttempt/tictactoe/appMyTicTacToe.jsx";


export const Home = () => (
	<div className="text-center board-container">
		{/* <Game /> */}
		<MyTicTacToe />
	</div>
);
