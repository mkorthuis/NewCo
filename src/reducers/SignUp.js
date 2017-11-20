export const SIGNUP_LOAD = "SIGNUP_LOAD";
export const SIGNUP_UPDATE = "SIGNUP_UPDATE";

const initState = {
  page: 1
};

export default (state = initState, action) => {
  switch (action.type) {
    case SIGNUP_UPDATE:
      return Object.assign({}, state, action.payload);
    case SIGNUP_LOAD:
    default:
      return state
  }
}