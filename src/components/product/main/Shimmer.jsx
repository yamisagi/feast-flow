import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const Shimmer = () => {
  const dummyArray = Array(6).fill(0);
  return (
    <div className='grid grid-cols-1 gap-4 px-4 py-4 mx-auto mt-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:px-6 lg:px-8 lg:py-8 lg:grid-cols-3 xl:gap-8'>
      {dummyArray.map((_, index) => (
        <div key={index} className='p-2'>
          <Skeleton className='w-full h-64' />
          <Skeleton className='w-1/2 h-4 mt-4' />
          <Skeleton className='w-1/4 h-4 mt-4' />
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
