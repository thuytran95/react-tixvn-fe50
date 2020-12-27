import { createAction } from ".";
import { userService } from "../../Service";
import setHeaders from "../../utils/setHeaders";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_CLEAR_DATA,
  USER_LOGIN_FAILED,
  ALERT_SUCCESS,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILED,
  USER_SIGNUP_REQUEST,
} from "./type";

const TIME_EXP = 3600000;

export const actLoginApi = (user, history) => {
  return (dispatch) => {
    dispatch(createAction(USER_LOGIN_REQUEST, null));
    userService
      .logIn(user)
      .then((res) => {
        dispatch(createAction(USER_LOGIN_SUCCESS, res.data));
        if (res.data.maLoaiNguoiDung) {
          //set header token
          setHeaders(res.data.accessToken);

          // lưu trạng thai login
          localStorage.setItem("User", JSON.stringify(res.data));
          // redirect qua home
          history.replace("/home");

          // Thời gian hết phiên
          // const date = new Date().getTime();
          // const exp = date + TIME_EXP;
          // localStorage.setItem("exp", exp);
          // dispatch(setTimeoutLogout(history, TIME_EXP));
        } else {
          return Promise.reject({
            response: { data: "Bạn chưa đăng ký!" },
          });
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(createAction(USER_LOGIN_FAILED, err));
      });
  };
};

export const actLogout = (history) => {
  localStorage.removeItem("User");
  localStorage.removeItem("exp");
  // chuyen huong ve trang home
  history.push("/home");
  return { type: USER_CLEAR_DATA };
};

// export const setTimeoutLogout = (history, expTimeout) => {
//   return (dispatch) => {
//     setTimeout(() => {
//       dispatch(actLogout(history));
//     }, expTimeout);
//   };
// };

export const actTryLogin = (history) => {
  return (dispatch) => {
    if (!localStorage.getItem("User")) {
      return;
    }

    // const exp = localStorage.getItem("exp");
    // const date = new Date().getTime();

    // if (date > exp) {
    //   dispatch(actLogout(history));
    //   return;
    // }

    const user = JSON.parse(localStorage.getItem("User"));
    setHeaders(user.accessToken);
    dispatch(createAction(USER_LOGIN_SUCCESS, user));
  };
};

//Signup
export const actSignUpApi = (user, history) => {
  return (dispatch) => {
    dispatch(createAction(USER_SIGNUP_REQUEST, null));

    userService
      .signUp(user)
      .then((res) => {
        console.log(res.data);
        dispatch(createAction(USER_SIGNUP_SUCCESS, res.data));

        // redirect qua login
        history.replace("/login");
      })
      .catch((err) => {
        console.log(err);
        dispatch(createAction(USER_SIGNUP_FAILED, err));
      });
  };
};
