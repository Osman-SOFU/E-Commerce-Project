import MyIcon from "../icons/button-Md.svg";
import { useRef, useState } from "react";
import Slider from "react-slick";
import img1 from "../icons/product-cover-1.png";
import img2 from "../icons/product-cover-2.png";
import img3 from "../icons/product-cover-3.png";
import img4 from "../icons/product-cover-4.png";
import img5 from "../icons/product-cover-5.png";
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

          {/* Slider Container */}
          {isSliderVisible && (
            <div
              className="inline-flex items-start justify-center gap-[30px] relative flex-[0_0_auto]"
              onWheel={handleWheel}
            >
              <div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
                <Slider
                  ref={sliderRef}
                  {...sliderSettings}
                  className="w-[345px]"
                >
                  <div className="gap-[19px] px-0 py-2 inline-flex flex-col items-start relative flex-[0_0_auto]">
                    <div className="gap-[15px] p-6 inline-flex flex-col items-start relative flex-[0_0_auto]">
                      <div className="flex flex-col w-[295px] items-start gap-[30px] relative flex-[0_0_auto]">
                        <div className="w-[295px] items-start flex flex-col relative flex-[0_0_auto]">
                          <div className="w-[295px] flex flex-col items-start relative flex-[0_0_auto] bg-white">
                            <div
                              className="relative self-stretch w-full h-[360px] bg-cover bg-[50%_50%]"
                              style={{ backgroundImage: `url(${img1})` }}
                            />

                            <div className="flex flex-col items-center gap-2.5 pt-[25px] pb-[35px] px-[25px] relative self-stretch w-full flex-[0_0_auto]">
                              <div className="relative w-[131px] mt-[-1.00px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#252b42] text-base text-center tracking-[0.10px] leading-6">
                                Graphic Design
                              </div>

                              <div className="relative w-fit font-link font-[number:var(--link-font-weight)] text-[#727272] text-[length:var(--link-font-size)] text-center tracking-[var(--link-letter-spacing)] leading-[var(--link-line-height)] whitespace-nowrap [font-style:var(--link-font-style)]">
                                English Department
                              </div>

                              <div className="inline-flex items-start gap-[5px] px-[3px] py-[5px] relative flex-[0_0_auto]">
                                <div className="w-[52px] mt-[-1.00px] text-muted-color text-center relative [font-family:'Montserrat-Bold',Helvetica] font-bold text-base tracking-[0.10px] leading-6">
                                  $16.48
                                </div>

                                <div className="relative w-[45px] mt-[-1.00px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-secondary-color-1 text-base text-center tracking-[0.10px] leading-6">
                                  $6.48
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="w-[295px] items-center flex flex-col relative flex-[0_0_auto]">
                          <div className="w-[299px] ml-[-2.00px] mr-[-2.00px] flex flex-col items-start relative flex-[0_0_auto] bg-white">
                            <div
                              className="relative self-stretch w-full h-[360px] bg-cover bg-[50%_50%]"
                              style={{ backgroundImage: `url(${img2})` }}
                            />

                            <div className="flex flex-col items-center gap-2.5 pt-[25px] pb-[35px] px-[25px] relative self-stretch w-full flex-[0_0_auto]">
                              <div className="relative w-[131px] mt-[-1.00px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#252b42] text-base text-center tracking-[0.10px] leading-6">
                                Graphic Design
                              </div>

                              <div className="relative w-fit font-link font-[number:var(--link-font-weight)] text-[#727272] text-[length:var(--link-font-size)] text-center tracking-[var(--link-letter-spacing)] leading-[var(--link-line-height)] whitespace-nowrap [font-style:var(--link-font-style)]">
                                English Department
                              </div>

                              <div className="inline-flex items-start gap-[5px] px-[3px] py-[5px] relative flex-[0_0_auto]">
                                <div className="w-[52px] mt-[-1.00px] text-muted-color text-center relative [font-family:'Montserrat-Bold',Helvetica] font-bold text-base tracking-[0.10px] leading-6">
                                  $16.48
                                </div>

                                <div className="relative w-[45px] mt-[-1.00px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-secondary-color-1 text-base text-center tracking-[0.10px] leading-6">
                                  $6.48
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="w-[298px] items-center mr-[-3.00px] flex flex-col relative flex-[0_0_auto]">
                          <div className="w-[297px] flex flex-col items-start relative flex-[0_0_auto] bg-white">
                            <div
                              className="relative self-stretch w-full h-[360px] bg-cover bg-[50%_50%]"
                              style={{ backgroundImage: `url(${img3})` }}
                            />

                            <div className="flex flex-col items-center gap-2.5 pt-[25px] pb-[35px] px-[25px] relative self-stretch w-full flex-[0_0_auto]">
                              <div className="relative w-[131px] mt-[-1.00px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#252b42] text-base text-center tracking-[0.10px] leading-6">
                                Graphic Design
                              </div>

                              <div className="relative w-fit font-link font-[number:var(--link-font-weight)] text-[#727272] text-[length:var(--link-font-size)] text-center tracking-[var(--link-letter-spacing)] leading-[var(--link-line-height)] whitespace-nowrap [font-style:var(--link-font-style)]">
                                English Department
                              </div>

                              <div className="inline-flex items-start gap-[5px] px-[3px] py-[5px] relative flex-[0_0_auto]">
                                <div className="w-[52px] mt-[-1.00px] text-muted-color text-center relative [font-family:'Montserrat-Bold',Helvetica] font-bold text-base tracking-[0.10px] leading-6">
                                  $16.48
                                </div>

                                <div className="relative w-[45px] mt-[-1.00px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-secondary-color-1 text-base text-center tracking-[0.10px] leading-6">
                                  $6.48
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col w-[296px] items-center relative flex-[0_0_auto] mr-[-1.00px]">
                          <div className="flex flex-col w-[290px] items-start relative flex-[0_0_auto] bg-white">
                            <div
                              className="relative self-stretch w-full h-[360px] bg-cover bg-[50%_50%]"
                              style={{ backgroundImage: `url(${img4})` }}
                            />

                            <div className="flex flex-col items-center gap-2.5 pt-[25px] pb-[35px] px-[25px] relative self-stretch w-full flex-[0_0_auto]">
                              <div className="relative w-[131px] mt-[-1.00px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#252b42] text-base text-center tracking-[0.10px] leading-6">
                                Graphic Design
                              </div>

                              <div className="relative w-fit font-link font-[number:var(--link-font-weight)] text-[#727272] text-[length:var(--link-font-size)] text-center tracking-[var(--link-letter-spacing)] leading-[var(--link-line-height)] whitespace-nowrap [font-style:var(--link-font-style)]">
                                English Department
                              </div>

                              <div className="inline-flex items-start gap-[5px] px-[3px] py-[5px] relative flex-[0_0_auto]">
                                <div className="w-[52px] mt-[-1.00px] text-muted-color text-center relative [font-family:'Montserrat-Bold',Helvetica] font-bold text-base tracking-[0.10px] leading-6">
                                  $16.48
                                </div>

                                <div className="relative w-[45px] mt-[-1.00px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-secondary-color-1 text-base text-center tracking-[0.10px] leading-6">
                                  $6.48
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col w-[296px] items-center relative flex-[0_0_auto] mr-[-1.00px]">
                          <div className="flex flex-col w-[290px] items-start relative flex-[0_0_auto] bg-white">
                            <div
                              className="relative self-stretch w-full h-[360px] bg-cover bg-[50%_50%]"
                              style={{ backgroundImage: `url(${img5})` }}
                            />

                            <div className="flex flex-col items-center gap-2.5 pt-[25px] pb-[35px] px-[25px] relative self-stretch w-full flex-[0_0_auto]">
                              <div className="relative w-[131px] mt-[-1.00px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#252b42] text-base text-center tracking-[0.10px] leading-6">
                                Graphic Design
                              </div>

                              <div className="relative w-fit font-link font-[number:var(--link-font-weight)] text-[#727272] text-[length:var(--link-font-size)] text-center tracking-[var(--link-letter-spacing)] leading-[var(--link-line-height)] whitespace-nowrap [font-style:var(--link-font-style)]">
                                English Department
                              </div>

                              <div className="inline-flex items-start gap-[5px] px-[3px] py-[5px] relative flex-[0_0_auto]">
                                <div className="w-[52px] mt-[-1.00px] text-muted-color text-center relative [font-family:'Montserrat-Bold',Helvetica] font-bold text-base tracking-[0.10px] leading-6">
                                  $16.48
                                </div>

                                <div className="relative w-[45px] mt-[-1.00px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-secondary-color-1 text-base text-center tracking-[0.10px] leading-6">
                                  $6.48
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="gap-[19px] px-0 py-2 inline-flex flex-col items-start relative flex-[0_0_auto]">
                    <div className="gap-[15px] p-6 inline-flex flex-col items-start relative flex-[0_0_auto]">
                      <div className="flex flex-col w-[295px] items-start gap-[30px] relative flex-[0_0_auto]">
                        <div className="w-[295px] items-start flex flex-col relative flex-[0_0_auto]">
                          <div className="w-[295px] flex flex-col items-start relative flex-[0_0_auto] bg-white">
                            <div
                              className="relative self-stretch w-full h-[360px] bg-cover bg-[50%_50%]"
                              style={{ backgroundImage: `url(${img1})` }}
                            />

                            <div className="flex flex-col items-center gap-2.5 pt-[25px] pb-[35px] px-[25px] relative self-stretch w-full flex-[0_0_auto]">
                              <div className="relative w-[131px] mt-[-1.00px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#252b42] text-base text-center tracking-[0.10px] leading-6">
                                Graphic Design
                              </div>

                              <div className="relative w-fit font-link font-[number:var(--link-font-weight)] text-[#727272] text-[length:var(--link-font-size)] text-center tracking-[var(--link-letter-spacing)] leading-[var(--link-line-height)] whitespace-nowrap [font-style:var(--link-font-style)]">
                                English Department
                              </div>

                              <div className="inline-flex items-start gap-[5px] px-[3px] py-[5px] relative flex-[0_0_auto]">
                                <div className="w-[52px] mt-[-1.00px] text-muted-color text-center relative [font-family:'Montserrat-Bold',Helvetica] font-bold text-base tracking-[0.10px] leading-6">
                                  $16.48
                                </div>

                                <div className="relative w-[45px] mt-[-1.00px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-secondary-color-1 text-base text-center tracking-[0.10px] leading-6">
                                  $6.48
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="w-[295px] items-center flex flex-col relative flex-[0_0_auto]">
                          <div className="w-[299px] ml-[-2.00px] mr-[-2.00px] flex flex-col items-start relative flex-[0_0_auto] bg-white">
                            <div
                              className="relative self-stretch w-full h-[360px] bg-cover bg-[50%_50%]"
                              style={{ backgroundImage: `url(${img2})` }}
                            />

                            <div className="flex flex-col items-center gap-2.5 pt-[25px] pb-[35px] px-[25px] relative self-stretch w-full flex-[0_0_auto]">
                              <div className="relative w-[131px] mt-[-1.00px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#252b42] text-base text-center tracking-[0.10px] leading-6">
                                Graphic Design
                              </div>

                              <div className="relative w-fit font-link font-[number:var(--link-font-weight)] text-[#727272] text-[length:var(--link-font-size)] text-center tracking-[var(--link-letter-spacing)] leading-[var(--link-line-height)] whitespace-nowrap [font-style:var(--link-font-style)]">
                                English Department
                              </div>

                              <div className="inline-flex items-start gap-[5px] px-[3px] py-[5px] relative flex-[0_0_auto]">
                                <div className="w-[52px] mt-[-1.00px] text-muted-color text-center relative [font-family:'Montserrat-Bold',Helvetica] font-bold text-base tracking-[0.10px] leading-6">
                                  $16.48
                                </div>

                                <div className="relative w-[45px] mt-[-1.00px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-secondary-color-1 text-base text-center tracking-[0.10px] leading-6">
                                  $6.48
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="w-[298px] items-center mr-[-3.00px] flex flex-col relative flex-[0_0_auto]">
                          <div className="w-[297px] flex flex-col items-start relative flex-[0_0_auto] bg-white">
                            <div
                              className="relative self-stretch w-full h-[360px] bg-cover bg-[50%_50%]"
                              style={{ backgroundImage: `url(${img3})` }}
                            />

                            <div className="flex flex-col items-center gap-2.5 pt-[25px] pb-[35px] px-[25px] relative self-stretch w-full flex-[0_0_auto]">
                              <div className="relative w-[131px] mt-[-1.00px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#252b42] text-base text-center tracking-[0.10px] leading-6">
                                Graphic Design
                              </div>

                              <div className="relative w-fit font-link font-[number:var(--link-font-weight)] text-[#727272] text-[length:var(--link-font-size)] text-center tracking-[var(--link-letter-spacing)] leading-[var(--link-line-height)] whitespace-nowrap [font-style:var(--link-font-style)]">
                                English Department
                              </div>

                              <div className="inline-flex items-start gap-[5px] px-[3px] py-[5px] relative flex-[0_0_auto]">
                                <div className="w-[52px] mt-[-1.00px] text-muted-color text-center relative [font-family:'Montserrat-Bold',Helvetica] font-bold text-base tracking-[0.10px] leading-6">
                                  $16.48
                                </div>

                                <div className="relative w-[45px] mt-[-1.00px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-secondary-color-1 text-base text-center tracking-[0.10px] leading-6">
                                  $6.48
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col w-[296px] items-center relative flex-[0_0_auto] mr-[-1.00px]">
                          <div className="flex flex-col w-[290px] items-start relative flex-[0_0_auto] bg-white">
                            <div
                              className="relative self-stretch w-full h-[360px] bg-cover bg-[50%_50%]"
                              style={{ backgroundImage: `url(${img4})` }}
                            />

                            <div className="flex flex-col items-center gap-2.5 pt-[25px] pb-[35px] px-[25px] relative self-stretch w-full flex-[0_0_auto]">
                              <div className="relative w-[131px] mt-[-1.00px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#252b42] text-base text-center tracking-[0.10px] leading-6">
                                Graphic Design
                              </div>

                              <div className="relative w-fit font-link font-[number:var(--link-font-weight)] text-[#727272] text-[length:var(--link-font-size)] text-center tracking-[var(--link-letter-spacing)] leading-[var(--link-line-height)] whitespace-nowrap [font-style:var(--link-font-style)]">
                                English Department
                              </div>

                              <div className="inline-flex items-start gap-[5px] px-[3px] py-[5px] relative flex-[0_0_auto]">
                                <div className="w-[52px] mt-[-1.00px] text-muted-color text-center relative [font-family:'Montserrat-Bold',Helvetica] font-bold text-base tracking-[0.10px] leading-6">
                                  $16.48
                                </div>

                                <div className="relative w-[45px] mt-[-1.00px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-secondary-color-1 text-base text-center tracking-[0.10px] leading-6">
                                  $6.48
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col w-[296px] items-center relative flex-[0_0_auto] mr-[-1.00px]">
                          <div className="flex flex-col w-[290px] items-start relative flex-[0_0_auto] bg-white">
                            <div
                              className="relative self-stretch w-full h-[360px] bg-cover bg-[50%_50%]"
                              style={{ backgroundImage: `url(${img5})` }}
                            />

                            <div className="flex flex-col items-center gap-2.5 pt-[25px] pb-[35px] px-[25px] relative self-stretch w-full flex-[0_0_auto]">
                              <div className="relative w-[131px] mt-[-1.00px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#252b42] text-base text-center tracking-[0.10px] leading-6">
                                Graphic Design
                              </div>

                              <div className="relative w-fit font-link font-[number:var(--link-font-weight)] text-[#727272] text-[length:var(--link-font-size)] text-center tracking-[var(--link-letter-spacing)] leading-[var(--link-line-height)] whitespace-nowrap [font-style:var(--link-font-style)]">
                                English Department
                              </div>

                              <div className="inline-flex items-start gap-[5px] px-[3px] py-[5px] relative flex-[0_0_auto]">
                                <div className="w-[52px] mt-[-1.00px] text-muted-color text-center relative [font-family:'Montserrat-Bold',Helvetica] font-bold text-base tracking-[0.10px] leading-6">
                                  $16.48
                                </div>

                                <div className="relative w-[45px] mt-[-1.00px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-secondary-color-1 text-base text-center tracking-[0.10px] leading-6">
                                  $6.48
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          )}

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
