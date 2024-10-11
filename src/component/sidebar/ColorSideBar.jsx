import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setColorPalete } from '../../redux/slice/sectionSlice';
const palettes = {
    Professional: [
      ['#FFFFFF', '#000000', '#D9D9D9'],   
      ['#E5E5E5', '#00704A', '#323232'],   
      ['#D9D9D9', '#1C1C1C', '#4A90E2'],   
      ['#FFE5B9', '#DFA860', '#0F4471']
    ],
    Playful: [
      ['#D3D0FF', '#9A1E1E', '#FFBB29'],   
      ['#94B3C4', '#FF9DFF', '#D1EEFC'],   
      ['#77DBD3', '#C98FC7', '#9E7FF1'],   
      ['#94E4E9', '#4AC29F', '#1E9BB5'],  
    ],
    Sophisticated: [
      ['#F0EBE3', '#A67B5B', '#544C4A'],   
      ['#CCC6A2', '#5B685E', '#747F74'],   
      ['#C3B7A4', '#6B5844', '#7E857F'],   
      ['#D9C6AF', '#847F5D', '#8F8774'],   
    ],
    Friendly: [
      ['#2B5B7D', '#CDD39A', '#F4C393'],   
      ['#DEE97E', '#DAAFD0', '#6A70E9'],   
      ['#C9DFDB', '#6BB3B2', '#3B3F72'],   
      ['#FFE5B9', '#DFA860', '#0F4471'],   
    ],
  };

const ColorSideBar = () => {
    const [selectedPalette, setSelectedPalette] = useState(null);
    const [selectedColors, setSelectedColors] = useState([]);
    const dispatch = useDispatch()

    const handleSelectPalette = (colors) => {
        setSelectedPalette(colors);
        setSelectedColors(colors);
         console.log(colors)
        dispatch(setColorPalete(colors))
    };

    return (
        <>
            <div className="w-full p-14 mt-2 bg-white h-full flex flex-col gap-4 shadow ps-[13%]  ">
               
                <h2 className="text-2xl font-extrabold font-clarkson" >Choose a color palette</h2>
                <p className="text-[12px] text-gray-500">These custom palettes were curated by our designers. You can always change up your colors later.</p>
                <div className='mt-4 pe-9'>
                    {Object.keys(palettes).map((category) => (
                        <div key={category} className="h-[5rem] flex flex-col gap-2">
                            <h3 className="font-semibold text-[11px] mb-2">{category}</h3>
                            <div className="flex gap-4">
                                {palettes[category].map((colors, index) => (
                                    <div
                                        key={index}
                                        className={`flex h-5 cursor-pointer rounded-full overflow-hidden ${selectedPalette === colors ? 'ring-2 ring-black' : ''
                                            }`}
                                        onClick={() => handleSelectPalette(colors)}
                                    >
                                        {colors.map((color, idx) => (
                                            <div
                                                key={idx}
                                                style={{ backgroundColor: color }}
                                                className="w-8 h-8"
                                            ></div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    );
};

export default ColorSideBar;
