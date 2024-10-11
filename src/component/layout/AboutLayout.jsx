import React from "react";
import about1 from "../../assets/about1.png";
import about2 from "../../assets/about2.png";
import { updateSections } from "../../redux/slice/sectionSlice";
import { useDispatch } from "react-redux";

const AboutLayout = ({ isOpen, onClose }) => {
    const dispatch = useDispatch()
    if (!isOpen) return null; 

    const handleOutsideClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose(); 
        }
    };

    function selectSection(section){
        if(section =="about1"){

            dispatch(updateSections({
                sectionName: "aboutSection",
                sectionData: { about1:true,about2:false} 
            }));
            onClose()
        }else if(section =="about2"){
            console.log(3)
            dispatch(updateSections({
                sectionName: "aboutSection",
                sectionData: {about1:false,about2:true} 
            }));
            onClose()
        } 
    }

    return (
        <>
            <div
                className="absolute inset-0 bg-opacity-50 z-50 flex justify-end items-center"
                onClick={handleOutsideClick} 
            >
                <div
                    className="bg-white w-[50%] p-5 rounded-md shadow-lg relative z-60"
                    onClick={(e) => e.stopPropagation()} 
                >
                    <h2 className="text-center text-sm font-semibold mb-4">Choose Your Layout</h2>
                    <div className="w-full flex gap-2 flex-wrap">
                        <div className="w-[48%] h-[5rem] bg-white border" onClick={()=>selectSection("about1")} >
                            <img src={about1} alt="" className="w-full h-full" />
                        </div>
                        <div className="w-[48%] h-[5rem] bg-white border " onClick={()=>selectSection("about2")}>
                            <img src={about2} alt="" className="w-full h-full" />
                        </div>
                    </div>
                    <button
                        className="bg-blue-500 text-sm text-white p-1 rounded-md mt-4"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </>
    );
};

export default AboutLayout;
