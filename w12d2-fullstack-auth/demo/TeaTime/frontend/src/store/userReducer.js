import { csrfFetch } from "./csrf";
const RECEIVE_USER = 'users/RECEIVE_USER';
const REMOVE_USER = 'users/REMOVE_USER';

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

const removeUser = userId => ({
  type: REMOVE_USER,
  userId
});

export const loginUser = user => async dispatch => {
  const res = await csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify(user)
  });
  const data = await res.json();
  sessionStorage.setItem('currentUser', JSON.stringify(data.user));
  dispatch(receiveUser(data.user));
};

export const logoutUser = userId => async dispatch => {
  const res = await csrfFetch('/api/session', {
    method: 'DELETE'
  });
  sessionStorage.setItem('currentUser', null);
  dispatch(removeUser(userId));
};

export const createUser = user => async dispatch => {
  const res = await csrfFetch('/api/users', {
    method: 'POST',
    body: JSON.stringify(user)
  });
  const data = await res.json();
  sessionStorage.setItem('currentUser', JSON.stringify(data.user));
  dispatch(receiveUser(data.user));
};

function userReducer(state = {}, action) {
  const newState = { ...Object.freeze(state) };

  switch(action.type) {
    case RECEIVE_USER:
      newState[action.user.id] = action.user;
      return newState;
    case REMOVE_USER:
      delete newState[action.userId];
      return newState;
    default:
      return newState;
  }
}

export default userReducer;