import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PageContentCardDesktop from "../components/pageContentCard.Desktop";

const PageContentDesktop = () => {
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
      <div className="relative w-[1440px] h-[658px] bg-light-background-color">
        <div className="flex flex-col w-[1050px] items-center px-0 py-20 relative left-[195px]">
          <div className="flex items-center gap-[90px] relative self-stretch w-full flex-[0_0_auto]">
            <div
              className="w-[513px] gap-[30px] flex items-start relative"
              onWheel={handleWheel}
            >
              <Slider ref={sliderRef} {...sliderSettings} className="w-[345px]">
                <PageContentCardDesktop />
                <PageContentCardDesktop />
              </Slider>
            </div>

            <div className="flex-col w-[447px] gap-4 flex items-start relative">
              <div className="relative w-fit mt-[-1.00px] font-h-5 font-[number:var(--h-5-font-weight)] text-primary-text-color text-[length:var(--h-5-font-size)] tracking-[var(--h-5-letter-spacing)] leading-[var(--h-5-line-height)] whitespace-nowrap [font-style:var(--h-5-font-style)]">
                Featured Products
              </div>

              <p className="relative w-[431px] font-h-2 font-[number:var(--h-2-font-weight)] text-text-color text-[length:var(--h-2-font-size)] tracking-[var(--h-2-letter-spacing)] leading-[var(--h-2-line-height)] [font-style:var(--h-2-font-style)]">
                We love what we do
              </p>

              <p className="relative w-[351px] font-paragraph font-[number:var(--paragraph-font-weight)] text-second-text-color text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]">
                Problems trying to resolve the conflict between <br />
                the two major realms of Classical physics: <br />
                Newtonian mechanics.
                <br /> <br />
                Problems trying to resolve the conflict between <br />
                the two major realms of Classical physics: <br />
                Newtonian mechanics
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageContentDesktop;
