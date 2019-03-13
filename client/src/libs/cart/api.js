const saveToLocalStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
}

const getFromLocalStorage = () => {
  const emptyCart = { items: [] };
  const cart = JSON.parse(localStorage.getItem('cart'));
  return cart || emptyCart;
}


export const fetch = async () => getFromLocalStorage();

export const addToCart = async (id, optionsId, optionsName, optionsPrice, qty = 1 ) => {
  const cart = await fetch();
  const exists = cart.items.findIndex(item => item.optionsId === optionsId) > -1;

  if(exists) {
    // eslint-disable-next-line
    throw { message: 'Item already exists' };
  }

  const newItem = { id, optionsId, optionsName, optionsPrice, qty };
  const newCart =  {
    ...cart,
    items: [
      ...cart.items,
      newItem,
    ],
  };

  saveToLocalStorage(newCart);

  return newCart;
}

export const removeFromCart = async (optionsId) => {
  const cart = await fetch();
  const index = cart.items.findIndex(item => item.optionsId === optionsId);

  cart.items.splice(index, 1);

  const newCart =  {
    ...cart,
    items: [
      ...cart.items,
    ],
  };

  saveToLocalStorage(newCart);

  return newCart;
}
