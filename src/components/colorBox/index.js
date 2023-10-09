import React from 'react';

const ColorBox = ({ item }) => {
    const { heading, colorCode, text } = item
    return (
        <div className="mx-[30px] md:mx-[0px] flex flex-wrap gap-10 items-center">
            <div>
                <h2 className="text-xl font-bold w-[125px]">{heading}</h2>

            </div>
            <div
                className="w-10 h-10"
                style={{ backgroundColor: colorCode }}
            ></div>
            <div className='hidden md:flex'>
                <p className="ml-2">{text}</p>
            </div>
        </div>
    );
};

export default ColorBox;
