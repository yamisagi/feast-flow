import React from 'react';
import { currencyFormat } from '@/util/format';
import { BadgeMinus, BadgePlus } from 'lucide-react';

const CartItem = ({ item, addToCart, removeFromCart }) => {
  return (
    <li className='flex my-5 w-full justify-between'>
      <p className='text-slate-100'>{item.name}</p>
      <p className='text-red-500 flex-grow mr-12 text-right'>x{item?.amount}</p>
      <section className='flex items-center justify-between min-w-32'>
        <button onClick={() => addToCart(item)} className='mr-2'>
          <BadgePlus size={16} color='green' />
        </button>
        <p className='text-slate-100 text-right'>
          {currencyFormat.format(item.price)}
        </p>
        <button onClick={() => removeFromCart(item)} className='ml-2'>
          <BadgeMinus size={16} color='red' />
        </button>
      </section>
    </li>
  );
};

export default CartItem;
