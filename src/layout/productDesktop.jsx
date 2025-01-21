import ProductCardDesktop from "../components/productCardDesktop";
import MyIcon from "../icons/button-Md.svg";
import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductDesktop = () => {
  const [isSliderVisible, setIsSliderVisible] = useState(false); // Slider'ın görünürlük durumu

  const sliderRef = useRef(null); // Slider'ı kontrol etmek için referans

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
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
      <div className="relative w-[1440px] h-[1241px] bg-light-background-color">
        <div className="flex flex-col w-[1124px] items-center gap-6 px-0 py-20 relative left-[195px]">
          <div className="flex-col w-[692px] items-center flex relative flex-[0_0_auto]">
            <div className="flex flex-col w-[691px] items-center gap-2.5 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-h-4 font-[number:var(--h-4-font-weight)] text-second-text-color text-[length:var(--h-4-font-size)] text-center tracking-[var(--h-4-letter-spacing)] leading-[var(--h-4-line-height)] whitespace-nowrap [font-style:var(--h-4-font-style)]">
                Featured Products
              </div>

              <div className="relative w-fit font-h-3 font-[number:var(--h-3-font-weight)] text-text-color text-[length:var(--h-3-font-size)] text-center tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] whitespace-nowrap [font-style:var(--h-3-font-style)]">
                BESTSELLER PRODUCTS
              </div>

              <p className="relative w-fit font-paragraph font-[number:var(--paragraph-font-weight)] text-second-text-color text-[length:var(--paragraph-font-size)] text-center tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] whitespace-nowrap [font-style:var(--paragraph-font-style)]">
                Problems trying to resolve the conflict between
              </p>
            </div>
          </div>
          <div
            className="w-[1115px] items-start justify-center gap-[30px] flex relative flex-[0_0_auto]"
            onWheel={handleWheel}
          >
            <div className="flex flex-col w-[1092px] items-start relative">
              <div className="flex w-[1092px] gap-[19px] px-0 py-2 flex-col items-start relative flex-[0_0_auto]">
                <div className="inline-flex gap-[15px] p-6 flex-col items-start relative flex-[0_0_auto]">
                  {!isSliderVisible && <ProductCardDesktop />}
                  {!isSliderVisible && <ProductCardDesktop />}
                  {isSliderVisible && (
                    <Slider
                      ref={sliderRef}
                      {...sliderSettings}
                      className="w-[1092px]"
                    >
                      <ProductCardDesktop />
                      <ProductCardDesktop />
                    </Slider>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* Buton */}
          <button className="!flex-[0_0_auto]" onClick={handleButtonClick}>
            <img src={MyIcon} alt="button icon" />
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default ProductDesktop;
