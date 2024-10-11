import { useDispatch, useSelector } from "react-redux";
import { setSelectedPage } from "../../redux/slice/sectionSlice";
import { useState } from "react";

const PageSideBar = () => {
    const dispatch = useDispatch();
    const store = useSelector((state) => state.sectionStorage);

    const [sections, setSections] = useState({
        about: store.selectedPage.pages.about || false,
        product: store.selectedPage.pages.product || false,
        contact: store.selectedPage.pages.contact || false,
    });

    const handleCheckboxChange = (section) => {
        const newState = { ...sections, [section]: !sections[section] };
        setSections(newState);  
        dispatch(setSelectedPage(newState));
    };

    return (
        <>
            <div className="w-full p-16 bg-white h-full flex flex-col gap-3 shadow ps-[11%]">
                <h2 className="text-2xl font-extrabold font-clarkson">Add pages to your site</h2>
                <p className="text-[12px] text-gray-500">
                    We recommend starting with these, but you can always add or remove pages later.
                </p>
                <ul className="flex flex-col gap-5 mt-5">
                    <li className="w-full flex items-center gap-6 border-b-2 pb-6 border-gray-200">
                        <input 
                            type="checkbox" 
                            className="rounded-checkbox w-4 h-4" 
                            checked={sections.about}
                            onChange={() => handleCheckboxChange("about")} 
                        />
                        <label className="font-[13px]">About</label>
                    </li>
                    <li className="w-full flex items-center gap-6 border-b-2 border-gray-200 pb-6">
                        <input 
                            type="checkbox" 
                            className="rounded-checkbox w-4 h-4" 
                            checked={sections.product}
                            onChange={() => handleCheckboxChange("product")} 
                        />
                        <label className="font-[13px]">Product</label>
                    </li>
                    <li className="w-full flex items-center gap-6 border-b-2 pb-6 border-gray-200">
                        <input 
                            type="checkbox" 
                            className="rounded-checkbox w-4 h-4" 
                            checked={sections.contact}
                            onChange={() => handleCheckboxChange("contact")} 
                        />
                        <label className="font-[11px] font-clarkson">Contact</label>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default PageSideBar;
