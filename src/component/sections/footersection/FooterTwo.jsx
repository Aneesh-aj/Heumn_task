import React, { useState } from "react";
import FooterLayout from "../../layout/FooterLayout";
import { useSelector } from "react-redux";

const FooterTwo = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const color = useSelector((state) => state.sectionStorage.colorPalete.color)
    const font = useSelector((state) => state.sectionStorage.addedFont);
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <footer 
            className="w-full bg-gray-600 text-white p-8 relative hover:ring-2 ring-blue-500" 
            style={{backgroundColor:color ? color[2]:'white',color:color ? color[1]:'white',fontFamily:font ?font.siteFont.title :""}}
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div  >
                    <h2 className="text-2xl font-bold" >Stay Updated</h2>
                    <p>Get the latest updates and news on our website.</p>
                </div>
                <div className="mt-4 md:mt-0">
                    <p className="p-2 rounded-md">
                        example@example.com
                    </p>
                </div>
            </div>
            <div className="text-center mt-6">
                <p>&copy; 2024 Your Company. All rights reserved.</p>
            </div>

            {isHovered && (
                <div className=" w-full h-[2rem] flex justify-end bottom-2 right-2">
                    <div onClick={openModal}  className="bg-white text-black h-full w-[20%] text-center font-medium text-[10px] pt-2 shadow-md rounded-sm items-center hover:bg-gray-50">
                        CHANGE LAYOUT
                    </div>
                </div>
            )}
            <FooterLayout isOpen={isModalOpen} onClose={closeModal} />
        </footer>
    );
};

export default FooterTwo;
