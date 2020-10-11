// este reducer se hara carga de los actions, en este caso cuando se nos manda 'SET_FAVORITE' vamos a tomara todo el state de myList que seria todo el array y agregarle el nuevo valor que es el action.payload.
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      // guardamos en una variable si ya existe el elemento con el id
      const result = state.myList.filter((item) => item.id === action.payload.id);
      // si tenemos un 1 quiere decir que si existe el elementos sino retornamos la lista con todos los elementos anteriores y se sumamos un nuevo elemento
      return result.length > 0 ? state : {
        ...state,
        myList: [...state.myList, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
