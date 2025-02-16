import { shops } from "../data/shops";

const ShopCard = () => {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 gap-6">
      {/* 🖥️ Masaüstü Görünümü */}
      <div className="hidden md:flex flex-1 gap-6">
        {/* Sol Taraftaki Büyük Resim */}
        <div className="relative flex-1 h-[500px] rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
          <img
            src={shops[0].image}
            alt="Product"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-[420px] h-[238px] bg-[#2D8BC0] bg-opacity-75 p-6 text-white">
            <p className="text-xl ml-6 mt-4 font-semibold tracking-wide">
              {shops[0].title} <br /> {shops[0].week}
            </p>
            <button className="mt-4 px-6 py-6 ml-6 bg-transparent border-2 border-white rounded-lg text-white font-medium hover:bg-white hover:text-blue-800 transition-all">
              {shops[0].buttonText}
            </button>
          </div>
        </div>

        {/* Sağ Tarafta Küçük Resimler */}
        <div className="flex flex-col flex-1 gap-6">
          {shops.slice(1).map((shop, index) => (
            <div
              key={index}
              className="relative w-full h-[240px] rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
            >
              <img
                src={shop.image}
                alt="Product"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-[300px] h-[153px] bg-[#2D8BC0] bg-opacity-75 p-4 text-white">
                <p className="text-lg ml-4 font-semibold tracking-wide">
                  {shop.title} <br /> {shop.week}
                </p>
                <button className="mt-4 px-4 py-4 ml-4 bg-transparent border-2 border-white rounded-lg text-white font-medium hover:bg-white hover:text-blue-800 transition-all">
                  {shop.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 📱 Mobil Görünümü (Bütün resimler eşit ve üst üste olacak) */}
      <div className="flex flex-col md:hidden gap-6">
        {shops.map((shop, index) => (
          <div
            key={index}
            className="relative w-full h-[300px] rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
          >
            <img
              src={shop.image}
              alt="Product"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full h-[153px] bg-[#2D8BC0] bg-opacity-75 p-4 text-white">
              <p className="text-lg font-semibold tracking-wide">
                {shop.title} <br /> {shop.week}
              </p>
              <button className="mt-4 px-4 py-2 bg-transparent border-2 border-white rounded-lg text-white font-medium hover:bg-white hover:text-blue-800 transition-all">
                {shop.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopCard;
