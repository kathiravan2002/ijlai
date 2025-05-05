import React from 'react'
import point from '/assets/rights.png'
import right from '/assets/Right.png'
import { useNavigate } from "react-router-dom";

function Aboutus() {

    const navigate = useNavigate();

    return (
        <div>

            <div className="text-justify max-w-[90rem] mx-auto lg:pr-2 pr-2 lg:p-0 p-2 ">
                <div className="mb-4 lg:mb-4 w-full">
                    <div className='bg-[#3F2305]  py-2 border rounded-2xl'>

                        <h1 className="text-lg  text-center  mb-2 lg:mb-2 text-white poppins-bold">
                            About Us
                        </h1>
                        <div className='bg-white rounded-tr-[25px] rounded-tl-[25px] rounded-2xl p-3 border border-[#3F2305]'>

                            <p className="  text-black    lg:px-4 px-1  poppins-regular">
                            <span className='poppins-semibold '>The International Journal of Leadership and Innovation </span>  is a peer-reviewed journal dedicated to advancing research in leadership, management, and innovation. It provides a platform for scholars, researchers, and professionals to share insights on emerging trends, strategic leadership, and transformative practices. IJLAI fosters interdisciplinary collaboration and bridges the gap between theory and practice. Our mission is to drive impactful research that shapes the future of leadership and innovation worldwide.
                            </p>
                        </div>

                    </div>

                </div>
                <div className="w-full grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 mb-4 gap-4 ">
                    <div className='bg-[#3F2305] py-2 pt-2 border rounded-2xl flex flex-col '>
                        <h2 className='text-lg  text-center  mb-3 lg:mb-2 text-white poppins-bold'>Scope</h2>
                        <div className='bg-white rounded-tr-[25px] rounded-tl-[25px] rounded-2xl p-3 border border-[#3F2305]  h-full'>
                            <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1 ">The International Journal of Leadership and Innovation  covers a wide range of topics related to leadership, management, and innovation. </p><br />
                            </div>
                            <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1 '><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /><p className="text-base mb-2 poppins-regular lg:ml-4 ml-1  ">It welcomes research on leadership theories, strategic management, organizational transformation, and emerging business trends. </p><br />
                            </div> 
                            <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1 '><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1 ">The journal also explores innovation management, digital transformation, and leadership in dynamic environments. </p><br />
                            </div> 
                            <div className='flex items-start   2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1 ">IJLAI encourages interdisciplinary studies that bridge theory and practice, fostering impactful research. </p><br />
                            </div> 
                            <div className='flex items-start   2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1 ">It aims to provide valuable insights for academicians, researchers, and industry professionals globally.</p><br />
                            </div>

                        </div>
                    </div>
                    <div className='bg-[#3F2305] pt-2 pb-2 border rounded-2xl  flex flex-col'>
                        <h2 className='text-lg  text-center  mb-3 lg:mb-2 text-white poppins-bold'>Mission</h2>
                        <div className='bg-white rounded-tr-[25px] rounded-tl-[25px] rounded-2xl p-3 border border-[#3F2305] h-full'>
                            <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">The International Journal of Leadership and Innovation  aims to advance knowledge in leadership, management, and innovation by publishing high-quality research and case studies.  </p><br />
                            </div>
                            <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /><p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">Our mission is to foster interdisciplinary collaboration, bridging the gap between theory and practical applications. </p><br />
                            </div>
                            <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">IJLAI seeks to inspire transformative leadership practices, promote innovative thinking, and drive organizational excellence.</p><br />
                            </div>
                            <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">We strive to provide a global platform for researchers, academicians, and professionals to share cutting-edge insights. </p><br />
                            </div>
                            <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">Through rigorous peer review, we ensure impactful contributions that shape the future of leadership and innovation.</p><br />
                            </div>

                        </div>
                    </div>
                    <div className='bg-[#3F2305] py-2 pt-2 border rounded-2xl flex flex-col'>
                        <h2 className='text-lg  text-center  mb-3 lg:mb-2 text-white poppins-bold'>Publication Ethics</h2>
                        <div className='bg-white rounded-tr-[25px] rounded-tl-[25px] rounded-2xl p-3 border border-[#3F2305]  h-full'>
                            <div className='flex items-start 2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">The International Journal of Leadership and Innovation  upholds the highest standards of publication ethics to ensure integrity, transparency, and academic excellence.</p><br />
                            </div>
                            <div className='flex items-start 2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /><p className="text-base mb-2 poppins-regular lg:ml-4 ml-1"> All submissions must be original, free from plagiarism, and properly cited. Authors, reviewers, and editors are expected to follow ethical guidelines, including confidentiality, fairness, and objectivity. </p><br />
                            </div>
                            <div className='flex items-start 2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">IJLAI strictly prohibits data fabrication, falsification, and duplicate submissions. </p><br />
                            </div>
                            <div className='flex items-start 2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">Any ethical violations will be addressed through a rigorous review process. </p><br />
                            </div>
                            <div className='flex items-start 2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">Our commitment to ethical publishing fosters credibility and trust in academic research.</p><br />
                            </div>

                        </div>
                    </div>
                    <div className='bg-[#3F2305] pt-2 pb-2 border rounded-2xl  flex flex-col'>
                        <h2 className='text-lg  text-center  mb-3 lg:mb-2 text-white poppins-bold'>Audience</h2>
                        <div className='bg-white rounded-tr-[25px] rounded-tl-[25px] rounded-2xl p-3 border border-[#3F2305] h-full'>
                            <div className='flex items-start 2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">The International Journal of Leadership and Innovation  caters to a diverse audience, including researchers, academicians, industry professionals, and policymakers.</p><br />
                            </div>
                            <div className='flex items-start 2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /><p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">It serves scholars seeking advanced research in leadership, management, and innovation.</p><br />
                            </div>
                            <div className='flex items-start 2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">Business leaders and executives can gain insights into strategic leadership and transformative practices. </p><br />
                            </div>
                            <div className='flex items-start 2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">Educators and students benefit from cutting-edge studies and theoretical advancements. </p><br />
                            </div>
                            <div className='flex items-start 2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">The journal also engages policymakers looking for research-backed strategies to drive organizational and societal progress.</p><br />
                            </div>

                        </div>
                    </div>
                </div>

                <div className='bg-[#3F2305] pt-2 pb-2 border rounded-2xl  flex flex-col'>
                    <h2 className='text-lg  text-center  mb-3 lg:mb-2 text-white poppins-bold'>Submission Guidelines</h2>
                    <div className='bg-white rounded-tr-[25px] rounded-tl-[25px] rounded-2xl p-3 border border-[#3F2305] h-full'>
                        <div className='flex items-start 2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">The International Journal of Leadership and Innovation welcomes original, high-quality research articles, case studies, and reviews in leadership, management, and innovation.</p><br />
                        </div>
                        <div className='flex items-start 2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /><p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">Submissions must follow the journal’s formatting and referencing guidelines.</p><br />
                        </div>
                        <div className='flex items-start 2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">Manuscripts should be plagiarism free and not under review elsewhere.</p><br />
                        </div>
                        <div className='flex items-start 2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">Authors must include an abstract, keywords, and properly cited references. </p><br />
                        </div>
                        <div className='flex items-start 2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">The peer-review process ensures rigorous evaluation and academic integrity.</p><br />
                        </div>
                        <div className='flex items-start 2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">All submissions should be made through the journal’s online submission system.</p><br />
                        </div>

                        <div className="text-center px-4 lg:px-0 mt-2 mb-2">

                            <button className="bg-[#3F2305] text-white px-4 py-2 rounded-lg  poppins-bold cursor-pointer" onClick={() => navigate('/authorguidelinespage')} >
                                <div className='flex justify-between '>  Submission Guidelines
                                    <img src={right} alt="Submit Icon" /></div>
                            </button>

                        </div>
                    </div>
                </div>

               

            </div>
        </div>
    )
}

export default Aboutus