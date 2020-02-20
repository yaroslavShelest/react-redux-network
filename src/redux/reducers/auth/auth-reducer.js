import {
     authMeApi
} from "../../../api/auth-me-api";
import {
     stopSubmit
} from "redux-form";


const SET_USER_DATA = "SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';


let initialState = {
     userId: null,
     login: null,
     email: null,
     isAuth: false,
     isFetching: false,
};

const authReducer = (state = initialState, action) => {
     switch (action.type) {
          case SET_USER_DATA:
          case GET_CAPTCHA_URL_SUCCESS:
               return {
                    ...state,
                    ...action.payload
               }
               default:
                    return state;
     }
};

export const actionsCreaterSetAuthUserData = (userId, email, login, isAuth) => {
     return {
          type: SET_USER_DATA,
          payload: {
               userId,
               email,
               login,
               isAuth
          }
     }
};

export const getCaptchaUrlSuccess = (captchaUrl) => ({
     type: GET_CAPTCHA_URL_SUCCESS,
     payload: {
          captchaUrl
     }
});


export const authMeApiThunkCreator = () => {
     return (dispatch) => {
          return authMeApi.authMe().then(response => {
               if (response.resultCode === 0) {
                    let {
                         id,
                         email,
                         login
                    } = response.data;
                    dispatch(actionsCreaterSetAuthUserData(id, email, login, true))
               }
          });
     }
}

export const loginThunkCreator = (email, password, rememberMe, captcha) => {
     return async (dispatch) => {
          let response = await authMeApi.login(email, password, rememberMe, captcha)
          debugger
          if (response.data.resultCode === 0) {
               dispatch(authMeApiThunkCreator())
          } else {
               if (response.data.resultCode === 10) {
                    // dispatch(getCaptchaUrl());
               }
               let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error!!!'
               let action = stopSubmit('login', {
                    _error: message
               });
               dispatch(action)
          }
     }
}

// export const getCaptchaUrl = () => async (dispatch) => {
//      const response = await securityAPI.getCaptchaUrl();
//      const captchaUrl = response.data.url;
//      dispatch(getCaptchaUrlSuccess(captchaUrl));
// }

export const logOutThunkCreator = () => {
     return async (dispatch) => {
          let response = await authMeApi.logout()

          if (response.data.resultCode === 0) {
               dispatch(actionsCreaterSetAuthUserData(null, null, null, false))
          }
     }
}

export default authReducer;