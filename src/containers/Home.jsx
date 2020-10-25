/* eslint-disable no-return-assign */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux'; //- Para hacer la conexion entre el componente y la informacion extraida del stores
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/App.scss';

const Home = ({ myList, trends, originals, search, firstRender }) => {
  search.length === 0 && firstRender === false ? alert('no se encontro la pelicula') : null;
  console.log(search, firstRender);
  return (
    <>
      <Header />
      <Search isHome />
      {search.length > 0 ? (
        <Categories title="Search Result">
          <Carousel>
            {search.map((item) => (
              <CarouselItem
                key={item.id}
                {...item}
              />
            ))}
          </Carousel>
        </Categories>
      ) : null }
      {myList.length > 0 && (
        <Categories title="Mi lista">
          <Carousel>
            {myList.map((item) => (
              <CarouselItem
                key={item.id}
                {...item}
                isMyList
              />
            ))}
          </Carousel>
        </Categories>
      )}
      <Categories title="Tendencias">
        <Carousel>
          {trends.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
      <Categories title="Originales de Platzi video">
        <Carousel>
          {originals.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
    </>
  );
};

// función que le va a indicar al provider qué información necesitamos del store, en este caso nuestros objetos que son las listas de peliculas
const mapStateToProps = (state) => {
  return {
    search: state.search,
    firstRender: state.firstRender,
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

// usamos el connect para conectar nuestro componente con la funcion de mapStateToProps
export default connect(mapStateToProps, null)(Home);
