import React, { useState } from "react";
import introsection2 from "../../../assets/introsection2.jpg";
import AboutLayout from "../../layout/AboutLayout";

const AboutTwo = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <>
            <div 
                className="w-full bg-white h-[50%] flex flex-row-reverse relative hover:ring-2 ring-blue-500" 
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="w-[50%] h-full flex items-center justify-center">
                    <div
                        className="w-[60%] h-[60%] bg-gray-300 rounded-xl"
                        style={{ 
                            backgroundImage: `url(${introsection2})`, 
                            backgroundSize: 'cover', 
                            backgroundPosition: 'center', 
                            backgroundRepeat: 'no-repeat' 
                        }}
                    >
                    </div>
                </div>
                <div className="w-[50%] h-full p-10 flex flex-col gap-5 justify-center bg-gray-100">
                    <h1 className="text-2xl font-bold text-blue-700">Who We Are</h1>
                    <p className="text-sm overflow-hidden">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum mollitia nihil alias, odit nostrum reiciendis omnis at, fugiat ex rem necessitatibus quia beatae velit doloribus.</p>
                    <button className="p-2 bg-blue-500 text-white rounded-xl w-[60%] font-semibold shadow-lg">Learn More</button>
                </div>
                <AboutLayout isOpen={isModalOpen} onClose={closeModal} />
                {isHovered && (
                        <div className="absolute w-[50%] h-[2rem] flex justify-end bottom-2 right-2">
                            <div onClick={openModal} className="bg-white h-full w-[40%] text-center font-medium text-[10px] pt-2 shadow-md rounded-sm items-center hover:bg-gray-50">
                                CHANGE LAYOUT
                            </div>
                        </div>
                    )}
            </div>
        </>
    );
};

export default AboutTwo;
