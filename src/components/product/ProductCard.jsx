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
  const { name, price, description, image } = item;
  return (
    <Card className='w-64 gap-y-1 bg-zinc-200 flex flex-col justify-between'>
      {/*  To override the default padding */}
      <CardHeader className='p-1'>
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
      <CardFooter className='flex justify-center items-center '>
        <button className='cart-button'>Add to Cart</button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
