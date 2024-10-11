import { useSelector } from "react-redux";
import "../style/common.css"
import ShopPage from "./pages/ShopePage";
import AboutOne from "./sections/aboutsection/AboutOne";
import AboutTwo from "./sections/aboutsection/AboutTwo";
import FooterFour from "./sections/footersection/FooterFour";
import FooterOne from "./sections/footersection/FooterOne";
import FooterThree from "./sections/footersection/FooterThree";
import FooterTwo from "./sections/footersection/FooterTwo";
import IntroSectionOne from "./sections/introsection/IntroSectionOne";
import IntroSectionThree from "./sections/introsection/IntroSectionThree";
import IntroSectionTwo from "./sections/introsection/IntroSectionTwo";

const WebsitePage = () => {

  const sections = useSelector((state) => state.sectionStorage)
  const font = useSelector((state) => state.sectionStorage.addedFont);

  console.log(" _________", sections)

  return (
    <>
      <div className="w-[60%] h-[calc(100%-2.5rem)]  overflow-y-auto hide-scrollbar bg-white m-16 shadow-xl  rounded-md relative ">
        <div className="w-full h-auto  bg-white border p-3 flex justify-between">
          <h1 style={{ fontFamily: font.headFont ? font.head : "" }}>
            {font.title}
          </h1>
          <ul className="flex gap-4 text-sm">
            <li>About</li>
            <li></li>
          </ul>
        </div>
        <div className="w-full h-[calc(100%-2.5rem)] overflow-y-auto hide-scrollbar mb-16 p-[2px]">
          {sections.addedSection.introSection && (
            <>
              {sections.sections.introSection.intro1 && <IntroSectionOne />}
              {sections.sections.introSection.intro2 && <IntroSectionTwo />}
              {sections.sections.introSection.intro3 && <IntroSectionThree />}
            </>
          )}
          {sections.addedSection.aboutSection && (
            <>
              {sections.sections.aboutSection.about1 && <AboutOne />}
              {sections.sections.aboutSection.about2 && <AboutTwo />}
            </>
          )}
          {sections.addedSection.footerSection && (
            <>
              {sections.sections.footerSection.footer1 && <FooterOne />}
              {sections.sections.footerSection.footer2 && <FooterTwo />}
              {sections.sections.footerSection.footer3 && <FooterThree />}
              {sections.sections.footerSection.footer4 && <FooterFour />}

            </>
          )}
        </div>

      </div>
    </>
  );
};

export default WebsitePage;
