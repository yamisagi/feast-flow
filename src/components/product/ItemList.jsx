import React, { useContext } from 'react';
import { currencyFormat } from '@/util/format';
import { BadgeMinus, BadgePlus } from 'lucide-react';
import { CartContext } from '@/context/CartContext';

const ItemList = () => {
  const { state, dispatch } = useContext(CartContext);
  const handleAdd = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };
  const handleRemove = (item) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };

  console.log(currencyFormat.format(state?.total));

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
                <button onClick={() => handleAdd(item)} className='mr-2'>
                  <BadgePlus size={16} color='green' />
                </button>
                <p className='text-slate-100 text-right'>
                  {currencyFormat.format(item.price)}
                </p>
                <button onClick={() => handleRemove(item)} className='ml-2'>
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
    </>
  );
};

export default ItemList;
