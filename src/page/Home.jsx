import React, { useState } from 'react';
import HomeAnimation from "../component/HomeAnimation";
import HomePageSection from "../component/sidebar/HomePageSection";
import HomeSideBar from "../component/sidebar/HomeSideBar";
import WebsitePage from "../component/WebsitePage";
import logo from "../assets/i23jc27f3hld1-removebg-preview.png";
import ColorSideBar from "../component/sidebar/ColorSideBar";
import PageSideBar from "../component/sidebar/PageSideBar";
import FontSelectionBar from "../component/sidebar/FontSelectionBar";

const Home = () => {
  const [currentSection, setCurrentSection] = useState({
    home: true,
    section: false,
    page: false,
    color: false,
    fonts: false,
  });

  const sectionOrder = ["home", "section", "page", "color", "fonts"];

  const getCurrentIndex = () => {
    return sectionOrder.findIndex((section) => currentSection[section]);
  };

  const handleNext = () => {
    const currentIndex = getCurrentIndex();
    if (currentIndex < sectionOrder.length - 1) {
      const nextSection = sectionOrder[currentIndex + 1];
      const updatedSection = sectionOrder.reduce((acc, section) => {
        acc[section] = section === nextSection;
        return acc;
      }, {});
      setCurrentSection(updatedSection);
    }
  };

  const handlePrev = () => {
    const currentIndex = getCurrentIndex();
    if (currentIndex > 0) {
      const prevSection = sectionOrder[currentIndex - 1];
      const updatedSection = sectionOrder.reduce((acc, section) => {
        acc[section] = section === prevSection;
        return acc;
      }, {});
      setCurrentSection(updatedSection);
    }
  };

  return (
    <>
      <div className="w-full h-screen ">
        <div className="w-full h-[100%] flex">
          <div className="w-[74%] h-full flex justify-center relative">
            <div className="w-[65%] fixed h-[4rem] flex items-center gap-2 z-10 pt-3">
              <img src={logo} className="w-8 h-8" alt="" />
              <hr className="border border-black h-[35%]" />
              <h2 className="text-black text-sm font-medium relative">BLUEPRINT AI</h2>
            </div>

           
            {currentSection.home ?  <HomeAnimation /> : <WebsitePage/>}
          </div>

          <div className="w-[28%] h-full relative ">
            <div className="w-[100%] fixed h-[10%] flex items-center p-5 z-1">
              <div className="relative w-[25%] flex justify-end ">
                <svg width="30px" height="30px" viewBox="0 -0.5 25 25" fill="" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z" fill="#000000"></path> </g></svg>
              </div>
            </div>

            <div className="overflow-y-auto hide-scrollbar h-[calc(100%-10%)] mt-[5%]">
              {currentSection.home && <HomeSideBar />}
              {currentSection.section && <HomePageSection />}
              {currentSection.page && <PageSideBar />}
              {currentSection.color && <ColorSideBar />}
              {currentSection.fonts && <FontSelectionBar />}
            </div>
          </div>
        </div>

        <div className="w-full bg-white h-[4rem] p-5 bottom-0 fixed flex justify-between">
          <div>
            <button className="p-2 bg-black text-white" onClick={handlePrev}>prev</button>
          </div>
          <div className="w-[50%] h-[1.2px] bg-gray-300">
            <div className=" bg-black h-full" style={{width:`${currentSection.home ?"10%":currentSection.section?"32%":currentSection.page?"53%":currentSection.color?"73%":currentSection.fonts?"91%":''}`}}></div>
            <div className="w-full h-[3rem]">
              <ul className="flex justify-around items-center w-full pt-1 text-[11px] font-medium">
                <li className="">SITE INFO</li>
                <li className= "" >HOMEPAGE</li>
                <li className= "">PAGES</li>
                <li className= "" >COLORS</li>
                <li className= "" >FONTS</li>
              </ul>
            </div>
          </div>
          <div>
            <button className="p-2 bg-black text-white" onClick={handleNext}>next</button>
          </div>
        </div>
      </div>
    </>
  );
};


export default Home
