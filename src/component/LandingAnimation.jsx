import React from "react";
import "../style/LandingAnimation.css"; // Ensure correct path to your CSS file
import template from "../assets/template.webp";

const LandingAnimation = () => {
    return (
        <>
            <div className="landing-animation-container  bg-black w-[70%]">
                <ul className="w-full h-full flex flex-row gap-10 items-center -translate-x-44">
                    <li className="flex-shrink-0 w-[40%] h-full  transform animate-marquee">
                        <img src={template} alt="" className="transform -rotate-15" />
                        <img src={template} alt="" className="transform -rotate-15" />
                    </li>
                    <li className="flex-shrink-0 w-[50%] h-full transform animate-marquee-down">
                        <img src={template} alt="" className="transform -rotate-15" />
                        <img src={template} alt="" className="transform -rotate-15" />
                        <img src={template} alt="" className="transform -rotate-15" />
                    </li>
                    <li className="flex-shrink-0 w-[40%] h-full transform animate-marquee">
                        <img src={template} alt="" className="transform -rotate-15" />
                        <img src={template} alt="" className="transform -rotate-15" />
                    </li>
                </ul>
            </div>
        </>
    );
};

export default LandingAnimation;
