import React, { useState } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { searchMovie } from '../actions';
import '../assets/styles/components/Search.scss';

const Search = (props) => {
  const { user, isHome } = props;
  const inputStyle = classNames('input', {
    isHome,
  });
  /*----------------- hooks --------------------*/
  const [form, setForm] = useState('');
  /*----------------- funciones --------------------*/
  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  };
  const handleInput = (event) => {
    // actualizamos nuestro useState pasando como parametros el lo que contiene el form, mas la informacion de los input
    setForm(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.searchMovie(form);
  };
  /*----------------- render --------------------*/
  return (
    <section className="main">
      {isEmpty(user) || (
        <h1 className="main__user">{user.email}</h1>
      )}
      <h2 className="main__title">¿Qué quieres ver hoy?</h2>
      <form className="main__form" onSubmit={handleSubmit}>
        <input type="text" className={inputStyle} placeholder="Buscar..." onChange={handleInput} />
      </form>
    </section>
  );
};

// mapStateToProps obtenemos el state de nuestras props y con esto ya podemos usar los elementos que se encuentren dentro de esta; en este caso nos interesa el objeto user.
const mapStateToProps = (state) => {
  return {
    user: state.user,
    search: state.search,
  };
};
const mapDispatchToProps = {
  searchMovie,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
