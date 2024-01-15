import React, { useContext } from 'react';
import { CartContext } from '@/context/CartContext';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { LucideShoppingCart } from 'lucide-react';
import ItemList from './ItemList';

const Modal = () => {
  const { state } = useContext(CartContext);
  console.log(state.cart);
  return (
    <Dialog aria-label='Shopping Cart' asChild closeOnOutsideClick>
      <DialogTrigger asChild>
        <button>
          <LucideShoppingCart className='w-8 h-8 text-white fill-current' />
          <span className='absolute w-4 h-4 text-xs font-bold text-center text-white  rounded-full top-6 right-10 bg-zinc-900/50 backdrop-blur-sm shadow-md shadow-slate-50'>
            {state?.cart.length}
          </span>
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='text-2xl font-bold text-center text-slate-100'>
            Your Cart
          </DialogTitle>
          <DialogDescription className='text-center'>
            {
              state?.cart.length > 0
                ? 'Here are the items you added to your cart 😋'
                : 'Your cart is empty'
            }
          </DialogDescription>
          <ItemList />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
