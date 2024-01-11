import React from 'react';
import { LucideShoppingCart } from 'lucide-react';

const Header = () => {
  return (
    <header
      className='nav flex h-16 p-11 bg-zinc-900/50 sticky top-5 z-10 m-5 backdrop-blur-md rounded-3xl shadow-md shadow-slate-50'
    >
      <nav className='flex justify-between items-center w-full'>
        <h1 className='text-left text-4xl font-bold text-white'>Feast Flow</h1>
        <button>
          <LucideShoppingCart className='w-8 h-8 text-white fill-current' />
          <p className='absolute w-4 h-4 text-xs font-bold text-center text-white  rounded-full top-6 right-10 bg-zinc-900/50 backdrop-blur-sm shadow-md shadow-slate-50'>
            0
          </p>
        </button>
      </nav>
    </header>
  );
};

export default Header;
