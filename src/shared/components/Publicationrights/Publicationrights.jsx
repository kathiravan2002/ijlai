import React from 'react'
import point from '/assets/rights.png'
import right from '/assets/Right.png'
import { useNavigate } from "react-router-dom";


function publicationrights() {
    const navigate = useNavigate();

    return (
        <div>

            <div className="text-justify max-w-[90rem] mx-auto lg:pr-2 pr-2 lg:p-0 p-2 ">
                <div className="mb-4 lg:mb-4 w-full">
                    <div className='bg-[#3F2305]  py-2 border rounded-2xl'>

                        <h1 className="text-lg  text-center  mb-2 lg:mb-2 text-white poppins-bold">
                        Publication Rights Policy
                        </h1>
                        <div className='bg-white rounded-tr-[25px] rounded-tl-[25px] rounded-2xl p-3 border border-[#3F2305]'>

                            <p className="text-black   lg:px-4 px-1  poppins-regular">
                                <span className='poppins-semibold '>The International Journal of Leadership and Innovation </span>authors retain the copyright to their work upon publication, while granting the journal exclusive rights to publish, distribute, and reproduce the article in all formats, including digital and print. Authors are free to reuse their work in other contexts, provided proper attribution is given to the original publication in the journal. The journal ensures global accessibility through open access, allowing readers to freely access and share the published research. Any further redistribution or adaptation of the article requires the proper citation of IJLAI as the original source.
                            </p>
                        </div>

                    </div>

                </div>
                <div className="w-full grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 mb-4 gap-4 ">
                    <div className='bg-[#3F2305] py-2 pt-2 border rounded-2xl flex flex-col'>
                        <h2 className='text-lg  text-center  mb-3 lg:mb-2 text-white poppins-bold'>Copyright Policy</h2>
                        <div className='bg-white rounded-tr-[25px] rounded-tl-[25px] rounded-2xl p-3 border border-[#3F2305]  h-full'>
                            <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular  lg:ml-4 ml-1">In IJLAI, authors retain copyright to their work but grant the journal the right to publish, distribute, and display the article in all formats, including digital and print.</p><br />
                            </div>
                            <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /><p className="text-base mb-2 poppins-regular  lg:ml-4 ml-1">The journal follows a Creative Commons Attribution (CC BY) license, allowing others to share and adapt the work, provided proper credit is given to the original authors.</p><br />
                            </div>
                            <div className='flex items-start 2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular  lg:ml-4 ml-1">Authors are free to reuse their published content with proper citation to IJLAI as the original source.</p><br />
                            </div>
                            

                        </div>
                    </div>
                    <div className='bg-[#3F2305] pt-2 pb-2 border rounded-2xl  flex flex-col'>
                        <h2 className='text-lg  text-center  mb-3 lg:mb-2 text-white poppins-bold'>Key Benefits</h2>
                        <div className='bg-white rounded-tr-[25px] rounded-tl-[25px] rounded-2xl p-3 border border-[#3F2305] h-full'>
                            <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular  lg:ml-4 ml-1">Authors are recognized as the copyright owners, demonstrating our value of author relationships.</p><br />
                            </div>
                            <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /><p className="text-base mb-2 poppins-regular  lg:ml-4 ml-1">Centralized management of permissions and licensing ensures maximum content dissemination.</p><br />
                            </div>
                            <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular  lg:ml-4 ml-1">Ability to maintain and monitor the integrity of published content across all media.</p><br />
                            </div>
                            <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular  lg:ml-4 ml-1">Protection against infringement, inappropriate use, libel, and plagiarism.</p><br />
                            </div>

                        </div>
                    </div>
                </div>

                <div className='bg-[#3F2305] pt-2 pb-2 border rounded-2xl  flex flex-col'>
                    <h2 className='text-lg  text-center  mb-3 lg:mb-2 text-white poppins-bold'>Rights Management</h2>
                    <div className='bg-white rounded-tr-[25px] rounded-tl-[25px] rounded-2xl p-3 border border-[#3F2305] h-full'>
                        <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular  lg:ml-4 ml-1">In IJLAI, authors retain full copyright of their work while granting the journal exclusive rights to publish, distribute, and reproduce the article in various formats, including online and print. </p><br />
                        </div>
                        <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /><p className="text-base mb-2 poppins-regular  lg:ml-4 ml-1">The journal adheres to a Creative Commons Attribution (CC BY) license, allowing others to share, remix, and build upon the work, provided proper credit is given.</p><br />
                        </div>
                        <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular  lg:ml-4 ml-1">Authors are free to reuse their published content in other works, ensuring proper attribution to IJLAI as the original source.</p><br />
                        </div>
                        <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">This policy ensures transparency, ethical use, and global dissemination of scholarly work.</p><br />
                        </div>
                        <div className="text-center px-4 lg:px-0 mt-2 mb-2">

                            <button className="bg-[#3F2305] text-white px-4 py-2 rounded-lg  poppins-bold" onClick={() => navigate('/authorguidelinespage')}>
                                <div className='flex justify-between '>  View Author Instruction
                                    <img src={right} alt="Submit Icon" /></div>
                            </button>

                        </div>
                    </div>
                </div>



            </div>
        </div>
        
    )
}

export default publicationrights;