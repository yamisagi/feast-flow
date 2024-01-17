import React, { useEffect, useContext } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { CartContext } from '@/context/CartContext';

const SuccessModal = ({
  children,
  successOpen,
  setSuccessOpen,
}) => {

  return (
    <Dialog
      aria-label='Success Modal'
      open={successOpen}
      onOpenChange={setSuccessOpen}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='text-2xl font-bold text-center text-slate-100'>
            Success!
          </DialogTitle>
          <DialogDescription className='text-center'>
            Your order has been placed. Thank you for your purchase!
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessModal;
