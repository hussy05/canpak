import React from 'react';

const RequirementSection = () => {
  return (
    <div className="py-[125px]"
      style={{
        // backgroundImage: 'url("/images/cannapak_background.svg")', backgroundRepeat: 'no-repeat', backgroundSize: '100%', backgroundPosition: 'right top', // Align to the top-right corner

      }}

    >
      <div className='border border-#FFFFFF rounded mx-auto max-w-screen-sm md:max-w-screen-xl py-[64px] px-[45px]'>

        <div>
          <div className='text-center mb-[44px]'>
            <p className='text-left md:text-center text-[35px] text-extrabold text-white'>{"What are the insurance requirements for cannabis businesses?"}</p>
          </div>
          <div className='text-[#FFFFFF] text-normal text-[20px]'>
            <p className='mb-6'>{"As legalization of marijuana spreads, each state is establishing its own laws for cannabis insurance."}</p>
            <p className='mb-6'>{"State laws typically require general liability insurance for all businesses in the cannabis industry, from cultivators to dispensaries. You'll need to research the laws in your state to find out how much general liability coverage you need."}</p>
            <p className='mb-6'>{"Many states require cannabis businesses to carry a surety bond as part of their licensing requirements. A bond guarantees that your business will fulfill the terms of its contracts and pay its suppliers."}</p>
            <p className='mb-6'>{"The specifics of your cannabis operations will determine other types of insurance coverage you need. For example, your landlord may require you to carry commercial property coverage."}</p>
            <p className='mb-6'>{"If you run a dispensary, you can complete Insureon’s easy online application to get quotes from top U.S. carriers. For other cannabis businesses, you can call our dedicated agent to find insurance quotes for your budding business."}</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default RequirementSection;
