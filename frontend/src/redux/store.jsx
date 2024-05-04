import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Example middleware, you can replace it with your middleware if needed

import {
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
} from "./reducer/userReducer";

import { cartReducer } from './reducer/cartReducers';

import{
  productListReducer,
  productDetailsReducer,
  productCreateReviewReducer,
} from "./reducer/productReducers"

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productReviewCreate: productCreateReviewReducer,
  cart: cartReducer,
});

// Check local storage for user info
const userInfoFromLocalStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

// Initial state
const initialState = {
  userLogin: { userInfo: userInfoFromLocalStorage },
  // Add other initial states here
};

// Apply middleware
const middleware = [thunk]; // Add other middleware as needed

// Create store
const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
