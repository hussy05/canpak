import React, { useState } from 'react';


const rowData = [
    { text: 'Do you have interior and exterior cameras?' },
    { text: 'Do you have a buzz in system or security personnel at the door?' },
    { text: 'Do you have cash and inventory in an approved safe or vault?' },
    { text: 'Is the building sprinklered?' },
];
const data = [
    {
        text: 'Number of fire extinguishers on premises?',
        options: ["Select",1, 2, 3, 4, 5]
    },
    {
        text: 'What type of reporting fire alarm does the building have?',
        options: ["Select","Central Station", "Non Station", "Station"]
    },
    {
        text: 'What type of burglar alarm does the building have?',
        options: ["Select","Central Station", "Non Station", "Station"]

    },
    // {
    //     text: 'Year Built of the Building:',
    //     options: [2011, 2012, 2013, 2014, 2015]
    // },
    // {
    //     text: 'Total Square Feet of the Building:',
    //     options: ['10,000', '20,000', "30,000", "40,000"]

    // },
];
const Form2 = () => {

    const [selectedOptions, setSelectedOptions] = useState({});
    const [selectedValue, setSelectedValue] = useState({});

    const handleValueChange = (rowIndex, option) => {
        setSelectedValue((prevOptions) => ({
            ...prevOptions,
            [rowIndex]: option,
        }));
    };
    const handleOptionChange = (rowIndex, option) => {
        setSelectedOptions((prevOptions) => ({
            ...prevOptions,
            [rowIndex]: option,
        }));
    };

    return (
        <div
            className="h-full w-full bg-white p-10"
        >
            <div>
                <p className='text-[35px] font-bold text-center'>{"Your Property Details"}</p>
                <div className='mt-5'>
                    {rowData.map((row, rowIndex) => (
                        <div key={rowIndex} className="grid grid-cols-2 flex gap-10">
                            <div className="flex-grow text-[22px]">{row.text}</div>
                            <div className='flex gap-10 flex items-center justify-center'>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        className="form-radio w-7 h-7 text-accents-500 accent-[#683039]"
                                        name={`radio-${rowIndex}`}
                                        value="Yes"
                                        checked={selectedOptions[rowIndex] === 'Yes'}
                                        onChange={() => handleOptionChange(rowIndex, 'Yes')}
                                    />
                                    <span className="ml-2 flex-grow text-[18px] font-bold">Yes</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        className="form-radio w-7 h-7 text-accents-500 accent-[#683039]"
                                        name={`radio-${rowIndex}`}
                                        value="No"
                                        checked={selectedOptions[rowIndex] === 'No'}
                                        onChange={() => handleOptionChange(rowIndex, 'No')}
                                    />
                                    <span className="ml-2 flex-grow text-[18px] font-bold">No</span>
                                </label>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='mt-2'>
                    {data.map((row, rowIndex) => (
                        <div key={rowIndex} className="grid grid-cols-2 gap-10">
                            <div className="flex-grow text-[22px]">{row.text}</div>
                            <div className='flex gap-10 flex items-center justify-center'>
                                <select
                                    className=" form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal"
                                    value={selectedValue[rowIndex] || row?.options[0]}
                                    onChange={(e) => handleValueChange(rowIndex, e.target.value)}
                                >
                                    {
                                        row?.options?.map((value, i) => {
                                            return (
                                                <option key={i} value={value} disabled={value==="Select"}>{value}</option>
                                            )
                                        })
                                    }

                                </select>
                            </div>
                        </div>
                    ))}
                    <div className="grid grid-cols-2 gap-10 my-2">
                        <div className="flex-grow text-[22px]">Year Built of the Building:</div>
                        <div className='flex gap-10 flex items-center justify-center'>
                            <input
                                type='text'
                                className={`appearance-none form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal`}
                                value={selectedValue[5]}
                                onChange={(e) => handleValueChange( 5,e.target.value )}
                                placeholder='$0'
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-10">
                        <div className="flex-grow text-[22px]">Total Square Feet of the Building:</div>
                        <div className='flex gap-10 flex items-center justify-center'>
                            <input
                                type='text'
                                className={`appearance-none form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal`}
                                value={selectedValue[6]}
                                onChange={(e) => handleValueChange( 6,e.target.value )}
                                placeholder='$0'
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Form2
    ;
