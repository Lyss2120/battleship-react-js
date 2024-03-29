import { array } from "prop-types";

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
      reset: false,
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
      shipsPc: [],//array con los ships de cada jugador
      shipsPlayer: [],//usar como taken ship tmb y ver si el barco ya se ha incluido aca o no 
      lightSquare: { color: 'null', coords: [] },
      user: "",
      enemyShipsClass: false,//verde
      ShipsClass: "primary bg-opacity-50",//amarillo
      squareColor: "light bg-opacity-50",
      wrongSquareColor: "danger bg-opacity-50",
      selfAlign: {},
      flip: 'horizontal',
      selectedShip: {},
      shipStatePlayer: 0,//cambiar de nro cada posicion segun el barco correspondiente y si estan en 'sunken' ponerlo en string
      shipStatePc: 0,
      coordsArrayPc: [],
      coordsArrayPlayer: [],
      winner: null,
      pcFired: [],
      playerFired: [],
      pcCount:1,
      playerCount:1

      // coordArray:[],// guarda las coordenadas ocupadas en arrays dentro de coordAarray para poder ubicar solo los lugares disponibles
      // takenCoords: [],colorfire para el color de pc squares
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
      changeUser: () => {
        const store = getStore()

        store.user === "" ? setStore({ user: "Player" })
          :
          store.user === "Player" ? setStore({ user: "Pc" })
            :
            setStore({ user: "Player" });

        store.user === "Pc" && getActions().disparaPc()

      },
      fastwinner: () => {
        const store = getStore();

        setStore({ winner: 'Player' })
        // store.winner && (console.log('reseeetwinner')), getActions().reset()

      },
      start: (arg) => {
        const store = getStore();
        const { shipsPlayer, shipsPc } = getStore();
        //start es para cuando no se quiere elegir los barcos y posicionarlos manualmente, ahi se cargan los dos tableros automaticamente sino uno solo
        // llama a place boards con cada tablero para poner dentro sus barcos// //mapea los barcos los posiciona y les da row y col
        let board = arg

        store.ships.map((ship) => {
          let row = getActions().randomNumber(10)
          let col = getActions().randomNumber(10)
          let randAlign = getActions().randomNumber(3)
          let align = randAlign === 0 ? 'horizontal' : randAlign === 1 ? 'vertical' : randAlign === 2 && 'diagonal';
          let takenshipsPlayer = shipsPlayer.find(item => item.name === ship.name)
          let takenshipsPc = shipsPc.find(item => item.name === ship.name)
          //cuando aparezca winner en su funcion poner un alert o un tipo de boton que acepte empezar denuevo para poner las board en 0 y recargar la pag y asi comenzaria todo el proceso denuevo
          if (!!takenshipsPlayer && !!takenshipsPc) {
            console.log('los barcos ya están posicionados', 'shipssPlayer', shipsPlayer, 'shipssPc', shipsPc, takenshipsPlayer);
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
        let coords = row + ',' + col

        func === 'handleSetBoard' ?
          (
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
            : func === 'dragShips' ?
              (
                newShip.coords = [...newShip.coords, [row, col]], //verificar que no se repitan las cooords
                newShip.shipState = 1,
                newShip.taken = true,
                newShip.align = align,
                console.log('HandleShipData!!', newShip)//con esto se tiene que setear un newShips copia de ships en shipsPlayer. shipsPs se setea automaticamente con handleSetBoard
              )
              : func === 'fireTorpedo' ?
                (
                  newShip.fire = [coords, ...newShip.fire], // console.log('disparaste a :', newShip.name,'fire content', newShip.fire, 'state', newShip.shipState, newShip.fire, newShip.coords),
                  //console.log('firetorpedo desde handleship newShip.fire', newShip.fire, 'coords', newShip.coords),
                  newShip.fire.length === newShip.coords.length ?
                    (  // console.log('sunken ship firelength coordslength shipstate antes de ++ ', newShip.fire.length, newShip.coords.length, newShip.shipState),
                      newShip.shipState++, //solo cuando todas las coordenadas estan en fire cae en este lugar y cambia el shipstate a 2 que significa sunk
                      alert(newShip.name + ' is now sunk!!')
                    )
                    :
                    null  // console.log('fire, state of ', newShip.name,  newShip.shipState)
                )
                : func === 'reset' ?
                  (
                    newShip.coords = [],
                    newShip.taken = false,
                    newShip.align = align,
                    newShip.shipState = 1,
                    newShip.fire = []
                  )
                  :
                  console.log('cual es la función en handleshipdata?')

        return newShip
      },
      handleSetBoard: (board, ship, row, col, align) => {
        const store = getStore()
        const { shipsPc, shipsPlayer, user, PcBoard, PlayerBoard } = store
        let newBoard = [...board]
        let newShip = { ...ship }
        let takenShipsPlayer = store.shipsPlayer.find(item => item.name === ship.name)
        let xboard = board === PcBoard ? 'PcBoard' : board === PlayerBoard ? 'PlayerBoard' : null
        // let lasCtoord = newShip.slice(-1)//estado para posicionar ship en los tableros.... 
        // console.log({ newShip }, 'handleSetBoard',xboard, { ship }) //ship esta guardando los datos de los dos jugadores.los args vienen de start para pc es automatico

        for (let i = 0; i < ship.length; i++) {
          if (newBoard[row][col] !== 0) { console.log(ship.name, 'choco con', newBoard[row][col], 'newBoard[row][col] !==0, en handleSetBoard') }
          newShip = getActions().handleShipData(newShip, row, col, 'handleSetBoard', board, align)//enviar esto mismo con una funcion para hacerlo uno por uno
          newBoard[row][col] = newShip
          align === 'vertical' ? row += 1 : align === 'horizontal' ? col += 1 : (row += 1, col += 1)
        }

        if (!!takenShipsPlayer) {
          return
        }
        else if (!takenShipsPlayer) {
          if (board === store.PcBoard) {
            (setStore({ shipsPc: [...store.shipsPc, newShip], board: newBoard }))
          }
          else if (board === store.PlayerBoard) {
            (setStore({ shipsPlayer: [...store.shipsPlayer, newShip], board: newBoard }))
          }
        }
        store.shipsPlayer.length === 4 && getActions().changeUser()
      },//setea el tablero
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
      handleOver: (e, ship, row, col) => {
        const store = getStore();
        e.preventDefault();
        // colorear cuadros en hover con ship
        let board = store.PlayerBoard
        let coords = [row, col]
        let freeCoord = getActions().handleValidPosition(board, ship, row, col, ship.align)        // si es true llamar a set board y modificarlo para cdo se le pase un solo barco


        for (let i = 0; i < ship.length; i++) {
          // newShip = getActions().handleShipData(newShip, row, col, 'clickPlaceShips', newBoard, align) //viene con row col align modificados. enviar esto mismo con una funcion para hacerlo uno por uno
          if (!freeCoord) {
            ship.align === 'horizontal' ? col++ : ship.align === 'vertical' ? row++ : (row++, col++)
          }
          else {
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
        // setea selectedship al levantar el barco
        setStore({ selectedShip: ship })//, SETEA selectedShip como el ship qeu se tomo, con eso usar selectedship para modificar su align y despues en dragover su row y col
        // console.log('dragStart ship', ship.name, 'SELECTED', store.selectedShip, e.target)
      },
      flipShips: (ship) => {
        const store = getStore();
        const { flip, selfAlign } = store

        let newFlip = flip
        let newselfAlign

        newFlip === 'horizontal' ? newFlip = 'vertical' :
          newFlip === 'vertical' ? newFlip = 'diagonal' :
            newFlip === 'diagonal' ? newFlip = 'horizontal' :
              console.log('error con flip');

        newselfAlign = { shipName: ship.name, align: newFlip }
        setStore({ flip: newFlip, selfAlign: newselfAlign });

        console.log(ship, newselfAlign);

      },//en componente board mostrar un square normaal o un ship con su forma css segun si hay o no barco en board[i][j], en square recibir el info del ship y moostrar su color segun su sipstate qu7e se modifica con handleshipdata  cada vez que se dispara. tmb con eso marcar los disparos al agua como miss 
      handleDrop: (e, ship, row, col) => {
        const { flip, selfAlign } = getStore();
        const store = getStore();
        e.preventDefault();
        console.log('click', ship, row, col,);

        // if (store.shipsPlayer.length === 4){          
        //   setStore({ selfAlign: 'horizontal' })
        // } selected ship es el que se pone en el tablero actualmente sacar los datos de ahí para activar el componente en una coord de sus coords si existe selcted ship,  hay que diferenciar el tablero si para que cada barco tenga su tablero especifico para el drop

        console.log('drop', store.selectedShip);

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
        let takenShip = shipsPlayer.find(item => item.name === newShip.name)// undefined o resutls
        let newSquareEnter = store.squareEnter
        newSquareEnter = false

        console.log({ align });

        if (!getActions().handleValidPosition(newBoard, newShip, row, col, align)) {
          alert('coloca el barco en un lugar válido')
          console.log('handleValidPosition en false');
        }
        if (getActions().handleValidPosition(newBoard, newShip, row, col, align)) {
          if (!takenShip) {
            console.log('Agregando a shipsPlayer', { takenShip })
            for (let i = 0; i < ship.length; i++) {
              newShip = getActions().handleShipData(newShip, row, col, 'dragShips', newBoard, align) //viene con row col align modificados. enviar esto mismo con una funcion para hacerlo uno por uno
              newBoard[row][col] = newShip
              align === 'vertical' ? row += 1 : align === 'horizontal' ? col += 1 : (row += 1, col += 1)
            }
            newShips.push(newShip)
          } else console.log('Barco repetido no se agrega', { takenShip });
        } else console.log('fallo clickPlaceShips')


        setStore({ shipsPlayer: newShips, board: newBoard, squareEnter: newSquareEnter, newvariable: 'Setea bien en manualsetships' })


        store.shipsPlayer.length === 4 ? (console.log('your turn to fire!', store.user), getActions().changeUser()) : null

      },//setea los barcos de player manualmente
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
      handleClick: (board, row, col) => {
        const store = getStore() //  al clickear llama a firetorpedo, si firetorpedo se llama en el boton fireprompt envia los datos, handleshipdata solo cambia cuadno es necesario las validacones se hacen antes de llamar a esa func
        let xboard = board === store.PcBoard ? 'PC BOARD' : 'PLAYER BOARD'

        if (store.user === 'Pc') {
          console.log('no es tu turno');
          return
        }// esto no deberia pasar porque cuando player dispara pc deberia disparar automaticamente

        if (store.shipsPlayer.length === store.ships.length) {
          // console.log('barcos listos', store.shipsPlayer)
          board === store.PcBoard ? getActions().fireTorpedo(row, col)
            :
            console.log('debes disparar al tablero enemigo!')
        }
        else console.log('debes posicionar tus barcos en el tablero')
      },
      fireTorpedoPrompt: () => {
        // const store = getStore();
        let row = parseInt(prompt("Type a coord x"));
        let col = parseInt(prompt("Type a coord y"));
        getActions().fireTorpedo(row, col)
        //llama a firetorpedo para pc... el tablero dependeria del usuario
      },
      fireTorpedo: (row, col) => {
        const store = getStore();
        const { user, pcFired, playerFired, shipsPc, shipsPlayer, pcCount, playerCount} = store
        //recibe las coordenadas desde el click o las llama desde firetorpedoprompt... al clickear el boton fire de inmediato llama coordenadas desde ahi llamar a firetorpedo
        //validar quien es el jugador para asignar el board como tablero enemigo //al primer disparo deberia cambiar el user y activar un randomfire para pc, cuando le toca a player dispara y se marca en los dos tableros
        if (store.winner) {
          alert('presiona start para comenzar denuevo')
            (console.log('reseeetwinner'), getActions().reset())
          return
        }

        let board = store.user === 'Player' ? store.PcBoard : store.PlayerBoard // si el user es player el tablero a disparar sería pcBoard y viceversa
        let userShips = store.user === 'Player' ? store.shipsPc : store.shipsPlayer
        let newBoard = [...board]
        let newUserShips = [...userShips]
        let sea, ship, newShip, newshipStatePc, newshipStatePlayer, newCoords
        let coords = row + ',' + col
        let repeated = store.coordsArrayPc.includes(row + ',' + col) || store.coordsArrayPlayer.includes(row + ',' + col)//si ya esta agregado a las coord guardadas esta repetido 
        let newPcCount = pcCount
        let newPlayerCount = playerCount
        newshipStatePc = store.shipStatePc
        newshipStatePlayer = store.shipStatePlayer

        //***************NO BORRAR AUN *******************
        // if (repeated || newBoard[row][col] === 'miss') {
        //   if (user === 'Pc') {
        //     repeated ? console.log(user, 'repeated spot', row, col,) : console.log('repeated miss spot', row, col, newBoard[row][col])
        //     getActions().disparaPc(),
        //       console.log('nuevas coordenadas pc')
        //     setStore({ user: !user })
        //   }
        //   else if (user === 'Player') {
        //     alert('this place has been shooted, fire again player', { row }, { col }),
        //     console.log('player repeated', newBoard[row][col], repeated) // coordsarray contiene las coords golpeadas  
        //   }
        // } NO BORRAR AUN *******************




        //si hay un disparo previo que dio en el agua o en un barco hay q repetir el disparo en otra coord
        if(newBoard[row][col] !== 0){
          if (newBoard[row][col] === 'miss' || repeated) {
            if (user === 'Pc') {
              repeated ? console.log(user, 'repeated spot', row, col,) : console.log('miss spot repeated', row, col, newBoard[row][col])
              getActions().disparaPc(),
              console.log('nuevas coordenadas pc')
              setStore({ user: !user })
            }
            else if (user === 'Player') {
              alert('this place has been shot, fire again', { row }, { col }),
                console.log('player repeated', newBoard[row][col], repeated) // coordsarray contiene las coords golpeadas  
            }
            } 
          else if (!repeated){
          //si no es sea y no es repeated
          ship = newBoard[row][col],
          newShip = newUserShips[ship],
          newShip = getActions().handleShipData(ship, row, col, 'fireTorpedo', newBoard, ship.align),// si las coords no se repiten, se modifica el barco guardando dentro las coords golpeadas
          board === store.PcBoard ? 
          (setStore({ pcFired: [[row, col], ...store.pcFired], shipsPc : newUserShips }))
          : 
          (setStore({ playerFired: [[row, col], ...store.playerFired], shipsPlayer: newUserShips })),
          
          newShip.shipState === 2 && store.user === 'Player' ? 
          (newshipStatePc++, setStore({ shipStatePc: newshipStatePc, coordsArrayPc: [...store.coordsArrayPc, coords] }), pcCount ++) 
          : 
          (newshipStatePlayer, setStore({ shipStatePlayer: newshipStatePlayer, coordsArrayPlayer: [...store.coordsArrayPlayer, coords] })),
          setStore({ userShips: newUserShips, board: newBoard }) // cambiando el user cada vez que dispare // guardo las coords golpeadas en su estado / guardo ship y tablero modificados
            }
        }//si las coordenadas no dan en un disparo previo
        else if (newBoard[row][col] === 0) {
          sea = 'miss' 
          newBoard[row][col] = sea 
          setStore({ board: newBoard }) //coords se sea
          //si esta en 0 es mar y el disparo es miss, si no es 0 hay barco y el disparo va lo modifica          
        }

        // repeated || newBoard[row][col] === 'miss' ?
        //   (
        //     user === 'Pc' ?
        //       (
        //         repeated ? console.log(user, 'repeated spot', row, col,) : console.log('repeated miss spot', row, col, newBoard[row][col]),
        //         getActions().disparaPc(),
        //         console.log('nuevas coordenadas pc'),
        //         setStore({ user: !user })
        //       )
        //       :
        //       user === 'Player' &&
        //       alert('this place is a miss shot, fire again' + store.user),
        //     console.log('player repeated', store.user, newBoard[row][col], repeated) // si el contendio es 0 se marca como miss, sino significa que hay un ship en el lugar
        //   )
        //   :
        //   (
        //     newBoard[row][col] === 0 ?
        //       (
        //         sea = 'miss', newBoard[row][col] = sea, setStore({ board: newBoard }) //coords se sea
        //       )
        //       :
        //       (
        //         ship = newBoard[row][col],
        //         newShip = newUserShips[ship],
        //         newShip = getActions().handleShipData(ship, row, col, 'fireTorpedo', newBoard, ship.align),// si las coords no se repiten, se modifica el barco guardando dentro las coords golpeadas
        //         board === store.PcBoard ? setStore({ pcFired: [[row, col], ...store.pcFired] }) : setStore({ playerFired: [[row, col], ...store.playerFired] }),
        //         newShip.shipState === 2 && store.user === 'Player' ? (newshipStatePc++, setStore({ shipStatePc: newshipStatePc, coordsArrayPc: [...store.coordsArrayPc, coords] })) : (newshipStatePlayer, setStore({ shipStatePlayer: newshipStatePlayer, coordsArrayPlayer: [...store.coordsArrayPlayer, coords] })),
        //         setStore({ userShips: newUserShips, board: newBoard }) // cambiando el user cada vez que dispare // guardo las coords golpeadas en su estado / guardo ship y tablero modificados
        //       )
        //   )
        user === 'Pc' ? 
        ( newPcCount++, 
          setStore({ pcCount: newPcCount }),
          console.log({ shipsPc }, {pcCount}) 
        ): 
        ( newPlayerCount++, 
            setStore({ playerCount: newPlayerCount }),
            console.log({ shipsPlayer}, {playerCount})
        )

        console.log(store.user, 'disparó en', row, col)


        store.shipStatePc === 4 ? (setStore({ winner: 'Player' }), store.winner && (console.log(store.winner + ' ha ganado', 'reseeetwinner')))
          :
          store.shipStatePlayer === 4 ? ( setStore({ winner: 'Pc' }), store.winner && (console.log('reseeetwinner')))
            :
            getActions().changeUser()//cambia el usuario despues de disparar y validar winner
      },
      disparaPc: (user) => {
        const store = getStore();

        let randomRow = getActions().randomNumber(10)//entre 0 y 9  /// CDO HAYA UN WINNER INICIAR DENUEVO
        let randomCol = getActions().randomNumber(10)//entre 0 y 9
        // console.log(store.user, 'disparaPc en', randomRow, randomCol)

        //setTimeout(
        getActions().fireTorpedo(randomRow, randomCol)
        //, 6000)//quiero que se demore x segundos en disparar, no funciona
      },
      resetData: (arg) => {
        const store = getStore()
        const { enemyShipsClass, pcCount, playerCount, reset, winner, squareEnter, coordsArrayPc, coordsArrayPlayer, shipStatePc, shipStatePlayer, selectedShip, flip, selfAlign, user, shipsPlayer, shipsPc, PlayerBoard, PcBoard, ships } = store
        let newStates = {enemyShipsClass, pcCount, playerCount, reset, winner, coordsArrayPc, coordsArrayPlayer, shipStatePc, shipStatePlayer, selectedShip, flip, selfAlign, user, shipsPlayer, shipsPc, PlayerBoard, PcBoard, ships }
        let newBoard = [...store.PcBoard]
        let newEnemyShipsClass = enemyShipsClass
        let newWinner = winner
        let newReset = reset
        let newUser = user
        let newFlip = flip
        let newPcCount = pcCount
        let newPlayerCount = playerCount
        let newShipStatePlayer = shipStatePlayer
        let newShipStatePc = shipStatePc
        let newBoardPL = [...store.PlayerBoard]
        let newShipsPc = [...shipsPc]
        let newShipsPlayer = [...shipsPlayer]
        let newSelfAlign = { ...selfAlign }
        let newSelectedShip = { ...selectedShip }
        let newCoordsArrayPc = [...coordsArrayPc]
        let newCoordsArrayPlayer = [...coordsArrayPlayer]

        newBoard = [
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
        newBoardPL = [
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
        newEnemyShipsClass = false
        newShipsPc = []
        newShipsPlayer = []
        newCoordsArrayPc = []
        newCoordsArrayPlayer = []
        newSelfAlign = {}
        newSelectedShip = {}
        newUser = ''
        newFlip = 'horizontal'
        newShipStatePlayer = 0
        newShipStatePc = 0
        newReset = !newReset
        newWinner = null
        newPcCount = 1
        newPlayerCount = 1

        setStore({
          enemyShipsClass: newEnemyShipsClass,
          ships: arg,
          PcBoard: newBoard,
          PlayerBoard: newBoardPL,
          shipsPc: newShipsPc,
          shipsPlayer: newShipsPlayer,
          coordsArrayPc: newCoordsArrayPc,
          selfAlign: newSelfAlign,
          selectedShip: newSelectedShip,
          user: newUser,
          flip: newFlip,
          pcCount: newPcCount, 
          playerCount: newPlayerCount,
          coordsArrayPlayer: newCoordsArrayPlayer,
          shipStatePlayer: newShipStatePlayer,
          shipStatePc: newShipStatePc,
          reset: newReset,
          winner: newWinner,
        })
        console.log('reset 2', PcBoard[1][1]);
        return newStates
      },
      reset: () => {
        const store = getStore();
        const { PcBoard, PlayerBoard, ships } = store
        let newShips = [...ships]
        let cleanBoard = [
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
        ]

        newShips.map((newShip, i) => {
          return (
            newShip = getActions().handleShipData(newShip, 0, 0, 'reset', cleanBoard, 'horizontal')
          )
        })

        const resetData = getActions().resetData(newShips)

        console.log('reset vars', resetData, resetData.PcBoard[1][1], PcBoard[1][1]);
        store.reset && console.log('si reset')
      },
      showEnemyShips: () => {
        const store = getStore();
        const { PcBoard, PlayerBoard, enemyShipsClass } = store

        let newBorder = enemyShipsClass //estaria en false
        newBorder = !newBorder //lo contrario para hacer un switch// "border border-danger" 

        setStore({ enemyShipsClass: newBorder })
        // console.log(enemyShipsClass, newBorder);
      },//listo solo muestra los barcos enemigos cambiando el estilo segun el estado
    },
  };
};

export default getState;





