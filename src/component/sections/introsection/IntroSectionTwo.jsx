import React, { useState } from "react";
import introsection3 from "../../../assets/introsection2.jpg";
import IntroLayout from "../../layout/IntroLayout";
import { useSelector } from "react-redux";

const IntroSectionTwo = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const font = useSelector((state) => state.sectionStorage.addedFont);
    const color = useSelector((state) => state.sectionStorage.colorPalete.color)
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    }
    return (
        <>
            <div 
                className="w-full p-2 h-[40%] bg-white flex relative hover:ring-2 ring-blue-500"
                style={{fontFamily:font.siteFont? font.siteFont.title : "",backgroundColor:color?color[0]:"white"}} 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="w-[50%] h-full p-3 flex flex-col justify-center gap-2 ps-10">
                    <h1 className="text-2xl font-bold" style={{color:color?color[1]:'black'}}>{font?.title ? font.title :"Company Name"}</h1>
                    <p style={{color:color?color[2]:'black'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt aut magnam iusto ratione quidem. Cumque est dolores dolore tcilis. Provident tenetur sint ea.</p>
                </div>
                <div className="w-[50%] h-full flex justify-center p-3">
                    <div 
                        className="w-[50%] h-full bg-gray-200 rounded-md" 
                        style={{ 
                            backgroundImage: `url(${introsection3})`, 
                            backgroundSize: 'cover', 
                            backgroundPosition: 'center' 
                        }}
                    >
                    </div>
                </div>

                {/* Conditionally render the "CHANGE LAYOUT" button based on hover state */}
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

export default IntroSectionTwo;
