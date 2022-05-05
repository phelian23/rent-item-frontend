const SIGN_IN_SUCCESS = "rent_item/users/SIGN_IN_SUCCESS";
const SIGN_IN_FAILURE = "rent_item/users/SIGN_IN_FAILURE";
const SIGN_UP_SUCCESS = 'rent_item/users/SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE = 'rent_item/users/SIGN_UP_FAILURE';
const RESET_PASSWORD_SUCCESS = 'rent_item/users/RESET_PASSWORD_SUCCESS';
const RESET_PASSWORD_FAILURE = 'rent_item/users/RESET_PASSWORD_FAILURE';
const SIGN_OUT_SUCCESS = 'rent_item/users/SIGN_OUT_SUCCESS';
const SIGN_OUT_FAILURE = 'rent_item/users/SIGN_OUT_FAILURE';

const initialState = {
  user: {},
  isLoading: false,
  isSignIn: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isSignIn: true
      };
    case SIGN_IN_FAILURE:
      return {
        ...state,
        user: {},
        isSignIn: false
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isSignIn: true
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        user: {},
        isSignIn: false
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        user: action.payload
      };
    case RESET_PASSWORD_FAILURE:
      return {
        ...state,
        user: {}
      };
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        user: {},
        isSignIn: false
      };
    case SIGN_OUT_FAILURE:
      return {
        ...state,
        user: {},
        isSignIn: true
      }
    default:
      return state;
  }
}
export default userReducer;