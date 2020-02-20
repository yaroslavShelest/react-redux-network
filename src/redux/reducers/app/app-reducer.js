import { authMeApiThunkCreator } from "../auth/auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


let initialState = {
     initialized: false
 };

const appReducer = (state = initialState, action) => {
     switch (action.type) {
         case INITIALIZED_SUCCESS:
             return {
                 ...state,
                 initialized: true
             }
         default:
             return state;
     }}


export const actionsCreaterInitializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeAppThunkCreater = () => (dispatch) => {
   let promise = dispatch(authMeApiThunkCreator());
  // dispatch(somethingelse());
  //dispatch(somethingelse()); мы ждем отработку всех ассинхроных диспатчей  и через масив потом выполняем код

   Promise.all([promise]).then(()=>{
     dispatch(actionsCreaterInitializedSuccess());
   })  
 }
export default appReducer;