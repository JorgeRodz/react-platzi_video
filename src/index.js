import React from 'react';
import ReactDOM from 'react-dom'; // para trabajar con el ReactDOM
import { Provider } from 'react-redux'; //- necesario para trabajar el createStore
import { createStore } from 'redux'; //- Para crear el store que se enviara como parametro en el Provider
import reducer from './reducers'; //- Necesario para crear nuestra store
import App from './routes/App';

// Cremos el initalState - que es la informacon que antes mandabamos en nuestro json, le agregagos dos objeto mas loc cuales son: user: {}, playing: {},
const initilState = {
  'user': {},
  'playing': {},
  'myList': [],
  'trends': [
    {
      'id': 2,
      'slug': 'tvshow-2',
      'title': 'In the Dark',
      'type': 'Scripted',
      'language': 'English',
      'year': 2009,
      'contentRating': '16+',
      'duration': 164,
      'cover': 'http://dummyimage.com/800x600.png/99118E/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://us-b4-p-e-xy7.cdn.mdstrm.com/video/p/512e13acaca1ebcd2f000279/58333e214ad055d208427db3_58333e214ad055d208427db5.mp4?cP=1754000&access_token=5cxdGfOiKeLRP6HqG3vpxvKLbiwQxUpMP5NwlVKkbnCWJ4ZgXh7QqVfero3r40j2vsUwobHm61U&ote=1603480309857&ot=nBLeFm-2CJeXS10uxWT0_g&pid=7VGpmwuxkgb5gKLbfyaXqfDlyTPg0Uqa&sid=N7489FKvGTKbaZQ7w4d4ky7ye0BjwcZO&uid=fHJGb4qLGKtxwfEuM9Go09kOXT0pMT3x',
    },
    {
      'id': 3,
      'slug': 'tvshow-3',
      'title': 'Instinct',
      'type': 'Adventure',
      'language': 'English',
      'year': 2002,
      'contentRating': '16+',
      'duration': 137,
      'cover': 'http://dummyimage.com/800x600.png/302140/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://us-b4-p-e-xy7.cdn.mdstrm.com/video/p/512e13acaca1ebcd2f000279/58333e214ad055d208427db3_58333e214ad055d208427db5.mp4?cP=1754000&access_token=5cxdGfOiKeLRP6HqG3vpxvKLbiwQxUpMP5NwlVKkbnCWJ4ZgXh7QqVfero3r40j2vsUwobHm61U&ote=1603480309857&ot=nBLeFm-2CJeXS10uxWT0_g&pid=7VGpmwuxkgb5gKLbfyaXqfDlyTPg0Uqa&sid=N7489FKvGTKbaZQ7w4d4ky7ye0BjwcZO&uid=fHJGb4qLGKtxwfEuM9Go09kOXT0pMT3x',
    },
    {
      'id': 4,
      'slug': 'tvshow-4',
      'title': 'Grand Hotel',
      'type': 'Comedy',
      'language': 'English',
      'year': 2014,
      'contentRating': '16+',
      'duration': 163,
      'cover': 'http://dummyimage.com/800x600.png/5472FF/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://us-b4-p-e-xy7.cdn.mdstrm.com/video/p/512e13acaca1ebcd2f000279/58333e214ad055d208427db3_58333e214ad055d208427db5.mp4?cP=1754000&access_token=5cxdGfOiKeLRP6HqG3vpxvKLbiwQxUpMP5NwlVKkbnCWJ4ZgXh7QqVfero3r40j2vsUwobHm61U&ote=1603480309857&ot=nBLeFm-2CJeXS10uxWT0_g&pid=7VGpmwuxkgb5gKLbfyaXqfDlyTPg0Uqa&sid=N7489FKvGTKbaZQ7w4d4ky7ye0BjwcZO&uid=fHJGb4qLGKtxwfEuM9Go09kOXT0pMT3x',
    },
    {
      'id': 5,
      'slug': 'tvshow-5',
      'title': 'Stargate Atlantis',
      'type': 'Scripted',
      'language': 'English',
      'year': 2014,
      'contentRating': '16+',
      'duration': 194,
      'cover': 'http://dummyimage.com/800x600.png/B36F20/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://us-b4-p-e-xy7.cdn.mdstrm.com/video/p/512e13acaca1ebcd2f000279/58333e214ad055d208427db3_58333e214ad055d208427db5.mp4?cP=1754000&access_token=5cxdGfOiKeLRP6HqG3vpxvKLbiwQxUpMP5NwlVKkbnCWJ4ZgXh7QqVfero3r40j2vsUwobHm61U&ote=1603480309857&ot=nBLeFm-2CJeXS10uxWT0_g&pid=7VGpmwuxkgb5gKLbfyaXqfDlyTPg0Uqa&sid=N7489FKvGTKbaZQ7w4d4ky7ye0BjwcZO&uid=fHJGb4qLGKtxwfEuM9Go09kOXT0pMT3x',
    },
    {
      'id': 6,
      'slug': 'tvshow-6',
      'title': 'Final Space',
      'type': 'Scripted',
      'language': 'English',
      'year': 2017,
      'contentRating': '16+',
      'duration': 124,
      'cover': 'http://dummyimage.com/800x600.png/CCC539/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://us-b4-p-e-xy7.cdn.mdstrm.com/video/p/512e13acaca1ebcd2f000279/58333e214ad055d208427db3_58333e214ad055d208427db5.mp4?cP=1754000&access_token=5cxdGfOiKeLRP6HqG3vpxvKLbiwQxUpMP5NwlVKkbnCWJ4ZgXh7QqVfero3r40j2vsUwobHm61U&ote=1603480309857&ot=nBLeFm-2CJeXS10uxWT0_g&pid=7VGpmwuxkgb5gKLbfyaXqfDlyTPg0Uqa&sid=N7489FKvGTKbaZQ7w4d4ky7ye0BjwcZO&uid=fHJGb4qLGKtxwfEuM9Go09kOXT0pMT3x',
    },
    {
      'id': 7,
      'slug': 'tvshow-7',
      'title': 'The InBetween',
      'type': 'Drama',
      'language': 'English',
      'year': 2011,
      'contentRating': '16+',
      'duration': 179,
      'cover': 'http://dummyimage.com/800x600.png/FF7A90/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://us-b4-p-e-xy7.cdn.mdstrm.com/video/p/512e13acaca1ebcd2f000279/58333e214ad055d208427db3_58333e214ad055d208427db5.mp4?cP=1754000&access_token=5cxdGfOiKeLRP6HqG3vpxvKLbiwQxUpMP5NwlVKkbnCWJ4ZgXh7QqVfero3r40j2vsUwobHm61U&ote=1603480309857&ot=nBLeFm-2CJeXS10uxWT0_g&pid=7VGpmwuxkgb5gKLbfyaXqfDlyTPg0Uqa&sid=N7489FKvGTKbaZQ7w4d4ky7ye0BjwcZO&uid=fHJGb4qLGKtxwfEuM9Go09kOXT0pMT3x',
    },
  ],
  'originals': [
    {
      'id': 8,
      'slug': 'tvshow-8',
      'title': 'Stargate Atlantis',
      'type': 'Action',
      'language': 'English',
      'year': 2012,
      'contentRating': '16+',
      'duration': 148,
      'cover': 'http://dummyimage.com/800x600.png/306880/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://us-b4-p-e-xy7.cdn.mdstrm.com/video/p/512e13acaca1ebcd2f000279/58333e214ad055d208427db3_58333e214ad055d208427db5.mp4?cP=1754000&access_token=5cxdGfOiKeLRP6HqG3vpxvKLbiwQxUpMP5NwlVKkbnCWJ4ZgXh7QqVfero3r40j2vsUwobHm61U&ote=1603480309857&ot=nBLeFm-2CJeXS10uxWT0_g&pid=7VGpmwuxkgb5gKLbfyaXqfDlyTPg0Uqa&sid=N7489FKvGTKbaZQ7w4d4ky7ye0BjwcZO&uid=fHJGb4qLGKtxwfEuM9Go09kOXT0pMT3x',
    },
    {
      'id': 9,
      'slug': 'tvshow-9',
      'title': 'Alien Highway',
      'type': 'Action',
      'language': 'English',
      'year': 2019,
      'contentRating': '16+',
      'duration': 128,
      'cover': 'http://dummyimage.com/800x600.png/604180/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://us-b4-p-e-xy7.cdn.mdstrm.com/video/p/512e13acaca1ebcd2f000279/58333e214ad055d208427db3_58333e214ad055d208427db5.mp4?cP=1754000&access_token=5cxdGfOiKeLRP6HqG3vpxvKLbiwQxUpMP5NwlVKkbnCWJ4ZgXh7QqVfero3r40j2vsUwobHm61U&ote=1603480309857&ot=nBLeFm-2CJeXS10uxWT0_g&pid=7VGpmwuxkgb5gKLbfyaXqfDlyTPg0Uqa&sid=N7489FKvGTKbaZQ7w4d4ky7ye0BjwcZO&uid=fHJGb4qLGKtxwfEuM9Go09kOXT0pMT3x',
    },
    {
      'id': 10,
      'slug': 'tvshow-10',
      'title': 'Elementary',
      'type': 'Animation',
      'language': 'English',
      'year': 2011,
      'contentRating': '16+',
      'duration': 346,
      'cover': 'http://dummyimage.com/800x600.png/FF91BA/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://us-b4-p-e-xy7.cdn.mdstrm.com/video/p/512e13acaca1ebcd2f000279/58333e214ad055d208427db3_58333e214ad055d208427db5.mp4?cP=1754000&access_token=5cxdGfOiKeLRP6HqG3vpxvKLbiwQxUpMP5NwlVKkbnCWJ4ZgXh7QqVfero3r40j2vsUwobHm61U&ote=1603480309857&ot=nBLeFm-2CJeXS10uxWT0_g&pid=7VGpmwuxkgb5gKLbfyaXqfDlyTPg0Uqa&sid=N7489FKvGTKbaZQ7w4d4ky7ye0BjwcZO&uid=fHJGb4qLGKtxwfEuM9Go09kOXT0pMT3x',
    },
    {
      'id': 11,
      'slug': 'tvshow-11',
      'title': 'Strange Angel',
      'type': 'War',
      'language': 'English',
      'year': 2015,
      'contentRating': '16+',
      'duration': 226,
      'cover': 'http://dummyimage.com/800x600.png/45807C/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://us-b4-p-e-xy7.cdn.mdstrm.com/video/p/512e13acaca1ebcd2f000279/58333e214ad055d208427db3_58333e214ad055d208427db5.mp4?cP=1754000&access_token=5cxdGfOiKeLRP6HqG3vpxvKLbiwQxUpMP5NwlVKkbnCWJ4ZgXh7QqVfero3r40j2vsUwobHm61U&ote=1603480309857&ot=nBLeFm-2CJeXS10uxWT0_g&pid=7VGpmwuxkgb5gKLbfyaXqfDlyTPg0Uqa&sid=N7489FKvGTKbaZQ7w4d4ky7ye0BjwcZO&uid=fHJGb4qLGKtxwfEuM9Go09kOXT0pMT3x',
    },
    {
      'id': 12,
      'slug': 'tvshow-12',
      'title': 'Private Eyes',
      'type': 'Comedy',
      'language': 'English',
      'year': 2018,
      'contentRating': '16+',
      'duration': 190,
      'cover': 'http://dummyimage.com/800x600.png/577380/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://us-b4-p-e-xy7.cdn.mdstrm.com/video/p/512e13acaca1ebcd2f000279/58333e214ad055d208427db3_58333e214ad055d208427db5.mp4?cP=1754000&access_token=5cxdGfOiKeLRP6HqG3vpxvKLbiwQxUpMP5NwlVKkbnCWJ4ZgXh7QqVfero3r40j2vsUwobHm61U&ote=1603480309857&ot=nBLeFm-2CJeXS10uxWT0_g&pid=7VGpmwuxkgb5gKLbfyaXqfDlyTPg0Uqa&sid=N7489FKvGTKbaZQ7w4d4ky7ye0BjwcZO&uid=fHJGb4qLGKtxwfEuM9Go09kOXT0pMT3x',
    },
    {
      'id': 13,
      'slug': 'tvshow-13',
      'title': 'NCIS: Los Angeles',
      'type': 'Drama',
      'language': 'English',
      'year': 2010,
      'contentRating': '16+',
      'duration': 160,
      'cover': 'http://dummyimage.com/800x600.png/5472FF/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://us-b4-p-e-xy7.cdn.mdstrm.com/video/p/512e13acaca1ebcd2f000279/58333e214ad055d208427db3_58333e214ad055d208427db5.mp4?cP=1754000&access_token=5cxdGfOiKeLRP6HqG3vpxvKLbiwQxUpMP5NwlVKkbnCWJ4ZgXh7QqVfero3r40j2vsUwobHm61U&ote=1603480309857&ot=nBLeFm-2CJeXS10uxWT0_g&pid=7VGpmwuxkgb5gKLbfyaXqfDlyTPg0Uqa&sid=N7489FKvGTKbaZQ7w4d4ky7ye0BjwcZO&uid=fHJGb4qLGKtxwfEuM9Go09kOXT0pMT3x',
    },
  ],
};

// creamos nuestro store que se creara con la funcion de createStore(reducer, initialState)
const store = createStore(reducer, initilState);

// Aqui van todos los componentes a renderizar
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'), // para colocar todos los componentes en nuestro index.html
);
