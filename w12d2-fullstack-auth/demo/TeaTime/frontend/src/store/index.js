import { createStore, combineReducers, applyMiddleware } from 'redux';
import teaReducer from './teaReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
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
  return createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger));
};

export default configureStore;