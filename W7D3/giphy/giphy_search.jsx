import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { fetchSearchGiphys } from './actions/giphy_actions.js'
import { configureStore } from './store/store'
import { receiveSearchGiphys } from './actions/giphy_actions.js'

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

});