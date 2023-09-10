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
      board: [
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
      ships: [
        {
          name: "submarine",
          color: "Orchid",
          taken: false,
          align: 'horizontal',
          length: 3,
          fire: [],
          coords: [],
          shipState: 1,
        },
        {
          name: "destroyer",
          color: "HotPink",
          taken: false,
          align: 'horizontal',
          length: 4,
          fire: [],
          coords: [],
          shipState: 1,

        },
        {
          name: "battleship",
          color: "IndianRed",
          taken: false,
          align: 'horizontal',
          length: 5,
          fire: [],
          coords: [],
          shipState: 1,

        },
        {
          name: "carrier",
          color: "Salmon",
          taken: false,
          align: 'horizontal',
          length: 5,
          fire: [],
          coords: [],
          shipState: 1,
        },
      ],
      lightSquare: { color: 'null', coords: [] },
      desdeElClick: false,
      user: "",
      enemyShipsClass: "success bg-opacity-50",
      ShipsClass: "warning bg-opacity-50",
      selfAlign: {},
      flip: 'horizontal',
      shipsPc: [],//array con los ships de cada jugador
      shipsPlayer: [],//usar como taken ship tmb y ver si el barco ya se ha incluido aca o no 
      desdeElClickdata: { row: 0, col: 2, align: 'horizontal' },
      selectedShip: {},
      misscoords: [],
      shipStatePlayer: 0,//cambiar de nro cada posicion segun el barco correspondiente y si estan en 'sunken' ponerlo en string
      shipStatePc: 0,
      coordsArrayPc:[],
      coordsArrayPlayer:[],

      fire: false, //nose si ocupe este estado // si todos los squares del barco estan en fire se cambia el shipState dentro de ship a sunk, si son menos el shipState queda en hit pero cada square puede cambiar su apariencia para mostrar los squares golpeados
      sunken: false,//nose si ocupe este estado //si shipState esta en 3 se activa sunken para cambiar la apariencia del barco o todos sus squares.. si no se puede acceder en el componente a las propiedades de cada barco dentro de ships
      winner: ''
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
      empezar : () => {
        //  debe empezar el juego , asegurar que los tableros esten en 0s, setear los barcos en PcBoard y pedir setear los barcos en PlayerBoard 
        //  cuando los tableros esten con sus barcos setear el user/turno a 'player' para que de el primer tiro dar un aviso quiza de empezar con click o boton fire
        //  al dar el primer tiro se debe activar nuevamente el turno cambiandolo a !user puede ser en una pequeña funcion aparte o dentro de firetorpedo 
        //  y llamar a la funcion randomfire por pc ... esta función podria llamar a randomfire segun el user...? si es pc llamar a random fire que llamará a firetorpedo con sus randomcoords
        //  cuando firetorpedo encuentre el winner se deberia bloquear firetorpedo y preguntar si quiere volver a jugar para activar esta funcion nuevamente 
        //evitar que se posicionen los barcos por segunda vez
        const store = getStore()
        
        store.winner ? setStore({ PlayerBoard : board, PcBoard : board }) // dejar los tableros en 0
        :
      ( getActions().start(store.PcBoard),//setear los barcos de pc
          PcBoard !== board ? // cuando esten seteados pedir setear los de player
        ( alert('setea los barcos'),//setear los barcos de player
          store.PlayerBoard !== store.board ? //si estan seteados
          (setStore({user : 'Player'}), alert('your turn to fire'))//cambiar el user / avisar que player dispare // cuando player dispare cambiara el user si el user es pc se llama a randomfire cdo randomfire dispare con firetorpedo se cambia denuevo user y le toca a player hasta que haya un winner y se vuelva a empezar 

          :
          null 
        )
        :
        null
      )

      //revisar que todo funcione, corregir fallas que puedan aparecer.. revisar y probar..luego css
      },
      randomNumber: (maxNum) => {
        return Math.floor(Math.random() * maxNum)
      },
      changeUser: () => {
        const store = getStore()

        store.user === "Player" ? setStore({ user: "Pc" }) : setStore({ user: "Player" });
      },
      start: (arg) => {
        const store = getStore();
        //start es para cuando no se quiere elegir los barcos y posicionarlos manualmente, ahi se cargan los dos tableros automaticamente sino uno solo
        // llama a place boards con cada tablero para poner dentro sus barcos// //mapea los barcos los posiciona y les da row y col
        let board = arg
        // ? arg  : store.PcBoard 

        store.ships.map((ship) => {
          let row = getActions().randomNumber(10)
          let col = getActions().randomNumber(10)
          let randAlign = getActions().randomNumber(3)
          let align = randAlign === 0 ? 'horizontal' : randAlign === 1 ? 'vertical' : randAlign === 2 && 'diagonal';
          let takenshipsPc = store.shipsPc.find(item => item.name === ship.name)//ship.name o ship
          let takenshipsPlayer = store.shipsPlayer.find(item => item.name === ship.name)
          // let shipsPc = ship.pcBoard.taken
          // let shipsPlayer = ship.playerBoard.taken //booleano//crear shipspc shipsplayer?      

          if (takenshipsPc && takenshipsPlayer) {
            console.log('barcos posicionados en tablero pc', { shipsPc }, { shipsPlayer });
            return
          }

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
      },//mapea los barcos los posiciona y les da row y col
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
      handleShipData: (newShip, row, col, func, board, align = null) => {
        const store = getStore()

        func === 'handleSetBoard' ?
          (
            board === store.PcBoard ? newShip.setPcBoard = true : (newShip.setPlayerBoard = true, console.log(newShip.setPlayerBoard, 'playerBoard')),
            newShip.coords = [...newShip.coords, [row, col]], //verificar que no se repitan las cooords
            newShip.taken = true,
            newShip.align = align,
            newShip.shipState = 1
          )
          : func === 'flipShips' ?
            (
              newShip.flip = changeMe,
              console.log(board, 'prueba')
            )
            : func === 'clickPlaceShips' ?
              (newShip.coords = [...newShip.coords, [row, col]], //verificar que no se repitan las cooords
                newShip.shipState = 1,
                newShip.taken = true,
                console.log('HandleShipData!!', newShip.name, 'taken', newShip.taken, 'state', newShip.shipState)//con esto se tiene que setear un newShips copia de ships en shipsPlayer. shipsPs se setea automaticamente con handleSetBoard
              )
              : func === 'fireTorpedo' ?
              (
                //al disparar se agrega esta coord al array de coords 'fire' dentro del barco enviado
                //si el largo del array fire es igual al largo del array de coordenadas es porque todas las coords del barco han sido disparadas
                //si es asi se aumenta a 2 el estado de este barco, osea a 'sunk', 
                //con cada barco que este en sunk se suma ++ al estado shipstatePc/Player en la funcion firetorpedo hasta que llegue al total de barcos/4 en ese momento se verifica quien es el ganador/el que llego a ese numero primero y 

                newShip.fire = [...newShip.fire, [row, col]], // console.log('disparaste a :', newShip.name,'fire content', newShip.fire, 'state', newShip.shipState, newShip.fire, newShip.coords),
                
                newShip.fire.length === newShip.coords.length ? 
                 (  // console.log('sunken ship firelength coordslength shipstate antes de ++ ', newShip.fire.length, newShip.coords.length, newShip.shipState),
                  newShip.shipState++, //solo cuando todas las coordenadas estan en fire cae en este lugar y cambia el shipstate a 2 que significa sunk
                  alert(newShip.name + ' is now sunk!!')
                  )
                  : 
                  null  // console.log('fire, state of ', newShip.name,  newShip.shipState)
                )
              : 
              console.log('cual es la función en handleshipdata?')

        return newShip
      },
      handleSetBoard: (board, ship, row, col, align) => {
        const store = getStore()
        let newBoard = [...board]
        let newShips = []// solo una copia de ships para modificar y guardar como shipsPC O ShipsPlayer
        let newShip = { ...ship }
        let takenShip = newShips.includes(newShip)

        for (let i = 0; i < ship.length; i++) {
          if (newBoard[row][col] !== 0) { console.log(newBoard[row][col], 'newBoard[row][col] !==0, en handleSetBoard') }
          newShip = getActions().handleShipData(newShip, row, col, 'handleSetBoard', board, align)//enviar esto mismo con una funcion para hacerlo uno por uno
          // newShip.coords = [...newShip.coords, [row,col]], 
          // newShip.taken = true,
          // newShip.shipState = 3, 

          // newBoard[row][col] = 1
          newBoard[row][col] = newShip
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
          setStore({ shipsPc: [...store.shipsPc, newShips], board: newBoard })//agregar mejor lso ships de cada player a un array aparte. shipsPc shipsPlayer para que tengan toda su info actualizada
          :
          setStore({ shipsPlayer: [...store.shipsPlayer, newShips], board: newBoard })
        // console.log({newShips}, store.ships, 'ships', store.shipsPc, 'shipspc'); funciona ok

      },//setea el tablero
      // handleClickPlaceShips: (board, ship, row, col) => {
      //   const store = getStore()

      //   let align = store.flip ? 'vertical' : store.moreFliped ? 'diagonal' : 'horizontal'

      //   while (!getActions().handleValidPosition(board, ship, row, col, align)) {
      //   }  //validando     
      //   // console.log(':)', getActions().handleValidPosition(store.PlayerBoard, ship, row, col, align), ship.name, row, col, align)

      //   if (getActions().handleValidPosition(store.PlayerBoard, ship, row, col, align)) {
      //     setStore({ takenShips: [...store.takenShips, ship.name] })
      //     getActions().handleSetBoard(store.PlayerBoard, ship, row, col, align)
      //   }

      //   // *** ver como captar align de cada barco... con estado? ver version anterior con flip
      //   // console.log('clickplaceShips');
      //   // getActions().placeShips(board, ship, row, col)
      // }, //traer las coordenadas al clickear, y tambien al clickear cambiar store.flip para traer align tmb, con eso verificar y enviar uno por uno los barcos a placeSHIPS, 
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
      handleOver: (e, ship, row, col) => {
        const store = getStore();
        e.preventDefault()
        // colorear cuadros en hover con ship
        let board = store.PlayerBoard
        let coords = [row, col]
        let freeCoord = getActions().handleValidPosition(board, ship, row, col, ship.align)
        // si es true llamar a set board y modificarlo para cdo se le pase un solo barco
        for (let i = 0; i < ship.length; i++) {
          // newShip = getActions().handleShipData(newShip, row, col, 'clickPlaceShips', newBoard, align) //viene con row col align modificados. enviar esto mismo con una funcion para hacerlo uno por uno
          if (!freeCoord) {
            setStore({ lightSquare: { color: ' wrongSquare', coords: [...coords, row, col] } })
            ship.align === 'horizontal' ? col++ : ship.align === 'vertical' ? row++ : (row++, col++)
          }
          else {
            setStore({ lightSquare: { color: ' lightSquare', coords: [...coords, coords] } })
            ship.align === 'horizontal' ? col++ : ship.align === 'vertical' ? row++ : (row++, col++)
          }
        }

        // for (let i = 0; i < ship.length; i++) {
        //   freeCoord ? 
        //   setStore({ lightSquare: { color: ' lightSquare', coords: [...coords, coords] } }) 
        //   : 
        //   setStore({ lightSquare: { color: ' wrongSquare', coords: [...coords, coords]} })

        // }
        // console.log('draggOveer ship', store.lightSquare)//on drop out tiene que quedar en null el color
      },
      setSelectedShip: (e, ship) => {
        const store = getStore()
        // setea selectedship al levantar el barco

        setStore({ selectedShip: ship })//, SETEA selectedShip como el ship qeu se tomo, con eso usar selectedship para modificar su align y despues en dragover su row y col
        // console.log('dragStart ship', ship.name, 'SELECTED', store.selectedShip, e.target)
      },
      flipShips: (ship) => {
        const { flip, selfAlign } = getStore();
        const store = getStore();
        let newShips = store.ships
        let newFlip = flip
        let newselfAlign

        newFlip === 'horizontal' ? newFlip = 'vertical' :
          newFlip === 'vertical' ? newFlip = 'diagonal' :
            newFlip === 'diagonal' ? newFlip = 'horizontal' :
              console.log('error con flip');

        newselfAlign = { shipName: ship.name, align: newFlip }
        setStore({ flip: newFlip, selfAlign: newselfAlign });
      },//en componente board mostrar un square normaal o un ship con su forma css segun si hay o no barco en board[i][j], en square recibir el info del ship y moostrar su color segun su sipstate qu7e se modifica con handleshipdata  cada vez que se dispara. tmb con eso marcar los disparos al agua como miss 
      handleDrop: (e, ship, row, col) => {
        const { flip, selfAlign } = getStore();
        const store = getStore();

        selfAlign.shipName === ship.name ?
          (setStore({ selfAlign: { ...selfAlign, row: row, col: col } }))
          :
          (setStore({ selfAlign: { shipName: ship.name, align: flip, row: row, col: col } }))
        getActions().dragShips()
        //recolecta el row y col mas el align que pudo o no haber sido cambiado antes de onDrop
        //usar estados selectedShip y selfAlign con setBoard par modificar el barco seleccionado con los datos de selfalign
      },
      dragShips: () => {
        const store = getStore();
        const { selectedShip, selfAlign, PlayerBoard, ships, shipsPlayer } = getStore();
        let { shipName, row, col, align } = selfAlign //tiene todos los datos del barco
        let ship = selectedShip
        let newBoard = [...PlayerBoard]
        let newShips = [...shipsPlayer]
        let newShip = { ...ship }
        let takenShip = shipsPlayer.find(item => item.name === newShip.name) // undefined o resutls
        // VER UNA FORMA DE QUE NO SE REPITA EL BARCO QUE LO REEMPLACE UNA VEZ.....ship guarda los datoods de shipPc o los ships de pc modifican los ships originales verrrr eso cada tablero tiene sus proopios barcos y  se setean solo en su tablero

        if (!getActions().handleValidPosition(newBoard, newShip, row, col, align)) {
          // align === 'vertical' ? row += 1 : align === 'horizontal' ? col += 1 : (row += 1, col += 1)
          // console.log('nuevas coordenadas en clickPlaceShips', row, col, align)
          alert('coloca el barco en un lugar válido')
          console.log('handleValidPosition en false');
          // se repite en loop infinito... y se pueden repetir los barcos                               manejar cdo se salga del tablero que reste o empiece de arriba o simplemente de un mensaje de poner el barco en otro lugar
        }
        if (getActions().handleValidPosition(newBoard, newShip, row, col, align)) {
          if (!takenShip) {
            console.log('Agregando a shipsPlayer', { takenShip })
            for (let i = 0; i < ship.length; i++) {
              newShip = getActions().handleShipData(newShip, row, col, 'clickPlaceShips', newBoard, align) //viene con row col align modificados. enviar esto mismo con una funcion para hacerlo uno por uno
              newBoard[row][col] = newShip
              align === 'vertical' ? row += 1 : align === 'horizontal' ? col += 1 : (row += 1, col += 1)
            }
            newShips.push(newShip)
          } else console.log('Barco repetido no se agrega', { takenShip });
        } else console.log('fallo clickPlaceShips');

        setStore({ shipsPlayer: newShips, board: newBoard, newvariable: 'Hola Setea bien en manualsetships' })

        console.log('ShipsPlayer', store.shipsPlayer);
      },
      /************************************************* */
      fireTorpedoPrompt: () => {
        // const store = getStore();
        let row = parseInt(prompt("Type a coord x"));
        let col = parseInt(prompt("Type a coord y"));
        getActions().fireTorpedo(row, col)
        //llama a firetorpedo para pc... el tablero dependeria del usuario
      },
      handleClick: (board, row, col) => {
        const store = getStore() //  al clickear llama a firetorpedo, si firetorpedo se llama en el boton fireprompt envia los datos, handleshipdata solo cambia cuadno es necesario las validacones se hacen antes de llamar a esa func
        
        if (store.shipsPlayer.length === store.ships.length ) {
          // console.log('barcos listos', store.shipsPlayer)
          board === store.PcBoard ? getActions().fireTorpedo(row, col)
            :
            console.log('debes disparar al tablero enemigo!')
        } 
        else console.log('debes posicionar tus barcos en el tablero')
      },
      disparaPc:(user)=>{
        const store = getStore();
       
        let nextPlayer = store.user === 'Player' ? 'Pc' : 'Player'
        let randomRow = getActions().randomNumber(10)//entre 0 y 9  /// CDO HAYA UN WINNER INICIAR DENUEVO
        let randomCol = getActions().randomNumber(10)//entre 0 y 9

        setStore({ user : nextPlayer})

        console.log('disparaPc', {user}, {nextPlayer}, {randomRow}, {randomCol} )
      
        store.user === 'Player' ? alert('TE TOCA') : getActions().fireTorpedo(5, 1)//getActions().fireTorpedo(randomRow, randomCol)

        console.log(store.shipStatePlayer, store.shipStatePc, )

        // getActions().whoIsTheWinner()
      },
      fireTorpedo: (row, col) => {
        const store = getStore();
        //recibe las coordenadas desde el click o las llama desde firetorpedoprompt... al clickear el boton fire de inmediato llama coordenadas desde ahi llamar a firetorpedo
        //validar quien es el jugador para asignar el board como tablero enemigo //al primer disparo deberia cambiar el user y activar un randomfire para pc, cuando le toca a player dispara y se marca en los dos tableros
        if(store.winner){
          alert('presiona start para comenzar denuevo')
          return}

        let board = store.user === 'Player' ? store.PcBoard : store.PlayerBoard // si el user es player el tablero a disparar sería pcBoard y viceversa
        let userShips = store.user === 'Player' ? store.shipsPc : store.shipsPlayer
        let newBoard = [...board]
        let newUserShips = [...userShips] 
        let sea, ship, newShip, newshipStatePc, newshipStatePlayer
        let coords = row +','+ col
        let repeated = store.coordsArrayPc.includes(coords) || store.coordsArrayPlayer.includes(coords)//se crea un nuevo elemento cada vez qeu se llama a la func. 

        // console.log({repeated}, coords, store.coordsArrayPc, store.coordsArrayPlayer)
        newshipStatePc = store.shipStatePc // tiene la cantidad que haya en ese estado
        newshipStatePlayer = store.shipStatePlayer

        // si es 0 no debe llamar a handleshipdata
        newBoard[row][col] === 'miss' ?
        (alert('uuu miss'), console.log('contenido de las cooords',newBoard[row][col], ) // si el contendio es 0 se marca como miss, sino significa que hay un ship en el lugar
        )
        : 
        (
           newBoard[row][col] === 0 ? 
          (
            console.log('miss'), sea ='miss', newBoard[row][col] = sea , setStore({ board: newBoard, misscoords: [...store.misscoords, [row, col]] }) //coords se sea
          )
          : 
          ( ship = newBoard[row][col],
              repeated ? 
              ( 
                console.log({repeated}, store.coordsArray) // coordsarray contiene las coords golpeadas  
              )              
              :
              (
                newShip = newUserShips[ship], 
                newShip = getActions().handleShipData(ship, row, col, 'fireTorpedo', newBoard, ship.align),// si las coords no se repiten, se modifica el barco guardando dentro las coords golpeadas
                newShip.shipState === 2 && store.user === 'Player' ? (newshipStatePc++, setStore({shipStatePc : newshipStatePc, coordsArrayPc: [...store.coordsArrayPc, coords]})) : (newshipStatePlayer, setStore({shipStatePlayer : newshipStatePlayer, coordsArrayPlayer: [...store.coordsArrayPlayer, coords]})),
                setStore({ userShips: newUserShips, board: newBoard}), getActions().changeUser() // cambiando el user cada vez que dispare // guardo las coords golpeadas en su estado / guardo ship y tablero modificados
              )
          )      
        )
        newBoard[row][col] === 'miss' ? console.log('es miss') : newBoard[row][col] === 0 ? console.log('es 0') : null
        // console.log('ultima opcion') 
        
        // console.log(board,newBoard[row][col],sea,'shipState',newShip?.shipState, 'shipStatePc',store.shipStatePc, 'shipStatePlayer',store.shipStatePlayer)

        store.shipStatePc === 4 ? (setStore({ winner : 'Player' }), alert('gano player')) :  store.shipStatePlayer === 4 ? (setStore({ winner : 'Player' }), alert('gano pc'))  : console.log('shipStatePc', store.shipStatePc , 'shipStatePlayer',store.shipStatePlayer,'buscando el ganador');
      },
//       fireTorpedo: (row, col) => {
//         const store = getStore()
//         const board = store.user === "Player" ? store.PcBoard : "Pc" ? store.PlayerBoard : console.log('player o pc?'); //dispara al tablero ocntrario del jugador de turno
//         const newBoard = [...board]; //si los datos existen usarlos, sino pedirlos con un prompt
//         let newShips = [...store.pcShips]
//         let ship1 = newBoard[row][col]
//         let ship = newShips[ship1]
//         let coords = [row,col]
//         let findShoot 

// console.log(findShoot, ship.fire, 'ship.fire');

//         // if (findShoot === false) { console.log(ship.fire, 'findShoot', findShoot); }
//         // else console.log('findshoot before row', findShoot);

//         !row && getActions().fireTorpedoPrompt()


//         newBoard[row][col] === 0 ? (console.log('miss'), newBoard[row][col] = 'miss')
//           :
//           ship.shipState === 1 ? (!findShoot ? (console.log('disparar a :', ship.name), ship = getActions().handleShipData(ship, row, col, 'fireTorpedo', newBoard, ship.align)) : alert('ya disparaste en este lugar'))
//             :
//             ship.shipState === 2 && (console.log(ship.shipState, 'state del ship'), setStore({ shipStatePc: [...store.shipStatePc, ship.name] })) //agrega el nombre de cada barco que ha sido hundido


//         if (store.shipStatePc.lenght === 4 || store.shipStatePlayer.lenght === 4) { getActions().whoIsTheWinner() }//si alguno de los dos jugadores tiene todos sus barcos hundidos gana el oponente
//         console.log({ findShoot })

//         setStore({ board: newBoard, pcShips: newShips })

//        findShoot = ship.fire.every(item=> item!==coords) // si encuentra algo true
 


//        console.log('some',ship.fire.includes([row,col]), 'filter', ship.fire.filter(item=> item === coords), 'ship.fire', ship.fire, 'ship', ship,'newShips', newShips)
//       },//en proceso
      showEnemyShips: (coord, board) => {
        const { enemyShipsClass } = getStore();

        enemyShipsClass === "transparent border border-danger"
          ? setStore({ enemyShipsClass: "transparent" })
          : setStore({ enemyShipsClass: "transparent border border-danger" });
      },//listo solo muestra los barcos enemigos cambiando el estilo segun el estado
      // whoIsTheWinner: () => {
      //   const store = getStore();
      //   const winner = store.shipStatePc === 4 ? 'Player' : 'Pc'

      //   console.log('GANO '+ winner + '!!')
       
      // }	// complete los ships con 3, ganará
    },
  };
};

export default getState;





