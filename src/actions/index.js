
/*-------------------------------------------------- Home.jsx ------------------------------------------------------*/
// para agregar elementos a "mi lista"
// eslint-disable-next-line import/prefer-default-export
export const setFavorite = (payload) => ({
  type: 'SET_FAVORITE', // para indicar la accion que se va a ejecutar
  payload, // informacion que estamos mandando al reducer
});

// para eliminar un elemento
// eslint-disable-next-line import/prefer-default-export
export const deleteFavorite = (payload) => ({
  type: 'DELETE_FAVORITE',
  payload,
});

/*-------------------------------------------------- Login.jsx ------------------------------------------------------*/
export const loginRequest = (payload) => ({
  type: 'LOGIN_REQUEST',
  payload,
});

/*-------------------------------------------------- Header.jsx ------------------------------------------------------*/
export const logoutRequest = (payload) => ({
  type: 'LOGOUT_REQUEST',
  payload,
});

/*-------------------------------------------------- Register.jsx ------------------------------------------------------*/
export const registerRequest = (payload) => ({
  type: 'REGISTER_REQUEST',
  payload,
});
