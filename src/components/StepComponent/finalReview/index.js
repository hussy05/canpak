import React from 'react';

const dummyData = [
    {
        heading: 'Coverages',
        heading: 'Premium',
        items: ['Building', 'Contents', 'Business Income', 'Property Enhancement', 'Equipment Breakdown', "Tenant's Glass", 'Ordinance & Law', 'Premises', 'Products', 'Stop Gap', 'Damage to Premises Rented To You', 'Hired/Non-Owned Auto', 'Employee Benefits Liability'],
    },
    {
        heading: 'Limits',
        items: ['Item A', 'Item B', 'Item C', 'Item D', 'Item E', 'Item F', 'Item G', 'Item H', 'Item I', 'Item J', 'Item K', 'Item L', 'Item M'],
    },
    {
        heading: 'Premium',
        items: ['Text 1', 'Text 2', 'Text 3', 'Text 4', 'Text 5', 'Text 6', 'Text 7', 'Text 8', 'Text 9', 'Text 10', 'Text 11', 'Text 12', 'Text 13',],
    },
];

const FinalReview = () => {
    return (
        <div
            className="h-full w-full bg-white p-10"
        >
            <div>
                <p className='text-[35px] font-bold text-center'>{"Final Quoted Provisional Premium"}</p>

                <div className="grid grid-cols-4 gap-8">

                    {dummyData.map((column, columnIndex) => (
                        <div key={columnIndex} className="space-y-2">
                            <h2 className="text-xl font-bold">{column.heading}</h2>
                            <ul className="list-none list-inside">
                                {column.items.map((item, itemIndex) => (
                                    <li className='text-[18px] text-black' key={itemIndex}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className='border-l-2 border-black flex flex-col p-8 gap-10'>
                        <p className='text-[]18px] text-black font-bold'>{"Liability Premium Adjustable at a Rate of $ per $1,000 of sales State Premium Tax:Inspection Fee:MGA Fee:Total Premium:"}</p>
                        <div>
                            <img className='cursor-pointer' src='/icons/gg_check-r.png' width={50} height={50} alt='sxs' />
                            <p className='text-[]18px] text-black font-bold'>
                                {
                                    "I acknowledge that This application is the basis for coverage, and any incorrect or fraudulent attestations or answers could nullify coverage."
                                }
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-between mt-3'>
                    <p className='text-[]18px] text-black font-bold'>
                        {"Total Location Premium Minium and Deposit:"}</p>
                    <p className='text-left text-[]18px] text-black font-bold'>
                        {"9,189"}</p>
                    <p></p>
                    <p></p>
                </div>
            </div>
        </div>
    );
};

export default FinalReview;
