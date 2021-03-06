import {
     shopApi
} from "../../../api/shop-api";

const SET_ITEMS = 'shop/SET_ITEMS';
const TOGGLE_IS_LOADING = "shop/TOGGLE_IS_LOADING";
const SET_FILTER = 'shop/SET_FILTER';
const SET_QUERY = 'shop/SET_QUERY';
const ADD_TO_CART = 'shop/ADD_TO_CART';
const REMOVE_FROM_CART = 'shop/REMOVE_FROM_CART';

const initialState = {
     isLoading: false,
     items: [],
     searchQuery: '',
     filterBy: 'all',
};


const shopReducer = (state = initialState, action) => {
     switch (action.type) {
          case SET_ITEMS:
               return {
                    ...state,
                    items: action.payload,
                    isLoading: true,
               };
          case TOGGLE_IS_LOADING:
               return {
                    ...state,
                    isLoading: action.isLoading
               };
          case SET_FILTER:
               return {
                    ...state,
                    filterBy: action.payload,
          };
          case SET_QUERY:
               return {
                 ...state,
                 searchQuery: action.payload,
               };

          default:
               return state;
     }
}

export const actionsSetItems = (items) => ({
     type: SET_ITEMS,
     payload: items
});

export const actionsToggleIsLoading = (isLoading) => {
     return {
         type: TOGGLE_IS_LOADING, 
         isLoading 
     }
};
export const actionsSetFilter = filter => ({
     type: SET_FILTER,
     payload: filter,
});

export const actionsSetSearchQuery = value => ({
     type: SET_QUERY,
     payload: value,
});


export const actionsAddToCart = obj => ({
     type: ADD_TO_CART,
     payload: obj,
});

export const actionsRemoveFromCart = id => ({
     type: REMOVE_FROM_CART,
     payload: id,
});

export const getBooksThunk = () => {
     return async (dispatch) => {
         dispatch(actionsToggleIsLoading(true)) 
         let data = await shopApi.getBooks()
             dispatch(actionsSetItems(data))
             dispatch(actionsToggleIsLoading(false))  
      }
};

export default shopReducer;