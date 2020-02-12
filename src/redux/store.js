import {
     createStore,
     applyMiddleware,
     compose
} from 'redux';
import thunkMiddlewaer from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './reducers/main';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware( logger , thunkMiddlewaer)));


export default store;
