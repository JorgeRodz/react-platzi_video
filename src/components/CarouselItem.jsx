import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; // para conectar nuestra aplicacion con los elementos de redux
import { setFavorite } from '../actions'; // importamos la funcion setFavorite de nuestros actions
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';

const CarouselItem = (props) => {
  const { id, cover, title, year, contentRating, duration, language } = props;

  //para pasarle los datos a nuestro setFavorite
  const handleSetFavorite = () => {
    props.setFavorite({
      id, cover, title, year, contentRating, duration, language,
    });
  };

  const handlePlayIcon = () => {
    alert('Le diste play al boton de play');
  };

  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          <img className="carousel-item__details--img" src={playIcon} alt="Play Icon" onClick={handlePlayIcon} />
          <img className="carousel-item__details--img" src={plusIcon} alt="Plus Icon" onClick={handleSetFavorite} />
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration}`}</p>
        <p className="carousel-item__details--subtitle">{`${language}`}</p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
  language: PropTypes.string,
};

const mapDispatchToProps = {
  setFavorite, // la funcion de los actions
};

export default connect(null, mapDispatchToProps)(CarouselItem);
