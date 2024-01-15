import { createContext, useReducer } from 'react';
import reducer from '@/reducer/reducer';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const initialState = {
    cart: [],
    amount: 0,
    total: 0,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
