import React from 'react';

const data1 = [
  {
    imageUrl: "/icons/footerIcon1.png",
    text1: "Email",
    text2: "contact@logistics.com",
  },
  {
    imageUrl: "/icons/footerIcon2.png",
    text1: "Call Us",
    text2: "(00) 112 365 489",
  },
];

const data2 = [
  "Agents & Brokers",
  "Consumers",
  "Claims",
  "About",
  "The Open Door"
]
const data3 = [
  "Career",
  "Privacy Policy",
  "Terms & Conditions"
]

const FooterSection = () => {
  return (
    <div
      className="h-auto pb-[100px] pt-[20px] mx-auto max-w-screen-sm md:max-w-screen-md"
    >

      <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="col-span-2 flex flex-col justify-start items-start gap-[20px] p-4">

        </div>
        <div className="flex flex-col justify-start items-start gap-[20px] p-4">
          <p className="text-white font-rubik text-[25px] font-medium">
            Pages
          </p>
        </div>

        <div className="flex flex-col justify-start items-start gap-[20px] p-4">
          <p className="text-white font-rubik text-[25px] font-medium">
            Utility
          </p>

        </div>

      </div>

      <div className="mx-[30px] md:mx-[0px] grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-2 flex flex-col justify-start items-start gap-[20px] p-4">
          {
            data1?.map((item, index) => {
              return (
                <div key={index} className='flex items-center gap-[12px]'>
                  <img src={item?.imageUrl} className='w-auto h-auto' />
                  <div>
                    <p className="text-[14px] text-white font-rubik text-base font-normal">
                      {item?.text1}
                    </p>
                    <p className="text-[14px] text-white font-rubik text-base font-normal">
                      {item?.text2}
                    </p>
                  </div>

                </div>
              )
            })
          }
        </div>
        <div className="flex flex-col justify-start items-start gap-[20px] p-4">
        <p className="md:hidden text-white font-rubik text-[25px] font-medium">
            Pages
          </p>
          {
            data2?.map((item, index) => {
              return (
                <div key={index} className='flex items-center gap-[12px]'>
                  <p className="text-[14px] text-white font-rubik text-base font-normal">
                    {item}
                  </p>
                </div>
              )
            })
          }
        </div>

        <div className="flex flex-col justify-start items-start gap-[20px] p-4">
        <p className="md:hidden text-white font-rubik text-[25px] font-medium">
            Utility
          </p>
          {
            data3?.map((item, index) => {
              return (
                <div key={index} className='flex items-center gap-[12px]'>
                  <p className="text-[14px] text-white font-rubik text-base font-normal">
                    {item}
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

export default FooterSection;
