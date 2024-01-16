import { createContext, useReducer } from 'react';
import reducer from '@/reducer/reducer';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const initialState = {
    cart: [],
    total: 0,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const cartFuncs = {
    addToCart: (item) => {
      dispatch({ type: 'ADD_TO_CART', payload: item });
    },
    removeFromCart: (item) => {
      dispatch({ type: 'REMOVE_FROM_CART', payload: item });
    },
    clearCart: () => {
      dispatch({ type: 'CLEAR_CART' });
    },
  };

  return (
    <CartContext.Provider value={{ state, cartFuncs }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
