// components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="mx-auto max-w-screen-sm md:max-w-screen-xl text-white p-4 flex items-center justify-between">
      <div className="flex items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">Your Logo</h1>
        </div>

        <nav className="hidden md:flex space-x-4 ml-10">
          <a href="#" className="text-[16px] text-[#FFFFFF] font-bold hover:text-indigo-500">Agents & Brokers</a>
          <a href="#" className="text-[16px] text-[#FFFFFF] font-bold hover:text-indigo-500">Consumers</a>
          <a href="#" className="text-[16px] text-[#FFFFFF] font-bold hover:text-indigo-500">Resources</a>
          <a href="#" className="text-[16px] text-[#FFFFFF] font-bold hover:text-indigo-500">About</a>
          <a href="#" className="text-[16px] text-[#FFFFFF] font-bold hover:text-indigo-500">FAQ</a>
        </nav>
      </div>

      <div className="flex gap-[10px] items-center">
      <a href="tel:(00) 112 365 489"> <img src="/icons/callUs.png" alt="Phone Icon" className="w-[63] h-[63] mr-2" /></a>
        <div className='flex flex-col text-left gap-[5px]'>
        <p className="text-[14px] text-[#FFFFFF] font-bold"><a href="tel:(00) 112 365 489">Call Us</a></p>
        <p className="text-[14px] text-[#FFFFFF] font-bold"><a href="tel:(00) 112 365 489">{"(00) 112 365 489"}</a></p>
        </div>
      </div>
    </header>
  );
};

export default Header;
