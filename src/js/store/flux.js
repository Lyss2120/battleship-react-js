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
      selfAlign: {},
      flip: 'horizontal',
      // gameBoard: [0= empty, 1 = ship, 2 = shoot, 3= sunken, 4= miss],
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
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ],
      PcBoard: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
      // ships2: [
      //   {
      //     name: "submarine",
      //     color: "Orchid",
      //     length: 3,
      //     setPcBoard: false,
      //     pcBoard: {
      //       taken: false,
      //       coords: [],
      //       shipState: 0,
      //     },
      //     setPlayerBoard: false, //cambiar a true cuando esten puestos en el respectivo tablero
      //     playerBoard: {
      //       taken: false,
      //       coords: [],
      //       shipState: 0,
      //     },
      //   }, // coords: [[1,1],[1,2]], maxpos es 10 - el ancho del barco si es horizontal si el barco mide 5 =maxpos => 5
      //   {
      //     name: "destroyer",
      //     color: "HotPink",
      //     length: 4,
      //     setPcBoard: false,
      //     pcBoard: {
      //       taken: false,
      //       coords: [],
      //       shipState: 0,
      //     },
      //     setPlayerBoard: false, //cambiar a true cuando esten puestos en el respectivo tablero
      //     playerBoard: {
      //       taken: false,
      //       coords: [],
      //       shipState: 0,
      //     },
      //   }, // si es vertical 100 - el ancho del barco * 10 =maxpos => 50
      //   {
      //     name: "battleship",
      //     color: "IndianRed",
      //     length: 5,
      //     setPcBoard: false,
      //     pcBoard: {
      //       taken: false,
      //       coords: [],
      //       shipState: 0,
      //     },
      //     setPlayerBoard: false, //cambiar a true cuando esten puestos en el respectivo tablero
      //     playerBoard: {
      //       taken: false,
      //       coords: [],
      //       shipState: 0,
      //     },
      //   }, // diagonal 100 - el ancho del barco * 11 =maxpos => 45
      //   {
      //     name: "carrier",
      //     color: "Salmon",
      //     length: 5,
      //     setPcBoard: false,
      //     pcBoard: {
      //       taken: false,
      //       coords: [],
      //       shipState: 0,
      //     },
      //     setPlayerBoard: false, //cambiar a true cuando esten puestos en el respectivo tablero
      //     playerBoard: {
      //       taken: false,
      //       coords: [],
      //       shipState: 0,
      //     },
      //   },
      // ],
      ships: [
        {
          name: "submarine",
          color: "Orchid",
          taken: false,
          flip: 'horizontal',
          length: 3,
          // align:null, //ponerlo en null o solo agregarlo despues al seleccionar manualmente o con random align
          coords: [],
          shipState: 1,
          setPlayerBoard: false, //cambiar a true cuando esten puestos en el respectivo tablero
          setPcBoard: false,
        },
        {
          name: "destroyer",
          color: "HotPink",
          taken: false,
          flip: 'horizontal',
          length: 4,
          coords: [],
          shipState: 1,
          setPlayerBoard: false, //cambiar a true cuando esten puestos en el respectivo tablero
          setPcBoard: false,

        },
        {
          name: "battleship",
          color: "IndianRed",
          taken: false,
          flip: 'horizontal',
          length: 5,
          coords: [],
          shipState: 1,
          setPlayerBoard: false, //cambiar a true cuando esten puestos en el respectivo tablero
          setPcBoard: false,

        },
        {
          name: "carrier",
          color: "Salmon",
          taken: false,
          flip: 'horizontal',
          length: 5,
          coords: [],
          shipState: 1,
          setPlayerBoard: false, //cambiar a true cuando esten puestos en el respectivo tablero
          setPcBoard: false,
        },
      ],
      desdeElClick: false,
      user: "Player",
      enemyShipsClass: "success bg-opacity-50",
      ShipsClass: "warning bg-opacity-50",
      takenShipPC: [],
      takenShipPlayer: [],
      desdeElClickdata: { row: 0, col: 2, align: 'horizontal' },
      selectedShip: {},
      shipStatePlayer:[1, 1, 1, 1],//cambiar de nro cada posicion segun el barco correspondiente y si estan en 'sunken' ponerlo en string
      shipStatePc:[1, 1, 1, 1],
      fire: false, //nose si ocupe este estado // si todos los squares del barco estan en fire se cambia el shipState dentro de ship a sunk, si son menos el shipState queda en hit pero cada square puede cambiar su apariencia para mostrar los squares golpeados
      sunken: false,//nose si ocupe este estado //si shipState esta en 3 se activa sunken para cambiar la apariencia del barco o todos sus squares.. si no se puede acceder en el componente a las propiedades de cada barco dentro de ships

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
      randomNumber: (maxNum) => {
        return Math.floor(Math.random() * maxNum)
      },
      changeUser: (user) => {
        user === "Player" ? setStore({ user: "Pc" }) : setStore({ user: "Player" });
      },
      inicio: () => {
        const store = getStore();

        getActions().start(store.PcBoard)
        //se posicionan los barcos de Pc
        alert('elige un barco o presiona start para random position')
        //Posicionar los barcos manualmente o con el boton start para hacerlo automatico 
      },//start es para cuando no se quiere elegir los barcos y posicionarlos manualmente, ahi se cargan los dos tableros automaticamente sino uno solo
      //playerboardl y tkenshi8ps no estandefinidos
      start: (arg) => {
        const store = getStore();
        // llama a place boards con cada tablero para poner dentro sus barcos// 
        let board = arg
        // ? arg  : store.PcBoard 

        store.ships.map((ship) => {
          // console.log('store.PlayerBoard', ship.name);
          let row = getActions().randomNumber(10)
          let col = getActions().randomNumber(10)
          let randAlign = getActions().randomNumber(3)
          let align = randAlign === 0 ? 'horizontal' : randAlign === 1 ? 'vertical' : randAlign === 2 && 'diagonal';
          let takenShipPC = store.takenShipPC.includes(ship.name)
          let takenShipPlayer = store.takenShipPlayer.includes(ship.name)
          // let takenShipPC = ship.pcBoard.taken
          // let takenShipPlayer = ship.playerBoard.taken //booleano//crear shipspc shipsplayer?      

          if (takenShipPC && takenShipPlayer) {
            console.log('barcos posicionados en tablero pc', { takenShipPC }, { takenShipPlayer });
            return
          }
          // if (takenShipPlayer) {
          //   console.log('barcos posicionados en tablero player', { takenShipPC }, { takenShipPlayer });
          //   return
          // }
          // console.log( {takenShipPC},{takenShipPlayer},'takenShip start');


          // replicar esto en una funcion para posicionar los barcos manualmente
          while (!getActions().handleValidPosition(board, ship, row, col, align)) {
            row = getActions().randomNumber(10),
            col = getActions().randomNumber(10),
            randAlign = getActions().randomNumber(3)
            // console.log('nuevas coordenadas', row,col, randAlign);
          } //validando     

          if (getActions().handleValidPosition(board, ship, row, col, align)) {
            getActions().handleSetBoard(board, ship, row, col, align)
          }
        });
      },//mapea y es da row y col
      manualPlaceShips:(ship, row, col, align)=>{

      },
      selectedShip: (ship) => {
        const store = getStore();

        setStore({ selectedShip: ship })
        // console.log(ship.name, store.selectedShip, store.ships)
      },
      handleFreeCoords: (board, ship, row, col, align) => {
        const store = getStore()
        let valid = true

        for (let i = 0; i < ship.length; i++) {
          board[row][col] !== 0 && (// console.log(ship.name, row, col, board[row][col], 'choco'),
            valid = false)
          align === 'vertical' ? row++ : align === 'horizontal' ? col++ : (row++, col++)
        }
        return valid
      },//revisa que [row][col] esté libre 
      handleValidPosition: (board, ship, row, col, align) => {
        // validando
        let valid = true

        if (align === 'horizontal') {
          if (col + ship.length > 10) {// console.log(ship.name, ship.length,'se sale del tablero', row+','+col, align);
            valid = false
          } else valid = getActions().handleFreeCoords(board, ship, row, col, align)
        }
        if (align === 'vertical') {
          if (row + ship.length > 10) { // console.log(ship.name, ship.length,'se sale del tablero', row+','+col, align);
            valid = false
          } else valid = getActions().handleFreeCoords(board, ship, row, col, align)
        }
        if (align === 'diagonal') {
          if (col + ship.length > 10 || row + ship.length > 10) {// console.log(ship.name, ship.length,'se sale del tablero', row+','+col, align);
            valid = false
          } else valid = getActions().handleFreeCoords(board, ship, row, col, align)
        }

        return valid
      },//revisa que no se salga del tablero
      handleShipData: (newShip, row, col, func, board, changeMe = null) => {
        const store = getStore()

        func === 'handleSetBoard' ?
          (
            // board === store.PcBoard ? newShip.setPcBoard = true : newShip.setPlayerBoard = true,
            // board === store.PcBoard ?( newShip.setPcBoard = true, console.log(newShip.setPcBoard, 'pcBoard')) : ( newShip.setPlayerBoard = true, console.log(newShip.setPlayerBoard, 'playerBoard')),

            board === store.PcBoard ? newShip.setPcBoard = true : (newShip.setPlayerBoard = true, console.log(newShip.setPlayerBoard, 'playerBoard')),
            newShip.coords = [...newShip.coords, [row, col]], //verificar que no se repitan las cooords
            newShip.taken = true,
            newShip.shipState = 1

            //   (newShip.setPcBoard = true,
            // board === store.PcBoard ?
            //   (newShip.setPcBoard = true,
            //     newShip.PcBoard.coords = [...newShip.PcBoard.coords, [row, col]], //verificar que no se repitan las cooords
            //     newShip.PcBoard.taken = true,
            //     newShip.PcBoard.shipState = 1)
            //   :
            //   (newShip.setPlayerBoard = true,
            //     newShip.PlayerBoard.coords = [...newShip.PlayerBoard.coords, [row, col]], //verificar que no se repitan las cooords
            //     newShip.PlayerBoard.taken = true,
            //     newShip.PlayerBoard.shipState = 1)
          )
          : func === 'flipShips' ?
            (
              newShip.flip = changeMe,
              console.log(board, 'prueba')
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
        let newShips = [...store.ships]
        let newShip = ship
        let takenShip = newShips.includes(newShip)

        for (let i = 0; i < ship.length; i++) {
          if (newBoard[row][col] !== 0) { console.log(newBoard[row][col], 'newBoard[row][col] !==0, en handleSetBoard') }
          newShip = getActions().handleShipData(newShip, row, col, 'handleSetBoard', board)//enviar esto mismo con una funcion para hacerlo uno por uno
          // newShip.coords = [...newShip.coords, [row,col]], 
          // newShip.taken = true,
          // newShip.shipState = 3, 

          // newBoard[row][col] = 1
          newBoard[row][col] = ship
          // + ship.name.at(0)
          align === 'vertical' ? row += 1 : align === 'horizontal' ? col += 1 : (row += 1, col += 1)
        }
        // !takenShip ? newShips.push(newShip) : console.log('encontrado', {takenShip}, newShip.name, newShip.taken); 
        // si el barco no esta tomado se agrega newship modificado a newships y abajo se controla que no se puedan repetir los barcos por lo que el nuevo barco agregado reemplaza al anterior
        !takenShip && newShips.push(newShip)


        //en vez de llenar con unos tiene que estar ligado a los barcos/ ship.name por ej, y de ahi cada ship estara en cada espacio

        // se duplica el proceso for porque esta agregando los  ships por cada tablero y los setea como si fueran mas de 4, arreglar eso para que en vez de agregarlos les cambie sus propiedades y les ponga si es pcboard o playerboard// setear true cada tablero cuando tenga todos sus barcos posicionados. cada ship deberia tener los 2 tableros en true
        //hacer otro array de ships?? o cambiar propipedades dentrto de ship, como pcrow pccol pcAlign etc
        // console.log('fin del for', { newShips }, { board })
        //cambiar el takenSHip que dependa de ships.(board).taken
        board === store.PcBoard ?
          setStore({ takenShipPC: [...store.takenShipPC, ship.name], board: newBoard, ships: newShips })
          :
          setStore({ takenShipPlayer: [...store.takenShipPlayer, ship.name], board: newBoard, ships: newShips })

      },//setea el tablero
      handleClickPlaceShips: (board, ship, row, col) => {
        const store = getStore()

        let align = store.flip ? 'vertical' : store.moreFliped ? 'diagonal' : 'horizontal'

        while (!getActions().handleValidPosition(board, ship, row, col, align)) {
        }  //validando     
        // console.log(':)', getActions().handleValidPosition(store.PlayerBoard, ship, row, col, align), ship.name, row, col, align)

        if (getActions().handleValidPosition(store.PlayerBoard, ship, row, col, align)) {
          setStore({ takenShips: [...store.takenShips, ship.name] })
          getActions().handleSetBoard(store.PlayerBoard, ship, row, col, align)
        }

        // *** ver como captar align de cada barco... con estado? ver version anterior con flip
        // console.log('clickplaceShips');
        // getActions().placeShips(board, ship, row, col)
      }, //traer las coordenadas al clickear, y tambien al clickear cambiar store.flip para traer align tmb, con eso verificar y enviar uno por uno los barcos a placeSHIPS, 

      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
      setSelectedShip: (e, ship) => {
        const store = getStore()
        // setea selectedship al levantar el barco

        setStore({ selectedShip: ship }),// SETEA selectedShip como el ship qeu se tomo, con eso usar selectedship para modificar su align y despues en dragover su row y col
          console.log('dragStart ship', ship.name, 'SELECTED', store.selectedShip, e.target)
      },
      flipShips: (ship) => {
        const { flip, selfAlign } = getStore();
        const store = getStore();
        console.log({ship});

        // segun el align del barco en options cambiar el align de los ships//prepara el barco con su align para ponerle las coordenadas en la sigte funcion donde habra que seleccionar el tablero de player.
        let newFlip = flip

        newFlip === 'horizontal' ? newFlip = 'vertical' :
          newFlip === 'vertical' ? newFlip = 'diagonal' :
            newFlip === 'diagonal' ? newFlip = 'horizontal' :
              console.log('error con flip');

        setStore({ flip: newFlip, selfAlign: { shipName: ship.name, align: flip }})

        console.log('kkkkk',{ newFlip }, {selfAlign}, { flip }, ship.name, 'yess');
        // newflip es un estilo de css paara el componente ship en shipcontainer y cambia el align de los barcos podria usar selfalign true para avisar en la funcion de start que ya trae su align o en placeships
        //en componente board mostrar un square normaal o un ship con su forma css segun si hay o no barco en board[i][j], en squar4e recibir el info del ship y moostrar su color segun su sipstate qu7e se modifica con handleshipdata  cada vez que se dispara. tmb con eso marcar los disparos al agua como miss 
      },
      handleDrop: (e, ship, row, col) => {
        const { flip, selectedShip, selfAlign} = getStore();
        const store = getStore();
        
        selfAlign.shipName === ship.name ? 
        (
          console.log('handleDrop', e.target, { flip }, selectedShip, selfAlign, row, col),
          setStore({ selfAlign: { shipName: ship.name, align: flip, row: row, col: col } })
        )
        : 
        (
          console.log('selfalignl vacio', {selfAlign}),
          setStore({ selfAlign: { ...selfAlign, coords:[row,col] } })
        )
        
        //   (console.log('selfAlign === {}', selfAlign), 
        // : 
        //   (console.log({selfAlign}), 
        //recolecta el row y col mas el align que pudo o no haber sido cambiado antes de onDrop
        //usar estados selectedShip y selfAlign con setBoard par modificar el barco seleccionado con los datos de selfalign
      },
      manualPlaceShips2:()=>{
        const { selectedShip, selfAlign, PlayerBoard, ships } = getStore();
        const { shipName, row, col, align} = selfAlign
       
        let newBoard = [...PlayerBoard]
        let newShips = [...ships]
        let ship = selectedShip
        let newShip = ship
        let takenShip = newShips.includes(newShip)

        // juntarloss
        ship.name === shipName && 
          console.log( ship.name) 

          while (!getActions().handleValidPosition(newBoard, ship, row, col, align)) {
            align === 'vertical' ? row += 1 : align === 'horizontal' ? col += 1 : (row += 1, col += 1)
            console.log('nuevas coordenadas en manualPlaceShips2', row, col, align)
            // manejar cdo se salga del tablero que reste o empiece de arriba o simplemente de un mensaje de poner el barco en otro lugar
          }
          // si es true llamar a set board y modificarlo para cdo se le pase un solo barco?
         getActions().handleValidPosition(newBoard, ship, row, col, align) ? 
          (
              newBoard[row][col] !== 0 ? 
                console.log(newBoard[row][col], 'newBoard[row][col] !==0, en handleSetBoard')
              :
                newShip = getActions().handleShipData(ship, row, col, 'handleSetBoard', newBoard),//enviar esto mismo con una funcion para hacerlo uno por uno
                newBoard[row][col] = ship,
                align === 'vertical' ? row += 1 : align === 'horizontal' ? col += 1 : (row += 1, col += 1),
                !takenShip && newShips.push(newShip)
            )
          : console.log('fallo manualPlaceShips2');

        setStore({ takenShipPlayer: [...store.takenShipPlayer, ship.name], board: newBoard, ships: newShips })
      },
      handleClick: (board, row, col) => {
        const { user, selectedShip } = getStore();
        let newBoard = [...board];
        let board2 = user === "Player" ? "Pc" : "Player" //para firetorpedo
        let ship = selectedShip

        console.log(newBoard[row][col], 'handleClick');

        // if (newBoard[row][col]=== 0){
        takenShips.length < 4 ?
          // (avisar para poner los barcos automaticamente si takenships es 0 o manual si es mayoro a 0. si es 4  firetorpedo modificara el shipstate de 1 a 2 y si los length espacios del barco estan en 2 automaticamnete seconvierte a 3?? o subir hasta el length y si lo completa cambia lo que signifiqeu sunken
          // en winner revisar el estado de todos los barcos con un map y si todos los barcos del usuario estan en shipstate sunken es el ganador. para esto puede ser necesario separar los arrays. o al disparar crear otra variable qeu refleje el shipstate de cada barco en cada usuario
          // console.log('takenShips < 4',{takenShips}, {ship}) 
          getActions().handleSetBoard(board, ship, row, col, 'horizontal') //sacar el align de cada barco// si takenships es menor a 4 es porque faltan barcos por posicionar en el tablero
          : takenShips.length === 4 ?
            getActions().firetorpedo(board2, row, col) //console.log('takenShips === 4',{takenShips}), dispara al 0//manejar lo de los tableros.. si es turno de player dispara a pc y viceversa
            : console.log('whatsss') //si es 0 llamar place ships si takenships esta lleno (tiene que tener 4 barcos) y ya se pusieron todos los barcos y puede disparar sería miss pq rowcol es 0
        // }//si estas coordenadas coinciden con las ship.coords de algun barco en store.ships significa que hay un barco .... usar esto para pner barcos como componente tmb


        // if (newBoard[row][col]!==0){
        //   takenShips.length < 4 ? handleSetBoard(board, row, col, align)
        //   :takenShips.length === 4 ? firetorpedo(board, row, col, align)
        // }//si no es igual a cero verificar que los barcos esten posicionados con takenShip.length en 4. si no es 4 no estan todos en takenship llamar a handleSetBoard
        // if (newBoard[row][col]===3){

        // }// ver el barco al que pertenece este square y verificar que los demas esten en 3 para mandarlo a whoisthewinner()

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
        console.log(board[row][col], 'fire');
//clckeando el tablero
// si board es 0 es miss y se colorea diferente con efecos en CSS. si es ship ver el shipstate si es menor al shiplength sumar si es igual poner el shipstate en sunken, setear shipstateuser tmb con cada barco en su posicion
// si esta en sunken ya no se puede disparar en el mismo lugar usar un return y alert o mensaje de disparar en otro lado
//         

//si estas coordenadas coinciden con las ship.coords de algun barco en store.ships significa que hay un barco .... usar esto para pner barcos como componente tmb
        // 4 = 'miss', actualiza el valor de row
        //existe row ? sino llamar a prompt
        // row ? 
        // board[row][col] === 0 ? (newBoard[row][col] = 4)
        // : board[row][col] < 3 && (newBoard[row][col]++, setStore({ board: newBoard }))
        // : getActions().fireTorpedoPrompt();

        // ship.map((item, i)=>{

        // })

        // . si existe row, es igual a 0? se cambia a miss o 4, si no es 0 y es menor a 4 se aumenta en 1 su estado, a hit o sunken segun el estado que ya tenia
        // shipState ++ si el contenido del bloque es 3 se agrega a sunkenShips
        // seStore({ sunkenShips : [...sunkenShips], {player: player, board: board, name: ship.name}})
      },//en proceso
      fireTorpedoPrompt: () => {
        const { PcBoard, ships } = getStore();

        //presionando el boton fire
        // pedir coordenadas con prompt y hacer lo mismo de arriba modificando shipstate en los barcos y seteando de acuerdo a eso shipstate user
        let prow = parseInt(prompt("Type a coord x"));
        let pcol = parseInt(prompt("Type a coord y"));
        let board = PcBoard;
        const newBoard = [...board];
        let newShips = [...ships]

        board[prow][pcol] === 0
          ? (newBoard[prow][pcol] = 4)
          : board[prow][pcol] < 4 && newBoard[prow][pcol]++; // Si esta en 0 empty es un 4 miss si esta en 1 suma disparos hasta el 3 que ya es hundido (tiene que ponerse en 3 automaticamente al disparar alultimo cuadrado del barco)

        for (let i = 0; i < ships.length; i++) {
          if ([prow][pcol] === newShips[i].coords) {
            console.log(newShips[i].name, newShips[i].coords);
          }

          // newBoard[prow][pcol]===3 ?
          // console.log('3', newBoard[prow][pcol]): console.log('menor a 3', newBoard[prow][pcol]);
        }//sber si le dio a un barco. y cual
        // console.log(
        //   newBoard[prow][pcol], "newBoard[prow][pcol]", board,"pcBoard");
        setStore({ board: newBoard });
      },//en proceso
      //aun no esta listo// whoIsTheWinner: (board, row, col) => {
      //   //agregar el nombre del barco o del player no el row cuando pille un 4 agregara inmediatamente el nombre del barco o puede ser un counter. podrian haber 3 pcBoard y 4 playerBoard y este ultimo seria evaluado
      //   console.log("datos de who is the winner", board, row, col);

      //   let winner = null;
      //   let len = ships.length;
      //   let counter = {
      //     PcBoard: 0,
      //     PlayerBoard: 0,
      //   };

      //   board === PlayerBoard ? counter.PlayerBoard++ : counter.PcBoard++;

      //   counter.PcBoard === len ? (winner = "Pc") : (winner = "Player");
      //   alert(winner + " is the winner!");

      //   return winner;
      // },
      showEnemyShips: (coord, board) => {
        const { enemyShipsClass } = getStore();

        enemyShipsClass === "transparent border border-danger"
          ? setStore({ enemyShipsClass: "transparent" })
          : setStore({ enemyShipsClass: "transparent border border-danger" });
      },//listo solo muestra los barcos enemigos cambiando el estilo segun el estado
      whoIsTheWinner : (player, ships, shipState)=>{
        // revisar los estados shipStatePlayer y shipStatePc cdo alguno de los dos llegue a sunken el otro gana
      	// se le manda el player que tiene todos sus ships con shipState en 3, no habra empate porque el primero que
      }	// complete los ships con 3, ganará
    },
  };
};

export default getState;





