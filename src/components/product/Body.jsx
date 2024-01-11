import React, { useEffect, useState } from 'react';
import ProductCard from '@/components/product/ProductCard';
import useMeals from '@/hooks/useMeals';

const Body = ({ items = [] }) => {
  const { meals } = useMeals();

  return (
    <div className='flex flex-col items-center justify-center w-full h-full mt-20'>
      <ul className='body-grid'>
        {meals.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Body;
