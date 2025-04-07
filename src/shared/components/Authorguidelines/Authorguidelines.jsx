import React from 'react'
import point from '/assets/rights.png'

function Authorguidelines() {
  return (
    <div>

      <div className="text-justify max-w-[90rem] mx-auto lg:pr-2 pr-2 lg:p-0 p-2 ">
        <div className="mb-4 lg:mb-4 w-full">
          <div className='bg-[#3F2305]  py-2 border rounded-2xl'>

            <h1 className="text-lg  text-center  mb-2 lg:mb-2 text-white poppins-bold">
              Author Guidelines
            </h1>
            <div className='bg-white rounded-tr-[25px] rounded-tl-[25px] rounded-2xl p-3 border border-[#3F2305]'>

              <p className="text-black   lg:px-4 px-1   poppins-regular">
                Authors submitting to the International Journal of Leadership and Innovation must ensure that their manuscripts are original, well-structured, and free from plagiarism. Submissions should follow the journal's formatting and referencing guidelines, with clear abstracts, keywords, and citations. Manuscripts must be relevant to the journal's scope, covering leadership, management, and innovation topics. Authors are required to submit their work via the journal's online submission system, where they will undergo an initial screening and peer review process.
              </p>
            </div>

          </div>

        </div>
        <div className="w-full grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 mb-4 gap-4 ">
          <div className='bg-[#3F2305] py-2 pt-2 border rounded-2xl flex flex-col'>
            <h2 className='text-lg  text-center  mb-3 lg:mb-2 text-white poppins-bold'>Publishing Requirements</h2>
            <div className='bg-white rounded-tr-[25px] rounded-tl-[25px] rounded-2xl p-3 border border-[#3F2305]  h-full'>
              <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">Manuscripts submitted to IJLAI must be original, plagiarism-free, and adhere to the journal’s formatting and referencing guidelines.</p><br />
              </div>
              <h2 className="text-base  poppins-bold mb-2  2xl:px-4 xl:px-4 lg:px-4 px-1">Key Requirements :</h2>
              <ul className="list-disc lg:pl-12 pl-5 space-y-2 poppins-regular ml-1  ">
                <li>Manuscripts must adhere to the IJLAI template.</li>
                <li>Abstracts should be 200-1000 characters and structured as per PubMed format.</li>
                <li>Three to eight keywords must be included.</li>
                <li>References should follow the Vancouver style.</li>
                <li>Ensure proper grammar, spelling, and use of formal English.</li>
              </ul>
            </div>
          </div>
          <div className='bg-[#3F2305] py-2 pt-2 border rounded-2xl flex flex-col'>
            <h2 className='text-lg  text-center  mb-3 lg:mb-2 text-white poppins-bold'>Submission Process</h2>
            <div className='bg-white rounded-tr-[25px] rounded-tl-[25px] rounded-2xl p-3 border border-[#3F2305]  h-full'>
              <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">Submit your manuscript in OpenOffice, Microsoft Word, or RTF format through our Open Journal System (OJS).</p><br />
              </div>
              <h2 className="text-base  poppins-bold mb-2 ml-4">Key Requirements :</h2>
              <ul className="list-disc lg:pl-12 pl-5 space-y-2 poppins-regular ml-1 mb-2 px-4">
                <li>Initial manuscript screening by editorial team.</li>
                <li>Double-blind peer review process.</li>
                <li>Author revision period.</li>
                <li>Final editorial decision.</li>
                <li>Publication with Creative Commons licensing.</li>
              </ul>
              <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">Our editorial team provides comprehensive support throughout the submission process to ensure a smooth publishing experience.</p><br />
              </div>
            </div>
          </div>
        </div>

        <div className='bg-[#3F2305] pt-2 pb-2 border rounded-2xl  flex flex-col'>
          <h2 className='text-lg  text-center  mb-3 lg:mb-2 text-white poppins-bold'>Accepted Article Types</h2>
          <div className='bg-white rounded-tr-[25px] rounded-tl-[25px] rounded-2xl p-3 border border-[#3F2305] h-full'>

            <div className='flex flex-col mb-2 mt-2 lg:ml-4 ml-1'>
              <h2 className='poppins-bold text-lg text-[#3F2305] '>Research Article</h2>
              <div className='bg-[#3F2305] h-1   w-[150px]'></div>
            </div>
            <div className='flex items-start 2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">In IJLAI, research articles present original studies that contribute to the fields of leadership, management, and innovation.</p><br />
            </div>
            <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /><p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">These articles should include clear research objectives, methodology, findings, and conclusions, with a focus on advancing knowledge and practical applications.</p><br />
            </div>

            <div className='flex flex-col mb-2  mt-2 lg:ml-4 ml-1'>
              <h2 className='poppins-bold text-lg text-[#3F2305] '>In-depth Review Article</h2>
              <div className='bg-[#3F2305] h-1  w-[218px]'></div>
            </div>
            <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">In IJLAI, in-depth review articles provide comprehensive analysis and synthesis of existing research on leadership, management, and innovation. </p><br />
            </div>
            <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">These articles highlight key trends, identify gaps, and suggest future research directions to advance the field.</p><br />
            </div>

            <div className='flex flex-col mb-2 mt-2 lg:ml-4 ml-1'>
              <h2 className='poppins-bold text-lg text-[#3F2305] '>Technical Article</h2>
              <div className='bg-[#3F2305] h-1 w-[155px]'></div>
            </div>
            <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">In IJLAI, technical articles focus on advanced methodologies, frameworks, and practical applications in leadership and innovation.</p><br />
            </div>
            <div className='flex items-start  2xl:px-4 xl:px-4 lg:px-4 px-1'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /> <p className="text-base mb-2 poppins-regular lg:ml-4 ml-1">These articles offer detailed solutions to industry challenges and provide insights into emerging trends and technologies.</p><br />
            </div>


          </div>
        </div>



      </div>
    </div>
   
  )
}

export default Authorguidelines