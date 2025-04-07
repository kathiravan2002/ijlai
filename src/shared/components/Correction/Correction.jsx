import React from 'react'
import point from '/assets/rights.png'
import right from '/assets/Right.png'
import { useNavigate } from "react-router-dom";

function Correction() {
    const navigate = useNavigate();

    return (
        <div>

            <div className="text-justify max-w-[90rem] mx-auto lg:pr-2 pr-2 lg:p-0 p-2 ">
                <div className="mb-4 lg:mb-4 w-full">
                    <div className='bg-[#3F2305]  py-2 border rounded-2xl'>

                        <h1 className="text-lg  text-center  mb-2 lg:mb-2 text-white poppins-bold">
                            Journal Correction Policy
                        </h1>
                        <div className='bg-white rounded-tr-[25px] rounded-tl-[25px] rounded-2xl p-3 border border-[#3F2305]'>

                            <p className="text-black   lg:px-4 px-1   poppins-regular">
                                <span className='poppins-semibold '>The International Journal of Leadership and Innovation </span>committed to maintaining the accuracy and integrity of published research. If errors are identified in a published article, the journal will issue a correction, retraction, or an addendum, depending on the nature and severity of the issue. Authors, editors, and reviewers must promptly report any mistakes or discrepancies. The correction process ensures that readers are informed of any changes and that the record remains accurate and reliable.
                            </p>
                        </div>

                    </div>

                </div>
                <div className="w-full grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 mb-4 gap-4 ">
                    <div className='bg-[#3F2305] py-2 pt-2 border rounded-2xl flex flex-col'>
                        <h2 className='text-lg  text-center  mb-3 lg:mb-2 text-white poppins-bold'>Version of Record (VoR)</h2>
                        <div className='bg-white rounded-tr-[25px] rounded-tl-[25px] rounded-2xl p-3 border border-[#3F2305]  h-full'>
                            <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">The Version of Record (VoR) is the final, peer-reviewed, and officially published version of an article in IJLAI.</p><br />
                            </div>
                            <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /><p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">It includes all necessary revisions made after peer review, ensuring the content is accurate and of high scholarly quality.</p><br />
                            </div>
                            <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">The VoR is the version that is cited and archived, representing the definitive work. </p><br />
                            </div>
                            <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">Any future corrections or updates will be linked to the VoR to maintain transparency.</p><br />
                            </div>

                        </div>
                    </div>
                    <div className='bg-[#3F2305] pt-2 pb-2 border rounded-2xl  flex flex-col'>
                        <h2 className='text-lg  text-center  mb-3 lg:mb-2 text-white poppins-bold'>Correction Criteria</h2>
                        <div className='bg-white rounded-tr-[25px] rounded-tl-[25px] rounded-2xl p-3 border border-[#3F2305] h-full'>
                            <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">Corrections in IJLAI are made when errors are identified that affect the accuracy or integrity of the published research.</p><br />
                            </div>
                            <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /><p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">These errors can include factual inaccuracies, misstatements of data,  or issues with the methodology that impact the validity of the findings.</p><br />
                            </div>
                            <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">Corrections are issued when the error does not undermine the overall conclusions of the article but must be addressed for accuracy.</p><br />
                            </div>
                            <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">Major errors that affect the research’s credibility may lead to retraction rather than a correction.</p><br />
                            </div>

                        </div>
                    </div>
                </div>

                <div className='bg-[#3F2305] pt-2 pb-2 border rounded-2xl  flex flex-col'>
                    <h2 className='text-lg  text-center  mb-3 lg:mb-2 text-white poppins-bold'>Correction Process</h2>
                    <div className='bg-white rounded-tr-[25px] rounded-tl-[25px] rounded-2xl p-3 border border-[#3F2305] h-full'>
                        <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">When an error is identified in a published article, IJLAI follows a structured correction process. </p><br />
                        </div>
                        <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /><p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">Authors are notified and must submit a correction or explanation, which is then reviewed by the editorial team.</p><br />
                        </div>
                        <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">If the correction is deemed necessary, a published erratum or corrigendum is issued to update the article. </p><br />
                        </div>
                        <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">The updated version will be linked to the original article to maintain transparency and accuracy.</p><br />
                        </div>
                        <div className="text-center px-4 lg:px-0 mt-2 mb-2">

                            <button className="bg-[#3F2305] text-white px-4 py-2 rounded-lg  poppins-bold" onClick={() => navigate('/editorial')}>
                                <div className='flex justify-between '>  Contact Editorial Team
                                    <img src={right} alt="Submit Icon" /></div>
                            </button>

                        </div>
                    </div>
                </div>



            </div>
        </div>

    )
}

export default Correction