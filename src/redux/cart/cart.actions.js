import { CartActionTypes } from './cart.types.js';

export const toggleShowCart = () => {
  return ({
      type: CartActionTypes.TOGGLE_SHOW,
  })
}

export const addItemToCart = item => {
  return ({
      type: CartActionTypes.ADD_ITEM_TO_CART,
      payload: item
  })
}

export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
});

export const clearItemFromCart = item => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});
