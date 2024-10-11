import React, { useState } from "react";
import FooterLayout from "../../layout/FooterLayout";
import { useSelector } from "react-redux";

const FooterFour = () => {
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
            className="w-full bg-black text-white py-6 relative hover:ring-2 ring-blue-500" 
            style={{backgroundColor:color ? color[2]:'white',color:color ? color[1]:'white',fontFamily:font ?font.siteFont.title :""}}
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="container mx-auto text-center" >
                <div className="mb-4" >
                    <a href="#" className="mx-2"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="mx-2"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="mx-2"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="mx-2"><i className="fab fa-linkedin"></i></a>
                </div>
                <ul className="flex justify-center space-x-6 mb-4" >
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Legal Notice</a></li>
                </ul>
                <p >&copy; 2024 Your Company. All rights reserved.</p>
                <FooterLayout isOpen={isModalOpen} onClose={closeModal} />
                {isHovered && (
                        <div className="absolute w-[50%] h-[2rem] flex justify-end bottom-2 right-2">
                            <div onClick={openModal} className="bg-white text-black h-full w-[40%] text-center font-medium text-[10px] pt-2 shadow-md rounded-sm items-center hover:bg-gray-50">
                                CHANGE LAYOUT
                            </div>
                        </div>
                    )}
            </div>
        </footer>
    );
};

export default FooterFour;
