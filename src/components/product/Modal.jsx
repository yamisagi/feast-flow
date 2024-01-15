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

const Modal = () => {
  const { state } = useContext(CartContext);
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
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
