import img1 from "../icons/unsplash_p0j-mE6mGo4.jpg";
import img2 from "../icons/unsplash_Bd7gNnWJBkU.jpg";
import img3 from "../icons/shopCardLastPic.jpg";

const ShopDesktop = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* Large Image Section */}
      <div className="relative">
        <img
          src={img1}
          alt="Product 1"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-end justify-start p-6 bg-blue-600/80">
          <div className="text-white">
            <h2 className="text-3xl font-bold">Top Product Of the Week</h2>
            <button className="mt-4 px-6 py-2 border-2 border-white text-white rounded-full hover:bg-white hover:text-blue-600 transition">
              EXPLORE ITEMS
            </button>
          </div>
        </div>
      </div>

      {/* Small Image Sections */}
      <div className="grid grid-rows-2 gap-6">
        <div className="relative">
          <img
            src={img2}
            alt="Product 2"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-end justify-start p-6 bg-blue-600/80">
            <div className="text-white">
              <h2 className="text-3xl font-bold">Top Product Of the Week</h2>
              <button className="mt-4 px-6 py-2 border-2 border-white text-white rounded-full hover:bg-white hover:text-blue-600 transition">
                EXPLORE ITEMS
              </button>
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            src={img3}
            alt="Product 3"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-end justify-start p-6 bg-blue-600/80">
            <div className="text-white">
              <h2 className="text-3xl font-bold">Top Product Of the Week</h2>
              <button className="mt-4 px-6 py-2 border-2 border-white text-white rounded-full hover:bg-white hover:text-blue-600 transition">
                EXPLORE ITEMS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDesktop;
