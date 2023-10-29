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
			{/* <Game /> */}
			{/* <MyTicTacToe /> */}
			<Somex />
		</div>
		{/* // <div className="text-center d-grid justify-content-center ">
		// 	<div className="text-center mt-5">
		// 		<h1>tic tac toe!!</h1>
		// 		<Board />
		// 	</div>
		// </div> */}
	</>
);
