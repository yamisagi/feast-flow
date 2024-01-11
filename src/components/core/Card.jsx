import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '../ui/card';

const ProductCard = ({ item }) => {
  const { id, name, price, description, image } = item;
  return (
    <Card className='w-64 bg-zinc-200'>
      <CardHeader
        className='p-2' // To override the default padding
      >
        <img src={image} className='w-full h-64 object-cover rounded-lg' />
        <CardTitle className='text-center'>
          <h3>{name}</h3>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
          <p className='text-sm text-center text-muted-foreground'>{price}$</p>
        </CardDescription>
        <p className='text-sm text-center text-muted-background mt-2'>
          {description}
        </p>
      </CardContent>
      <CardFooter>
        <button className='mx-auto font-bold text-white bg-zinc-900 rounded-lg px-4 py-2 hover:bg-zinc-800'>
          Add to Cart
        </button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
