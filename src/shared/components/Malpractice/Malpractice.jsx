import React from 'react'
import point from '/assets/rights.png'

function Malpractice() {
    return (
        <div>

            <div className="text-justify max-w-[90rem] mx-auto lg:pr-2 pr-2 lg:p-0 p-2 ">
                <div className="mb-4 lg:mb-4 w-full">
                    <div className='bg-[#3F2305]  py-2 border rounded-2xl'>

                        <h1 className="text-lg  text-center  mb-2 lg:mb-2 text-white poppins-bold">
                            Publication Ethics and Malpractice Policy
                        </h1>
                        <div className='bg-white rounded-tr-[25px] rounded-tl-[25px] rounded-2xl p-3 border border-[#3F2305]'>

                            <p className="text-black   lg:px-4 px-1   poppins-regular">
                                <span className='poppins-semibold '>The International Journal of Leadership and Innovation </span> upholds the highest standards of publication ethics and integrity. Authors must ensure that their work is original, free from plagiarism, and properly cited. The journal follows a strict peer review process to ensure the quality and fairness of published research. Any cases of research misconduct, including falsification of data, authorship disputes, or ethical violations, will be thoroughly investigated. IJLAI is committed to maintaining transparency, objectivity, and academic excellence in all published works.
                            </p>
                        </div>

                    </div>

                </div>
                <div className="w-full grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 mb-4 gap-4 ">
                    <div className='bg-[#3F2305] py-2 pt-2 border rounded-2xl flex flex-col'>
                        <h2 className='text-lg  text-center  mb-3 lg:mb-2 text-white poppins-bold'>Author's Responsibilities</h2>
                        <div className='bg-white rounded-tr-[25px] rounded-tl-[25px] rounded-2xl p-3 border border-[#3F2305]  h-full'>
                            <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">Original work without plagiarism.</p><br />
                            </div>
                            <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /><p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">Valid authorship with significant contributions.</p><br />
                            </div>
                            <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">Proper acknowledgment of sources and citations.</p><br />
                            </div>
                            <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">Disclosure of conflicts of interest and funding.</p><br />
                            </div>
                            <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">Prompt notification of errors in published work.</p><br />
                            </div>

                        </div>
                    </div>
                    <div className='bg-[#3F2305] pt-2 pb-2 border rounded-2xl  flex flex-col'>
                        <h2 className='text-lg  text-center  mb-3 lg:mb-2 text-white poppins-bold'>Editor's Responsibilities</h2>
                        <div className='bg-white rounded-tr-[25px] rounded-tl-[25px] rounded-2xl p-3 border border-[#3F2305] h-full'>
                            <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">Maintain journal quality and integrity.</p><br />
                            </div>
                            <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /><p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">Fair and unbiased publication decisions.</p><br />
                            </div>
                            <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">Rigorous peer review process implementation.</p><br />
                            </div>
                            <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">Conflict of interest disclosure.</p><br />
                            </div>
                            <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">Confidential manuscript handling.</p><br />
                            </div>

                        </div>
                    </div>
                </div>

                <div className='bg-[#3F2305] pt-2 pb-2 border rounded-2xl  flex flex-col'>
                    <h2 className='text-lg  text-center  mb-3 lg:mb-2 text-white poppins-bold'>Reviewer's Responsibilities</h2>
                    <div className='bg-white rounded-tr-[25px] rounded-tl-[25px] rounded-2xl p-3 border border-[#3F2305] h-full'>
                        <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">Reviewers for IJLAI play a crucial role in maintaining the quality and integrity of the journal.</p><br />
                        </div>
                        <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /><p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">They are responsible for providing constructive, unbiased feedback on manuscripts, evaluating the validity of research methodology, and ensuring that the work contributes to the field.</p><br />
                        </div>
                        <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">Reviewers must maintain confidentiality and avoid conflicts of interest. </p><br />
                        </div>
                        <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">They should submit their reviews in a timely manner and adhere to ethical guidelines, ensuring that all manuscripts meet the journal’s standards for publication.</p><br />
                        </div>

                    </div>
                </div>



            </div>
        </div>

    )
}

export default Malpractice