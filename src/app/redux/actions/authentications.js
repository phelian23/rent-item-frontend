import { hitApiWithSignIn, hitApiWithSignUp, hitApiWithResetPassword, hitApiWithSignOut } from '../../api/auth';
import { clearSession } from '../../utils/sessions';

export const signUp = (data) => async (dispatch) => {
  const response = await hitApiWithSignUp(data);
  if (response.status === 200) {
    dispatch({ type: 'SIGN_UP_SUCCESS', payload: response.data });
  } else {
    dispatch({ type: 'SIGN_UP_FAILURE', payload: response.data });
  }
}

  export const signIn = (data) => async (dispatch) => {
    const response = await hitApiWithSignIn(data);
    if (response.status === 200) {
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('session-status', true);
      dispatch({ type: 'SIGN_IN_SUCCESS', payload: user });
    }
    else {
      dispatch({ type: 'SIGN_IN_FAILURE', payload: response.data });
    }
  }

  export const resetPassword = (data) => async (dispatch) => {
    const response = await hitApiWithResetPassword(data);
    if (response.status === 200) {
      dispatch({ type: 'RESET_PASSWORD_SUCCESS', payload: response.data });
    }
    else {
      dispatch({ type: 'RESET_PASSWORD_FAILURE', payload: response.data });
    }
  }

  export const signOut = () => async (dispatch) => {
    const response = await hitApiWithSignOut();
    if (response.status === 200) {
      dispatch({ type: 'SIGN_OUT_SUCCESS', payload: response.data });
      clearSession();
    }
    else {
      dispatch({ type: 'SIGN_OUT_FAILURE', payload: response.data });
    }
  }