import React from 'react';
import { LucideShoppingCart } from 'lucide-react';

const Header = () => {
  return (
    <header className='flex items-center justify-between w-full h-16 p-11 bg-zinc-900 sticky top-0 z-10'>
      <h1 className='text-left text-4xl font-bold text-white'>Feast Flow</h1>
      <div>
        <button>
          <LucideShoppingCart className='w-8 h-8 text-white' />
        </button>
      </div>
    </header>
  );
};

export default Header;
