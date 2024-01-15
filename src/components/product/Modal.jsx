import React, { useContext } from 'react';
import { CartContext } from '@/context/CartContext';
import { currencyFormat } from '@/util/format';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { LucideShoppingCart } from 'lucide-react';

const Modal = () => {
  const { state } = useContext(CartContext);
  const hideSameID = state.cart.reduce((acc, current) => {
    const x = acc.find((item) => item.id === current.id);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);

  return (
    <Dialog>
      <DialogTrigger>
        <button>
          <LucideShoppingCart className='w-8 h-8 text-white fill-current' />
          <p className='absolute w-4 h-4 text-xs font-bold text-center text-white  rounded-full top-6 right-10 bg-zinc-900/50 backdrop-blur-sm shadow-md shadow-slate-50'>
            {state.cart.length}
          </p>
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='text-2xl font-bold text-center text-slate-100'>
            Your Cart
          </DialogTitle>
          <DialogDescription>
            You have {state.cart.length} items in your cart.
            <ul className='mt-4 w-full'>
              {hideSameID.map((item) => {
                return (
                  <li key={item.id} className='flex w-full justify-between'>
                    <p className='text-slate-100 min-w-32'>{item.name}</p>
                    <p className='text-red-500 min-w-32 text-center'>
                      x{state.cart.filter((i) => i.id === item.id).length}
                    </p>
                    <p className='min-w-32 text-slate-100 text-right'>
                      {currencyFormat.format(item.price)}
                    </p>
                  </li>
                );
              })}
            </ul>
            <p className='text-center text-slate-100 mt-10'>
              Total: {currencyFormat.format(state?.total)}
            </p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
