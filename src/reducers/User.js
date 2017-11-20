const initState = {
  authenticated: false,
  username: '',
  password: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: ''
};

export const USER_LOAD = "USER_LOAD";
export const USER_UPDATE = "USER_UPDATE";

export default (state = initState, action) => {
  switch (action.type) {
    case USER_UPDATE:
      return Object.assign({}, state, action.payload);
    case USER_LOAD:
    default:
      return state
  }
}