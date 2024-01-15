import React, { useContext } from 'react';
import { currencyFormat } from '@/util/format';
import { BadgeMinus, BadgePlus, CreditCard } from 'lucide-react';
import { CartContext } from '@/context/CartContext';

const ItemList = () => {
  const { state, cartFuncs } = useContext(CartContext);

  const { addToCart, removeFromCart } = cartFuncs;
  return (
    <>
      <ul className='mt-4 w-full'>
        {state?.cart.map((item) => {
          return (
            <li key={item.id} className='flex my-5 w-full justify-between'>
              <p className='text-slate-100'>{item.name}</p>
              <p className='text-red-500 flex-grow mr-12 text-right'>
                x{item?.amount}
              </p>
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
        })}
      </ul>
      <p className='text-center text-slate-100 mt-10'>
        {currencyFormat.format(state?.total) === '-$0.00' ? null : (
          <>
            <span className='text-slate-100/50'>Total:</span>{' '}
            {currencyFormat.format(state?.total)}
          </>
        )}
      </p>
      <button>
        <div
          className='flex items-center justify-center  mt-10'
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className='relative flex flex-col items-center'>
            <CreditCard
              size={32}
              color='green'
              className='animate-neon-glow ring-offset-0'
            />
            <span className='absolute w-4 h-4 text-xs font-bold text-center text-white rounded-full bg-zinc-500/50 backdrop-blur-sm -top-1 -right-1'>
              {state?.cart.length}
            </span>
            <span
              className='animate-neon-glow text-xs font-bold mt-1 text-green-500'
            >Pay</span>
          </div>
        </div>
      </button>
    </>
  );
};

export default ItemList;
