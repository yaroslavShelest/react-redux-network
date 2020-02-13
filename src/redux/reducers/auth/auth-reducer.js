import { authMeApi } from "../../../api/auth-me-api";


const SET_USER_DATA = "SET_USER_DATA";


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
               return {
                    ...state,
                    ...action.payload,
               };
          default:
               return state;
     }
};