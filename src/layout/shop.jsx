import { useRef } from "react";
import Slider from "react-slick";
import img1 from "../icons/unsplash_p0j-mE6mGo4.jpg";
import img2 from "../icons/unsplash_Bd7gNnWJBkU.jpg";
import img3 from "../icons/shopCardLastPic.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        <Slider ref={sliderRef} {...sliderSettings} className="w-[345px]">
          <div className="flex flex-col w-[345px] items-start px-0 py-6 relative left-[41px]">
            <div className="relative w-[345px] h-[556px]">
              <div className="h-[556px] bg-white overflow-hidden">
                <div
                  className="relative w-[345px] h-[556px] bg-cover bg-[50%_50%]"
                  style={{ backgroundImage: `url(${img1})` }}
                />
                <div className="absolute w-[346px] h-[238px] top-[318px] left-0 bg-[#2d8bc0bf]">
                  <p className="absolute top-[59px] left-[41px] font-h-3 font-[number:var(--h-3-font-weight)] text-white">
                    Top Product Of <br />
                    the Week
                  </p>
                  <button className="all-[unset] box-border inline-flex flex-col items-center gap-2.5 px-10 py-[15px] absolute top-[150px] left-[42px] rounded-[5px] overflow-hidden border border-solid border-light-text-color">
                    <div className="relative w-fit mt-[-1.00px] font-btn-text text-light-text-color">
                      EXPLORE ITEMS
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <div className="relative w-[345px] h-[398px]">
              <div className="h-[398px] bg-white overflow-hidden">
                <div
                  className="relative w-[345px] h-[398px] bg-cover bg-[50%_50%]"
                  style={{ backgroundImage: `url(${img2})` }}
                />
                <div className="absolute w-[346px] h-[238px] top-40 left-0 bg-[#2d8bc0bf]">
                  <p className="absolute top-[59px] left-[41px] font-h-3 font-[number:var(--h-3-font-weight)] text-white">
                    Top Product Of <br />
                    the Week
                  </p>
                  <button className="all-[unset] box-border inline-flex flex-col items-center gap-2.5 px-10 py-[15px] absolute top-[150px] left-[42px] rounded-[5px] overflow-hidden border border-solid border-light-text-color">
                    <div className="relative w-fit mt-[-1.00px] font-btn-text text-light-text-color">
                      EXPLORE ITEMS
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <div className="relative w-[345px] h-[398px]">
              <div className="h-[398px] bg-white overflow-hidden">
                <div
                  className="relative w-[345px] h-[398px] bg-cover bg-[50%_50%]"
                  style={{ backgroundImage: `url(${img3})` }}
                />
                <div className="absolute w-[346px] h-[238px] top-40 left-0 bg-[#2d8bc0bf]">
                  <p className="absolute top-[59px] left-[41px] font-h-3 font-[number:var(--h-3-font-weight)] text-white">
                    Top Product Of <br />
                    the Week
                  </p>
                  <button className="all-[unset] box-border inline-flex flex-col items-center gap-2.5 px-10 py-[15px] absolute top-[150px] left-[42px] rounded-[5px] overflow-hidden border border-solid border-light-text-color">
                    <div className="relative w-fit mt-[-1.00px] font-btn-text text-light-text-color">
                      EXPLORE ITEMS
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[345px] items-start px-0 py-6 relative left-[41px]">
            <div className="relative w-[345px] h-[556px]">
              <div className="h-[556px] bg-white overflow-hidden">
                <div
                  className="relative w-[345px] h-[556px] bg-cover bg-[50%_50%]"
                  style={{ backgroundImage: `url(${img1})` }}
                />
                <div className="absolute w-[346px] h-[238px] top-[318px] left-0 bg-[#2d8bc0bf]">
                  <p className="absolute top-[59px] left-[41px] font-h-3 font-[number:var(--h-3-font-weight)] text-white">
                    Top Product Of <br />
                    the Week
                  </p>
                  <button className="all-[unset] box-border inline-flex flex-col items-center gap-2.5 px-10 py-[15px] absolute top-[150px] left-[42px] rounded-[5px] overflow-hidden border border-solid border-light-text-color">
                    <div className="relative w-fit mt-[-1.00px] font-btn-text text-light-text-color">
                      EXPLORE ITEMS
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <div className="relative w-[345px] h-[398px]">
              <div className="h-[398px] bg-white overflow-hidden">
                <div
                  className="relative w-[345px] h-[398px] bg-cover bg-[50%_50%]"
                  style={{ backgroundImage: `url(${img2})` }}
                />
                <div className="absolute w-[346px] h-[238px] top-40 left-0 bg-[#2d8bc0bf]">
                  <p className="absolute top-[59px] left-[41px] font-h-3 font-[number:var(--h-3-font-weight)] text-white">
                    Top Product Of <br />
                    the Week
                  </p>
                  <button className="all-[unset] box-border inline-flex flex-col items-center gap-2.5 px-10 py-[15px] absolute top-[150px] left-[42px] rounded-[5px] overflow-hidden border border-solid border-light-text-color">
                    <div className="relative w-fit mt-[-1.00px] font-btn-text text-light-text-color">
                      EXPLORE ITEMS
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <div className="relative w-[345px] h-[398px]">
              <div className="h-[398px] bg-white overflow-hidden">
                <div
                  className="relative w-[345px] h-[398px] bg-cover bg-[50%_50%]"
                  style={{ backgroundImage: `url(${img3})` }}
                />
                <div className="absolute w-[346px] h-[238px] top-40 left-0 bg-[#2d8bc0bf]">
                  <p className="absolute top-[59px] left-[41px] font-h-3 font-[number:var(--h-3-font-weight)] text-white">
                    Top Product Of <br />
                    the Week
                  </p>
                  <button className="all-[unset] box-border inline-flex flex-col items-center gap-2.5 px-10 py-[15px] absolute top-[150px] left-[42px] rounded-[5px] overflow-hidden border border-solid border-light-text-color">
                    <div className="relative w-fit mt-[-1.00px] font-btn-text text-light-text-color">
                      EXPLORE ITEMS
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Shop;
