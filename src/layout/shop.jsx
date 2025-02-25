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
    <div
      className="w-full max-w-[1440px] mx-auto px-4 sm:px-1 lg:px-1 py-10 overflow-x-hidden"
      onWheel={handleWheel}
    >
      <Slider {...sliderSettings} ref={sliderRef}>
        <ShopCard />
        <ShopCard />
      </Slider>
    </div>
  );
};

export default Shop;
