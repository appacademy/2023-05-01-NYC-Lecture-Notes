import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import configureStore from './store';
import { receiveTea, receiveTeas, removeTea } from './store/teaReducer';
import { Provider } from 'react-redux';


const store = configureStore({
  teas: {
    1: {id: 1, flavor: 'green', price: 5}
  }
});

// only for testing purposes

window.store = store;
window.receiveTea = receiveTea;
window.receiveTeas = receiveTeas;
window.removeTea = removeTea;

// --------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
