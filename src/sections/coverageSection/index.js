import React from 'react';
import Header from '../Header';
import ColorBox from '@/components/colorBox';

const data = [
  {
    text: "Maximum limits of $10M/$10M/$10M",
  },
  {
    text: "Claims-made",
  },
  {
    text: "CGL or Products Only Option",
  },
  {
    text: "Electronic vapes",
  },
  {
    text: "Budtender Professional Liability",
  },
  {
    text: "Hired non-owned auto coverage available",
  },
]

const CoverageSection = () => {
  return (
    <div className='bg-white'>
      <div
        className="h-auto py-[80px] mx-auto max-w-screen-sm md:max-w-screen-md"
      >
        <p className='text-[35px] text-extrabold text-black text-center'>{"Cannabis Insurance Coverage Capabilities"}</p>

        <div className="mx-[30px] md:mx-[0px] grid grid-cols-1 md:grid-cols-2 gap-[65px] mt-[60px]">
          <div className='flex items-start justify-center'>
            <img
              src="/images/coverage-photo.png" // Replace with the actual image source
              alt="Coverage Image"
              className="w-full h-auto"
            />
          </div>

          <div className="flex flex-col justify-center items-start gap-[45px]">
            {
              data?.map((item, index) => {
                return (
                  <div key={index} className='flex gap-[10px]'>
                    <img src='/icons/Tick-Icon.svg' />
                    <p>{item?.text}</p>
                  </div>
                )
              })
            }

          </div>
        </div>
      </div>
    </div>

  );
};

export default CoverageSection;
