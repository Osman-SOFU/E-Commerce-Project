import { imagesData } from "../data/shopPageImage"; // Resimlerin bulunduğu data dosyasını import ediyoruz

const ShopPageCard = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-center gap-4 py-8">
        {imagesData.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-[300px] md:w-[300px] lg:w-[205px] relative"
          >
            <div className="w-full aspect-[3/4] relative rounded-lg overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-25" />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                <span className="text-lg font-bold">{item.title}</span>
                <span className="text-sm mt-1">{item.itemCount} Items</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPageCard;
