import Modal from '@/components/modal';
import { formatToAmount } from '@/util/common-functions';
import React, { useEffect, useState } from 'react';

const data = [
    // {
    //     text: 'What type of Cannabis Business do you operate?',
    //     options: ["Cultivators/ Growers", "Other Station", "Non Station", "Station"]
    // },
    // {
    //     text: 'Estimated Sales in the next 12 Months?',
    //     options: ["$500,000", "$600,000", "$700,000", "$800,000"]
    // },
    // {
    //     text: 'Current Year Sales?',
    //     options: ["$600,000", "$600,000", "$700,000", "$800,000"]
    // },
    {
        text: 'Years in Operation',
        options: ['Select','Less than 1', '1 Year', "2 Years", "3 Years", "4 Years","More than 5"]
    },
];
const Form3 = () => {

    const [selectedOptions, setSelectedOptions] = useState({});
    const [selectedValue, setSelectedValue] = useState({});

    const [openRetailersModal, setOpenRetailersModal] = useState(false);
    const [openCultivatorsModal, setOpenCultivatorsModal] = useState(false);
    const [openProcessorsModal, setOpenProcessorsModal] = useState(false);
    const [openDistributersModal, setOpenDistributersModal] = useState(false);
    const [openTobaccoModal, setOpenTobaccoModal] = useState(false);


    const [formData, setFormData] = useState({
        businessDetail: "",
        businessSubDetail: "",
        estimatedSales: "",
        currentSales: "",
        website: "no",
        webLink: "",
        license: "no",
        licenseNo: "",
    })

    useEffect(() => {
        switch (formData.businessDetail) {
            case "Retailers & Dispensaries": {
                setOpenRetailersModal(true);
                break;
            } case "Cultivators/ Growers": {
                setOpenCultivatorsModal(true);
                break;
            } case "Processors/ Manufacturers": {
                setOpenProcessorsModal(true);
                break;
            } case "Distributers & Transporters": {
                setOpenDistributersModal(true);
                break;
            }
            case "Tobacco & Head Shops": {
                setOpenTobaccoModal(true);
                break;
            }
        }
    }, [formData.businessDetail]);

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
                <p className='text-[35px] font-bold text-center'>{"Your Business Details"}</p>
                <div className='mt-5 flex gap-2 flex-col'>
                    <div className="grid grid-row-2 sm:grid-cols-2 gap-2 sm:gap-10 my-2">
                        <div className="flex-grow text-[22px]">What type of Cannabis Business do you operate?</div>
                        <div className='flex gap-10 flex items-center justify-center'>
                            <select
                                className={`form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal`}
                                value={formData.businessDetail}
                                onChange={(e) => setFormData({ ...formData, businessDetail: e.target.value })}
                                placeholder='Cultivators/ Growers'
                            >
                                {
                                   [<option value={""} key={"default-option-0"} disabled>{"Select"}</option>,... ["Retailers & Dispensaries", "Cultivators/ Growers", "Processors/ Manufacturers", "Distributers & Transporters", "Tobacco & Head Shops"]?.map((value, i) => {
                                        return (
                                            <option key={i} value={value}>{value}</option>
                                        )
                                    })]
                                }

                            </select>
                        </div>
                    </div>
                    <div className="grid grid-row-2 sm:grid-cols-2 gap-2 sm:gap-10 my-2">
                        <div className="flex-grow text-[22px]">Estimated Sales in the next 12 Months?</div>
                        <div className='flex gap-10 flex items-center justify-center'>
                            <input
                                type='text'
                                className={`appearance-none form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal`}
                                value={formData.estimatedSales?"$"+formatToAmount(formData.estimatedSales):""}
                                onChange={(e) => setFormData({ ...formData, estimatedSales: `${e.target.value}`.replace('$',"") })}
                                placeholder='$0'
                            />
                        </div>
                    </div>
                    <div className="grid grid-row-2 sm:grid-cols-2 gap-2 sm:gap-10 my-2">
                        <div className="flex-grow text-[22px]">Current Year Sales?</div>
                        <div className='flex gap-10 flex items-center justify-center'>
                            <input
                                type='text'
                                className={`appearance-none form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal`}
                                value={formData.currentSales?"$"+formatToAmount(formData.currentSales):""}
                                onChange={(e) => setFormData({ ...formData, currentSales: `${e.target.value}`.replace('$',"") })}
                                placeholder='$0'
                            />
                        </div>
                    </div>
                    {data.map((row, rowIndex) => (
                        <div key={rowIndex} className="grid grid-row-2 sm:grid-cols-2 gap-2 sm:gap-10 my-2">
                            <div className="flex-grow text-[22px]">{row.text}</div>
                            <div className='flex gap-10 flex items-center justify-center'>
                                <select
                                    className={`form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal`}
                                    value={selectedValue[rowIndex] || row?.options[0]}
                                    onChange={(e) => handleValueChange(rowIndex, e.target.value)}
                                >
                                    {
                                        row?.options?.map((value, i) => {
                                            return (
                                                <option key={i} value={value} disabled={value === "Select"}>{value}</option>
                                            )
                                        })
                                    }

                                </select>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                <div className="grid grid-row-2 sm:grid-cols-2 gap-2 sm:gap-10 mt-2">
                        <div className="flex-grow text-[22px]">{"THC, CBD or Hemp?"}</div>
                        <div className='flex gap-10 flex items-center justify-center'>
                            <select
                                className={`form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal`}
                                value={""}
                            >
                                <option value={""} disabled>{"Select"}</option>
                                <option value={"THC"}>{"THC"}</option>
                                <option value={"CBD"}>{"CBD"}</option>
                                <option value={"Hemp"}>{"Hemp"}</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-row-2 sm:grid-cols-2 flex gap-2 sm:gap-10 mt-2">
                        <div className="flex-grow text-[22px]">{"Do You Own or Rent?"}</div>
                        <div className='flex gap-10 flex items-center justify-center'>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    className="form-radio w-5 h-5 text-accents-500 accent-[#683039]"
                                    name="losses"
                                    value="yes"
                                />
                                <span className="ml-2 text-black font-mulish font-semibold text-[18px]">
                                    Own
                                </span>
                            </label>
                            <label className="inline-flex items-center ml-4">
                                <input
                                    type="radio"
                                    className="form-radio w-5 h-5 text-accents-500 accent-[#683039]"
                                    name="losses"
                                    value="no"
                                />
                                <span className="ml-2 text-black font-mulish font-semibold text-[18px]">
                                    Rent
                                </span>
                            </label>
                        </div>
                    </div>

                    <div className="grid grid-row-2 sm:grid-cols-2 gap-2 sm:gap-10 mt-2">
                        <div className="flex-grow text-[22px]">{"How is the business registered?"}</div>
                        <div className='flex gap-10 flex items-center justify-center'>
                            <select
                                className={`form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal`}
                                value={""}
                            >
                                <option value={""} disabled>{"Select"}</option>
                                <option value={"Association"}>{"Association"}</option>
                                <option value={"Corporation"}>{"Corporation"}</option>
                                <option value={"Individual"}>{"Individual"}</option>
                                <option value={"Joint Venture"}>{"Joint Venture"}</option>
                                <option value={"LLC"}>{"LLC"}</option>
                                <option value={"Partnership"}>{"Partnership"}</option>
                                <option value={"Limited Partnership"}>{"Limited Partnership"}</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-row-2 sm:grid-cols-2 flex gap-2 sm:gap-10 mt-2">
                        <div className="flex-grow text-[22px]">{"Does the business have a website?"}</div>
                        <div className='flex gap-10 flex items-center justify-center'>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    className="form-radio w-5 h-5 text-accents-500 accent-[#683039]"
                                    name="losses"
                                    value={"yes"}
                                    onClick={(e) => setFormData({ ...formData, website: "yes" })}
                                />
                                <span className="ml-2 text-black font-mulish font-semibold text-[18px]"
                                    >
                                    Yes
                                </span>
                            </label>
                            <label className="inline-flex items-center ml-4">
                                <input
                                    type="radio"
                                    className="form-radio w-5 h-5 text-accents-500 accent-[#683039]"
                                    name="losses"
                                    value="no"
                                    onClick={(e) => setFormData({ ...formData, website: "no" })}
                                />
                                <span className="ml-2 text-black font-mulish font-semibold text-[18px]">
                                    No
                                </span>
                            </label>
                        </div>
                    </div>
                    {formData.website === "yes" && <div className="grid grid-row-2 sm:grid-cols-2 gap-2 sm:gap-10 my-2">
                        <div className="flex-grow text-[22px]">Website URL:</div>
                        <div className='flex gap-10 flex items-center justify-center'>
                            <input
                                type='text'
                                className={`appearance-none form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal`}
                                value={formData.webLink}
                                onChange={(e) => setFormData({ ...formData, webLink: e.target.value })}
                                placeholder='www.example.com'
                            />
                        </div>
                    </div>}

                    <div className="grid grid-row-2 sm:grid-cols-2 flex gap-2 sm:gap-10 mt-2">
                        <div className="flex-grow text-[22px]">{"Do you have a valid license from the state(s) you do business in?"}</div>
                        <div className='flex gap-10 flex items-center justify-center'>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    className="form-radio w-5 h-5 text-accents-500 accent-[#683039]"
                                    name="losses"
                                    value="yes"
                                    onClick={(e) => setFormData({ ...formData, license: "yes" })}
                                />
                                <span className="ml-2 text-black font-mulish font-semibold text-[18px]">
                                    Yes
                                </span>
                            </label>
                            <label className="inline-flex items-center ml-4">
                                <input
                                    type="radio"
                                    className="form-radio w-5 h-5 text-accents-500 accent-[#683039]"
                                    name="losses"
                                    value="no"
                                    onClick={(e) => setFormData({ ...formData, license: "no" })}
                                />
                                <span className="ml-2 text-black font-mulish font-semibold text-[18px]">
                                    No
                                </span>
                            </label>
                        </div>
                    </div>
                    {formData.license === "yes" && <div className="grid grid-row-2 sm:grid-cols-2 gap-2 sm:gap-10 my-2">
                        <div className="flex-grow text-[22px]">Licenses#:</div>
                        <div className='flex gap-10 flex items-center justify-center'>
                            <input
                                type='text'
                                className={`appearance-none form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal`}
                                value={formData.licenseNo}
                                onChange={(e) => setFormData({ ...formData, licenseNo: e.target.value })}
                                placeholder='ABCD123456'
                            />
                        </div>
                    </div>}
                </div>

            </div>
            {/* Modals */}
            {/* Retailers Modal */}
            {openRetailersModal ? <Modal
                handleClose={() => setOpenRetailersModal(false)}
                title='Your Business Details'
                closeText='Cancel'
                saveText='Continue'
                body={<>
                    <div className="grid grid-cols-2 gap-10">
                        <div className="flex-grow text-[22px]">Retailers:</div>
                        <div className='flex gap-10 flex items-center justify-start'>
                            <select
                                className={`form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal`}
                                value={formData.businessSubDetail}
                                onChange={(e) => setFormData({ ...formData, businessSubDetail: e.target.value })}
                                placeholder='Buildings or Premises - Office - Other than not-for-profit'
                            >
                                {
                                    ['Buildings or Premises - Office - Other than not-for-profit',
                                        "Buildings or Premises - Bank or Office - Mercantile or Mfg. (Lessor's Risk Only) - Maintained by the Insured - Other Than Not-For-Profit",
                                        "Buildings or Premises - Bank or Office - Mercantile or Mfg. (Lessor's Risk Only) - - Other Than Not-For-Profit",
                                        "Parking-Public-Shopping Centers- Maintained by Lessee (Lessor's Risk Only) - Other Than Not-For-Profit",
                                        "Parking-Public-Shopping Centers- Maintained by the Insured (Lessor's Risk Only)",
                                        "Shopping Centers - Buildings, or Premises Not Occupied by the Insured (Lessor's Risk Only)",
                                        "Shopping Centers - Indoor Malls - Buildings, or Premises Not Occupied by the Insured (Lessor's Risk Only)",
                                        "Cannabis Dispensaries, Non-Medical - Retail Exposures Only",
                                        "Cannabis Dispensaries, Medical - Retail Exposures Only",
                                        "Cannabis Dispensaries, Medical & Non-Medical - Retail Exposures Only",
                                        "Cannabis Growing, Non-Medical - No Dispensaries, No Processing",
                                        "Cannabis Growing, Medical - No Dispensaries, No Processing",
                                        "Cannabis Growing, Medical & Non-Medical - No Dispensaries, No Processing"
                                    ]?.map((value, i) => {
                                        return (
                                            <option key={i} value={value}>{value}</option>
                                        )
                                    })
                                }

                            </select>
                        </div>
                    </div>
                </>}
            /> : null}
            {/* Cultivators Modal */}
            {openCultivatorsModal ? <Modal
                handleClose={() => setOpenCultivatorsModal(false)}
                title='Your Business Details'
                closeText='Cancel'
                saveText='Continue'
                body={<>
                    <div className="grid grid-cols-2 gap-10">
                        <div className="flex-grow text-[22px]">Cultivators/ Growers:</div>
                        <div className='flex gap-10 flex items-center justify-start'>
                            <select
                                className={`form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal`}
                                value={formData.businessSubDetail}
                                onChange={(e) => setFormData({ ...formData, businessSubDetail: e.target.value })}
                                placeholder='Buildings or Premises - Office - Other than not-for-profit'
                            >
                                {
                                    [
                                        "Cannabis Dispensaries, Non-Medical - No Processing, Including Growing",
                                        "Cannabis Dispensaries, Medical - No Processing, Including Growing",
                                        "Cannabis Dispensaries, Medical & Non-Medical - No Processing, Including Growing",
                                        "Outdoor Grow Area; Owner-Occupied Farm; 160 or Less Acres",
                                        "Outdoor Grow Area; Non-Owner-Occupied Farm; 160 or Less Acres",
                                        "Outdoor Grow Area; Owner-Occupied Farm; More Than 160 and Less Than 500 Acres",
                                        "Outdoor Grow Area; Non-Owner-Occupied Farm; More Than 160 and less Than 500 Acres",
                                        "Outdoor Grow Area; Owner-Occupied Farm; 500 or More Acres",
                                        "Outdoor Grow Area; Non-Owner Occupied Farm; 500 or More Acres"
                                    ]?.map((value, i) => {
                                        return (
                                            <option key={i} value={value}>{value}</option>
                                        )
                                    })
                                }

                            </select>
                        </div>
                    </div>
                </>}
            /> : null}
            {/* Processors\Manufacturer Modal */}
            {openProcessorsModal ? <Modal
                handleClose={() => setOpenProcessorsModal(false)}
                title='Your Business Details'
                closeText='Cancel'
                saveText='Continue'
                body={<>
                    <div className="grid grid-cols-2 gap-10">
                        <div className="flex-grow text-[22px]">Processors\Manufacturer:</div>
                        <div className='flex gap-10 flex items-center justify-start'>
                            <select
                                className={`form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal`}
                                value={formData.businessSubDetail}
                                onChange={(e) => setFormData({ ...formData, businessSubDetail: e.target.value })}
                                placeholder='Buildings or Premises - Office - Other than not-for-profit'
                            >
                                {
                                    [
                                        "Cannabis Dispensaries, Non-Medical - Including Processing, No Growing",
                                        "Cannabis Dispensaries, Medical - Including Processing, No Growing",
                                        "Cannabis Dispensaries, Medical & Non-Medical - Including Processing, No Growing",
                                        "Cannabis Dispensaries, Non-Medical - Including Processing, Including Growing",
                                        "Cannabis Dispensaries, Medical - Including Processing, Including Growing",
                                        "Cannabis Dispensaries, Medical & Non-Medical - Including Processing, Including Growing",
                                        "Cannabis Processing, Non-Medical - No Dispensaries, No Growing",
                                        "Cannabis Processing, Medical - No Dispensaries, No Growing",
                                        "Cannabis Processing, Medical & Non-Medical - No Dispensaries, No Growing",
                                        "Cannabis Processing, Non-Medical - No Dispensaries, Including Growing",
                                        "Cannabis Processing, Medical - No Dispensaries, Including Growing",
                                        "Cannabis Processing, Medical & Non-Medical - No Dispensaries, Including Growing"
                                    ]?.map((value, i) => {
                                        return (
                                            <option key={i} value={value}>{value}</option>
                                        )
                                    })
                                }

                            </select>
                        </div>
                    </div>
                </>}
            /> : null}

            {/* Distributors & Transporters Modal */}
            {openDistributersModal ? <Modal
                handleClose={() => setOpenDistributersModal(false)}
                title='Your Business Details'
                closeText='Cancel'
                saveText='Continue'
                body={<>
                    <div className="grid grid-cols-2 gap-10">
                        <div className="flex-grow text-[22px]">Distributors & Transporters:</div>
                        <div className='flex gap-10 flex items-center justify-start'>
                            <select
                                className={`form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal`}
                                value={formData.businessSubDetail}
                                onChange={(e) => setFormData({ ...formData, businessSubDetail: e.target.value })}
                                placeholder='Buildings or Premises - Office - Other than not-for-profit'
                            >
                                {
                                    [
                                        "Warehouses - Occupied by Single Interest (Lessor's Risk Only)"
                                    ]?.map((value, i) => {
                                        return (
                                            <option key={i} value={value}>{value}</option>
                                        )
                                    })
                                }

                            </select>
                        </div>
                    </div>
                </>}
            /> : null}
        </div>
    );
};

export default Form3
    ;
