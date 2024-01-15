import React from 'react';
import Modal from './Modal';
const Header = () => {
  return (
    <header className='nav flex h-16 p-11 bg-zinc-900/50 sticky top-5 z-10 m-5 backdrop-blur-md rounded-3xl shadow-md shadow-slate-50'>
      <nav className='flex justify-between items-center w-full'>
        <h1 className='text-left text-4xl font-bold text-white'>Feast Flow</h1>
        {/* This is shacdn modal  */}
        <Modal />
      </nav>
    </header>
  );
};

export default Header;
