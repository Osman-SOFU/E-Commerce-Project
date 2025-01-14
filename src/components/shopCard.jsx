import img1 from "../icons/unsplash_p0j-mE6mGo4.jpg";
import img2 from "../icons/unsplash_Bd7gNnWJBkU.jpg";
import img3 from "../icons/shopCardLastPic.jpg";

const ShopCard = () => {
  return (
    <div className="inline-flex">
      <div className="relative w-[414px] h-[1430px] bg-light-background-color">
        <div className="flex flex-col w-[345px] items-start px-0 py-6 relative left-[41px]">
          <div className="flex flex-col w-[345px] items-start gap-[15px] relative flex-[0_0_auto]">
            <div className="relative w-[345px] h-[556px]">
              <div className="h-[556px] bg-white overflow-hidden">
                <div className="relative w-[346px] h-[556px] -left-px">
                  <div
                    className="absolute w-[345px] h-[556px] top-0 left-px bg-cover bg-[50%_50%]"
                    style={{ backgroundImage: `url(${img1})` }}
                  />

                  <div className="absolute w-[346px] h-[238px] top-[318px] left-0 bg-[#2d8bc0bf]">
                    <p className="absolute top-[59px] left-[41px] font-h-3 font-[number:var(--h-3-font-weight)] text-white text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
                      Top Product Of <br />
                      the Week
                    </p>

                    <button className="all-[unset] box-border inline-flex flex-col items-center gap-2.5 px-10 py-[15px] absolute top-[150px] left-[42px] rounded-[5px] overflow-hidden border border-solid border-light-text-color">
                      <div className="relative w-fit mt-[-1.00px] font-btn-text font-[number:var(--btn-text-font-weight)] text-light-text-color text-[length:var(--btn-text-font-size)] tracking-[var(--btn-text-letter-spacing)] leading-[var(--btn-text-line-height)] whitespace-nowrap [font-style:var(--btn-text-font-style)]">
                        EXPLORE ITEMS
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-[344px] h-[398px]">
              <div className="h-[398px] bg-white overflow-hidden">
                <div className="relative w-[346px] h-[398px] -left-px">
                  <div
                    className="absolute w-[344px] h-[398px] top-0 left-px bg-cover bg-[50%_50%]"
                    style={{ backgroundImage: `url(${img2})` }}
                  />

                  <div className="absolute w-[346px] h-[238px] top-40 left-0 bg-[#2d8bc0bf]">
                    <p className="absolute top-[59px] left-[41px] font-h-3 font-[number:var(--h-3-font-weight)] text-white text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
                      Top Product Of <br />
                      the Week
                    </p>

                    <button className="all-[unset] box-border inline-flex flex-col items-center gap-2.5 px-10 py-[15px] absolute top-[150px] left-[42px] rounded-[5px] overflow-hidden border border-solid border-light-text-color">
                      <div className="relative w-fit mt-[-1.00px] font-btn-text font-[number:var(--btn-text-font-weight)] text-light-text-color text-[length:var(--btn-text-font-size)] tracking-[var(--btn-text-letter-spacing)] leading-[var(--btn-text-line-height)] whitespace-nowrap [font-style:var(--btn-text-font-style)]">
                        EXPLORE ITEMS
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-[344px] h-[398px]">
              <div className="h-[398px] bg-white overflow-hidden">
                <div className="relative w-[346px] h-[398px] -left-px">
                  <div
                    className="absolute w-[344px] h-[398px] top-0 left-px bg-cover bg-[50%_50%]"
                    style={{ backgroundImage: `url(${img3})` }}
                  />

                  <div className="absolute w-[346px] h-[238px] top-40 left-0 bg-[#2d8bc0bf]">
                    <p className="absolute top-[59px] left-[41px] font-h-3 font-[number:var(--h-3-font-weight)] text-white text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
                      Top Product Of <br />
                      the Week
                    </p>

                    <button className="all-[unset] box-border inline-flex flex-col items-center gap-2.5 px-10 py-[15px] absolute top-[150px] left-[42px] rounded-[5px] overflow-hidden border border-solid border-light-text-color">
                      <div className="relative w-fit mt-[-1.00px] font-btn-text font-[number:var(--btn-text-font-weight)] text-light-text-color text-[length:var(--btn-text-font-size)] tracking-[var(--btn-text-letter-spacing)] leading-[var(--btn-text-line-height)] whitespace-nowrap [font-style:var(--btn-text-font-style)]">
                        EXPLORE ITEMS
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
