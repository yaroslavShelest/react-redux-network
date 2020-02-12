import {
     shopApi
} from "../../../api/shop-api";

const SET_ITEMS = 'shop/SET_ITEMS';
const SET_FILTER = 'shop/SET_FILTER';
const SET_QUERY = 'shop/SET_QUERY';
const ADD_TO_CART = 'shop/ADD_TO_CART';
const REMOVE_FROM_CART = 'shop/REMOVE_FROM_CART';


export const actionsSetItems = (items) => ({
     type: SET_ITEMS,
     payload: items
});

export const setFilter = filter => ({
     type: SET_FILTER,
     payload: filter,
});

export const setSearchQuery = value => ({
     type: SET_QUERY,
     payload: value,
});


export const addToCart = obj => ({
     type: ADD_TO_CART,
     payload: obj,
});

export const removeFromCart = id => ({
     type: REMOVE_FROM_CART,
     payload: id,
});


