import {
  USER_UPDATE
} from '../reducers/User'
import {
  login
} from '../service/Authentication'
import {
  push
} from 'react-router-redux'

export const updateUser = (change) => ({
  type: USER_UPDATE,
  payload: change
})

export const authenticate = (username, password) => {
  return (dispatch) => {
    const res = login(username, password);
    dispatch({
      type: USER_UPDATE,
      payload: res
    });
    dispatch(push('/portal'));
  }
}

export const signOut = () => {
  return (dispatch) => {
    dispatch({
      type: USER_UPDATE,
      payload: {
        authenticated: false
      }
    });
    dispatch(push('/'));
  }
}