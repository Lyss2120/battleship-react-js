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
          startPosition: null,
          name: "submarine",
          length: 3,
          taken: false,
          shipState: "miss",
        }, // coords: [[1,1],[1,2]], maxpos es 10 - el ancho del barco si es horizontal si el barco mide 5 =maxpos => 5
        {
          startPosition: null,
          name: "cruiser",
          length: 4,
          taken: false,
          shipState: "miss",
        }, // si es vertical 100 - el ancho del barco * 10 =maxpos => 50
        {
          startPosition: null,
          name: "battleship",
          length: 5,
          taken: true,
          shipState: "miss",
        }, // diagonal 100 - el ancho del barco * 11 =maxpos => 45
        {
          startPosition: null,
          name: "carrier",
          length: 5,
          taken: false,
          shipState: "miss",
        },
      ],
      takenShips: [],
      user: "Player",
      enemyShipsClass: "info bg-opacity-50",
      desdeElClickdata: {row:0, col:2, align:'horizontal'}
      // fire: false,
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
      start: () => {
        const store = getStore();
        // llama a place boards con cada tablero para poner dentro sus barcos
        // store.ships.map((ship) => {
        //   // console.log('store.PcBoard', ship.name);
        //   getActions().placeShips(store.PcBoard, ship);
        // });
        store.ships.map((ship) => {
          // console.log('store.PlayerBoard', ship.name);
          // getActions().validPosition(store.PlayerBoard, ship)
          getActions().placeShips(store.PlayerBoard, ship);
        });
      },
      placeShips: (board, ship)=>{
        const store = getStore()
        let newBoard = [...board];
        let maxPos = 10 - ship.length;
        let maxPosCoord = Math.floor(Math.random() * maxPos);
        let random = Math.floor(Math.random() * 10);
        let randAlign = Math.floor(Math.random() * 3);
        let row;
        let col;
        let align= randAlign === 0 ? 'horizontal': randAlign === 1 ? 'vertical': randAlign === 2 && 'horizontal';
        let valid;
        let takenShip = store.takenShips.includes(ship.name) //BUSCA el nombre de UN BARCO EN EL ESTADO TAKENSHIPS. boolean si es true ya esta tomado
        let desdeElClick = false
        desdeElClick? ( row=0, col=2, align='horizontal') : (row=random, col=maxPosCoord, align=align, console.log('desde el click es false', {maxPosCoord}, {maxPos}))//aqui el usuario tiene que tomar otra vez el barco y dejarlo en un lugar-.... en vez de la alerta iluminar en un color puede ser rojo qeu indique qeu no se pueden poner barcos ahí, y que eso indique que tiene que intentar otra vez     
        valid = getActions().validPosition(newBoard, ship, row, col, align)
      // valid? console.log({valid},ship.name): console.log('no valid', {valid}, ship.name);
      if(takenShip){
        // valid = !valid
        console.log(ship.name, {takenShip}, 'takenShip, esta tomado', {valid});
        } // si el barco existe avisar... borrar if despues de comprobar que no molesta al codigo de abajo
      if(!takenShip){//si el barco no se ha tomado antes asignarle coordenadas que las pasen validaciones
        console.log(ship.name, 'takenShip, no esta tomado', {takenShip}, {valid});

        // do {
        // align = randAlign === 0 ? 'horizontal': randAlign === 1 ? 'vertical': randAlign === 2 && 'horizontal';
        // align === 'horizontal'? (row= random, col= maxPosCoord) : (row= maxPosCoord, col= random );
        // console.log('nuevas coordenadas y align', row, col, align, ship.name, 'ahora valid es:',valid); //se le asignan nuevas coordenadas si no pasa las validaciones porque no encontro un espacio vacio para el length de su barco
        // } while (!valid)
      }
      //si valid con desdeelclick salio false o si desdeelclick no ha traido datos
      //   while(!valid){
      //   row= random;
      //   col= maxPosCoord;
      //   align= randAlign === 0 ? 'horizontal': randAlign === 1 ? 'vertical': randAlign === 2 && 'horizontal'
      // }
      },
//       placeShips2: (board, ship)=>{
//         const store = getStore()
//       //poner aqui clickPlaceShips? para que de aqui tome valid? o llamar a plaeShips desde squareClick? con row, col y align
//       // console.log(valid.row, valid.col, valid.align, 'paso valid', ship.name);
//       //si row, col y align existen es porque vienen de clickPlaceShips, sino se las otorga validPosition con random numbers
//       let newBoard = [...board];
//       let maxPos = 10 - ship.length;
//       let maxPosCoord = Math.floor(Math.random() * maxPos);
//       let random = Math.floor(Math.random() * 10);
//       let randAlign = Math.floor(Math.random() * 3);
//       let row;
//       let col;
//       let align;
//       let valid;
//       let takenShip = store.takenShips.find((item) => item.name === ship.name)
//       let desdeElClick = true
//       desdeElClick? (valid = getActions().validPosition(newBoard, ship, store.desdeElClickdata.row, store.desdeElClickdata.col, store.desdeElClickdata.align, console.log(store.desdeElClickdata.row, store.desdeElClickdata.col, store.desdeElClickdata.align, 'desdeelclckdata'))) : console.log('desde el click es false')//aqui el usuario tiene que tomar otra vez el barco y dejarlo en un lugar-.... en vez de la alerta iluminar en un color puede ser rojo qeu indique qeu no se pueden poner barcos ahí, y que eso indique que tiene que intentar otra vez     
//       valid? console.log({valid},ship.name): console.log('no valid', {valid}, ship.name);
//       if(takenShip !== undefined){
//         valid = !valid
//         console.log(ship.name, 'takenShip, esta tomado', {valid});
//         } // si el barco existe avisar... borrar if despues de comprobar que no molesta al codigo de abajo
//       if(!takenShip){//si el barco no se ha tomado antes asignarle coordenadas que las pasen validaciones
//         console.log(ship.name, 'takenShip, no esta tomado');
//       }
//         //si valid con desdeelclick salio false o si desdeelclick no ha traido datos
//       if(!valid || !desdeElClick){
//         console.log('no paso valid en el if', {valid}, 'desdeelclick es false', {desdeElClick})
//       }

      
      
      
      
//       //poner estos datos como un estado?..para no tener problemas con el lugar en el que se declara y llama a valid 

//       // console.log(valid); //boolean
//       // desdelclick puede ser un estado en el store que empiece en null a menos que se clickee para posicionar un barco y ahi se setee ese estado con algo o con un obj/array. con cada click distinto cambia el estado y de ahi se sacan las coords y align segun lo que haga el usuario
//       // que evalue si puede pasar valid con estas coords  o no y si no pasa usar el do while para asignarle otro lugar?? o mandar un mensaje para que el usuario lo haga hasta encontrar un lugar
//       // console.log('hacer algo al tener las coord desdelclick', {valid}, ship.name, row+','+col);
//       //si las coordenadas ya vienen desde el click tomarlas, tienen que venir aca desde alguna forma... puede ser desde el store..
//       // si el barco ya esta en takenship, y no paso valid porque ya esta tomado...      &&!valid para cuando venga con coordenadas desde el onclick
     
//     //  si desdeelchlick dio datos que no pasaron validposition o si no hay datos desde el click probar todas las veces necesarias hasta que valid pase
// +      //   row=0
//       //   col=1
//       //   align='horizontal'
//       //   console.log('hacer algo al tener las coord desdelclick', {valid}, ship.name, row+','+col);
//       //   do {
//       //   row=random;
//       //   col= maxPosCoord;
//       //   align= randAlign === 0 ? 'horizontal': randAlign === 1 ? 'vertical': randAlign === 2 && 'horizontal'
//       //   console.log('nuevas coordenadas y align', row, col, align, ship.name, 'valid es:',valid); //se le asignan nuevas coordenadas si no pasa las validaciones porque no encontro un espacio vacio para el length de su barco
//       // } while (!valid)
//       // }

//       // do {
//       //   row=random;
//       //   col= maxPosCoord;
//       //   align= randAlign === 0 ? 'horizontal': randAlign === 1 ? 'vertical': randAlign === 2 && 'horizontal'
//       //   console.log('nuevas coordenadas y align', row, col, align, ship.name, 'valid es:',valid); //se le asignan nuevas coordenadas si no pasa las validaciones porque no encontro un espacio vacio para el length de su barco
//       // } while (valid)
//     //}


//       // const valid = getActions().validPosition(board, ship, row, col, align)

//         // let row = valid.row 
//         // let col = valid.col 
//         // let align = valid.align

//         // if(align === 'horizontal' || align === 'diagonal'){
//         //  console.log('is horizontal or diagonal');
//         //   for (let i = 0; i < ship.length; i++) {
//         //     newBoard[row][col] = 1;
//         //     col ++
//         //   } 
//         // }
//         // else if(align === 'vertical' || align === 'diagonal'){
//         //   console.log('is vertical or diagonal');
//         //   for (let i = 0; i < ship.length; i++) {
//         //     newBoard[row][col] = 1;
//         //     row ++
//         //   }
        
//         // }
//     },
      clickPlaceShips: (board, ship, row, col)=>{
        const store = getStore()
        // *** ver como captar align de cada barco 
        console.log('hola');
        // align = store.flip ? 'vertical' : store.moreFliped ? 'diagonal' : 'horizontal'
        // getActions().validPosition(board, ship, row, col, align)
        // getActions().placeShips(board, ship)
      }, //traer las coordenadas al clickear, y tambien al clickear cambiar store.flip para traer align tmb, con eso verificar y enviar uno por uno los barcos a placeSHIPS, 
      validPosition: (newBoard, ship, row, col, align) => {
        const store = getStore();        
        if (col + length > 10) {
            let collenght= col + length
            console.log({collenght});
            //evita salirse del tablero y dar undefined por eso
            return false;
        } 
        else if (align === 'horizontal'){
            console.log({align});
            for(let i= 0; i < ship.length; i++){
                console.log('para', ship.name, 'from validposition', row+','+col, {align});            
                if(newBoard[row][col] !== 0){
                  console.log(ship.name, 'choco con algo',newBoard[row][col], row+','+col);
                  return false
                }                                         
                  newBoard[row][col] = 1;
                  col += 1
                  setStore({ board: newBoard })                               
            }
            setStore({ takenShips: [...store.takenShips,  ship.name ] })
            console.log('paso por takenshipssss ', ship.name, store.takenShips );
            return true
        }
        else if (align === 'vertical'){
            console.log({align});
            for(let i= 0; i < ship.length; i++){
                console.log('para', ship.name, 'from validposition', row+','+col, {align});
                if(newBoard[row][col] !== 0){
                  console.log(ship.name, 'choco con algo',newBoard[row][col], row+','+col);
                  return false
                }  
                // no reconoce el return false cdo choca con algo
                  newBoard[row][col] = 1;
                  row += 1
                  setStore({ board: newBoard })               
            }
            setStore({ takenShips: [...store.takenShips,  ship.name ] })
            console.log('paso por takenshipssss ', ship.name, store.takenShips ); 
            return true
        }
      },
      squareClick: (board, row, col) => {
        const store = getStore();

        let newBoard = [...board];

        board[row][col] === 0
          ? getActions().clickPlaceShips(board, ship, row, col, align) //poner un barco en esa posicion, para despues con un loop pasar esta funcion a cada barco
          : board[row][col] < 3
          ? getActions().fireTorpedoPrompt() //disparar en esta posición, asegurar que solo sea en el tablero de pc y el turno de player. cuando le toque a pc hara fireTorpedo en random position
          : board[row][col] === 4 &&
            getActions().whoIsTheWinner(board, row, col); //guarda todos los barcos que estan en 4 solo se pone en 4 si el barco entero se hundio. guarda los barcos hundidos de cada board y si uno tiene todos sus barcos en 4 es el perdedor  y automaticamente el dueño del otro tablero gana tiene que recibir player board y sus ships?
      },
      fireTorpedo: (board, row, col) => {
        console.log(board, row, col, "fire");
        // let shipState = ships[pos].shipState
        const newBoard = [...board]; //si los datos existen usarlos, sino pedirlos con un prompt
        console.log(board[row][col]);

        row ? board[row][col] === 0
              ? (newBoard[row][col] = 4)
              : board[row][col] < 4 &&
                (newBoard[row][col]++, setStore({ board: newBoard }))
        : getActions().fireTorpedoPrompt();
//existe row ? sino llamar a prompt. si existe row, es igual a 0? se cambia a miss o 4, si no es 0 y es menor a 4 se aumenta en 1 su estado, a hit o sunken segun el estado que ya tenia
        // shipState ++ si el contenido del bloque es 3 se agrega a sunkenShips
        // seStore({ sunkenShips : [...sunkenShips], {player: player, board: board, name: ship.name}})
      },
      fireTorpedoPrompt: () => {
        const { PcBoard } = getStore();

        let prow = parseInt(prompt("Type a coord x"));
        let pcol = parseInt(prompt("Type a coord y"));
        let board = PcBoard;
        const newBoard = [...board];

        board[prow][pcol] === 0
          ? (newBoard[prow][pcol] = 4)
          : board[prow][pcol] < 4 && newBoard[prow][pcol]++; // Si esta en 0 empty es un 4 miss si esta en 1 suma disparos hasta el 3 que ya es hundido (tiene que ponerse en 3 automaticamente al disparar alultimo cuadrado del barco)

        console.log(
          newBoard[prow][pcol], "newBoard[prow][pcol]", board,"pcBoard");
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




// validPosition: (board, ship, row, col, total, shipAlign) => {
//   let newBoard = [...board];
//   let sobran = 10 - total;
//   let maxPos = 10 - ship.length;
//   let row2 = shipAlign === "vertical" || shipAlign === "diagonal"
//       ? Math.floor(Math.random() * maxPos)
//       : Math.floor(Math.random() * 10); //vertical solo pueden llegar hasta la row maxpos, col puede ser cualquiera.. encuentra la primera en 0 pero si durante el length se topa con otro no revisa aun 
//   let col2 = shipAlign === "horizontal" || shipAlign === "diagonal"
//       ? Math.floor(Math.random() * maxPos)
//       : Math.floor(Math.random() * 10);

//   console.log('entrando a validPosition', ship.name);

//   if (newBoard[row][col] !== 0 && total > 10) {row = row2, col = col2}

//    if(!ship.taken){
//     console.log(ship.name, ship.taken);
//   if (newBoard[row][col] === 0 && total <= 10) {
//       if (shipAlign === 'horizontal' || shipAlign === 'diagonal') {
//             for (let i = 0; i < ship.length; i++) {
//               if (newBoard[row][col + i] === 0) {
//                 console.log('vacio');
//                 // return false;
//               }
//             }
//       } else if (shipAlign === 'vertical' || shipAlign === 'diagonal') {
//             for (let i = 0; i < ship.length; i++) {
//               if (newBoard[row + i][col] === 0) {
//                 console.log('vacio');
//                 // return false;
//               }
//             }
//       } 
//     }  
//       return true;
//    };
  

// },
// placeShips: (board, ship) => {
//   const store = getStore();

//   let newBoard = [...board];
//   let shipLength = ship.length;

//   let randAlign = Math.floor(Math.random() * 3);
//   let shipAlign =
//     randAlign === 0
//       ? "horizontal"
//       : randAlign === 1
//       ? "vertical"
//       : randAlign === 2 && "diagonal";

//   let maxPos = 10 - shipLength;
  
//   let row =
//     shipAlign === "vertical" || shipAlign === "diagonal"
//       ? Math.floor(Math.random() * maxPos)
//       : Math.floor(Math.random() * 10); //vertical solo pueden llegar hasta la row maxpos, col puede ser cualquiera.. encuentra la primera en 0 pero si durante el length se topa con otro no revisa aun 
//   let col =
//     shipAlign === "horizontal" || shipAlign === "diagonal"
//       ? Math.floor(Math.random() * maxPos)
//       : Math.floor(Math.random() * 10); //horizontal solo puede llegar hasta la col maxpos, row cualquiera. diagonal solo puede llegar maxpos en row y col ej barco de length 3 solo llega hasta 7,7
//   let total = row + shipLength; //la posicion en la que empieza + el largo del barco 
//   let total2 = col + shipLength; //la posicion en la que empieza + el largo del barco 

//   // getActions().validPosition(board, ship, row, col, total) 
// //   newBoard[row][col] !== 0 ?
// //   console.log('nop', newBoard[row][col], row+','+col, shipLength, ship.name)}
// //  : console.log('exito', newBoard[row][col], row+','+col)
//   if (getActions().validPosition(board, ship, row, col, total, total2, shipAlign) === true) {
//     console.log('yes', newBoard[row][col], row+','+col, shipLength, ship.name)

//     for (let i = 0; i < shipLength; i++) {
//       // console.log(ship.name, newBoard[row][col]);
//       newBoard[row][col] = ship.name;
//       shipAlign === "diagonal"
//         ? (row++, col++) 
//         : shipAlign === "horizontal"
//         ? col++
//         : shipAlign === "vertical" && row++ 
//     }
//     setStore({ board: newBoard });
//     setStore({ ships : [ { taken: true } ] });
//   } else getActions().validPosition(board, ship, row, col, total, shipAlign)
//   console.log(store.ships);

// },