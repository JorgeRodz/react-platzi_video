import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import '../assets/styles/components/Search.scss';

const Search = ({ user, isHome }) => {
  const inputStyle = classNames('input', {
    isHome,
  });

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  };

  return (
    <section className="main">
      {isEmpty(user) || (
        <h1 className="main__user">{user.email}</h1>
      )}
      <h2 className="main__title">¿Qué quieres ver hoy?</h2>
      <input type="text" className={inputStyle} placeholder="Buscar..." />
    </section>
  );
};

// mapStateToProps obtenemos el state de nuestras props y con esto ya podemos usar los elementos que se encuentren dentro de esta; en este caso nos interesa el objeto user.
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Search);
