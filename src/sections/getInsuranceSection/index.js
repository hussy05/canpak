import React from 'react';
import Header from '../Header';
import ColorBox from '@/components/colorBox';

const data = [
  {
    imageUrl: "/icons/insurance-icon1.png",
    text: "Retailers & Dispensaries",
  },
  {
    imageUrl: "/icons/insurance-icon2.png",
    text: "Manufacturers",
  },
  {
    imageUrl: "/icons/insurance-icon3.png",
    text: "Cultivators/Growers/Processors",
  }
];
const data1 = [
  {
    imageUrl: "/icons/insurance-icon4.png",
    text: "Distributors & Transporters",
  },
  {
    imageUrl: "/icons/insurance-icon5.png",
    text: "ManufacturerTobacco & Head Shops",
  },
]

const GetInsuranceSection = () => {
  return (
    <div
      className="h-auto py-[50px] mx-auto max-w-screen-sm md:max-w-screen-lg"
    >
      <div className="h-[0.5px] bg-white"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-[97px]">
        <div className='mx-[30px] md:mx-[0px] md:pl-[80px]'>
          <p className="text-white font-rubik font-semibold text-[30px] leading-150">{'Get insurance for your Cannabis business today!'}</p>
        </div>

        <div className="mt-10 md:mt-0 flex justify-center md:justify-end items-center">
          <div className="py-[22px] px-[46px] font-extrabold bg-white">
            <p className="text-black text-center font-dm-sans font-bold text-[18px] leading-[20px]">
              {"Start a Quote"}
            </p>
          </div>
        </div>


      </div>


      <div className="h-[0.5px] bg-white"></div>


    </div>

  );
};

export default GetInsuranceSection;
