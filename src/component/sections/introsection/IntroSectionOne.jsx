import React, { useState } from "react";
import introsection1 from "../../../assets/introsection1.jpg";
import IntroLayout from "../../layout/IntroLayout";
import { useSelector } from "react-redux";

const IntroSectionOne = () => {
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
                className="w-full h-[40%] bg-gray-500 flex justify-center items-center relative hover:ring-2 ring-blue-500" 
                style={{ 
                    backgroundImage: `url(${introsection1})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center',
                    fontFamily: font?.siteFont ? font.siteFont : "" 
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <h1 className="text-xl font-bold text-white"style={{fontFamily: font?.siteFont? font.siteFont.title : "" }} >{font?.title ? font.title :"Company Name"}</h1>
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

export default IntroSectionOne;
