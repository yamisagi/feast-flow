const initialState = {
  cart: [],
  total: 0,
};

const reducer = (state = initialState, action) => {
  const stringToFloat = (string) => {
    return parseFloat(string);
  };
  const price = stringToFloat(action.payload.price);
  switch (action.type) {
    case 'ADD_TO_CART': {
      // Check if item already exists in cart
      const checkExist = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      // Create new cart array to avoid mutating state
      const newCart = [...state.cart];
      if (checkExist !== -1) {
        // If item exists, find the index and update the amount
        const existingItem = state.cart[checkExist];
        // Create new item object with updated amount
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount + 1,
        };
        // Replace the existing item with the updated item
        newCart[checkExist] = updatedItem;
      } else {
        newCart.push({ ...action.payload, amount: 1 });
      }
      return {
        ...state,
        cart: newCart,
        total: state.total + price,
      };
    }
    case 'REMOVE_FROM_CART':
      if (state.amount > 0) {
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
          amount: state.amount - 1,
          total: state.total - price,
        };
      }
      break;
    case 'DEC_AMOUNT':
      return {
        ...state,
        cart: [...state.cart, action.payload],
        amount: state.amount - 1,
        total: state.total - action.payload.price,
      };
    case 'INC_AMOUNT':
      return {
        ...state,
        cart: [...state.cart, action.payload],
        amount: state.amount + 1,
        total: state.total + action.payload.price,
      };
    default:
      return state;
  }
};

export default reducer;
