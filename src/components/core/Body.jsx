import React from 'react';
import ProductCard from './Card';

const Body = ({ items = [] }) => {
  const cardRef = React.useRef();
  return (
    <div className='flex flex-col items-center justify-center w-full h-full mt-20'>
      <div className='grid grid-cols-3 gap-4 p-4'>
        {items.map((item) => (
          <ProductCard key={item.id} item={item} cardRef={cardRef} />
        ))}
      </div>
    </div>
  );
};

export default Body;
