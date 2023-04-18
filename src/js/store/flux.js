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
				{position:0},
				{position:1},
				{position:2},
				{position:3},
				{position:4},
				{position:5},
				{position:6},
				{position:7},
				{position:8},
				{position:9},
				{position:10}
				],
			rowArr: [
				{position:1},
				{position:2},
				{position:3},
				{position:4},
				{position:5},
				{position:6},
				{position:7},
				{position:8},
				{position:9},
				{position:10}
				]

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
			table: () => {
				const colArr = 10
				const rowArr = 10


			}
		}
	};
};

export default getState;
