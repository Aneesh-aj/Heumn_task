import React, { useState } from "react";
import introsection2 from "../../../assets/introsection2.jpg"; 
import IntroLayout from "../../layout/IntroLayout";
import { useSelector } from "react-redux";

const IntroSectionThree = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const font = useSelector((state) => state.sectionStorage.addedFont);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    }
    return (
        <>
            <div 
                className="w-full h-[45%] bg-gray-500 flex justify-center  items-center flex-col gap-4 p-5 relative hover:ring-2 ring-blue-600" 
                style={{ 
                    backgroundImage: `url(${introsection2})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center',
                    fontFamily: font?.siteFont ? font.siteFont : "" 
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <h1 className="text-2xl font-bold text-white" style={{fontFamily:font.siteFont? font.siteFont.title : ""}}>{font?.title ? font.title :"Company Name"}</h1>
                <p className="ps-10 pe-10 text-white" style={{fontFamily:font.siteFont? font.siteFont.font1 : ""}}>
                    Lorem,sectetur debitis sed architecto quod vitae ullam repudiandae et, i.
                </p>
                <button className="p-2 bg-white text-black text-sm font-bold rounded-3xl shadow-lg" style={{fontFamily:font.siteFont? font.siteFont.font1 : ""}}>
                    Let's Begin
                </button>
                
                {isHovered && (
                        <div className="absolute w-full h-[2rem] flex justify-end bottom-2 right-2">
                            <div onClick={openModal} className="bg-white h-full w-[20%] text-center font-medium text-[10px] pt-2 shadow-md rounded-sm items-center hover:bg-gray-50">
                                CHANGE LAYOUT
                            </div>
                        </div>
                    )}
                  <IntroLayout isOpen={isModalOpen} onClose={closeModal}  />
            </div>
        </>
    );
};

export default IntroSectionThree;
