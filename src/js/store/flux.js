const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			row : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
			flip: false,
			ships: [
				{ startPosition: null, name: 'submarine', length: 3, taken: false, shipState: 'miss'}, // coords: [[1,1],[1,2]], maxpos es 10 - el ancho del barco si es horizontal si el barco mide 5 =maxpos => 5
				{ startPosition: null, name: 'cruiser', length: 4, taken: false, shipState: 'miss' },// si es vertical 100 - el ancho del barco * 10 =maxpos => 50
				{ startPosition: null, name: 'battleship', length: 5, taken: false, shipState: 'miss' },// diagonal 100 - el ancho del barco * 11 =maxpos => 45 
				{ startPosition: null, name: 'carrier', length: 5, taken: false, shipState: 'miss' }
			],
			// gameBoard: [0= empty, 1 = ship, 2 = shoot, 3= sunken, 4= miss
			// ],
			PlayerBoard: [
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			],
			PcBoard: [
				[0, 1, 1, 1, 0, 0, 0, 0, 0, 1],
				[0, 0, 0, 1, 1, 1, 1, 0, 0, 1],
				[0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
				[0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
				[0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
				[1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[1, 0, 0, 0, 1, 1, 1, 1, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			],
			user: 'Player',
			enemyShipsClass: 'info bg-opacity-50',
			// fire: false,
			// randomAlign: Math.floor(Math.random() * 3), // random number entre 0 y 2
			// align: randomAlign === 0 ? 'horizontal' : 1 ? 'vertical' : 'diagonal',// si no es 0 ni 1 es 2 cada nro tiene su alineación,
			// maxpos: align === 'horizontal' ? 10 - ships.length : align === 'vertical' ? 100 - (ships.length * 10) : 100 - (ships.length * 11),// resta el largo del barco de la linea en la que va posicionado para que no se salga del tablero,
			// randX: Math.floor(Math.random() * maxpos) + 1, // posición random entre 0 y maxpos incluida ej barco horizontal medida 6 seria entre 0 y 4,
			// randomY: Math.floor(Math.random() * maxpos) + 1,
			

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			changeColor: (index, color) => {
				//get the store
				store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			
			placeShips: (board, row, col)=>{
				const {PlayerBoard, ships, store}=getStore()
				// console.log(ships[0].length, 'len', ships[0].name, 'name');
				let newBoard = [...board]
				let shipPart = 1
				let shipLength = 3
				let total = row + shipLength
				let boardFin = 10 - total
	
				for (let i = row; i< total; i++) {
					console.log('row', row, 'total', total, 'boardFin', boardFin)
					newBoard[row][col] = shipPart
					row++
					console.log(newBoard);
	
			}setStore({ board: newBoard})
		},

			squareClick : (board, row, col) => {
				const {store}=getStore()

				let newBoard = [...board]

				board[row][col]===0 ?
				getActions().placeShips(board, row, col)//poner un barco en esa posicion, para despues con un loop pasar esta funcion a cada barco
				: 
				board[row][col]> 0 && board[row][col]<4 ?
				getActions().fireTorpedo(board, row, col)//disparar en esta posición
				:
				board[row][col]=== 4 &&
				getActions().whoIsTheWinner(board, row, col)//guarda todos los barcos que estan en 4 solo se pone en 4 si el barco entero se hundio. guarda los barcos hundidos de cada board y si uno tiene todos sus barcos en 4 es el perdedor  y automaticamente el dueño del otro tablero gana tiene que recibir player board y sus ships?
 			},
			fireTorpedo : (board, row, col) => {
			console.log(board, row,col, 'fire')
			// const newBoard= [...board]
			
			// coord === 0?

			// newBoard[row][col] = 'x'

			// if (newBoard[row][col] > 0 && newBoard[row][col] < 3) {
			//     console.log(newBoard[row][col], 'gggg'); //donde ya hay barcos, si es 1 o 2 aumentar 1, si fuera 3 quiero que ponga todo rojo... la idea es que el barco entero este ahogado y se ponga ocn ese estado dentro del objeto en ships
			//     // shipState in shipLength === 3 shipState drown esto lo hace firetorpedo
			//     newBoard[row][col]++
			//     setBoard(newBoard)
			//   }
					// fireTorpedo funciona con un prompt en donde se ponen las coords o clickeando en el cuadrado a disparar
				   
					// console.log('se clickea el boton');
					// const rowP = prompt('coordenadas x')
					// const colP = prompt('coordenadas y')
					// console.log(rowP, colP);
					// const newPlayerBoard = [...PlayerBoard];
					// newPlayerBoard[rowP][colP] ++
					// console.log(newPlayerBoard[rowP][colP]);
					// setPlayerBoard(newPlayerBoard)
					// setShipState(shipState+1)
			
				  },
			changeUser : (user)=>{
				user === 'Player' 
				? setStore({user: 'Pc'}) 
				: setStore({user: 'Player'}) 
			},
			showEnemyShips : (coord, board)=>{
				const { enemyShipsClass } = getStore();
				
				enemyShipsClass === 'transparent border border-danger'
				?
				setStore({ enemyShipsClass : 'transparent'})
				:
				setStore({ enemyShipsClass : 'transparent border border-danger'})

			},

		// whoIsTheWinner : (player, ships, shipState)=>{
		// 	// se le manda el player que tiene todos sus ships con shipState en 3, no habra empate porque el primero que
		// }	// complete los ships con 3, ganará
		
	}
};
}

export default getState;




/*     const [PlayerBoard, setPlayerBoard] = useState(gameBoard)
    const [PcBoard, setPcBoard] = useState(Array(100).fill(0))
     const [user, setUser] = useState('Player')
    // console.log(PlayerBoard);
    const [shipState, setShipState] = useState(1)
    const [ships, setShips] = useState([
        { name: 'submarine', length: 3, taken: false, shipState: shipState }, // coords: [[1,1],[1,2]], maxpos es 10 - el ancho del barco si es horizontal si el barco mide 5 =maxpos => 5
        { name: 'cruiser', length: 4, taken: false, shipState: shipState },// si es vertical 100 - el ancho del barco * 10 =maxpos => 50
        { name: 'battleship', length: 5, taken: false, shipState: shipState },// diagonal 100 - el ancho del barco * 11 =maxpos => 45 
        { name: 'carrier', length: 5, taken: false, shipState: shipState }
    ])

 */
    // const placeShips= (board)=>{
    //     console.log(PlayerBoard);
    // // board va a quedar con lo que tenia y reemplaza las posiciones de los barcos en sus maxpos y ocupa los squares correspondientes a su medida
        // const randomAlign = Math.floor(Math.random() * 3) // random number entre 0 y 2
        // const align = randomAlign === 0 ? 'horizontal' : 1 ? 'vertical' : 'diagonal'// si no es 0 ni 1 es 2 cada nro tiene su alineación
        // const maxpos = align === 'horizontal' ? 10 - ships.length : align === 'vertical' ? 100 - (ships.length * 10) :  100 - (ships.length * 11)// resta el largo del barco de la linea en la que va posicionado para que no se salga del tablero
        // const randX = Math.floor(Math.random() * maxpos) + 1 // posición random entre 0 y maxpos incluida ej barco horizontal medida 6 seria entre 0 y 4
        // // const randomY= Math.floor(Math.random() * maxpos) + 1
    //     //cambiar tablero para cualquiera de los dos players 
    //     const newTablero= board.slice;
    //     newTablero = ships[0].length //la medida seria ej 5, y la posicion ej 4 en horizontal(align) y en la fila 3, osea x=3,y=4
    // // let coordship= ships[0].coords[0]
    //     // let newPlayerBoard= PlayerBoard.slice();
    //     // newPlayerBoard.splice((0[7]), 1, 'yt')
    //     // setPlayerBoard(newPlayerBoard)
    // }

//     const fireTorpedo = (row, col)=>{

// console.log(row,col, 'fire')
// // if (newBoard[row][col] > 0 && newBoard[row][col] < 3) {
// //     console.log(newBoard[row][col], 'gggg'); //donde ya hay barcos, si es 1 o 2 aumentar 1, si fuera 3 quiero que ponga todo rojo... la idea es que el barco entero este ahogado y se ponga ocn ese estado dentro del objeto en ships
// //     // shipState in shipLength === 3 shipState drown esto lo hace firetorpedo
// //     newBoard[row][col]++
// //     setBoard(newBoard)
// //   }
//         // fireTorpedo funciona con un prompt en donde se ponen las coords o clickeando en el cuadrado a disparar
       
//         // console.log('se clickea el boton');
//         // const rowP = prompt('coordenadas x')
//         // const colP = prompt('coordenadas y')
//         // console.log(rowP, colP);
//         // const newPlayerBoard = [...PlayerBoard];
//         // newPlayerBoard[rowP][colP] ++
//         // console.log(newPlayerBoard[rowP][colP]);
//         // setPlayerBoard(newPlayerBoard)
//         // setShipState(shipState+1)

//       }








// FUNCIONES QUE NO FUNCIONARON -.-' //
			// getCoord: (positionx, positiony) => {
			// 	const store = getStore();
			// 	let x = store.colArr.map((item, i) => item[i].position)
			// 	let y = store.rowArr.map((item, i) => item[i].position)
			// 	let coordsget = colArr[positiony]
			// 	positionx == x && positiony == y ? setStore({ ...colArr, coordsget: [x,y]}) : console.log(x, y, coordsget,'p');
			// },// intento sacar la posicion de los componentes column,row que crean cada celda y compararla con los items de colArr,rowArr.podria usar un filter?? si coinciden agregar una nueva instancia a colArr donde se indique las coordenadas de cada celda---

		// table: () => {
		// 	const store = getStore();

		// 	const colArr = new Array(10).fill(0)
		// 	const rowArr = new Array(10).fill(0)
		// 	setStore({ colArr2: colArr, rowArr2: rowArr })

		// 	for (let i = 0; i < colArr.length; i++) {
		// 		for (let j = 0; j < rowArr.length; j++) {
		// 			let coordX = colArr[i]
		// 			let coordY = rowArr[j]
		// 			let tablecoordenadas = coordX + ',' + coordY
		// 			setStore({ tableCoordenadas: tablecoordenadas })

		// 		}
		// 	}
		// 	// pc tiene que dar un array de dos numeros random. player tiene que entregar dos numeros por prompt
		// 	//cada barco es un array de 1 a 4 cuadros que coinciden con posiciones o coordenadas de la tabla
		// 	//si el ataque coincide con las posiciones o include() alguna coordenada de los barcos el color cambia a atacado naranja o hundido rojo
		// 	//parecido a la funcion de borrar tareas.. sacando el id en este caso la coordenada
		// },
		// let g = onClick = () => {
		//   setBoat(!boat);

		// let randId = () => {
		//   uuidv1();
		// };
		// const fireTorpedo = (coords) => {
		//   let coordenadas = prompt('elige las coordenadas')

		//   if (coordenadas == coords) {
		//     console.log('hola');
		//     // poner esta func en un onclick. si las coordenadas del usuario son iguales a las coords del barco hace algo
		//     // cambia el color y el nro para cambiar su estado a atacado especificando las coords para que cambie color,
		//     // al atacar todos los div del barco cambia el nro para cambiar su estado a hundido y cambiar color
		//     // tiene que llamarse dentro del for que renderiza el componente en un onclick  y en el enter del prompt ?
		//     // pq tmb tiene que disparar pero sus coordenadas son dos nros random separados por una','
		//   }
		// }

