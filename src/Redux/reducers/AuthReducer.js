import { SIGNIN_USER_SUCCESS } from '../../const/ActionTypes'
const initialState = {
  authToken: localStorage.getItem('token'),
  userProfile: undefined,
  initURL: null,
}
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case SIGNIN_USER_SUCCESS: {
      const { token, user } = action.payload
      localStorage.setItem('token', token)
      return {
        ...state,
        userProfile: user,
        authToken: token,
        // initUR
      }
    }
    default:
      return state
  }
}
