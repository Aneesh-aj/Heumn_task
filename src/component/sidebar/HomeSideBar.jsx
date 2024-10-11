import { useDispatch } from "react-redux";
import "../../style/common.css";
import { setFont } from "../../redux/slice/sectionSlice";

const HomeSideBar = () => {
    const dispatch = useDispatch();

    const handleFontSelect = (font) => {
        dispatch(setFont({ headFont: font })); 
    };

    return (
        <>
            <div className="w-full p-12 mt-3 bg-white h-full flex flex-col gap-8 shadow-2xl">
                <h2 className="text-2xl font-extrabold font-clarkson">
                    Choose a site title and brand personality
                </h2>
                <div className="flex flex-col gap-1">
                    <h5 className="text-[12px] font-medium">Site title</h5>
                    <p className="text-[12px] text-gray-500">This is the name of your site. You can change it later.</p>
                    <input
                        type="text"
                        className="w-full rounded-sm border-b-1 p-2 mt-3 bg-gray-100"
                        placeholder="Your site title"
                        onChange={(e) => {
                            dispatch(setFont({ title: e.target.value }));
                        }}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <h5 className="font-medium text-[11px]">Brand personality</h5>
                    <p className="text-gray-500 text-[11px]">Each personality has a unique set of colors, fonts, and tone for creating AI-generated content. Having a clear brand personality can help build customer relationships.</p>
                </div>
                <div className="w-full flex flex-wrap gap-2">
                    {["Professional", "Playful", "Roboto", "Instrument Serif", "Shrikhand"].map((font) => (
                        <div
                            key={font}
                            className="w-[48%] rounded border-black border p-2 text-center text-sm text-gray-500 hover:ring-2 ring-blue-500 cursor-pointer"
                            onClick={() => handleFontSelect(font)} 
                        >
                            {font}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default HomeSideBar;
