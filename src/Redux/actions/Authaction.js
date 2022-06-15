import * as action from '../../const/ActionTypes'
export const userSignIn = (data) => {
  return (dispatch) => {
    dispatch({
      type: action.SIGNIN_USER_SUCCESS,
      payload: data,
    })
  }
}
