import {
  authenticateService
} from '../service/Authentication'
import {
  push
} from 'react-router-redux'

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


export const updateUser = (change) => ({
  type: USER_UPDATE,
  payload: change
})

export const authenticate = (username, password) => {
  return (dispatch) => {
    const res = authenticateService(username, password);
    dispatch(updateUser(res));
    dispatch(push('/portal'));
  }
}

export const signOut = () => {
  return (dispatch) => {
    dispatch(updateUser({
      authenticated: false
    }));
    dispatch(push('/'));
  }
}

export default (state = initState, action) => {
  switch (action.type) {
    case USER_UPDATE:
      return Object.assign({}, state, action.payload);
    case USER_LOAD:
    default:
      return state
  }
}