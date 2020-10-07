/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'; // useState, useEffect -> para hacer uso de los "React Hooks"
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initialState/';

const Home = () => {
  const initialState = useInitialState(API);
  console.log(initialState);
  return initialState.length === 0 ? <h1>Loading...</h1> : (
    <>
      <Search />

      {initialState.mylist.length > 0 && (
        <Categories title="Mi lista">
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carousel>
          {initialState.trends.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>

      <Categories title="Originales de Platzi video">
        <Carousel>
          {initialState.originals.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>

    </>
  );
};

export default Home;
