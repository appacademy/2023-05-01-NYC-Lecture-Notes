import * as TeaAPIUtil from "../util/teaAPIUtil";

const RECEIVE_TEA = "RECEIVE_TEA";
const RECEIVE_TEAS = "RECEIVE_TEAS";
const REMOVE_TEA = "REMOVE_TEA";

// Action creator
export const receiveTea = (tea) => {
  return {
    type: RECEIVE_TEA,
    tea
  };
};

export const receiveTeas = (teas) => {
  return {
    type: RECEIVE_TEAS,
    teas
  };
};

export const removeTea = (teaId) => ({
  type: REMOVE_TEA,
  teaId
});

// Thunnk actions

export const fetchAllTeas = () => async (dispatch, getState) => {
  const res = await TeaAPIUtil.requestTeas();
  const teas = await res.json();
  dispatch(receiveTeas(teas));
}

export const createTea = (tea) => async (dispatch, getState) => {
  const res = await TeaAPIUtil.postTea(tea);
  const data = await res.json();
  dispatch(receiveTea(data.tea));
}





// reducer

const teaReducer = (state = {}, action) => {
  const nextState = Object.assign({}, Object.freeze(state)); // making a copy

  switch (action.type) {
    case RECEIVE_TEA:
      nextState[action.tea.id] = action.tea;
      return nextState;
    case RECEIVE_TEAS:
      return { ...nextState, ...action.teas };
    case REMOVE_TEA:
      delete nextState[action.teaId];
      return nextState;
    default:
      return nextState;
  }

};

export default teaReducer;