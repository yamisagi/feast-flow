const initialState = {
  cart: [],
  amount: 0,
  total: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
        amount: state.amount + 1,
        total: state.total + action.payload.price,
      };
    case 'REMOVE_FROM_CART':
      if (state.amount > 0) {
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
          amount: state.amount - 1,
          total: state.total - action.payload.price,
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
