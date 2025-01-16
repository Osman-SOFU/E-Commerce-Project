import BlogCardUp from "../components/blogCardUp";
import BlogCardDown from "../components/blogCardDown";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Blog = () => {
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
    <div className="flex flex-col items-center">
      <div
        className="relative w-[414px] h-[1402px] bg-white overflow-hidden"
        onWheel={handleWheel} // onWheel olayını dış kapsayıcıya ekliyoruz
      >
        <div className="flex flex-col w-[414px] items-center gap-20 px-0 py-20 relative">
          <div className="items-center inline-flex flex-col relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-center gap-2.5 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#23a6f0] text-sm text-center tracking-[0.20px] leading-6 whitespace-nowrap">
                Practice Advice
              </div>

              <div className="relative w-fit font-h-2 font-[number:var(--h-2-font-weight)] text-[#252b42] text-[length:var(--h-2-font-size)] text-center tracking-[var(--h-2-letter-spacing)] leading-[var(--h-2-line-height)] whitespace-nowrap [font-style:var(--h-2-font-style)]">
                Featured Posts
              </div>
            </div>
          </div>

          {/* Slider bileşeni */}
          <Slider ref={sliderRef} {...sliderSettings} className="w-[345px]">
            <div className="items-start justify-center gap-[30px] inline-flex flex-col relative flex-[0_0_auto]">
              <div className="flex flex-col w-[328px] items-center relative flex-[0_0_auto]">
                <BlogCardUp />
              </div>
              <div className="flex flex-col w-[328px] items-center relative flex-[0_0_auto]">
                <BlogCardDown />
              </div>
            </div>

            <div className="items-start justify-center gap-[30px] inline-flex flex-col relative flex-[0_0_auto]">
              <div className="flex flex-col w-[328px] items-center relative flex-[0_0_auto]">
                <BlogCardUp />
              </div>
              <div className="flex flex-col w-[328px] items-center relative flex-[0_0_auto]">
                <BlogCardDown />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Blog;
