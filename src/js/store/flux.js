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
      user: "Player",
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
      coordsArray:[],
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
          let takenshipsPc = store.shipsPc.find(item => item.name === ship.name)//ship.name o ship
          let takenshipsPlayer = store.shipsPlayer.find(item => item.name === ship.name)
          // let shipsPc = ship.pcBoard.taken
          // let shipsPlayer = ship.playerBoard.taken //booleano//crear shipspc shipsplayer?      

          if (takenshipsPc && takenshipsPlayer) {
            console.log('barcos posicionados en tablero pc', { shipsPc }, { shipsPlayer });
            return
          }
          // if (shipsPlayer) {
          //   console.log('barcos posicionados en tablero player', { shipsPc }, { shipsPlayer });
          //   return
          // }
          // console.log( {shipsPc},{shipsPlayer},'takenShip start');


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

                newShip.fire = [...newShip.fire, [row, col]], console.log('disparaste a :', newShip.name,'fire content', newShip.fire, 'state', newShip.shipState, newShip.fire, newShip.coords),
                
                newShip.fire.length === newShip.coords.length ? 
                 ( 
                  console.log('sunken ship firelength coordslength shipstate antes de ++ ', newShip.fire.length, newShip.coords.length, newShip.shipState),
                  
                  newShip.shipState++, //solo cuando todas las coordenadas estan en fire cae en este lugar y cambia el shipstate a 2 que significa sunk
                  
                  alert(newShip.name + ' is now sunk!!'), console.log(newShip.shipState, 'newShip.shipState')
                  )
                  : 
                  console.log('fire, state of ', newShip.name,  newShip.shipState)
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
        const store = getStore();
        //al clickear llama a firetorpedo, si firetorpedo se llama en el boton fireprompt envia los datos, handleshipdata solo cambia cuadno es necesario las validacones se hacen antes de llamar a esa func
        if (store.shipsPlayer.length === store.ships.length ) {
          // console.log('barcos listos', store.shipsPlayer)
          board === store.PcBoard ? getActions().fireTorpedo(row, col)
            :
            console.log('debes disparar al tablero enemigo!')
        } else console.log('debes posicionar tus barcos en el tablero')
        // if(board === PcBoard){
        //   shipsPlayer !== [] ? findShoot = ship.fire.find(item => item === [row, col]) : alert('debes posicionar tus barcos en el tablero') 

        //   ship.shipState === 1 ? (!findShoot ? (console.log('disparar a :', ship.name), getActions().handleShipData(ship, row, col, 'handleClick', newBoard, ship.align)) : alert('ya disparaste en este lugar'))
        //   :
        //   ship.shipState === 2 && (console.log(ship.shipState, 'state del ship'), setStore({shipStatePc : [...store.shipStatePc, ship.name]})) //agrega el nombre de cada barco que ha sido hundido
        // }
        // else alert('debes disparar al tablero enemigo!')

        // if( store.shipStatePc.lenght === 4 || store.shipStatePlayer.lenght === 4){getActions().whoIsTheWinner()}
        // console.log({findShoot})
        // board === PlayerBoard ? shipsPlayer !== [] ? alert('debes disparar al tablero enemigo!') : alert('debes posicionar tus barcos en el tablero')//estoy disparando al enemigo ? estan los barcos de player?se puede disparar aqui?
        // :  findShoot = ship.fire.find(item => item === [row, col]) && newBoard[row][col].shipState === 1 ? findShoot ? alert('ya disparaste en este lugar') 
        // : 
        // (console.log('disparar a :', newBoard[row][col].name), getActions().handleShipData(ship, row, col, 'handleClick', newBoard, ship.align))//un estado nuevo? definir el estado de cada coordenada!!!! cada una tiene que tener un shipstate individual para que el global cambie cuando se complete
        // :
        // newBoard[row][col] === 0 ? console.log('miss', newBoard[row][col]) : console.log(newBoard[row][col].shipState, 'state del ship'),
        // console.log('HandleClick contenido de square :', newBoard[row][col]);
        // handleclick funciona par firetorpedo solamente, osea solo se puede usar en pcBoard para disparar a sus barcos // si se clickea en playerBoard lanzar un mensaje de disparar al otro tablero 
        // 1° revisar que tablero es si es player mensaje,        // 2° si es pc revisar espacio vacio y cambiar ese espacio a miss o barco si es barco disparar cambiar estado del barco hasta que este todo en hit
        // if (newBoard[row][col]=== 0){
        //   takenShips.length < 4 ?
        //     // (avisar para poner los barcos automaticamente si takenships es 0 o manual si es mayoro a 0. si es 4  firetorpedo modificara el shipstate de 1 a 2 y si los length espacios del barco estan en 2 automaticamnete seconvierte a 3?? o subir hasta el length y si lo completa cambia lo que signifiqeu sunken
        //     // en winner revisar el estado de todos los barcos con un map y si todos los barcos del usuario estan en shipstate sunken es el ganador. para esto puede ser necesario separar los arrays. o al disparar crear otra variable qeu refleje el shipstate de cada barco en cada usuario
        //     // console.log('takenShips < 4',{takenShips}, {ship}) 
        //     getActions().handleSetBoard(board, ship, row, col, 'horizontal') //sacar el align de cada barco// si takenships es menor a 4 es porque faltan barcos por posicionar en el tablero
        //     : takenShips.length === 4 ?
        //       getActions().firetorpedo(boardCurrentPlayer, row, col) //console.log('takenShips === 4',{takenShips}), dispara al 0//manejar lo de los tableros.. si es turno de player dispara a pc y viceversa
        //       : console.log('whatsss') //si es 0 llamar place ships si takenships esta lleno (tiene que tener 4 barcos) y ya se pusieron todos los barcos y puede disparar sería miss pq rowcol es 0
        //   // }//si estas coordenadas coinciden con las ship.coords de algun barco en store.ships significa que hay un barco .... usar esto para pner barcos como componente tmb


        //   // if (newBoard[row][col]!==0){
        //   //   takenShips.length < 4 ? handleSetBoard(board, row, col, align)
        //   //   :takenShips.length === 4 ? firetorpedo(board, row, col, align)
        //   // }//si no es igual a cero verificar que los barcos esten posicionados con takenShip.length en 4. si no es 4 no estan todos en takenship llamar a handleSetBoard
        //   // if (newBoard[row][col]===3){

        //   // }// ver el barco al que pertenece este square y verificar que los demas esten en 3 para mandarlo a whoisthewinner()

        //   // board[row][col] === 0
        //   //   ? getActions().clickPlaceShips(board, ship, row, col, align)//como mandar el ship.hacer algo parecido a lo de start //poner un barco en esa posicion, para despues con un loop pasar esta funcion a cada barco
        //   //   : board[row][col] < 3 // en placeships queda en 1 si es menor a 4 es hit o sunk
        //   //   ? getActions().fireTorpedoPrompt(row, col) //disparar en esta posición, asegurar que solo sea en el tablero de pc y el turno de player. cuando le toque a pc hara fireTorpedo en random position
        //   //   : board[row][col] === 4 && //enviar los que estan en 4
        //   //     getActions().whoIsTheWinner(board, row, col); //guarda todos los barcos que estan en 4 solo se pone en 4 si el barco entero se hundio. guarda los barcos hundidos de cada board y si uno tiene todos sus barcos en 4 es el perdedor  y automaticamente el dueño del otro tablero gana tiene que recibir player board y sus ships?
      },
      fastwinner:()=>{
        const store = getStore();
        let userShipState = store.user === 'Player' ? store.shipStatePc : store.shipStatePlayer
        let nextPlayer = store.user === 'Player' ? 'Pc' : 'Player'
        let randomRow = getActions().randomNumber(10)//entre 0 y 9
        let randomCol = getActions().randomNumber(10)//entre 0 y 9

        setStore({ user : nextPlayer})
        console.log(user, nextPlayer)
      
        store.user === 'Player' ? alert('TE TOCA') : getActions.fireTorpedo(randomRow, randomCol)

        console.log(store.shipStatePlayer, store.shipStatePc, )

        // getActions().whoIsTheWinner()
      },
      fireTorpedo: (row, col) => {
        const store = getStore();
        //recibe las coordenadas desde el click o las llama desde firetorpedoprompt... al clickear el boton fire de inmediato llama coordenadas desde ahi llamar a firetorpedo
      //validar quien es el jugador para asignar el board como tablero enemigo
        let board = store.user === 'Player' ? store.PcBoard : store.PlayerBoard // si el user es player el tablero a disparar sería pcBoard y viceversa
        let userShips = store.user === 'Player' ? store.shipsPc : store.shipsPlayer
        let newBoard = [...board]
        let newUserShips = [...userShips] 
        let sea, ship, newShip, newshipStatePc, newshipStatePlayer
        let coords = row +','+ col
        let repeated = store.coordsArray.includes(coords)//se crea un nuevo elemento cada vez qeu se llama a la func. 

        console.log(repeated, coords, store.coordsArray)
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
          ( ship = newBoard[row][col], console.log({ship}),
              repeated ? 
              ( 
                console.log('this coords has been shooted before :', repeated, store.coordsArray) // coordsarray contiene las coords golpeadas  
              )              
              :
              (
                
                newShip = newUserShips[ship], 
                newShip = getActions().handleShipData(ship, row, col, 'fireTorpedo', newBoard, ship.align),// si las coords no se repiten, se modifica el barco guardando dentro las coords golpeadas
                console.log('newww',{newShip}),
                newShip.shipState === 2 && store.user === 'Player' ? (newshipStatePc++, setStore({shipStatePc : newshipStatePc})) : (newshipStatePlayer, setStore({shipStatePlayer : newshipStatePlayer})),
                setStore({coordsArray: [...store.coordsArray, coords], userShips: newUserShips, board: newBoard}) // guardo las coords golpeadas en su estado / guardo ship y tablero modificados
              )
          )      
        )
        newBoard[row][col] === 'miss' ? console.log('es miss') : newBoard[row][col] === 0 ? console.log('es 0') : console.log('ultima opcion') 
        
        
        
        console.log(board,newBoard[row][col],sea,'shipState',newShip?.shipState, 'shipStatePc',store.shipStatePc, 'shipStatePlayer',store.shipStatePlayer)

        store.shipStatePc === 4 ? console.log('gano player') :  store.shipStatePlayer === 4 ? console.log('gano pc')  : console.log('shipStatePc', store.shipStatePc , 'shipStatePlayer',store.shipStatePlayer,'aún buscando el ganador');
        // console.log('row, col:', [row,col], store.coordsArray);
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





