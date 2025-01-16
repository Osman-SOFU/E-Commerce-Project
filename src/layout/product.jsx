import MyIcon from "../icons/button-Md.svg";
import { useRef, useState } from "react";
import Slider from "react-slick";
import ProductCard from "../components/productCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Product = () => {
  const [isSliderVisible, setIsSliderVisible] = useState(false); // Slider'ın görünürlük durumu

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

  // Butona tıklandığında slider'ı açma fonksiyonu
  const handleButtonClick = () => {
    setIsSliderVisible(true);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[414px] h-[3168px] bg-white">
        <div className="inline-flex items-center gap-6 px-0 py-20 left-9 flex-col relative">
          <div className="flex flex-col w-[300px] items-center relative flex-[0_0_auto]">
            <div className="flex flex-col w-[279px] items-center gap-2.5 relative flex-[0_0_auto]">
              <div className="flex-col gap-2.5 inline-flex items-center relative flex-[0_0_auto]">
                <div className="relative w-[239px] mt-[-1.00px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#252b42] text-2xl text-center tracking-[0.10px] leading-8">
                  BESTSELLER PRODUCTS
                </div>

                <p className="w-[261px] text-center relative [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#727272] text-sm tracking-[0.20px] leading-5">
                  Problems trying to resolve the conflict between
                </p>
              </div>
            </div>
          </div>

          <div
            className="inline-flex items-start justify-center gap-[30px] relative flex-[0_0_auto]"
            onWheel={handleWheel}
          >
            <div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
              <div className="gap-[19px] px-0 py-2 inline-flex flex-col items-start relative flex-[0_0_auto]">
                <div className="gap-[15px] p-6 inline-flex flex-col items-start relative flex-[0_0_auto]">
                  <div className="flex flex-col w-[295px] items-start gap-[30px] relative flex-[0_0_auto]">
                    {!isSliderVisible && <ProductCard />}
                    {isSliderVisible && (
                      <Slider
                        ref={sliderRef}
                        {...sliderSettings}
                        className="w-[345px]"
                      >
                        <ProductCard />
                        <ProductCard />
                      </Slider>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Buton */}
          <button className="!flex-[0_0_auto]" onClick={handleButtonClick}>
            <img src={MyIcon} alt="button icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
