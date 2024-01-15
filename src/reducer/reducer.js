const initialState = {
  cart: [],
  total: 0,
};

const findProductIndex = (cart, productId) =>
  cart.findIndex((item) => item.id === productId);

const updateCartItem = (cart, index, amount) => {
  const updatedItem = {
    ...cart[index],
    amount,
  };
  return [...cart.slice(0, index), updatedItem, ...cart.slice(index + 1)];
};

const removeItemFromCart = (cart, index) => {
  return [...cart.slice(0, index), ...cart.slice(index + 1)];
};

const reducer = (state = initialState, action) => {
  const stringToFloat = (string) => {
    return parseFloat(string);
  };
  const price = stringToFloat(action.payload.price);

  switch (action.type) {
    case 'ADD_TO_CART': {
      const { cart } = state;
      const { id } = action.payload;
      const checkExist = findProductIndex(cart, id);
      const existingItem = cart[checkExist];
      let newCart = [...cart];
      if (checkExist !== -1) {
        newCart = updateCartItem(cart, checkExist, existingItem.amount + 1);
      } else {
        newCart = [
          ...cart,
          {
            ...action.payload,
            amount: 1,
          },
        ];
      }
      return {
        ...state,
        cart: newCart,
        total: state.total + price,
      };
    }
    case 'REMOVE_FROM_CART': {
      const { cart, total } = state;
      const { id, price } = action.payload;

      const checkExist = findProductIndex(cart, id);
      const existingItem = cart[checkExist];

      const newCart =
        existingItem.amount > 1
          ? updateCartItem(cart, checkExist, existingItem.amount - 1)
          : removeItemFromCart(cart, checkExist);

      return {
        ...state,
        cart: newCart,
        total: total - price,
      };
    }
    default:
      return state;
  }
};

export default reducer;
