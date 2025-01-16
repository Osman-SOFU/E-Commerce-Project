import img1 from "../icons/unsplash_p0j-mE6mGo4.jpg";
import img2 from "../icons/unsplash_Bd7gNnWJBkU.jpg";
import img3 from "../icons/shopCardLastPic.jpg";

const ShopCard = () => {
  const shops = [
    {
      image: img1,
      title: "Top Product Of",
      week: "the Week",
      butonText: "EXPLORE ITEMS",
    },
    {
      image: img2,
      title: "Top Product Of",
      week: "the Week",
      butonText: "EXPLORE ITEMS",
    },
    {
      image: img3,
      title: "Top Product Of",
      week: "the Week",
      butonText: "EXPLORE ITEMS",
    },
  ];

  return (
    <div>
      {shops.map((shop, index) => (
        <div className="relative w-[345px] h-[398px]" key={index}>
          <div className="h-[398px] bg-white overflow-hidden">
            <div
              className="relative w-[345px] h-[398px] bg-cover bg-[50%_50%]"
              style={{ backgroundImage: `url(${shop.image})` }}
            />
            <div className="absolute w-[346px] h-[238px] top-40 left-0 bg-[#2d8bc0bf]">
              <p className="absolute top-[59px] left-[41px] font-h-3 font-[number:var(--h-3-font-weight)] text-white">
                {shop.title} <br />
                {shop.week}
              </p>
              <button className="all-[unset] box-border inline-flex flex-col items-center gap-2.5 px-10 py-[15px] absolute top-[150px] left-[42px] rounded-[5px] overflow-hidden border border-solid border-light-text-color">
                <div className="relative w-fit mt-[-1.00px] font-btn-text text-light-text-color">
                  {shop.butonText}
                </div>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopCard;
