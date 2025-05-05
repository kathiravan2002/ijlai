import React from 'react'
import point from '/assets/rights.png'
import right from '/assets/Right.png'
import { useNavigate } from "react-router-dom";


function Plagiarism() {
    const navigate = useNavigate();

    return (
        <div>

            <div className="text-justify max-w-[90rem] mx-auto lg:pr-2 pr-2 lg:p-0 p-2 ">
                <div className="mb-4 lg:mb-4 w-full">
                    <div className='bg-[#3F2305]  py-2 border rounded-2xl'>

                        <h1 className="text-lg  text-center  mb-2 lg:mb-2 text-white poppins-bold">
                            Plagiarism  Policy
                        </h1>
                        <div className='bg-white rounded-tr-[25px] rounded-tl-[25px] rounded-2xl p-3 border border-[#3F2305]'>

                            <p className="text-black  lg:px-4 px-1   poppins-regular">
                                <span className='poppins-semibold '>The International Journal of Leadership and Innovation </span> maintains a strict plagiarism policy to ensure the originality and integrity of all published work. Manuscripts are screened for plagiarism using advanced detection tools, and any submission found to contain plagiarized content will be immediately rejected. Authors are required to properly cite all sources and ensure that their work is free from any form of academic dishonesty. Any violation of this policy will result in retraction of the article and may lead to a ban from future submissions.
                            </p>
                        </div>

                    </div>

                </div>
                <div className="w-full grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 mb-4 gap-4 ">
                    <div className='bg-[#3F2305] py-2 pt-2 border rounded-2xl flex flex-col'>
                        <h2 className='text-lg  text-center  mb-3 lg:mb-2 text-white poppins-bold'>Definition and Scope</h2>
                        <div className='bg-white rounded-tr-[25px] rounded-tl-[25px] rounded-2xl p-3 border border-[#3F2305]  h-full'>
                            <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">Copying text, ideas, or results from another source without proper attribution.</p><br />
                            </div>
                            <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /><p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">Reproducing substantial parts of another author's work without permission.</p><br />
                            </div>
                            <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">Submitting duplicate publication or redundant publication.</p><br />
                            </div>
                            <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">Using previously published data without acknowledging the source. </p><br />
                            </div>
                            <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">Failing to cite relevant previous works.</p><br />
                            </div>

                        </div>
                    </div>
                    <div className='bg-[#3F2305] pt-2 pb-2 border rounded-2xl  flex flex-col'>
                        <h2 className='text-lg  text-center  mb-3 lg:mb-2 text-white poppins-bold'>Types of Plagiarism</h2>
                        <div className='bg-white rounded-tr-[25px] rounded-tl-[25px] rounded-2xl p-3 border border-[#3F2305] h-full'>
                            <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">Direct Plagiarism: Copying text verbatim from a source without proper citation or acknowledgment.</p><br />
                            </div>
                            <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /><p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">Self-Plagiarism: Reusing one’s own previously published work or parts of it without citation or permission.</p><br />
                            </div>
                            <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">Mosaic Plagiarism: Borrowing phrases or ideas from a source and blending them into one's own work without proper citation.</p><br />
                            </div>
                            <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">Accidental Plagiarism: Unintentional failure to properly cite sources or paraphrase correctly, often due to lack of awareness or knowledge.</p><br />
                            </div>
                            <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">Paraphrasing Plagiarism: Rewriting someone else's ideas or text in one’s own words without proper attribution.</p><br />
                            </div>

                        </div>
                    </div>
                </div>

                <div className='bg-[#3F2305] pt-2 pb-2 border rounded-2xl  flex flex-col'>
                    <h2 className='text-lg  text-center  mb-3 lg:mb-2 text-white poppins-bold'>Detection and Consequences</h2>
                    <div className='bg-white rounded-tr-[25px] rounded-tl-[25px] rounded-2xl p-3 border border-[#3F2305] h-full'>
                        <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">All submitted manuscripts are screened using advanced plagiarism detection software to identify any similarities with existing published work. If plagiarism is detected, the manuscript will be rejected immediately.</p><br />
                        </div>
                        <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /><p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">In cases of minor overlap, authors will be asked to revise and resubmit the work. Severe cases of plagiarism may lead to a ban on future submissions and notification to the author’s institution.</p><br />
                        </div>
                        <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">The journal upholds strict ethical standards to ensure the originality and integrity of published research.</p><br />
                        </div>
                        <div className="text-center px-4 lg:px-0 mt-2 mb-2">

                            <button className="bg-[#3F2305] text-white px-4 py-2 rounded-lg  poppins-bold cursor-pointer" onClick={() => navigate('/authorguidelinespage')}>
                                <div className='flex justify-between '>  Review Guidelines
                                    <img src={right} alt="Submit Icon" /></div>
                            </button>

                        </div>
                    </div>
                </div>



            </div>
        </div>

    )
}

export default Plagiarism