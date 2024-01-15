import React, { useContext } from 'react';
import { CartContext } from '@/context/CartContext';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '../ui/card';
import { currencyFormat } from '@/util/format';

const ProductCard = ({ item }) => {
  const { name, price, description, image } = item;
  const prefix = import.meta.env.VITE_API_URL;
  const { dispatch } = useContext(CartContext);
  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };
  return (
    <Card className='w-64 gap-y-1 bg-zinc-200 flex flex-col justify-between'>
      {/*  To override the default padding */}
      <CardHeader className='p-1'>
        <img
          src={`${prefix + image}`}
          className='w-full h-64 object-cover rounded-lg'
        />
        <CardTitle className='text-xl font-bold text-center text-slate-900 mt-3'>
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent className='flex flex-col flex-grow items-center mb-5'>
        <CardDescription className='text-sm text-center text-muted-foreground'>
          {currencyFormat.format(price)}
        </CardDescription>
        <p className='text-sm text-center text-muted-background mt-2'>
          {description}
        </p>
      </CardContent>
      <CardFooter className='flex justify-center items-center '>
        <button className='cart-button' onClick={addToCart}>
          Add to Cart
        </button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
