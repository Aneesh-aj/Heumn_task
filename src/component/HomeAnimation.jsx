import { useSelector } from "react-redux";
import "../style/animation.css";

const HomeAnimation = () => {
    const font = useSelector((state) => state.sectionStorage.addedFont);
    const titleText = font.title || "Your Site Title Your Site Title Your Site Title Your Site Title";

    const repeatCount = 6; 
    const titlesArray = Array(repeatCount).fill(titleText).join(" "); 

    return (
        <>
            <div className="w-full h-full bg-purple-100 flex flex-col gap-6 overflow-hidden">
                <h1 className="text-8xl text-gray-600 opacity-10 animate-left-to-right " style={{fontFamily:font.headFont ? font.headFont:""}}>{titlesArray}</h1>
                <h1 className="text-9xl text-gray-600 opacity-10 animate-right-to-left" style={{fontFamily:font.headFont ? font.headFont:""}}>{titlesArray}</h1>
                <h1 className="text-8xl text-gray-600 opacity-10 animate-left-to-right" style={{fontFamily:font.headFont ? font.headFont:""}}>{titlesArray}</h1>
                <h1 className="text-9xl text-gray-600 opacity-10 animate-right-to-left" style={{fontFamily:font.headFont ? font.headFont:""}}>{titlesArray}</h1>
                <h1 className="text-8xl text-gray-600 opacity-10 animate-left-to-right" style={{fontFamily:font.headFont ? font.headFont:""}}>{titlesArray}</h1>
            </div>
        </>
    );
};

export default HomeAnimation;
