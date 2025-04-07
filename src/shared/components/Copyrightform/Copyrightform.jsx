import React from 'react'
import point from '/assets/rights.png'


function Copyrightform() {
    return (
        <div>
              <div className="text-justify max-w-[90rem] mx-auto lg:pr-2 pr-2 lg:p-0 p-2 ">
                <div className="mb-4 lg:mb-4 w-full">
                  <div className='bg-[#3F2305]  py-2 border rounded-2xl'>
        
                    <h1 className="text-lg  text-center  mb-2 lg:mb-2 text-white poppins-bold">
                    Copyright Declaration
                    </h1>
                    <div className='bg-white rounded-tr-[25px] rounded-tl-[25px] rounded-2xl p-3 border border-[#3F2305]'>
        
                      <p className="text-black  lg:px-4 px-1   poppins-regular">
                      By submitting to IJLAI, authors retain copyright to their work while granting the journal the right to publish and distribute the article in all formats, including online and print. Authors must ensure that their work is original, free from plagiarism, and not under review elsewhere. The journal may reproduce, archive, and disseminate articles to ensure wide accessibility. Any reuse or distribution of the article requires proper citation of the original publication in IJLAI.
                      </p>
                    </div>
        
                  </div>
        
                </div>
                <div className="w-full grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 mb-4 gap-4 ">
                  <div className='bg-[#3F2305] py-2 pt-2 border rounded-2xl flex flex-col'>
                    <h2 className='text-lg  text-center  mb-3 lg:mb-2 text-white poppins-bold'>Copyright Declaration </h2>
                    <div className='bg-white rounded-tr-[25px] rounded-tl-[25px] rounded-2xl p-3 border border-[#3F2305]  h-full'>
                      <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">I/We __________ the author(s) of the research paper/article entitled __________ authorize you to publish the above mentioned paper/article in IJLAI. By submitting this declaration, the author(s) confirm their agreement to the following terms and conditions regarding the publication of their research work.</p><br />
                      </div>
                    </div>
                  </div>
                  <div className='bg-[#3F2305] py-2 pt-2 border rounded-2xl flex flex-col'>
                    <h2 className='text-lg  text-center  mb-3 lg:mb-2 text-white poppins-bold'>Author Agreement </h2>
                    <div className='bg-white rounded-tr-[25px] rounded-tl-[25px] rounded-2xl p-3 border border-[#3F2305]  h-full'>
                      <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">This agreement outlines the terms and conditions for publication, ensuring the protection of both the author's rights and the journal's interests. The author(s) maintain their copyright while granting the journal the necessary rights to publish and distribute the work.</p><br />
                      </div>
                    </div>
                  </div>
                </div>
        
                <div className='bg-[#3F2305] pt-2 pb-2 border rounded-2xl  flex flex-col'>
                  <h2 className='text-lg  text-center  mb-3 lg:mb-2 text-white poppins-bold'>Copyrights Points</h2>
                  <div className='bg-white rounded-tr-[25px] rounded-tl-[25px] rounded-2xl p-3 border border-[#3F2305] h-full'>
        
                    <div className='flex flex-col mb-2 mt-2 lg:ml-4 ml-1'>
                      <h2 className='poppins-bold text-lg text-[#3F2305] '>Publication Rights</h2>
                      <div className='bg-[#3F2305] h-1   w-[168px]'></div>
                    </div>
                    <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">I/We will not publish the above-mentioned contribution anywhere else without the prior written permission of the publisher, unless it has been substantially changed.</p><br />
                    </div>
                   
        
                    <div className='flex flex-col mb-2  mt-2 lg:ml-4 ml-1'>
                      <h2 className='poppins-bold text-lg text-[#3F2305] '>Content Warranty</h2>
                      <div className='bg-[#3F2305] h-1   w-[167px]'></div>
                    </div>
                    <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">I/We declare and warrant that the contribution is original, except for excerpts from copyrighted works that may be included with the permission of the copyright holder and author thereof.</p><br />
                    </div>
                    
        
                    <div className='flex flex-col mb-2 mt-2 lg:ml-4 ml-1'>
                      <h2 className='poppins-bold text-lg text-[#3F2305] '>Legal Compliance</h2>
                      <div className='bg-[#3F2305] h-1   w-[167px]'></div>
                    </div>
                    <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">The Author warrants the right to enter into this Agreement and that the Article contains no libelous or unlawful statements, harmful instructions, and does not violate any rights or privacy of others.</p><br />
                    </div>
                   
        
                  </div>
                </div>
        
        
        
              </div>
            </div>
    )
}

export default Copyrightform