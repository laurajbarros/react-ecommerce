export const addItemToCart = (cartlist, item) => {
  const itemFound = cartlist.find(element => element.id === item.id);
  if(itemFound){
    return cartlist.map((cartItem) =>
      cartItem.id === itemFound.id
      ? {...cartItem, quantity: ++cartItem.quantity}
      : cartItem
    )
  };
  return [...cartlist, {...item, quantity:1}]
}
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
