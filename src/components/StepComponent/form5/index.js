import Modal from '@/components/modal';
import React, { useState } from 'react';

const data = [
    {
        text: 'Contents:',
        options: ["Select Coverage", "others"]
    },
    {
        text: 'Property Enhancement:',
        options: ["Select Coverage", "$600,000", "$700,000", "$800,000"]
    },
    {
        text: 'Equipment Breakdown:',
        options: ["Select Coverage", "$600,000", "$700,000", "$800,000"]
    },
    {
        text: 'Hired/Non-Owned Auto:',
        options: ['Select Coverage', 'others']
    },
    {
        text: 'Property In Transit:',
        options: ["Select Coverage", "$600,000", "$700,000", "$800,000"]
    },
    {
        text: 'Damage to Premises Rented to You ($100,000 included in Base):',
        options: ['Select Coverage', 'others']
    },
];
const Form5 = () => {

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

    const [openContentsModal, setOpenContentsModal] = useState(false);
    const [openPropertyEnhancementModal, setOpenPropertyEnhancementModal] = useState(false);
    const [openEquipmentBreakdownModal, setOpenEquipmentBreakdownModal] = useState(false);
    const [openNonOwnedAutoModal, setOpenNonOwnedAutoModal] = useState(false);
    const [openPropertyInTRansitModal, setOpenPropertyInTRansitModal] = useState(false);
    const [openDamageToPremisesReturnedModal, setOpenDamageToPremisesReturnedModal] = useState(false);

    const [formData, setFormData] = useState({
        content: "",
        propertyEnhancement: "",
        equipmentBreakdown: "Select Coverage",
        nonOwnedAuto: "Select Coverage",
        propertyInTransit: "",
        damageToPremisesReturned: "Select Coverage",
    })

    return (
        <div
            className="h-full w-full bg-white p-10"
        >
            <div>
                <p className='text-[35px] font-bold text-center'>{"Additional Insurance Coverages"}</p>
                <div className="grid grid-cols-2 flex gap-10 mt-5">
                    <div className="flex-grow text-[22px] font-bold">{"What type of Insurance Coverage do you want?"}</div>
                </div>
                {/* <div className='mt-5 flex gap-2 flex-col'>
                    {data.map((row, rowIndex) => (
                        <div key={rowIndex} className="grid grid-cols-2 gap-10">
                            <div className="flex-grow text-[22px] font-bold">{row.text}</div>
                            <div className='flex gap-10 flex items-center justify-start'>
                                <select
                                    className={`${rowIndex !== 0 && 'appearance-none'} form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal`}
                                    value={selectedValue[rowIndex] || row?.options[0]}
                                    onChange={(e) => handleValueChange(rowIndex, e.target.value)}
                                >
                                    {
                                        row?.options?.map((value, i) => {
                                            return (
                                                <option key={i} value={value}>{value}</option>
                                            )
                                        })
                                    }

                                </select>
                            </div>
                        </div>
                    ))}
                </div> */}
                {/* New fields to open modal selection */}
                {/* Contents Field */}
                <div className='mt-5 flex gap-2 flex-col'>
                    <div className="grid grid-cols-2 gap-10">
                        <div className="flex-grow text-[22px] ">Contents:</div>
                        <div className='flex gap-10 flex items-center justify-start'>
                            <div className='flex items-center justify-space-between form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal'>
                                <p className='w-[95%] text-accents-500 accent-[#683039] text-[18px] font-normal'>{formData.content ? formData.content : "Select Coverage"}</p>
                                <div className={`w-[20px] h-[20px] cursor-pointer ${formData.content !=="" ? 'bg-red-950':'border'}`} onClick={() => setOpenContentsModal(true)} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Commercial Property Field */}
                <div className='mt-5 flex gap-2 flex-col'>
                    <div className="grid grid-cols-2 gap-10">
                        <div className="flex-grow text-[22px] ">Property Enhancement:</div>
                        <div className='flex gap-10 flex items-center justify-start'>
                            <div className='flex items-center justify-space-between form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal'>
                                <p className='w-[95%] text-accents-500 accent-[#683039] text-[18px] font-normal'>{formData.propertyEnhancement ? formData.propertyEnhancement : "Select Coverage"}</p>
                                <div className={`w-[20px] h-[20px] cursor-pointer ${formData.propertyEnhancement !=="" ? 'bg-red-950':'border'}`} onClick={() => setOpenPropertyEnhancementModal(true)} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Product Liability Field */}
                <div className='mt-5 flex gap-2 flex-col'>
                    <div className="grid grid-cols-2 gap-10">
                        <div className="flex-grow text-[22px] ">Equipment Breakdown:</div>
                        <div className='flex gap-10 flex items-center justify-start'>
                            <div className='flex items-center justify-space-between form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal'>
                                <p className='w-[95%] text-accents-500 accent-[#683039] text-[18px] font-normal'>{formData.equipmentBreakdown}</p>
                                <div className={`w-[20px] h-[20px] cursor-pointer ${formData.equipmentBreakdown !=="Select Coverage" ? 'bg-red-950':'border'}`} onClick={() => setOpenEquipmentBreakdownModal(true)} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Cyber Liability Field */}
                <div className='mt-5 flex gap-2 flex-col'>
                    <div className="grid grid-cols-2 gap-10">
                        <div className="flex-grow text-[22px] ">Hired/Non-Owned Auto:</div>
                        <div className='flex gap-10 flex items-center justify-start'>
                            <div className='flex items-center justify-space-between form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal'>
                                <p className='w-[95%] text-accents-500 accent-[#683039] text-[18px] font-normal'>{formData.nonOwnedAuto}</p>
                                <div className={`w-[20px] h-[20px] cursor-pointer ${formData.nonOwnedAuto !=="Select Coverage" ? 'bg-red-950':'border'}`} onClick={() => setOpenNonOwnedAutoModal(true)} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Property in transit Field */}
                <div className='mt-5 flex gap-2 flex-col'>
                    <div className="grid grid-cols-2 gap-10">
                        <div className="flex-grow text-[22px] ">Property in Transit:</div>
                        <div className='flex gap-10 flex items-center justify-start'>
                            <div className='flex items-center justify-space-between form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal'>
                                <p className='w-[95%] text-accents-500 accent-[#683039] text-[18px] font-normal'>{formData.propertyInTransit ? formData.propertyInTransit : "Select Coverage"}</p>
                                <div className={`w-[20px] h-[20px] cursor-pointer ${formData.propertyInTransit !=="" ? 'bg-red-950':'border'}`} onClick={() => setOpenPropertyInTRansitModal(true)} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Damage to premisies rented to you Field */}
                <div className='mt-5 flex gap-2 flex-col'>
                    <div className="grid grid-cols-2 gap-10">
                        <div className="flex-grow text-[22px] ">Damage to premises Retned to You($100,000 included in Base):</div>
                        <div className='flex gap-10 flex items-center justify-start'>
                            <div className='flex items-center justify-space-between form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal'>
                                <p className='w-[95%] text-accents-500 accent-[#683039] text-[18px] font-normal'>{formData.damageToPremisesReturned}</p>
                                <div className={`w-[20px] h-[20px] cursor-pointer ${formData.damageToPremisesReturned !=="Select Coverage" ? 'bg-red-950':'border'}`} onClick={() => setOpenDamageToPremisesReturnedModal(true)} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End of new fields */}
            </div>

            {/* Contents Modal */}
            {openContentsModal ? <Modal
                handleClose={() => setOpenContentsModal(false)}
                title='Adittional Insurance coverages'
                closeText='Cancel'
                saveText='Continue'
                body={<>
                    <div className="flex-grow text-[22px] font-bold m-[20px auto]">{"What type of insurance coverage do you want?"}</div>

                    <div className="grid grid-cols-2 gap-10">
                        <div className="flex-grow text-[22px]">Contents:</div>
                        <div className='flex gap-10 flex items-center justify-start'>
                            <input
                                type='text'
                                className={`form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal`}
                                value={formData.content}
                                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                placeholder='$0'
                            />
                        </div>
                    </div>
                </>}
            /> : null}
            {/* Propert Enhancement Modal */}
            {openPropertyEnhancementModal ? <Modal
                handleClose={() => setOpenPropertyEnhancementModal(false)}
                title='Adittional Insurance coverages'
                closeText='Cancel'
                saveText='Continue'
                body={<>
                    <div className="flex-grow text-[22px] font-bold m-[20px auto]">{"What type of insurance coverage do you want?"}</div>

                    <div className="grid grid-cols-2 gap-10">
                        <div className="flex-grow text-[22px]">Propert Enhancements:</div>
                        <div className='flex gap-10 flex items-center justify-start'>
                            <select
                                className={`form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal`}
                                value={formData.nonOwnedAuto}
                                onChange={(e) => setFormData({ ...formData, nonOwnedAuto: e.target.value })}
                                placeholder='Non-Owned Only'
                            >
                                {
                                    [<option value={"Select Coverage"} key={"default-option-0"} disabled>{"Select"}</option>,...['included']?.map((value, i) => {
                                        return (
                                            <option key={i} value={value}>{value}</option>
                                        )
                                    })]
                                }

                            </select>
                            {/*<input*/}
                            {/*    type='text'*/}
                            {/*    className={`form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal`}*/}
                            {/*    value={formData.propertyEnhancement}*/}
                            {/*    onChange={(e) => setFormData({ ...formData, propertyEnhancement: e.target.value })}*/}
                            {/*    placeholder='Included'*/}
                            {/*/>*/}
                        </div>
                    </div>
                </>}
            /> : null}
            {/* Non-Owned Auto Modal */}
            {openNonOwnedAutoModal ? <Modal
                handleClose={() => setOpenNonOwnedAutoModal(false)}
                title='Adittional Insurance coverages'
                closeText='Cancel'
                saveText='Continue'
                body={<>
                    <div className="flex-grow text-[22px] font-bold m-[20px auto]">{"What type of insurance coverage do you want?"}</div>

                    <div className="grid grid-cols-2 gap-10">
                        <div className="flex-grow text-[22px]">Hired/Non-Owned Auto:</div>
                        <div className='flex gap-10 flex items-center justify-start'>
                            <select
                                className={`form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal`}
                                value={formData.nonOwnedAuto}
                                onChange={(e) => setFormData({ ...formData, nonOwnedAuto: e.target.value })}
                                placeholder='Non-Owned Only'
                            >
                                {
                                    [<option value={"Select Coverage"} key={"default-option-0"} disabled>{"Select"}</option>,...['Non-Owned Only', 'Hired & Non-Owned']?.map((value, i) => {
                                        return (
                                            <option key={i} value={value}>{value}</option>
                                        )
                                    })]
                                }

                            </select>
                        </div>
                    </div>
                </>}
            /> : null}
            {/* Contents Modal */}
            {openPropertyInTRansitModal ? <Modal
                handleClose={() => setOpenPropertyInTRansitModal(false)}
                title='Adittional Insurance coverages'
                closeText='Cancel'
                saveText='Continue'
                body={<>
                    <div className="flex-grow text-[22px] font-bold m-[20px auto]">{"What type of insurance coverage do you want?"}</div>

                    <div className="grid grid-cols-2 gap-10">
                        <div className="flex-grow text-[22px]">Property in Transit:</div>
                        <div className='flex gap-10 flex items-center justify-start'>
                            <input
                                type='text'
                                className={`form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal`}
                                value={formData.propertyInTransit}
                                onChange={(e) => setFormData({ ...formData, propertyInTransit: e.target.value })}
                                placeholder='$0'
                            />
                        </div>
                    </div>
                </>}
            /> : null}
            {/* Damages to property rented Modal */}
            {openDamageToPremisesReturnedModal ? <Modal
                handleClose={() => setOpenDamageToPremisesReturnedModal(false)}
                title='Adittional Insurance coverages'
                closeText='Cancel'
                saveText='Continue'
                body={<>
                    <div className="flex-grow text-[22px] font-bold m-[20px auto]">{"What type of insurance coverage do you want?"}</div>

                    <div className="grid grid-cols-2 gap-10">
                        <div className="flex-grow text-[22px]">Damage to premises Retned to You($100,000 included in Base):</div>
                        <div className='flex gap-10 flex items-center justify-start'>
                            <select
                                className={`form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal`}
                                value={formData.damageToPremisesReturned}
                                onChange={(e) => setFormData({ ...formData, damageToPremisesReturned: e.target.value })}
                                placeholder='$300,000'
                            >
                                {
                                    [<option value={"Select Coverage"} key={"default-option-0"} disabled>{"Select"}</option>,...['$300,000', '$500,000']?.map((value, i) => {
                                        return (
                                            <option key={i} value={value}>{value}</option>
                                        )
                                    })]
                                }

                            </select>
                        </div>
                    </div>
                </>}
            /> : null}
        </div>
    );
};

export default Form5
    ;
