import React from 'react';

const ProductCard = ({ item }) => {
    const { imageUrl, line, heading, subHeading } = item;
    return (
        <div className="flex flex-wrap gap-10 items-start">
            <div >
                <img src={imageUrl} />
            </div>
            <div className='flex flex-wrap gap-5'>
                <div>
                    <img src={line} />
                </div>
                <div className='w-[270px]'>
                    <p className='text-[25px] text-bold text-[#FFFFFF]'>{heading}</p>
                    <p className='text-[16px] text-normal text-[#FFFFFF] mt-2'>{subHeading}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
