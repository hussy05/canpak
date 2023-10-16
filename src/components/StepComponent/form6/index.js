import Modal from '@/components/modal';
import { QuouteFormData } from '@/contexts/quoute-form-data.context';
import { formatToAmount } from '@/util/common-functions';
import React, { useContext, useState } from 'react';

const Form6 = () => {

    const [openOrdinanceAndLawModal, setOpenOrdinanceAndLawModal] = useState(false);
    const [openTenantGlassModal, setOpenTenantGlassModal] = useState(false);
    const [openBusinessIncemModal, setOpenBusinessIncemModal] = useState(false);
    const [openEmployeeBenifitsLiabilityModal, setOpenEmployeeBenifitsLiabilityModal] = useState(false);
    const [openAdditionalInsuredModal, setOpenAdditionalInsuredModal] = useState(false);
    const [openStopGapModal, setOpenStopGapModal] = useState(false);

    const {
        ordinanceAndLaw,
        setOrdinanceAndLaw,
        tenantGlass,
        setTenantGlass,
        businessIncome,
        setBusinessIncome,
        employeeBenifits,
        setEmployeeBenifits,
        stopGap,
        setStopGap
    } = useContext(QuouteFormData)

    const [formData, setFormData] = useState({
        ordinanceAndLaw: "",
        tenantGlass: "",
        businessIncome: "",
        extraExpense: "",
        monthlyLimit: "",
        employeeBenifitsLiability: "Select Coverage",
        additionalInsured: "",
        stopGap: "Select Coverage",
    })

    return (
        <div
            className="h-full w-full bg-white pt-0	p-10"
        >
            <div>
                <p className='text-[35px] font-bold text-center'>{"Additional Insurance Coverages Continued"}</p>
                <div className="grid grid-row-2 sm:grid-cols-2 gap-2 sm:gap-10 my-2 mt-2">
                    <div className="flex-grow text-[22px] font-bold">{"What type of Insurance Coverage do you want?"}</div>
                </div>
                {/* New fields to open modal selection */}
                {/* Ordinance and Law Field */}
                <div className='mt-5 flex gap-2 flex-col'>
                    <div className="grid grid-row-2 sm:grid-cols-2 gap-2 sm:gap-10 my-2">
                        <div className="flex-grow text-[22px] ">Ordinance & Law:</div>
                        <div className='flex gap-10 flex items-center justify-start'>
                            <div className='flex items-center justify-space-between form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal'>
                                <p className='w-[95%] text-accents-500 accent-[#683039] text-[18px] font-normal'>{ordinanceAndLaw ? ordinanceAndLaw : "Select Coverage"}</p>
                                <div className={`w-[20px] h-[20px] cursor-pointer ${ordinanceAndLaw !== "" ? 'bg-red-950' : 'border'}`} onClick={() => setOpenOrdinanceAndLawModal(true)} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Tenant's Glass Field */}
                <div className='mt-5 flex gap-2 flex-col'>
                    <div className="grid grid-row-2 sm:grid-cols-2 gap-2 sm:gap-10 my-2">
                        <div className="flex-grow text-[22px] ">Tenant&apos;s Glass:</div>
                        <div className='flex gap-10 flex items-center justify-start'>
                            <div className='flex items-center justify-space-between form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal'>
                                <p className='w-[95%] text-accents-500 accent-[#683039] text-[18px] font-normal'>{tenantGlass ? "$" + tenantGlass : "Select Coverage"}</p>
                                <div className={`w-[20px] h-[20px] cursor-pointer ${tenantGlass !== "" ? 'bg-red-950' : 'border'}`} onClick={() => setOpenTenantGlassModal(true)} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Business Income Field */}
                <div className='mt-5 flex gap-2 flex-col'>
                    <div className="grid grid-row-2 sm:grid-cols-2 gap-2 sm:gap-10 my-2">
                        <div className="flex-grow text-[22px] ">Business Income:</div>
                        <div className='flex gap-10 flex items-center justify-start'>
                            <div className='flex items-center justify-space-between form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal'>
                                <p className='w-[95%] text-accents-500 accent-[#683039] text-[18px] font-normal'>{businessIncome ? "$" + businessIncome : "Select Coverage"}</p>
                                <div className={`w-[20px] h-[20px] cursor-pointer ${businessIncome !== "" ? 'bg-red-950' : 'border'}`} onClick={() => setOpenBusinessIncemModal(true)} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Employee Benifits Liability Field */}
                <div className='mt-5 flex gap-2 flex-col'>
                    <div className="grid grid-row-2 sm:grid-cols-2 gap-2 sm:gap-10 my-2">
                        <div className="flex-grow text-[22px] ">Employee Benifits Liability:</div>
                        <div className='flex gap-10 flex items-center justify-start'>
                            <div className='flex items-center justify-space-between form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal'>
                                <p className='w-[95%] text-accents-500 accent-[#683039] text-[18px] font-normal'>{employeeBenifits?employeeBenifits:"Select Coverage"}</p>
                                <div className={`w-[20px] h-[20px] cursor-pointer ${employeeBenifits !== "" ? 'bg-red-950' : 'border'}`} onClick={() => setOpenEmployeeBenifitsLiabilityModal(true)} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Aditional Insured Field */}
                <div className='mt-5 flex gap-2 flex-col'>
                    <div className="grid grid-row-2 sm:grid-cols-2 gap-2 sm:gap-10 my-2">
                        <div className="flex-grow text-[22px] ">Aditional Insured:</div>
                        <div className='flex gap-10 flex items-center justify-start'>
                            <div className='flex items-center justify-space-between form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal overflow-y-hidden'>
                                <p className='w-[95%] text-accents-500 accent-[#683039] text-[18px] font-normal self-start'>{formData.additionalInsured ? formData.additionalInsured : "Select Coverage"}</p>
                                <div className={`w-[20px] h-[20px] cursor-pointer ${formData.additionalInsured !== "" ? 'bg-red-950' : 'border'}`} onClick={() => {
                                    // if (!formData.additionalInsured) setFormData({ ...formData, additionalInsured: "Included" })
                                    // else setFormData({ ...formData, additionalInsured: "" })
                                    setOpenAdditionalInsuredModal(true);
                                }} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Stop Gap Field */}
                <div className='mt-5 flex gap-2 flex-col'>
                    <div className="grid grid-row-2 sm:grid-cols-2 gap-2 sm:gap-10 my-2">
                        <div className="flex-grow text-[22px] ">Stop Gap:</div>
                        <div className='flex gap-10 flex items-center justify-start'>
                            <div className='flex items-center justify-space-between form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal'>
                                <p className='w-[95%] text-accents-500 accent-[#683039] text-[18px] font-normal'>{stopGap?stopGap:"Select Coverage"}</p>
                                <div className={`w-[20px] h-[20px] cursor-pointer ${stopGap !== "" ? 'bg-red-950' : 'border'}`} onClick={() => setOpenStopGapModal(true)} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End of new fields */}
            </div>

            {/* Ordinance And Law Modal */}
            {openOrdinanceAndLawModal ? <Modal
                handleClose={() => setOpenOrdinanceAndLawModal(false)}
                title='Adittional Insurance coverages'
                closeText='Cancel'
                saveText='Continue'
                body={<>
                    <div className="flex-grow text-[22px] font-bold m-[20px auto]">{"What type of insurance coverage do you want?"}</div>

                    <div className="grid grid-row-2 sm:grid-cols-2 gap-2 sm:gap-10 my-2">
                        <div className="flex-grow text-[22px]">Orinance & Law:</div>
                        <div className='flex gap-10 flex items-center justify-start'>
                            <select
                                className={`form-select-gray border-gray-300 border p-3 w-content h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal`}
                                value={ordinanceAndLaw}
                                onChange={(e) => setOrdinanceAndLaw( e.target.value )}
                                placeholder='Coverage B Adittional Limit 0'
                            >
                                {
                                    [<option value={""} key={"default-option-0"} disabled>{"Select"}</option>, ...['Coverage B Adittional Limit 0', 'Coverage B Adittional Limit 1']?.map((value, i) => {
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
            {/* Tenant's Glass Modal */}
            {openTenantGlassModal ? <Modal
                handleClose={() => setOpenTenantGlassModal(false)}
                title='Adittional Insurance coverages'
                closeText='Cancel'
                saveText='Continue'
                body={<>
                    <div className="flex-grow text-[22px] font-bold m-[20px auto]">{"What type of insurance coverage do you want?"}</div>

                    <div className="grid grid-row-2 sm:grid-cols-2 gap-2 sm:gap-10 my-2">
                        <div className="flex-grow text-[22px]">Tenant&apos;s Glass:</div>
                        <div className='flex gap-10 flex items-center justify-start'>
                            <input
                                type='text'
                                className={`form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal`}
                                value={tenantGlass ? "$" + formatToAmount(tenantGlass) : ""}
                                onChange={(e) => setTenantGlass(`${e.target.value}`.replace('$', ""))}
                                placeholder='$0'
                            />
                        </div>
                    </div>
                </>}
            /> : null}
            {/* BUsiness Income Modal */}
            {openBusinessIncemModal ? <Modal
                handleClose={() => setOpenBusinessIncemModal(false)}
                title='Adittional Insurance coverages'
                closeText='Cancel'
                saveText='Continue'
                body={<>
                    <div className="flex-grow text-[22px] font-bold m-[20px auto]">{"What type of insurance coverage do you want?"}</div>

                    <div className="grid grid-row-2 sm:grid-cols-2 gap-2 sm:gap-10 my-2 my-2">
                        <div className="flex-grow text-[22px]">Business Income:</div>
                        <div className='flex gap-10 flex items-center justify-start'>
                            <input
                                type='text'
                                className={`form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal`}
                                value={businessIncome ? "$" + formatToAmount(businessIncome) : ""}
                                onChange={(e) => setBusinessIncome(`${e.target.value}`.replace('$', "") )}
                                placeholder='$0'
                            />
                        </div>
                    </div>
                    <div className="grid grid-row-2 sm:grid-cols-2 gap-2 sm:gap-10 my-2 my-2">
                        <div className="flex-grow text-[22px]">Extra Expense:</div>
                        <div className='flex gap-10 flex items-center justify-start'>
                            <select
                                className={`form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal`}
                                value={formData.extraExpense}
                                onChange={(e) => setFormData({ ...formData, extraExpense: e.target.value })}
                                placeholder='Included'
                            >
                                {
                                    [<option value={""} key={"default-option-0"} disabled>{"Select"}</option>, ...['Included', 'Excluded']?.map((value, i) => {
                                        return (
                                            <option key={i} value={value}>{value}</option>
                                        )
                                    })]
                                }

                            </select>
                        </div>
                    </div>
                    <div className="grid grid-row-2 sm:grid-cols-2 gap-2 sm:gap-10 my-2 my-2">
                        <div className="flex-grow text-[22px]">Monthly Limit:</div>
                        <div className='flex gap-10 flex items-center justify-start'>
                            <select
                                className={`form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal`}
                                value={formData.monthlyLimit}
                                onChange={(e) => setFormData({ ...formData, monthlyLimit: e.target.value })}
                                placeholder='1/3'
                            >
                                {
                                    [<option value={""} key={"default-option-0"} disabled>{"Select"}</option>, ...['1/3', '1/4', '1/6', '1/12']?.map((value, i) => {
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
            {/* Employee Benifits Liability Modal */}
            {openEmployeeBenifitsLiabilityModal ? <Modal
                handleClose={() => setOpenEmployeeBenifitsLiabilityModal(false)}
                title='Adittional Insurance coverages'
                closeText='Cancel'
                saveText='Continue'
                body={<>
                    <div className="flex-grow text-[22px] font-bold m-[20px auto]">{"What type of insurance coverage do you want?"}</div>

                    <div className="grid grid-row-2 sm:grid-cols-2 gap-2 sm:gap-10 my-2">
                        <div className="flex-grow text-[22px]">Employee Benifits Liability:</div>
                        <div className='flex gap-10 flex items-center justify-start'>
                            <select
                                className={`form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal`}
                                value={employeeBenifits}
                                onChange={(e) => setEmployeeBenifits(e.target.value )}
                                placeholder='$500,000'
                            >
                                {
                                    [<option value={""} key={"default-option-0"} disabled>{"Select"}</option>, ...['$500,000', '$1,000,000']?.map((value, i) => {
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
            {/* Stop Gap Modal */}
            {openStopGapModal ? <Modal
                handleClose={() => setOpenStopGapModal(false)}
                title='Adittional Insurance coverages'
                closeText='Cancel'
                saveText='Continue'
                body={<>
                    <div className="flex-grow text-[22px] font-bold m-[20px auto]">{"What type of insurance coverage do you want?"}</div>

                    <div className="grid grid-row-2 sm:grid-cols-2 gap-2 sm:gap-10 my-2">
                        <div className="flex-grow text-[22px]">Stop Gap:</div>
                        <div className='flex gap-10 flex items-center justify-start'>
                            <select
                                className={`form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal`}
                                value={stopGap}
                                onChange={(e) => setStopGap(e.target.value )}
                                placeholder='$25,000/$50,000'
                            >
                                {
                                    [<option value={""} key={"default-option-0"} disabled>{"Select"}</option>, ...['$25,000/$50,000', '$50,000/$100,000', '$100,000/$150,000', '$150,000/$200,000']?.map((value, i) => {
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
            {/* Additional Insured Modal */}
            {openAdditionalInsuredModal ? <Modal
                handleClose={() => setOpenAdditionalInsuredModal(false)}
                title='Adittional Insurance coverages'
                closeText='Cancel'
                saveText='Continue'
                body={<>
                    <div className="flex-grow text-[22px] font-bold m-[20px auto]">{"What type of insurance coverage do you want?"}</div>

                    <div className="grid grid-row-2 sm:grid-cols-2 gap-2 sm:gap-10 my-2">
                        <div className="flex-grow text-[22px]">Additional Insured:</div>
                        <div className='flex gap-10 flex items-center justify-start'>
                            <select
                                className={`form-select-gray border-gray-300 border p-3 w-[400px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal`}
                                value={formData.additionalInsured}
                                onChange={(e) => setFormData({ ...formData, additionalInsured: e.target.value })}
                                placeholder='Additional Insured Povision (Scheduled Primary And Non-Contributory)'
                            >
                                {
                                    [<option value={""} key={"default-option-0"} disabled>{"Select"}</option>,['Additional Insured Povision (Scheduled Primary And Non-Contributory)',
                                        'Primary And Noncontributory- Other Insurance Condition (CG2010 Also Required)',
                                        'Additional Insured-Concessionaires trading under your name',
                                        'Additional Insured-Controlling Interest',
                                        'Additional Insured-Owners, Lessees or Contractors-Scheduled Person or Organization',
                                        'Additional Insured-Managers or Lessors of Premises',
                                        'Additional Insured-Venndors',
                                        'Additional Insured-Mortgage, Assignee or Receiver',
                                        'Additional Insured-Owners or other interests from whom land has been leased',
                                        'Additional Insured-Designated Persons or Organizations',
                                        'Additional Insured-Co-Owner Of Premises',
                                        'Additional Insured-Lessor of Leased Equipment',
                                        'Additional Insured-Grantor of Franchise',
                                        'Additional Insured-Lessor Of Equipment Automatic Status When Required In Lease Agreement With You',
                                        'Additional Insured-Grantor of Licenses-automatic status when required by contract',
                                        'Additional Insured-Grantor of Licenses',
                                        'Waiver Of Transfer Of Rights Of Recovery Against Others To Us'
                                    ]?.map((value, i) => {
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

export default Form6
    ;
