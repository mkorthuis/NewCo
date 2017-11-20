import {
  SIGNUP_UPDATE
} from '../reducers/SignUp'

export const updateSignUp = (change) => ({
  type: SIGNUP_UPDATE,
  payload: change
})