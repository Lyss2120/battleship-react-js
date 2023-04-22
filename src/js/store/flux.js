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
			colArr: [
				{ position: '0' },
				{ position: '1' },
				{ position: '2' },
				{ position: '3' },
				{ position: '4' },
				{ position: '5' },
				{ position: '6' },
				{ position: '7' },
				{ position: '8' },
				{ position: '9' },
				{ position: '10' }
			],
			rowArr: [
				{ position: '0' },
				{ position: '1' },
				{ position: '2' },
				{ position: '3' },
				{ position: '4' },
				{ position: '5' },
				{ position: '6' },
				{ position: '7' },
				{ position: '8' },
				{ position: '9' },
				{ position: '10', }
			],
			coordX: null,
			coordY: null,

			demo2: [
				{
					square: [1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
					square: [1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
					square: [1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
					square: [1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
					square: [1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
					square: [1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
					square: [1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
					square: [1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
					square: [1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
					square: [1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			board: [],

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
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
		},

	}
};


export default getState;


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

