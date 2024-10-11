const PageSideBar=()=>{
    return(
        <>
         <div className="w-full p-16 bg-white h-full flex flex-col gap-3 shadow ps-[11%]">
                <h2 className="text-2xl font-extrabold font-clarkson" >Add pages to your site</h2>
                <p className="text-[12px] text-gray-500">We recommend starting with these, but you can always add or remove pages later.</p>
                <ul className="flex flex-col gap-5 mt-5">
                    <li className="w-full flex items-center gap-6 border-b-2 pb-6 border-gray-200">
                        <input type="checkbox" className="rounded-checkbox w-4 h-4" />
                        <label htmlFor="" className="font-[13px]">About</label>
                    </li>
                    <li className="w-full flex items-center gap-6 border-b-2 border-gray-200 pb-6">
                        <input type="checkbox" className="rounded-checkbox w-4 h-4" />
                        <label htmlFor="" className="font-[13px]">Shope</label>
                    </li>
                    <li className="w-full flex items-center gap-6 border-b-2 pb-6 border-gray-200">
                        <input type="checkbox" className="rounded-checkbox w-4 h-4" />
                        <label htmlFor="" className="font-[11px] font-clarkson">Course</label>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default PageSideBar