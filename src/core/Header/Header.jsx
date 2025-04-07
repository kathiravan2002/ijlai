import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useParams, useSearchParams } from "react-router-dom";
import { FaChevronDown, FaUpload } from "react-icons/fa";
import NavItems from "./NavItems";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from '/assets/logo.png'
import logo from '/assets/Fav.png'

const Header = () => {
  const menuRef = useRef(null);
  const [MenuOpen, setMenuOpen] = useState(false);
  const dropdown1Ref = useRef(null);
  const dropdown2Ref = useRef(null);
  const dropdown3Ref = useRef(null);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [scroll, setScroll] = useState(false);
  const location = useLocation();
  const isActive = location.pathname;
  const ToggleMenu = () => {
    setMenuOpen(!MenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
      if (dropdown1Ref.current && !dropdown1Ref.current.contains(event.target)) {
        setDropdown1(false);
      }
      if (dropdown2Ref.current && !dropdown2Ref.current.contains(event.target)) {
        setDropdown2(false);
      }
      if (dropdown3Ref.current && !dropdown3Ref.current.contains(event.target)) {
        setDropdown3(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    console.log();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Aboutus = [
    { name: "About Us", path: "/aboutus" },
    { name: "Aim and Scope", path: "/aimscope" },
    { name: "Editorial Board", path: "/editorial" },
    { name: "Issues", path: "/issues" },
    { name: "Author Guidelines", path: "/authorguidelinespage" },
    { name: "Copyrights", path: "/copyrightformpage" },
  ];
  const Overview = [
    { name: "Peer Review Process", path: "/peer" },
    { name: "Publication Ethics", path: "/publicationethicspage" },
    { name: "Abstracting and Indexing", path: "/abstractindexing" },
    { name: "Article Processing", path: "/articleprocessingpage" }
  ];
  const Policy = [
    { name: "Plagiarism ", path: "/plagiarismpage" },
    { name: "Malpractice", path: "/malpracticepage" },
    { name: "Correction", path: "/correctionpage" },
    { name: "Publication Rights", path: "/publicationrightspage" },
  ];

  return (
    <>
      <header
        ref={menuRef}
        className="fixed top-0 w-full z-[100] ">
        <div className="bg-[#3F2305]">
          <div className="max-w-full mx-auto w-full ">
            <div className="w-full flex  items-center justify-between px-5 py-2 lg:pb-14   pb-10">

            <div className=" flex justify-center items-center h-full text-white  gap-5 z-10 w-[150px] " >
                <div className=" " ></div>
                <Link to={'/'}>
                  <div className="group inline-flex gap-1 items-center  select-none ">
                    <img
                      src={Logo}
                      loading='lazy'
                      alt="Website Logo"
                      className=" lg:min-w-40 lg:w-40 min-w-28 w-28 select-none lg:ml-16"
                    />
                    
                  </div>
                 
                </Link>
              </div>
  
              <Link to={"/"} className="lg:block hidden  lg:pl-44 xl:pl-0">
                <div className="flex justify-center items-center">
                  <h1 className="text-2xl font-semibold  whitespace-nowrap text-white namdhinggo-bold ">International Journal of Leadership and Innovation</h1>
                </div>
              </Link>

              <div className="hidden lg:block"></div>

              <div
                onClick={ToggleMenu}
                className={`${scroll ? "" : ""
                  } text-white inline-flex align-middle cursor-pointer items-center duration-300 min-w-24 select-none lg:hidden `}
              >
                {" "}
                
                < GiHamburgerMenu 
                  className={`${scroll ? " " : ""}  ml-12 text-3xl  cursor-pointer duration-300 m-1.5  rotate-180 `}
                />
              </div>

            
              
            </div>
          </div>

          <NavItems MenuOpen={MenuOpen} ToggleMenu={ToggleMenu} isActive={isActive} dropdown1Ref={dropdown1Ref} dropdown2Ref={dropdown2Ref} setDropdown1={setDropdown1} setDropdown2={setDropdown2} dropdown1={dropdown1} dropdown2={dropdown2} />
          {MenuOpen && (
            <div
              onClick={() => setMenuOpen(false)}
              className="h-screen w-full bg-black/40 absolute top-0"
            ></div>
          )}
        </div>

        {/* lg navigations */}
        <div className="lg:py-2.5 py-2  w-full  bg-[#F2EAD3] rounded-tr-[50px] rounded-tl-[50px] relative lg:bottom-12 bottom-11  " 
        >
          <div className="lg:flex justify-between items-center   gap-10  xl:px-60 lg:px-32">
          <div className="  h-full text-[#3F2305] poppins-medium hidden  lg:block ">
            <ul className="flex gap-5 h-full  ">
              <li className="">
                <Link to='/'>Home</Link>
              </li>
              
              <li ref={dropdown1Ref} className="cursor-pointer relative"><Link onClick={() => setDropdown1(!dropdown1)} className="flex items-center gap-1" >About<FaChevronDown className={`${dropdown1 ? 'rotate-180' : 'rotate-0'} duration-200 text-xs `} /> </Link>
                {dropdown1 &&
                  <div className="absolute bg-[#F2EAD3] border border-[#3F2305] mt-2 rounded-lg">
                    <ul className="p-2 text-sm max-w-none w-full whitespace-nowrap ">
                      {Aboutus.map((link, index) => (
                        <Link key={index} onClick={() => setDropdown1(!dropdown1)} to={link.path} className="!w-full" >
                          <li className="px-4 py-1  text-[#3F2305] poppins-medium  border-b border-gray-200" >{link.name} </li>
                        </Link>
                      ))}
                    </ul>
                  </div>}
              </li>
              <li ref={dropdown2Ref} className="cursor-pointer relative"><Link onClick={() => setDropdown2(!dropdown2)} className="flex items-center gap-1" >Journal Overview <FaChevronDown className={`${dropdown2 ? 'rotate-180' : 'rotate-0'} duration-200 text-xs `} /> </Link>
                {dropdown2 &&
                  <div className="absolute bg-[#F2EAD3] border border-[#3F2305] mt-2 rounded-lg">
                    <ul className="p-2 text-sm max-w-none w-full whitespace-nowrap ">
                      {Overview.map((link, index) => (
                        <Link key={index} onClick={() => setDropdown2(!dropdown2)} to={link.path} className="!w-full" >
                          <li className="px-4 py-1   text-[#3F2305] poppins-medium border-b border-gray-200 " >{link.name} </li>
                        </Link>
                      ))}
                    </ul>
                  </div>}
              </li>
              <li ref={dropdown3Ref} className="cursor-pointer relative"><Link onClick={() => setDropdown3(!dropdown3)} className="flex items-center gap-1" >Journal Policy<FaChevronDown className={`${dropdown3 ? 'rotate-180' : 'rotate-0'} duration-200 text-xs `} /> </Link>
                {dropdown3 &&
                  <div className="absolute bg-[#F2EAD3] border border-[#3F2305] mt-2 rounded-lg">
                    <ul className="p-2 text-sm max-w-none w-full whitespace-nowrap ">
                      {Policy.map((link, index) => (
                        <Link key={index} onClick={() => setDropdown3(!dropdown3)} to={link.path} className="!w-full" >
                          <li className="px-4 py-1   text-[#3F2305] poppins-medium border-b border-gray-200" >{link.name} </li>
                        </Link>
                      ))}
                    </ul>
                  </div>}
              </li>
              <li className="">
                <Link to='/contactuspage'>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center ">
            <Link to="" target="_blank" rel="noopener noreferrer">
            <button className="text-white poppins-regular bg-[#3F2305] rounded-lg lg:p-1 lg:px-4   py-1 px-2">
             <div className="flex justify-between  text-nowrap gap-2 "> Submit Paper <FaUpload className="mt-1" /></div>
            </button>
            </Link>
          </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;