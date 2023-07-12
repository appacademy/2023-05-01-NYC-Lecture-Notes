import { createStore, combineReducers } from 'redux';
import teaReducer from './teaReducer';
// import teaReducer from './teaReducer';


// const dummyReducer = (state = {}, action) => state;
// const rootReducer = combineReducers({
//   teas: teaReducer
// });

const rootReducer = (state = {}, action) => {
  return {
    teas: teaReducer(state.teas, action)
  };
};


const configureStore = (preloadedState = {}) => {
  return createStore(rootReducer, preloadedState);
};

export default configureStore;