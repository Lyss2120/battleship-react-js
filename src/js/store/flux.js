const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      row: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],

      flip: false,
      fliped: false,
      moreFliped: false,
      selfAlign: null,
      // puede ser aqui cambiar la alieacion manualmente o simplemente cambiar totalmente el estado align por un string fijo ej: horizontal
      //   orientation: align === 0 ? 'horizontal' : 1 ? 'vertical' : 'diagonal',// si no es 0 ni 1 es 2 cada nro tiene su alineación,
      //   maxpos: orientation === 'horizontal' ? 10 - ships.length : align === 'vertical' ? 100 - (ships.length * 10) : 100 - (ships.length * 11),// resta el largo del barco de la linea en la que va posicionado para que no se salga del tablero,
      //   randX: Math.floor(Math.random() * maxpos) + 1, // posición random entre 0 y maxpos incluida ej barco horizontal medida 6 seria entre 0 y 4,
      //   randomY: Math.floor(Math.random() * maxpos) + 1,// para poner los estados anidados usar un solo estado con objeto y los estados key value++
      // loop todos los barcos para ponerlos en los tableros  pc y player random y manual para player con flip. cuando esto este ver el shipstate y cambiarlo dentro de ships con setStore. de ahi pasarle el shipstate los ships y el player para que o tablero para comprobar en cada tablero quien pierde todos los barcos primero.... o si los 5 barcos estan en shipstate 3 poner los nombres en un array? cdo tengan shipstate 3 mandar el nombre y el board a whosthewinner.. o llenar el counter de cada board
      // gameBoard: [0= empty, 1 = ship, 2 = shoot, 3= sunken, 4= miss
      // ],
      PlayerBoard: [
        [0, 0, 3, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ],
      ships: [
        {
          name: "submarine",
          color: "Orchid",
          taken: false,
          length: 3,
          coords: [],
          shipState: 1,
        }, // coords: [[1,1],[1,2]], maxpos es 10 - el ancho del barco si es horizontal si el barco mide 5 =maxpos => 5
        {
          name: "destroyer",
          color: "HotPink",
          taken: false,
          length: 4,
          coords: [],
          shipState: 1,
        }, // si es vertical 100 - el ancho del barco * 10 =maxpos => 50
        {
          name: "battleship",
          color: "IndianRed",
          taken: false,
          length: 5,
          coords: [],
          shipState: 1,
        }, // diagonal 100 - el ancho del barco * 11 =maxpos => 45
        { 
          name: "carrier",
          color: "Salmon",
          taken: false,
          length: 5,
          coords: [],
          shipState: 1,
        },
      ],
      segships: [
        {
          name: "submarine",
          color: "Orchid",
          taken: false,
          length: 3,
          coords: [],
          shipState: 1,
        }, // coords: [[1,1],[1,2]], maxpos es 10 - el ancho del barco si es horizontal si el barco mide 5 =maxpos => 5
        {
          name: "destroyer",
          color: "HotPink",
          taken: false,
          length: 4,
          coords: [],
          shipState: 1,
        }, // si es vertical 100 - el ancho del barco * 10 =maxpos => 50
        {
          name: "battleship",
          color: "IndianRed",
          taken: false,
          length: 5,
          coords: [],
          shipState: 1,
        }, // diagonal 100 - el ancho del barco * 11 =maxpos => 45
        { 
          name: "carrier",
          color: "Salmon",
          taken: false,
          length: 5,
          coords: [],
          shipState: 1,
        },
      ],
      desdeElClick : false,
      user: "Player",
      enemyShipsClass: "info bg-opacity-50",
      fire: false,// si todos los squares del barco estan en fire se cambia el shipState dentro de ship a sunk, si son menos el shipState queda en hit pero cada square puede cambiar su apariencia para mostrar los squares golpeados
      sunken:false,// si shipState esta en 3 se activa sunken para cambiar la apariencia del barco o todos sus squares.. si no se puede acceder en el componente a las propiedades de cada barco dentro de ships
      takenShips: [],
      desdeElClickdata: {row:0, col:2, align:'horizontal'},
      lala:[],
      // coordArray:[],// guarda las coordenadas ocupadas en arrays dentro de coordAarray para poder ubicar solo los lugares disponibles
      // takenCoords: [],
    },
    actions: {
      // Use getActions to call a function within a fuction, se pasan los parametros
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
      randomNumber: (maxNum)=>{
       return Math.floor(Math.random() * maxNum)
      },
      start: () => {
        const store = getStore();
        // llama a place boards con cada tablero para poner dentro sus barcos
        store.ships.map((ship) => {
        // console.log('store.PlayerBoard', ship.name);
        let row = getActions().randomNumber(10)
        let col = getActions().randomNumber(10)
        let randAlign = getActions().randomNumber(3)
        let align = randAlign === 0 ? 'horizontal': randAlign === 1 ? 'vertical': randAlign === 2 && 'diagonal';
        let takenShip = store.takenShips.includes(ship.name)
         
        if(takenShip){
          console.log('barco posicionado en tablero', {takenShip});
          return
        }
       
        while(!getActions().handleValidPosition(store.PlayerBoard, ship, row, col, align)){
          row = getActions().randomNumber(10),
          col = getActions().randomNumber(10),
          randAlign = getActions().randomNumber(3)
          // console.log('nuevas coordenadas', row,col, randAlign);
        }  //validando     
        
        if(getActions().handleValidPosition(store.PlayerBoard, ship, row, col, align)){
          getActions().handleSetBoard(store.PlayerBoard, ship, row, col, align)
        } }); 
      },//mapea y es da row y col
      handleFreeCoords: (board, ship, row, col, align) => {
        const store = getStore()
        let valid = true

          for(let i =0; i < ship.length; i++){
            board[row][col]!== 0 && (
              // console.log(ship.name, row, col, board[row][col], 'choco'),
            valid = false) 
            align ==='vertical'? row ++ : align ==='horizontal'? col ++ : (row ++, col ++)
          } 
        return valid     
      },//revisa que [row][col] esté libre 
      handleValidPosition: (board, ship, row, col, align) => {
        // validando
        let valid = true

        if (align === 'horizontal') {
          if (col + ship.length > 10) {
            // console.log(ship.name, ship.length,'se sale del tablero', row+','+col, align);
            valid = false
          }else valid = getActions().handleFreeCoords(board, ship, row, col, align)
        }
        if (align === 'vertical') {
          if (row + ship.length > 10) {
            // console.log(ship.name, ship.length,'se sale del tablero', row+','+col, align);
            valid = false
          }else valid = getActions().handleFreeCoords(board, ship, row, col, align)
        }
        if (align === 'diagonal') {
          if (col + ship.length > 10 || row + ship.length > 10) {
            // console.log(ship.name, ship.length,'se sale del tablero', row+','+col, align);
            valid = false
          }else valid = getActions().handleFreeCoords(board, ship, row, col, align)
        }

        return valid
      },//revisa que no se salga del tablero
      handleShipData:(newShip, row, col, func)=>{
        const store = getStore()
          func === 'handleSetBoard'?
          (
            newShip.coords = [...newShip.coords, [row,col]], 
            newShip.taken = true,
            newShip.shipState = 7
          )
          :
          (
            console.log('firetorpedo')
            // newShip.shipState ++,
            // newShip.shipState === 1 ? 'cool' : newShip.shipState === 2 ? 'hit' : newShip.shipState === 3 ? 'sunk' : 'miss'
          ) //solo puede estar en sunk-3 cuando todos los espacios que componen el barco esten en hit-2
          
      
        //  console.log(newShip?.taken, newShip?.name, newShip?.coords,'hadlenewShipdata');
        return newShip
      },
      handleSetBoard: (board, ship, row, col, align) => {
        const store = getStore()
        let newBoard = [...board]
        let newShip= ship
        // let newShips = [...store.ships]

        for(let i =0; i < ship.length; i++){
          if(newBoard[row][col]!==0){console.log(newBoard[row][col],'newBoard[row][col] !==0, en handleSetBoard')}

          getActions().handleShipData(newShip, row, col, 'handleSetBoard')
          // newShips[i] = newShip
          // newShip.coords = [...newShip.coords, [row,col]], 
          // newShip.taken = true,
          // newShip.shipState = 3, ??? si actualiza el estado sin el setStore

          // newShips.map((ship, i)=>{
          //   if (ship === ship){
          //   ship.coords = [...ship.coords, [row,col]], 
          //   ship.taken = true,
          //   ship.shipState = 3,
          //   console.log(ship, 'nameship');
          //   } 
          // }) ??????? pq no funciona
          // console.log(newShip.taken, ship.taken, 'taken');
          newBoard[row][col] = 1 
          // + ship.name.at(0)
          setStore({board : newBoard})
          align ==='vertical'? row += 1 : align ==='horizontal'? col += 1 : (row += 1, col += 1)
        } 

        setStore({ takenShips: [...store.takenShips, ship.name ] }) 
      },//setea el tablero
      handleClickPlaceShips: (board, ship, row, col) => {
        const store = getStore()
        
        let align = store.flip ? 'vertical' : store.moreFliped ? 'diagonal' : 'horizontal'

        while(!getActions().handleValidPosition(board, ship, row, col, align)){
        }  //validando     
        // console.log(':)', getActions().handleValidPosition(store.PlayerBoard, ship, row, col, align), ship.name, row, col, align)
        
        if(getActions().handleValidPosition(store.PlayerBoard, ship, row, col, align)){
          setStore({takenShips : [...store.takenShips, ship.name]})
          getActions().handleSetBoard(store.PlayerBoard, ship, row, col, align)
        }
        
        
        // *** ver como captar align de cada barco... con estado? ver version anterior con flip
        // console.log('clickplaceShips');
        // getActions().placeShips(board, ship, row, col)
      }, //traer las coordenadas al clickear, y tambien al clickear cambiar store.flip para traer align tmb, con eso verificar y enviar uno por uno los barcos a placeSHIPS, 
      squareClick: (board, row, col) => {
        const store = getStore();
        let newBoard = [...board];
        console.log(newBoard[row][col], 'squareclick');
        if (newBoard[row][col]){
          //si es 0 llamar place ships si takenships esta lleno (tiene que tener 4 barcos) y ya se pusieron todos los barcos
        }
        if (newBoard[row][col]){
          
        }
        if (newBoard[row][col]){
          
        }

        // board[row][col] === 0
        //   ? getActions().clickPlaceShips(board, ship, row, col, align)//como mandar el ship.hacer algo parecido a lo de start //poner un barco en esa posicion, para despues con un loop pasar esta funcion a cada barco
        //   : board[row][col] < 3 // en placeships queda en 1 si es menor a 4 es hit o sunk
        //   ? getActions().fireTorpedoPrompt(row, col) //disparar en esta posición, asegurar que solo sea en el tablero de pc y el turno de player. cuando le toque a pc hara fireTorpedo en random position
        //   : board[row][col] === 4 && //enviar los que estan en 4
        //     getActions().whoIsTheWinner(board, row, col); //guarda todos los barcos que estan en 4 solo se pone en 4 si el barco entero se hundio. guarda los barcos hundidos de cada board y si uno tiene todos sus barcos en 4 es el perdedor  y automaticamente el dueño del otro tablero gana tiene que recibir player board y sus ships?
      },
      fireTorpedo: (board, row, col) => {
        console.log(board[row][col], "fire");
        // let shipState = ships[pos].shipState
        const newBoard = [...board]; //si los datos existen usarlos, sino pedirlos con un prompt
        console.log(board[row][col]);
        // 4 = 'miss', actualiza el valor de row
        //existe row ? sino llamar a prompt
        row ? 
        board[row][col] === 0 ? (newBoard[row][col] = 4)
        : board[row][col] < 3 && (newBoard[row][col]++, setStore({ board: newBoard }))
        : getActions().fireTorpedoPrompt();

        // ship.map((item, i)=>{
          
        // })

        

// . si existe row, es igual a 0? se cambia a miss o 4, si no es 0 y es menor a 4 se aumenta en 1 su estado, a hit o sunken segun el estado que ya tenia
        // shipState ++ si el contenido del bloque es 3 se agrega a sunkenShips
        // seStore({ sunkenShips : [...sunkenShips], {player: player, board: board, name: ship.name}})
      },
      fireTorpedoPrompt: () => {
        const { PcBoard, ships } = getStore();

        let prow = parseInt(prompt("Type a coord x"));
        let pcol = parseInt(prompt("Type a coord y"));
        let board = PcBoard;
        const newBoard = [...board];
        let newShips = [...ships]

        board[prow][pcol] === 0
          ? (newBoard[prow][pcol] = 4)
          : board[prow][pcol] < 4 && newBoard[prow][pcol]++; // Si esta en 0 empty es un 4 miss si esta en 1 suma disparos hasta el 3 que ya es hundido (tiene que ponerse en 3 automaticamente al disparar alultimo cuadrado del barco)
        
          for(let i= 0; i < ships.length; i++){
            if([prow][pcol]=== newShips[i].coords){
              console.log(newShips[i].name, newShips[i].coords);
            }

            // newBoard[prow][pcol]===3 ?
            // console.log('3', newBoard[prow][pcol]): console.log('menor a 3', newBoard[prow][pcol]);
          }//sber si le dio a un barco. y cual
        // console.log(
        //   newBoard[prow][pcol], "newBoard[prow][pcol]", board,"pcBoard");
          setStore({ board: newBoard });
      },
      whoIsTheWinner: (board, row, col) => {
        //agregar el nombre del barco o del player no el row cuando pille un 4 agregara inmediatamente el nombre del barco o puede ser un counter. podrian haber 3 pcBoard y 4 playerBoard y este ultimo seria evaluado
        console.log("datos de who is the winner", board, row, col);

        let winner = null;
        let len = ships.length;
        let counter = {
          PcBoard: 0,
          PlayerBoard: 0,
        };

        board === PlayerBoard ? counter.PlayerBoard++ : counter.PcBoard++;

        counter.PcBoard === len ? (winner = "Pc") : (winner = "Player");
        alert(winner + " is the winner!");

        return winner;
      },
      changeUser: (user) => {
        user === "Player"
          ? setStore({ user: "Pc" })
          : setStore({ user: "Player" });
      },
      showEnemyShips: (coord, board) => {
        const { enemyShipsClass } = getStore();

        enemyShipsClass === "transparent border border-danger"
          ? setStore({ enemyShipsClass: "transparent" })
          : setStore({ enemyShipsClass: "transparent border border-danger" });
      },

      // whoIsTheWinner : (player, ships, shipState)=>{
      // 	// se le manda el player que tiene todos sus ships con shipState en 3, no habra empate porque el primero que
      // }	// complete los ships con 3, ganará
    },
  };
};

export default getState;

// shipAlign === "horizontal" || shipAlign === "diagonal" // col 7, row 7 col 7 = 7,7
//   ? 10 - shipLength
// : shipAlign === "vertical" && // row 7,
//   100 - shipLength * 10;
// : shipAlign === "diagonal" && 100 - ((shipLength * 11) - 10)    // para dos cifras sacar la primera como row y la segunda como col    resta el largo del barco de la fila o columna en la que va posicionado para que no se salga del tablero,




