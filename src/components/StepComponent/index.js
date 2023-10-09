import React, { useState } from 'react';
import Form1 from './form1';
import Form2 from './form2';
import Form3 from './form3';
import Form4 from './form4';
import Form5 from './form5';
import Form6 from './form6';
import Form7 from './form7';
import FinalReview from './finalReview';
import ThankYou from './thankYou';
import Link from 'next/link';

const StepComponent = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [value, setValue] = useState(0);

    const steps = [
        'Step 1',
        'Step 2',
        'Step 3',
        'Step 4',
        'Step 5',
        'Step 6',
        // 'Step 7',
    ];

    const renderSteps = () => {
        return (
            <div className="pl-2 border-l border-dashed border-l-2 border-[#683039] flex flex-col gap-[40px]">
                {steps.map((step, index) => (
                    <div key={index}>
                        <div className="flex items-center justify-center w-10 h-10 rounded-full">
                            {index + 1 <= currentStep ? (
                                <img src="/icons/activeLocation.png" alt={`Step ${index + 1}`} />
                            ) : (
                                <img src="/icons/inActiveLocation.png" alt={`Step ${index + 1}`} />
                            )}
                        </div>
                        <div
                            className={`absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-dashed-line`}
                        ></div>
                    </div>
                ))}
            </div>
        );
    };

    const nextStep = () => {
        if (currentStep < steps.length) {
            setCurrentStep(currentStep + 1);
        }
    };

    const valueNextStep = () => {
            setValue(value + 1);
    };
    return (
        <div
            className="mt-2 relative min-h-[85vh] bg-white  mx-auto max-w-screen-sm md:max-w-screen-xl p-5"
        >
            <Link href={"/"}>
            <img src='/icons/cross-icon.svg' width={40} height={40} className='float-right' />
            </Link>

            <div className={`${currentStep >= 7 && "hidden"} mt-20 float-right`}>{renderSteps()}</div>
            <div className='flex flex-col h-full'>

                <div className="flex-grow">
                    {
                        currentStep === 1 ? <Form1 /> :
                            currentStep === 2 ? <Form2 /> :
                                currentStep === 3 ? <Form3 /> :
                                    currentStep === 4 ? <Form4 /> :
                                        currentStep === 5 ? <Form5 /> :
                                        currentStep === 6 ? <Form6 /> :null
                                            
                    }
                    {
                        value === 1 ? <FinalReview /> :
                        value === 2 ? <ThankYou /> : null
                    }
                </div>
                <div className={`${value >= 2 && "hidden"} flex items-center justify-center`}>
                    <button
                        onClick={()=> {
                            if(currentStep >= 6){
                                setCurrentStep(7)
                                valueNextStep()
                            } else {
                                nextStep()
                            }
                        }}

                        className="px-10 py-2 ml-10 bg-[#683039] flex gap-5 items-center justify-center text-white text-[30px] font-semibold">
                        {value === 1 ? "Submit Quote for Review" : "Next"}
                        <img
                            src="/icons/nexticon.svg"
                            alt="Icon"
                            className="ml-2 h-6 w-6"
                        />
                    </button>
                </div>

            </div>

        </div>
    );
};

export default StepComponent;
