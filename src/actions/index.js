
// para agregar elementos a favoritos
// eslint-disable-next-line import/prefer-default-export
export const setFavorite = (payload) => ({
  type: 'SET_FAVORITE', // para indicar la accion que se va a ejecutar
  payload, // informacion que estamos mandando al reducer
});
