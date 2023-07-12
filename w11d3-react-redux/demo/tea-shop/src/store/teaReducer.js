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