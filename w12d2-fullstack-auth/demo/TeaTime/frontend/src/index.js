import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import configureStore from './store';
import { fetchAllTeas, receiveTea, receiveTeas, removeTea } from './store/teaReducer';
import { Provider } from 'react-redux';
import * as TeaAPIUtil from "./util/teaAPIUtil";


const store = configureStore({
  teas: {
    1: {id: 1, flavor: 'green', price: 5}
  }
});

// only for testing purposes

window.fetchAllTeas = fetchAllTeas;
window.store = store;
window.receiveTea = receiveTea;
window.receiveTeas = receiveTeas;
window.removeTea = removeTea;
window.TeaAPIUtil = TeaAPIUtil;

// --------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
