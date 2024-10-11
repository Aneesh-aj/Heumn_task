import React, { useState } from "react";
import FooterLayout from "../../layout/FooterLayout";

const FooterThree = () => {
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
            className="w-full bg-gray-900 text-white py-8 relative hover:ring-2 ring-blue-500" 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 ps-8">
                <div>
                    <h3 className="text-lg font-bold">Company</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                
                <div>
                    <h3 className="text-lg font-bold">Services</h3>
                    <ul>
                        <li><a href="#">Web Design</a></li>
                        <li><a href="#">SEO</a></li>
                        <li><a href="#">Marketing</a></li>
                        <li><a href="#">Consulting</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold">Contact Us</h3>
                    <p>Email: info@company.com</p>
                    <p>Phone: +123 456 789</p>
                </div>
            </div>
            <div className="text-center mt-8">
                <p>&copy; 2024 Your Company. All rights reserved.</p>
            </div>

            {isHovered && (
                <div className="absolute w-full h-[2rem] flex justify-end bottom-2 right-2">
                    <div onClick={openModal}  className="bg-white text-black h-full w-[20%] text-center font-medium text-[10px] pt-2 shadow-md rounded-sm items-center hover:bg-gray-50">
                        CHANGE LAYOUT
                    </div>
                </div>
            )}
            <FooterLayout isOpen={isModalOpen} onClose={closeModal} />
        </footer>
    );
};

export default FooterThree;
