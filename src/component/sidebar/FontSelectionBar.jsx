import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFont } from '../../redux/slice/sectionSlice';

const fontPairs = {
  Professional: [
    { title: 'Roboto', subtitle: 'Roboto', font1: 'font-roboto', font2: 'font-roboto' },
    { title: 'Instrument Serif', subtitle: 'Newsreader', font1: 'font-instrumentSerif', font2: 'font-newsreader' }
  ],
  Playful: [
    { title: 'Shrikhand', subtitle: 'Bitter', font1: 'font-shrikhand', font2: 'font-bitter' },
    { title: 'Young Serif', subtitle: 'Bitter', font1: 'font-youngSerif', font2: 'font-bitter' }
  ],
  
};

const FontSelectionBar = () => {
  const [selectedFont, setSelectedFont] = useState(null);
  const dispatch = useDispatch()
  const handleSelectFont = (font) => {
    setSelectedFont(font);
    console.log(" the slectee",font)
    dispatch(setFont({ siteFont: font })); 
  };


  return (
    <div className="w-full p-11 mt-2 bg-white h-full flex flex-col gap-2 shadow ps-[11%]">
      <h2 className="text-2xl font-extrabold font-clarkson" >Choose a font pairing</h2>
      <p className="text-[12px] text-gray-500">These custom pairings were curated by our designers. There are other font options you can explore later.</p>

      {Object.keys(fontPairs).map((category) => (
        <div key={category} className="mt-6">
          <h3 className="font-medium text-[11px] mb-2">{category}</h3>
          <div className="grid grid-cols-2 gap-4">
            {fontPairs[category].map((font, index) => (
              <div
                key={index}
                className={`border p-4 cursor-pointer rounded-md ${
                  selectedFont === font ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => handleSelectFont(font)}
              >
                <div className={`text-center text-xl ${font.font1}`}>{font.title}</div>
                <div className={`text-center text-sm ${font.font2}`}>{font.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FontSelectionBar;
