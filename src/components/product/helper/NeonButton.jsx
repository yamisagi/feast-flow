import React, { useContext } from 'react';
import { CreditCard } from 'lucide-react';
import { CartContext } from '@/context/CartContext';

const NeonButton = ({ setOpen }) => {
  const { state } = useContext(CartContext);
  return (
    <div className='mt-5 w-fit mx-auto cursor-pointer'>
      <div className='relative flex flex-col items-center '>
        <CreditCard
          size={32}
          color='green'
          className='animate-neon-glow ring-offset-0'
          onClick={() => setOpen(true)}
        />
        <span className='absolute w-4 h-4 text-xs font-bold text-center text-white rounded-full bg-zinc-500/50 backdrop-blur-sm -top-1 -right-1'>
          {state?.cart.length}
        </span>
        <span className='animate-neon-glow text-xs font-bold mt-1 text-green-500'>
          Pay
        </span>
      </div>
    </div>
  );
};

export default NeonButton;
