import { createStore, combineReducers, applyMiddleware } from 'redux';
import teaReducer from './teaReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import userReducer from './userReducer';

// const dummyReducer = (state = {}, action) => state;
// const entitiesReducer = combineReducers({
//   teas: teaReducer,
//   users: userReducer
// })
// const rootReducer = combineReducers({
//   entities: entitiesReducer,
//   session: sessionReducer,
//   ui: uiReducer
// });


const rootReducer = (state = {}, action) => {
  return {
    teas: teaReducer(state.teas, action),
    users: userReducer(state.users, action)
  };
};


const configureStore = (preloadedState = {}) => {
  return createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger));
};

export default configureStore;