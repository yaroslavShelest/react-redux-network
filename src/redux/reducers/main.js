import { combineReducers } from 'redux';

import profileReducer from './profile/profile-reducer';
import newsReducer from './news/news-reducer';
import usersReducer from './users/user-reducers';
import shopReducer from './shop/shop-reducer';




export default combineReducers({
     profileReducer,
     newsReducer,
     usersReducer,
     shopReducer
   });