import React, { useState } from "react";
import FooterLayout from "../../layout/FooterLayout";

const FooterOne = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <footer 
            className="w-full bg-gray-800 text-white p-4 relative hover:ring-2 ring-blue-500" 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Your Company</h2>
                <ul className="flex space-x-6">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div className="flex space-x-4">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
            {isHovered && (
                <div className="absolute w-full h-[2rem] flex justify-end bottom-2 right-2">
                    <div onClick={openModal}  className="bg-white h-full w-[20%] text-black text-center font-medium text-[10px] pt-2 shadow-md rounded-sm items-center hover:bg-gray-50">
                        CHANGE LAYOUT
                    </div>
                </div>
            )}
            <FooterLayout isOpen={isModalOpen} onClose={closeModal} />
        </footer>
    );
};

export default FooterOne;
