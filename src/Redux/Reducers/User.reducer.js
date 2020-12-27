import {
  USER_CLEAR_DATA,
  USER_LOGIN_FAILED,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_SIGNUP_FAILED,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
} from "../Actions/type";

let initialState = {
  loading: false,
  data: null,
  err: null,
  errSignUp: null,
  dataSignUp: null,
};

const UserReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_LOGIN_REQUEST:
      return { ...state, loading: true };
    case USER_LOGIN_SUCCESS:
      return { ...state, loading: false, data: payload };
    case USER_LOGIN_FAILED:
      return { ...state, loading: false, data: null, err: payload };
    case USER_CLEAR_DATA:
      return {
        ...state,
        loading: false,
        data: null,
        err: null,
        errSignUp: null,
        dataSignUp: null,
      };
    case USER_SIGNUP_REQUEST:
      return { ...state, loading: true };
    case USER_SIGNUP_SUCCESS:
      return { ...state, loading: false, dataSignUp: payload };
    case USER_SIGNUP_FAILED:
      console.log(payload);
      return { ...state, loading: false, dataSignUp: null, errSignUp: payload };
    default:
      return { ...state };
  }
};

export default UserReducer;
