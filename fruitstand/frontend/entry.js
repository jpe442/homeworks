import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store.js';
import {addOrange, addApple, clearFruit} from './actions';
import FruitStandContainer from './components/fruit_stand_container';


const App = () => (
  <Provider store={store}>
    <FruitStandContainer/>  
  </Provider>
);

window.store = store;
window.addApple = addApple;
window.addOrange = addOrange;
window.clearFruit = clearFruit;

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
});