import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShopCard from "../components/shopCard";

const Shop = () => {
  const sliderRef = useRef(null); // Slider'ı kontrol etmek için referans

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
  };

  // Mouse tekerleği ile kaydırma fonksiyonu
  const handleWheel = (e) => {
    e.preventDefault();
    if (e.deltaY > 0) {
      sliderRef.current.slickNext(); // Aşağı kaydırma
    } else {
      sliderRef.current.slickPrev(); // Yukarı kaydırma
    }
  };

  return (
    <div className="flex flex-col items-center" onWheel={handleWheel}>
      <div className="relative w-[414px] h-[1430px] bg-light-background-color">
        <div className="flex flex-col w-[345px] items-start px-0 py-6 relative left-[41px]">
          <Slider ref={sliderRef} {...sliderSettings} className="w-[345px]">
            <ShopCard />
            <ShopCard />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Shop;
