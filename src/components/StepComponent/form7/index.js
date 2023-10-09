import React, { useState } from 'react';

const Form7 = () => {

    const [formData, setFormData] = useState({
        processors: "",
    })

    return (
        <div
            className="h-full w-full bg-white p-10 h-[88vh]"
        >
            <div>
                <p className='text-[35px] font-bold text-center'>{"Additional Insured"}</p>
                <div className='mt-5 flex gap-2 flex-col'>
                    <div className="grid grid-cols-2 gap-10">
                        <div className="flex-grow text-[22px] font-bold">Processors/Manufacturer:</div>
                        <div className='flex gap-10 flex items-center justify-start'>
                            <select
                                className={`form-select-gray border-gray-300 border p-3 w-[340px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal`}
                                value={formData.processors}
                                onChange={(e) => setFormData({ ...formData, processors: e.target.value })}
                                placeholder='Additional Insured Povision (Scheduled Primary And Non-Contributory)'
                            >
                                {
                                    ['Additional Insured Povision (Scheduled Primary And Non-Contributory)', 
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
                                    })
                                }

                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form7
    ;
