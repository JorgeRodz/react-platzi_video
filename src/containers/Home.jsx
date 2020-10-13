/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux'; //- Para hacer la conexion entre el componente y la informacion extraida del stores
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/App.scss';

const Home = ({ myList, trends, originals }) => {
  return (
    <>
      <Search />

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
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

// usamos el connect para conectar nuestro componente con la funcion de mapStateToProps
export default connect(mapStateToProps, null)(Home);
