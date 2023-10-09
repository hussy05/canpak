import React from 'react';
import Header from '../Header';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section
      className="h-auto md:h-[90vh] flex items-center justify-center"
    >
      <div className='py-10 md:p-10 h-[auto] mx-[30px] pt-20 md:mx-auto max-w-screen-sm md:max-w-screen-xl'>
        <div className="flex items-center grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="text-white flex flex-col justify-start items-center gap-[50px]">
            <h2 className="text-[40px] text-extrabold text-[#FFFFFF]">{"The Fastest Way to Get Cannabis Insurance- Guaranteed!"}</h2>
            <p className="text-[18px] text-bold text-[#FFFFFF]">{"Protect your cannabis business with the right insurance for your risks. It's easy to get free quotes for cannabis business insurance by filling out our online application with basic facts about your business."}</p>
            <div className="flex border border-#E8E3E9 rounded w-full mt-[20px]">
              <div className='w-[75%]'>
                <input
                  type="text"
                  className="flex-1 outline-none px-[19px] py-[23px] bg-transparent w-full h-[64px]"
                  placeholder="What’s the cannabis business address you want to insure?"
                />
              </div>
              <div
                className="flex justify-center items-center border-l border-#E8E3E9 px-2 bg-[#E8E3E9] w-[25%] h-[64px]"
              >
                <Link href={'/forms'}>
                  <p className='text-[#5A3F6B] text-[20px] text-extrabold'>{"Start Quote"}</p>
                </Link>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center md:justify-end'>
            <img src="/images/heroImage.png" alt="Hero Image" className="w-auto h-[500px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
