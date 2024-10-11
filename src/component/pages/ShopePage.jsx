import asset1 from "../../assets/asset 0.png"
import asset2 from "../../assets/asset 1.png"
import asset3 from "../../assets/asset 2.png"
import asset4 from "../../assets/asset 3.png"
import asset5 from "../../assets/asset 4.png"
import asset6 from "../../assets/asset 5.png"

const ShopPage = () => {

    return (
        <>
            <div className="w-full h-auto p-5">
                <h1 className="text-3xl font-bold mb-5">Shop Our Products</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg flex flex-col gap-2  p-5">
                        <img src={asset2} className="w-full h-90 object-cover rounded-md " />
                        <h6 className="font-semibold ">Product Name</h6>
                        <p className="text-sm">$7756</p>
                    </div>
                    <div className="bg-white rounded-lg flex flex-col gap-2  p-5">
                        <img src={asset2} className="w-full h-90 object-cover rounded-md " />
                        <h6 className="font-semibold ">Product Name</h6>
                        <p className="text-sm">$7756</p>
                    </div>
                    <div className="bg-white rounded-lg flex flex-col gap-2  p-5">
                        <img src={asset2} className="w-full h-90 object-cover rounded-md " />
                        <h6 className="font-semibold ">Product Name</h6>
                        <p className="text-sm">$7756</p>
                    </div>
                    <div className="bg-white rounded-lg flex flex-col gap-2  p-5">
                        <img src={asset2} className="w-full h-90 object-cover rounded-md " />
                        <h6 className="font-semibold ">Product Name</h6>
                        <p className="text-sm">$7756</p>
                    </div>
                    <div className="bg-white rounded-lg flex flex-col gap-2  p-5">
                        <img src={asset2} className="w-full h-90 object-cover rounded-md " />
                        <h6 className="font-semibold ">Product Name</h6>
                        <p className="text-sm">$7756</p>
                    </div>
                    <div className="bg-white rounded-lg flex flex-col gap-2  p-5">
                        <img src={asset2} className="w-full h-90 object-cover rounded-md " />
                        <h6 className="font-semibold ">Product Name</h6>
                        <p className="text-sm">$7756</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShopPage;
