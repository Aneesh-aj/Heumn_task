import React from "react";
import imgIntro1 from "../../assets/imgIntro1.png";
import imgIntro2 from "../../assets/imgIntro2.png";
import imgIntro3 from "../../assets/imgIntro3.png";
import { updateSections } from "../../redux/slice/sectionSlice";
import { useDispatch } from "react-redux";

const IntroLayout= ({ isOpen, onClose }) => {
    const dispatch = useDispatch()
    if (!isOpen) return null; 

    const handleOutsideClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose(); 
        }
    };

    function selectSection(section){
         console.log(" seciton",section)
        if(section =="intro1"){
            console.log(1)
            dispatch(updateSections({
                sectionName: "introSection",
                sectionData: { intro1:true,intro2:false,intro3:false} 
            }));
            onClose()
        }else if(section =="intro2"){
            console.log(3)
            dispatch(updateSections({
                sectionName: "introSection",
                sectionData: {intro1:false,intro2:true,intro3:false} 
            }));
            onClose()
        }else if(section =="intro3"){
            console.log(4)
            dispatch(updateSections({
                sectionName: "introSection",
                sectionData: {intro1:false,intro2:false,intro3:true} 
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
                        <div className="w-[48%] h-[5rem] bg-white border" onClick={()=>selectSection("intro1")} >
                            <img src={imgIntro1} alt="" className="w-full h-full" />
                        </div>
                        <div className="w-[48%] h-[5rem] bg-white border " onClick={()=>selectSection("intro2")}>
                            <img src={imgIntro2} alt="" className="w-full h-full" />
                        </div>
                        <div className="w-[48%] h-[5rem] bg-white border " onClick={()=>selectSection("intro3")}>
                            <img src={imgIntro3} alt="" className="w-full h-full" />
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

export default IntroLayout;
