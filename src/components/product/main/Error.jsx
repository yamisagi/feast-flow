import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const Error = ({ error }) => {
  return (
    <div className='flex flex-col justify-center items-center p-5'>
      <Skeleton className='w-full bg-gradient-to-br from-zinc-900/50 to-zinc-800 rounded-lg shadow-md'>
        <div className='flex flex-col justify-center gap-y-10 items-center h-full p-10'>
          <p className='text-red-500 text-2xl font-bold text-center'>
            Oops! Something went wrong.
          </p>
          <p className='text-slate-50 text-xl text-center'>
            {error || 'Please try again later.'}
          </p>
        </div>
      </Skeleton>
    </div>
  );
};

export default Error;
