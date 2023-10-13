import React from 'react';
import Header from '../Header';
import ColorBox from '@/components/colorBox';

const data = [
  {
    heading: "Open States",
    colorCode: "#683039",
    text: "AZ, CO, CT, DC, FL, IL, MA, MI, NV, NJ, OH, OK, PA"
  },
  {
    heading: "Open Soon",
    colorCode: "#987D1B",
    text: "AL, AR, CA, ME, MD, MN, MO, MS, MT, NH, NY, OR, RI, SD, UT, VA, VT, WA"
  },
  {
    heading: "Open Shortly",
    colorCode: "#BDBDBD",
    text: "AK, HI, LA, ND, WV"
  },
]

const MapSection = () => {
  return (
    <div className='bg-white'>

      <div
        className="h-auto py-[80px] mx-auto max-w-screen-sm md:max-w-screen-lg"
      >
        <div>
          <p className='text-[45px] text-extrabold text-black text-center'>{"States Where CannaPak Offers"}</p>
          <p className='text-[45px] text-extrabold text-black text-center'>{"Insurance"}</p>
        </div>

        <div className="flex justify-center items-center mt-5">
          <img src="/images/mapImage.png" alt="Map Image" className="w-[80vw] h-[40vh] md:w-[auto] md:h-[500px]" />
        </div>
        <div className='flex flex-col gap-5 mt-20'>
          {data?.map((item, index) => {
            return (
              <ColorBox item={item} key={index} />
            )
          })}
        </div>
      </div>
    </div>

  );
};

export default MapSection;
