export const addToCart = (cart, product) => {
  const found = cart.find((item) => item.id === product.id);
  if (found)
    return cart.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  return [...cart, { ...product, quantity: 1 }];
};

export const increaseQuantity = (cart, id) => {
  return cart.map((item) =>
    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  );
};

export const decreaseQuantity = (cart, id) => {
  return cart
    .map((item) =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    )
    .filter((item) => item.quantity > 0);
};

export const removeFromCart = (cart, id) => {
  return cart.filter((item) => item.id !== id);
};


export const getItemInCart = (cart = [],product) => {
  return cart.find(item => item.id === product.id);
}

export const getTotalPrice = (cart = []) => {
  return cart.reduce((acc,item) => acc + item.price * item.quantity,0);
}