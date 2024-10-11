import { useDispatch, useSelector } from "react-redux";
import { setAddedSection, updateSections } from "../../redux/slice/sectionSlice";
import { useState } from "react";

const HomePageSection = () => {
    const dispatch = useDispatch();
    const store = useSelector((state)=>state.sectionStorage)
    const sectionPage = useSelector((state)=>state.sectionStorage.addedSection)

    console.log(" the store",store)

    const [sections, setSections] = useState({
        introSection: false,
        aboutSection: false,
        footerSection: false,
    });

    const handleCheckboxChange = (section) => {
        const newState = { ...sections, [section]: !sections[section] };
        setSections(newState);
        if (section === "introSection" && newState.introSection) {
            dispatch(updateSections({
                sectionName: section,
                sectionData: { intro1: true,intro2:false,intro3:false } 
            }));
        }else if(section =="aboutSection" && newState.aboutSection){
            dispatch(updateSections({
                sectionName: section,
                sectionData: { about1: true,about2: false } 
            }));
        }else if(section =="footerSection" && newState.footerSection){
            dispatch(updateSections({
                sectionName: section,
                sectionData: { footer1: true,footer2:false,footer3:false,footer4:false } 
            }));
        }
        dispatch(setAddedSection(newState));
    };

    return (
        <>
            <div className="w-full p-16 bg-white h-full flex flex-col gap-3 shadow ps-[11%]">
                <h2 className="text-2xl font-extrabold font-clarkson">Build your homepage</h2>
                <p className="text-[12px] text-gray-500">Build your homepage section-by-section, adding as many or as few sections as you need.</p>
                <ul className="flex flex-col gap-5 mt-5">
                    <li className="w-full flex items-center gap-6 border-b-2 pb-6 border-gray-200">
                        <input 
                            type="checkbox" 
                            className="rounded-checkbox w-4 h-4" 
                            checked={sectionPage.introSection}
                            onChange={() => handleCheckboxChange("introSection")} 
                        />
                        <label className="font-[13px]">Intro Section</label>
                    </li>
                    <li className="w-full flex items-center gap-6 border-b-2 border-gray-200 pb-6">
                        <input 
                            type="checkbox" 
                            className="rounded-checkbox w-4 h-4" 
                            checked={sectionPage.aboutSection}
                            onChange={() => handleCheckboxChange("aboutSection")} 
                        />
                        <label className="font-[13px]">About Section</label>
                    </li>
                    <li className="w-full flex items-center gap-6 border-b-2 pb-6 border-gray-200">
                        <input 
                            type="checkbox" 
                            className="rounded-checkbox w-4 h-4" 
                            checked={sectionPage.footerSection}
                            onChange={() => handleCheckboxChange("footerSection")} 
                        />
                        <label className="font-[11px] font-clarkson">Footer Section</label>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default HomePageSection;
