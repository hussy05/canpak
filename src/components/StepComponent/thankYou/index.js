import Link from 'next/link';
import React from 'react';

const ThankYou = () => {

    return (
        <div
            className="h-full w-full bg-white p-10"
        >
            <div>
                <p className='text-[35px] font-bold text-center'>{"Thank you for Submitting your Quote."}</p>
                <p className='text-[26px] font-normal text-center mt-10'>{"Someone from CannaPAK will contact you within 24 hours. Please get in touch with us at XXX-XXX-XXXXX if you have any additional questions."}</p>
                <p className='text-[26px] font-normal text-center mt-10'>{"For any additional inquiries, please email us at info@Cannapak.com Your quote has been emailed to you and is nonbinding until fully underwritten, the premium is collected, and the policy is bound by CannaPAK."}</p>
                <div className='gap-5 flex flex-col items-center justify-center mt-10'>
                    <img src='/images/thankYouImage.png' />

                    <Link href={"/"}>
                        <p className='text-[20px] text-[#683039] font-bold'>{"Go to Home"}</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ThankYou
    ;
