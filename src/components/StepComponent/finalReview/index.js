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
        items: ['982', '1,102', '783', '550', '99', '679', '1205', '699', '999', '315', '425', '845', '506',],
    },
];

const FinalReview = () => {
    return (
        <div
            className="h-full w-full bg-white sm:p-10"
        >
            <div>
                <p className='text-[35px] font-bold text-center'>{"Final Quoted Provisional Premium"}</p>

                <div className="grid grid-row-2 sm:grid-cols-4 gap-2 sm:gap-8">

                    {dummyData.map((column, columnIndex) => (
                        <div key={columnIndex} className="space-y-2">
                            <h2 className="text-xl font-bold">{column.heading}</h2>
                            <ul className="list-none list-inside">
                                {column.items.map((item, itemIndex) => (
                                    <li className={`${columnIndex ===2 && 'sm:text-left' } text-[18px] text-black`} key={itemIndex}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className='border-t-2 sm:border-l-2 border-black flex flex-col p-8 gap-10'>
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
                <div className='w-full flex items-center justify-between my-3'>
                    <p className='text-[18px] text-black font-bold'>
                        {"Total Location Premium Minium and Deposit:"}</p>
                    <p className='text-left text-[18px] text-black font-bold'>
                        {"9,189"}</p>
                    <p></p>
                    <p></p>
                </div>
            </div>
        </div>
    );
};

export default FinalReview;
