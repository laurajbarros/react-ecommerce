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
