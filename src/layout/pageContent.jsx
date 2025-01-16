import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PageContentCard from "../components/pageContentCard";

const PageContent = () => {
  const sliderRef = useRef(null); // Slider'ı kontrol etmek için referans

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: false, // Dikey kaydırma kapalı
    verticalSwiping: false,
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
      <div className="inline-flex items-center px-0 py-20 left-5 flex-col relative">
        <div className="flex flex-col w-[373px] items-center gap-[50px] relative flex-[0_0_auto]">
          <div className="flex flex-col w-[280px] items-start gap-4 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#23a6f0] text-base tracking-[0.10px] leading-6 whitespace-nowrap">
              Featured Products
            </div>

            <p className="relative w-[246px] font-h-2 font-[number:var(--h-2-font-weight)] text-[#252b42] text-[length:var(--h-2-font-size)] tracking-[var(--h-2-letter-spacing)] leading-[var(--h-2-line-height)] [font-style:var(--h-2-font-style)]">
              We love what we do
            </p>

            <p className="w-[258px] relative [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#727272] text-sm tracking-[0.20px] leading-5">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: <br />
              Newtonian mechanics <br />
              <br />
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: <br />
              Newtonian mechanics
            </p>
          </div>

          <div
            className="flex w-[374.5px] items-start gap-[21.9px] relative flex-[0_0_auto] ml-[-0.75px] mr-[-0.75px]"
            onWheel={handleWheel}
          >
            <Slider ref={sliderRef} {...sliderSettings} className="w-[345px]">
              <PageContentCard />
              <PageContentCard />
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageContent;
