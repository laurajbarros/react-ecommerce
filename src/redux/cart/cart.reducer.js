import { CartActionTypes } from './cart.types';
import { addItemToCart } from './cart.utils.js';

const INITIAL_STATE = {
  showCart: false,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_SHOW:
      return {
        ...state,
        showCart: !state.showCart,
      };
    case CartActionTypes.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems:addItemToCart(state.cartItems,action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;
