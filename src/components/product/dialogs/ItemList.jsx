import React, { useContext } from 'react';
import { currencyFormat } from '@/util/format';
import { CartContext } from '@/context/CartContext';
import ProceedDrawer from '@/components/product/dialogs/ProceedDrawer';
import CartItem from '@/components/product/helper/CartItem';
import NeonButton from '@/components/product/helper/NeonButton';

const ItemList = ({ setModalOpen }) => {
  const { state, cartFuncs } = useContext(CartContext);
  const { addToCart, removeFromCart } = cartFuncs;
  const [open, setOpen] = React.useState();
  return (
    <>
      <ul className='mt-4 w-full'>
        {state?.cart.map((item) => {
          return (
            <CartItem
              key={item.id}
              item={item}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
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
      {state?.cart.length > 0 ? (
        <ProceedDrawer
          open={open}
          setOpen={setOpen}
          setModalOpen={setModalOpen}
        >
          <NeonButton setOpen={setOpen} />
        </ProceedDrawer>
      ) : null}
    </>
  );
};

export default ItemList;
