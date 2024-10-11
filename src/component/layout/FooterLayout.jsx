import React from "react";
import footer1 from "../../assets/footer2.png";
import footer2 from "../../assets/footer2.png";
import footer3 from "../../assets/footer3.png";
import footer4 from "../../assets/footer4.png"
import { updateSections } from "../../redux/slice/sectionSlice";
import { useDispatch } from "react-redux";

const FooterLayout= ({ isOpen, onClose }) => {
    const dispatch = useDispatch()
    if (!isOpen) return null; 

    const handleOutsideClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose(); 
        }
    };

    function selectSection(section){
        if(section =="footer1"){
            console.log(1)
            dispatch(updateSections({
                sectionName: "footerSection",
                sectionData: { footer1:true,footer2:false,footer3:false,footer4:false} 
            }));
            onClose()
        }else if(section =="footer2"){
            console.log(3)
            dispatch(updateSections({
                sectionName: "footerSection",
                sectionData: { footer1:false,footer2:true,footer3:false,footer4:false} 
            }));
            onClose()
        }else if(section =="footer3"){
            console.log(4)
            dispatch(updateSections({
                sectionName: "footerSection",
                sectionData: {footer1:false,footer2:false,footer3:true,footer4:false} 
            }));
            onClose()
        }else if(section =="footer4"){
            console.log(4)
            dispatch(updateSections({
                sectionName: "footerSection",
                sectionData: {footer1:false,footer2:false,footer3:false,footer4:true} 
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
                        <div className="w-[48%] h-[5rem] bg-white border" onClick={()=>selectSection("footer1")} >
                            <img src={footer1} alt="" className="w-full h-full" />
                        </div>
                        <div className="w-[48%] h-[5rem] bg-white border " onClick={()=>selectSection("footer2")}>
                            <img src={footer2} alt="" className="w-full h-full" />
                        </div>
                        <div className="w-[48%] h-[5rem] bg-white border " onClick={()=>selectSection("footer3")}>
                            <img src={footer3} alt="" className="w-full h-full" />
                        </div>
                        <div className="w-[48%] h-[5rem] bg-white border " onClick={()=>selectSection("footer4")}>
                            <img src={footer4} alt="" className="w-full h-full" />
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

export default FooterLayout;
