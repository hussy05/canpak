import { formatToAmount } from '@/util/common-functions';
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
        options: ["Select","Central Station", "Local Reporting", "None"]
    },
    {
        text: 'What type of burglar alarm does the building have?',
        options: ["Select","Central None", "Local Reporting", "Station"]

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
            className="h-full w-full bg-white pt-0	 p-10"
        >
            <div>
                <p className='text-[35px] font-bold text-center'>{"Your Property Details"}</p>
                <div className='mt-8'>
                    {rowData.map((row, rowIndex) => (
                        <div key={rowIndex} className="sm:grid grid-cols-2 flex flex-col sm:flex-row gap-2 sm:gap-10 my-[25px] sm:my-auto">
                            <div className="w-full sm:w-auto sm:flex-grow sm:text-[22px] mt-5">{row.text}</div>
                            <div className='flex gap-5 sm:gap-10 flex items-center justify-center mt-5'>
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
                        <div key={rowIndex} className="flex flex-col sm:grid grid-cols-2 sm:gap-10 my-[25px] sm:my-auto">
                            <div className="w-full sm:w-auto flex-grow sm:text-[22px] mt-5">{row.text}</div>
                            <div className='flex gap-10 flex items-center justify-center mt-5'>
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
                    <div className="flex flex-col sm:grid grid-cols-2 sm:gap-10 my-2">
                        <div className="w-full sm:w-auto sm:flex-grow sm:text-[22px] mt-5 ">Year Built of the Building:</div>
                        <div className='flex gap-10 flex items-center justify-center mt-5'>
                            <input
                                type='text'
                                className={`appearance-none form-select-gray border-gray-300 border p-3 w-full sm:w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal`}
                                value={selectedValue[5]?formatToAmount(selectedValue[5]):""}
                                onChange={(e) => handleValueChange( 5,`${e.target.value}`.replace("$","") )}
                                placeholder='Year,e.g. 2015'
                            />
                        </div>
                    </div>
                    <div className="flex flex-col sm:grid grid-cols-2 sm:gap-10 my-2">
                        <div className="w-full sm:w-auto sm:flex-grow sm:text-[22px] mt-5 ">Total Square Feet of the Building:</div>
                        <div className='flex gap-10 flex items-center justify-center mt-5'>
                            <input
                                type='text'
                                className={`appearance-none form-select-gray border-gray-300 border p-3 w-full sm:w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal`}
                                value={selectedValue[6]?formatToAmount(selectedValue[6]):""}
                                onChange={(e) => handleValueChange( 6,`${e.target.value}`.replace("$","") )}
                                placeholder='0'
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
