import React from "react";
// import "../../styles/tictactoeReactDev.css";
// import Board from "../component/tictactoeReactDev/Board.jsx";
// import Game from "../component/secondAttempt/titctactoe.jsx";
// import MyTicTacToe from "../component/secondAttempt/tictactoe/appMyTicTacToe.jsx";
import Somex from "../component/third/Somex.jsx";
import "../../styles/home.css";


export const Home = () => (
	<div className="text-center py-5 wrapper board-container ">
		{/* <Game /> */}
		{/* <MyTicTacToe /> */}
		<Somex />
	</div>

	// <div className="text-center d-grid justify-content-center ">
	// 	<div className="text-center mt-5">
	// 		<h1>tic tac toe!!</h1>
	// 		<Board />
	// 	</div>
	// </div>
);
