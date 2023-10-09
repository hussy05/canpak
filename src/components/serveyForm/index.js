import React from 'react';
import StepComponent from '../StepComponent';

const ServeyForrm = () => {
    return (
        <div
            className="min-h-[100vh] pb-10"
            style={{ backgroundImage: 'url("/images/cannapak_background.svg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
        >
            <div className='flex justify-between mx-auto max-w-screen-sm md:max-w-screen-xl p-2'>
                <div></div>
                <div className="flex gap-[10px] items-center">
                    <a href="tel:(00) 112 365 489"> <img src="/icons/locationIcon.svg" alt="Phone Icon" className="w-[50px] h-[50px] mr-2" /></a>
                    <p className="text-[14px] text-[#FFFFFF] font-bold">{"1223 Tadsworth Terr Lake Mary, FL 32746"}</p>
                </div>

                <div className="flex gap-[10px] items-center">
                    <a href="tel:(00) 112 365 489"> <img src="/icons/callColored.svg" alt="Phone Icon" className="w-[50px] h-[50px] mr-2" /></a>
                    <div className='flex flex-col text-left gap-[5px]'>
                        <p className="text-[14px] text-[#FFFFFF] font-bold"><a href="tel:(00) 112 365 489">Call Us</a></p>
                        <p className="text-[14px] text-[#FFFFFF] font-bold"><a href="tel:(00) 112 365 489">{"(00) 112 365 489"}</a></p>
                    </div>
                </div>
            </div>


            {/* <FormModal /> */}
            <StepComponent/>
        </div>
    );
};

export default ServeyForrm;
