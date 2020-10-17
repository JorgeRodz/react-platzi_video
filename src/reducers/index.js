// este reducer se hara carga de los actions, en este caso cuando se nos manda 'SET_FAVORITE' vamos a tomara todo el state de myList que seria todo el array y agregarle el nuevo valor que es el action.payload.
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      // guardamos en una variable si ya existe el elemento con el id
      const exist = state.myList.find((item) => item.id === action.payload.id);
      // si es que existe solo regresamos el state eso quiere decir que no agregara nada; sino existe vamos a agregar el nuevo elemento
      return exist ? state : {
        ...state,
        myList: [...state.myList, action.payload],
      };
    case 'DELETE_FAVORITE':
      return {
        ...state,
        myList: state.myList.filter((items) => items.id !== action.payload),
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
