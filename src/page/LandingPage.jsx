import { Link } from "react-router-dom";
import LandingAnimation from "../component/LandingAnimation"; // Ensure this import is correct, or comment it out if needed.

const LandingPage = () => {
    return (
        <>
            <div className="w-full h-screen bg-red-200 flex">
                {/* LandingAnimation can be removed/commented out if not needed */}
                <LandingAnimation />
                <div className="w-[30%] h-full bg-black  flex flex-col p-12 justify-between">
                    <h2 className="text-5xl font-bold text-white pb-5">
                        A template that's unique to you.
                    </h2>

                    {/* First Feature */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center w-full space-x-4">
                            <svg fill="#ffffff" width="30px" height="30px" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <g>
                                        <g>
                                            <path d="M67.5,27.568c0,3.828-3.104,6.932-6.932,6.932H10.432c-3.828,0-6.932-3.104-6.932-6.932V10.432C3.5,6.604,6.604,3.5,10.432,3.5h50.137c3.828,0,6.932,3.104,6.932,6.932V27.568z M63.5,10.432c0-1.619-1.313-2.932-2.932-2.932H10.432C8.813,7.5,7.5,8.813,7.5,10.432v17.137c0,1.619,1.313,2.932,2.932,2.932h50.137c1.619,0,2.932-1.313,2.932-2.932V10.432z"></path>
                                        </g>
                                        <g>
                                            <path d="M11.5,19.5c-0.553,0-1-0.447-1-1v-1.802c0-2.556,1.246-5.198,3.96-5.198h6.664c0.553,0,1,0.447,1,1s-0.447,1-1,1H14.46c-1.462,0-1.96,1.626-1.96,3.198V18.5C12.5,19.053,12.052,19.5,11.5,19.5z"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <h3 className="text-white text-xl font-semibold">Design your homepage</h3>
                        </div>

                        {/* Second Feature */}
                        <div className="flex items-center w-full space-x-4">
                            <svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <g id="Complete">
                                        <g data-name="add" id="add-2">
                                            <g>
                                                <line fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12" x2="12" y1="19" y2="5"></line>
                                                <line fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="5" x2="19" y1="12" y2="12"></line>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <h3 className="text-white text-xl font-semibold">Add the pages you need</h3>
                        </div>

                        {/* Third Feature */}
                        <div className="flex items-center w-full space-x-4">
                            <svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <g data-name="roll brush">
                                        <path className="cls-1" d="M22.51,11.86a4.87,4.87,0,0,1-4.86,4.95H16.18a4.28,4.28,0,0,0-3.57,1.91l-1.15,1.72a4.74,4.74,0,0,1-4,2.12h0a4.61,4.61,0,0,1-3.87-2A13.07,13.07,0,0,1,1.41,13.3V12a10.55,10.55,0,0,1,21.1-.15Z"></path>
                                    </g>
                                </g>
                            </svg>
                            <h3 className="text-white text-xl font-semibold">Choose your colors & fonts</h3>
                        </div>

                        {/* Fourth Feature */}
                        <div className="flex items-center w-full space-x-4">
                            <svg fill="#ffffff" width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="icon line-color">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.096"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path id="primary" d="M17.76,10.63,9,21l2.14-8H7.05a1,1,0,0,1-1-1.36l3.23-8a1.05,1.05,0,0,1,1-.64h4.34a1,1,0,0,1,1,1.36L13.7,9H17A1,1,0,0,1,17.76,10.63Z" style={{ fill: '#ffffff', stroke: '#ffffff', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2' }} />
                                </g>
                            </svg>
                            <h4 className="text-white text-xl font-semibold">Generate text & images with AI</h4>
                        </div>
                    </div>
                     <div>
                        <Link to="/home">
                        <button className="p-2 text-black bg-white  text-xl">Create Website</button>
                        </Link>
                         <p className="text-white text-sm p-2">Your site uses text and images generated with the aid of third party AI software. By selecting Create Site, you agree to our Product Specific Terms and understand you are responsible for any content you publish on your site. Learn more.</p>
                     </div>
                </div>
            </div>
        </>
    );
};

export default LandingPage;
