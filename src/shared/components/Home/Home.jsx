import React from 'react';
import innovation from '/assets/Innovation.png';
import shield from '/assets/Projects.png';
import right from '/assets/Right.png';
import point from '/assets/rights.png';
import { Link, useNavigate } from "react-router-dom";
import { FaUpload } from 'react-icons/fa';


const Home = () => {
  const navigate = useNavigate();

  const researchDomains = [

    'Leadership',
    'Innovation',
    'Management',
    'Strategy',
    'Transformation',
    'Organizational Development',
    'Entrepreneurship',
    'Decision Making',
    'Change Management',
    'Business Growth',
    'Digital Transformation',
    'Corporate Governance',
    'Leadership Styles',
    'Creativity',
    'Strategic Planning',

    'Leadership Trends',
    'Executive Leadership',
    'Visionary Leadership',
    'Disruptive Innovation',
    'Leadership Skills',
    'Workplace Innovation',
    'Employee Engagement',
    'Leadership Theories',
    'Thought Leadership',
    'Ethical Leadership',
    'Human Resource Management',
    'Knowledge Management',
    'Innovation Management',
    'Agile Leadership',
    'Technology Management',


    'Servant Leadership',
    'Workplace Culture',
    'Industry 4.0',
    'Decision Science',
    'Sustainability in Leadership',
    'Coaching and Mentoring',
    'Emotional Intelligence',
    'Team Management',
    'Digital Leadership',
    'Corporate Social Responsibility',
    'Business Innovation',
    'Organizational Change',
    'Performance Management',
    'Business Strategy',
    'Leadership Development',

  ];

  return (
    <div>
      <div className="max-w-[90rem] mx-auto lg:pr-2 pr-2 lg:p-0 p-2 " >
        <main className="w-full text-justify ">
          <div className="mb-4 lg:mb-4 w-full">
            <div className='bg-[#3F2305]  py-2 border rounded-2xl'>
              <div className='flex justify-center items-center ' >
                {/* <img src={innovation} alt='innovation' className='w-[75px] h-[45px] '/> */}
              <h1 className="text-lg  text-center  mb-2 lg:mb-2 text-white poppins-bold">
                Welcome to IJLAI
              </h1>
              </div>
              <div className='bg-white rounded-tr-[25px] rounded-tl-[25px] rounded-2xl p-3 border border-[#3F2305]'>

                <p className="  text-black   lg:px-4 px-1 poppins-regular">
                  <span className=" poppins-semibold ">
                    The International Journal of Leadership and Innovation
                  </span>{' '}
                  is a peer-reviewed journal dedicated to advancing research in leadership, management, and innovative practices across various domains. It provides a platform for scholars, researchers, and professionals to share insights on emerging leadership trends, organizational transformation, and groundbreaking innovations. IJLAI publishes high-quality research articles, case studies, and theoretical papers that contribute to the evolving landscape of leadership and innovation.
                </p>

                <div className="flex justify-center items-center ">
                  <Link to="" target="_blank" rel="noopener noreferrer">
                    <button className="text-white poppins-regular bg-[#3F2305] rounded-lg lg:p-1 lg:px-4   py-1 px-2">
                      <div className="flex justify-between  text-nowrap gap-2 "> Submit Paper <FaUpload className="mt-1" /></div>
                    </button>
                  </Link>
                </div>
              </div>

            </div>

          </div>
          <div className="w-full grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 mb-4 gap-4 ">
            <div className='bg-[#3F2305] py-2 pt-2 border rounded-2xl flex flex-col'>
              <h2 className='text-lg  text-center  mb-3 lg:mb-2 text-white poppins-bold'>About the Journal</h2>
              <div className='bg-white rounded-tr-[25px] rounded-tl-[25px] rounded-2xl p-3 border border-[#3F2305]  h-full'>
                <p className='poppins-regular mt-2  lg:px-4 px-1'>The International Journal of Leadership and Innovation is a peer-reviewed journal focused on leadership development, management strategies, and innovation. It publishes high-quality research, case studies, and theoretical insights to bridge the gap between theory and practice. IJLAI aims to foster interdisciplinary dialogue and drive transformative change in leadership and innovation worldwide.</p>
                <div className='poppins-regular 2xl:px-24 xl:px-24 lg:px-16 px-1 mt-2'>
                  <div className='flex  gap-2 mb-[5px]'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /><p>Publishes high-quality, scholarly research and case studies.</p></div>
                  <div className='flex  gap-2 mb-[5px]'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /><p>Global perspective on leadership trends.</p></div>
                  <div className='flex  gap-2 mb-[5px]'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /><p>Leadership, management, and innovation.</p></div>
                </div>
                <div className="px-4 lg:px-0  flex justify-end items-end 2xl:mt-2 xl:mt-8 lg:mt-8">
                  <button className="bg-[#3F2305] text-white px-4 py-2 rounded-lg  poppins-bold mt-3 " onClick={() => navigate('/aboutus')}>
                    <div className='flex justify-between gap-3'>  Learn More
                      <img src={right} alt="Submit Icon" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className='bg-[#3F2305] pt-2 pb-2 border rounded-2xl  flex flex-col'>
              <h2 className='text-lg  text-center  mb-3 lg:mb-2 text-white poppins-bold'>Aim and Scope</h2>
              <div className='bg-white rounded-tr-[25px] rounded-tl-[25px] rounded-2xl p-3 border border-[#3F2305] h-full'>
                <p className='poppins-regular mt-2  lg:px-4 px-1 '>The International Journal of Leadership and Innovation aims to advance research in leadership, management, and innovation by publishing high-quality studies and practical insights. The journal covers leadership theories, strategic management,  and innovation-driven practices. IJLAI fosters interdisciplinary collaboration, bridging the gap between theory and real-world applications to drive impactful change in academia and industry.</p>
                <div className='poppins-regular 2xl:px-24 xl:px-24 lg:px-16 px-1 mt-2'>
                  <div className='flex  gap-2 mb-[5px]'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /><p> Leadership theories, strategic management, and organizational transformation.</p></div>
                  <div className='flex  gap-2 mb-[5px]'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /><p>Innovation practices, digital change.</p></div>
                  <div className='flex  gap-2 mb-[5px]'><img src={point} alt='icon' className='w-[18px] h-[18px] mt-1' /><p>Interdisciplinary collaboration.</p></div>
                </div>
                <div className="px-4 lg:px-0  flex justify-end items-end  mt-2">
                  <button className="bg-[#3F2305] text-white px-4 py-2 rounded-lg  poppins-bold mt-3 " onClick={() => navigate('/aimscope')}>
                    <div className='flex justify-between gap-3'>  Learn More
                      <img src={right} alt="Submit Icon" />
                    </div>
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Key Research Domains Section */}
          <section className="bg-[#3F2305]  pt-2 pb-[10px]  rounded-2xl  mb-4 lg:mb-4 w-full flex flex-col ">

            <h2 className="text-center text-xl poppins-bold p-2 text-white ">
              Key Research Domains
            </h2>
            <div className='bg-[#F2EAD3] rounded-tr-[25px] rounded-tl-[25px] rounded-2xl h-full '>
              <p className="text-center text-base lg:text-xl mb-3 lg:mb-4  text-[#000000] poppins-bold px-4 lg:px-0 mt-4 ">
                The journal covers the following areas of Leadership and Innovation
              </p>

              <div className="grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2  mb-4">
                {researchDomains.map((column, colIndex) => (

                  <p key={colIndex} className="flex gap-2 lg:gap-5 md:gap-0 space-y-2 lg:space-y-4">
                    <span className="ml-4 lg:ml-24 "><img src={shield} alt='shield' className='w-[22px] h-[22px]' /></span>
                    <span className="2xl:text-base xl:text-base lg:text-sm md:text-sm text-sm poppins-regular text-left">{column}</span>
                  </p>

                ))}
              </div>
            </div>
          </section>


          {/* Submission Info Section */}
          <section className="w-full rounded-none lg:rounded-lg text-center">
            <p className=" mb-2 poppins-regular lg:text-base px-4 lg:px-0 text-pretty">
              We publish original research articles, review articles, and technical notes. The journal reviews papers within two weeks of submission and publishes accepted articles on the internet immediately upon receiving the final versions. Our fast reviewing process is our strength.
            </p>
            <div className="bg-[#F2EAD3] rounded p-2 mx-4 lg:mx-0">
              <p className="text-[#3F2305] poppins-bold  text-sm lg:text-base">
                The last date for manuscript submission for the next issue is June 22, 2025
              </p>
            </div>
            <p className="text-black mt-2 poppins-regular   px-4 lg:px-0">
              With Warm Regards, <br />
              Editor-in-Chief<br />
              <span className="font-bold">IJLAI</span>
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;
