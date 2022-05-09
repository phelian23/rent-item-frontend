import { hitApiWithSignIn, hitApiWithSignUp, hitApiWithResetPassword, hitApiWithSignOut } from '../../api/auth';
import { clearSession } from '../../utils/sessions';
import { Constants } from './constant';

export const signUp = (data) => async (dispatch) => {
  const response = await hitApiWithSignUp(data);
  try {
    dispatch({ type: Constants.SIGN_UP_SUCCESS, payload: response });
  } catch (error) {
    dispatch({ type: Constants.SIGN_UP_FAILURE, payload: error.response });
  }
}

  export const signIn = (data) => async (dispatch) => {
    const response = await hitApiWithSignIn(data);
    console.log(response)
    try {
      const { token, user } = response;
      localStorage.setItem('token', token);
      localStorage.setItem('session-status', true);
      dispatch({ type: Constants.SIGN_IN_SUCCESS, payload: user });
    } catch (error) {
      dispatch({ type: Constants.SIGN_IN_FAILURE, payload: error.response });
    }
  }

  export const resetPassword = (data) => async (dispatch) => {
    const response = await hitApiWithResetPassword(data);
    try {
      dispatch({ type: Constants.RESET_PASSWORD_SUCCESS, payload: response });
    } catch (error) {
      dispatch({ type: Constants.RESET_PASSWORD_FAILURE, payload: error.response });
  }
}

  export const signOut = () => async (dispatch) => {
    const response = await hitApiWithSignOut();
    try {
      dispatch({ type: Constants.SIGN_OUT_SUCCESS, payload: response });
      clearSession();
    } catch (error) {
      dispatch({ type: Constants.SIGN_OUT_FAILURE, payload: error });
    }
  }