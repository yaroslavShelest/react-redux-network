import { combineReducers } from 'redux';

import profileReducer from './profile/profile-reducer';
import newsReducer from './news/news-reducer';
import usersReducer from './users/user-reducers';
import shopReducer from './shop/shop-reducer';
import appReducer from './app/app-reducer';
import authReducer from './auth/auth-reducer';
import { reducer as formReducer } from 'redux-form'





export default combineReducers({
     profileReducer,
     newsReducer,
     usersReducer,
     shopReducer,
     appReducer,
     authReducer,
     form: formReducer,
   });