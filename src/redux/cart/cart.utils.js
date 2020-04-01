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
