import React from 'react';

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

const InsuranceSection = () => {
  return (
    <div
      className="h-auto py-[150px] mx-auto max-w-screen-sm md:max-w-screen-lg"

      style={{ backgroundImage: 'url("/backgrounds/insurance_bg.svg")', backgroundRepeat: 'no-repeat', backgroundSize: '100%' }}

    >

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className='mx-[30px] md:mx-[0px]'>
          <p className="border-l-4 border-[#5A3F6B] inline-flex py-[3px] px-[9px] items-center bg-opacity-50 bg-gray-300 text-[14px] text-[#FFFFFF]">
            {"CANNABIS INSURANCE"}
          </p>

          <p className="text-white font-rubik font-semibold text-[30px] leading-150">{'Offers customized commercial insurance plans for:'}</p>
        </div>
        <div className="mt-10 md:mt-0 flex flex-col justify-start items-start gap-[20px] mx-[30px] md:mx-[0px] p-4">
          {
            data?.map((item, index) => {
              return (
                <div key={index} className='flex items-center gap-[12px]'>
                  <img src={item?.imageUrl} className='w-auto h-auto' />
                  <p className="text-white font-rubik text-base font-normal">
                    {item?.text}
                  </p>
                </div>
              )
            })
          }
        </div>

        <div className="flex flex-col justify-start items-start mx-[30px] md:mx-[0px] gap-[20px] p-4">
          {
            data1?.map((item, index) => {
              return (
                <div key={index} className='flex items-center gap-[12px]'>
                  <img src={item?.imageUrl} className='w-auto h-auto' />
                  <p className="text-white font-rubik text-base font-normal">
                    {item?.text}
                  </p>
                </div>
              )
            })
          }
        </div>

      </div>


    </div>

  );
};

export default InsuranceSection;
