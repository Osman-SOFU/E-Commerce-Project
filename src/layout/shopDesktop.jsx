import img1 from "../icons/unsplash_p0j-mE6mGo4.jpg";
import img2 from "../icons/unsplash_Bd7gNnWJBkU.jpg";
import img3 from "../icons/shopCardLastPic.jpg";

const ShopDesktop = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[1440px] h-[732px] bg-light-background-color">
        <div className="absolute w-[612px] h-[572px] top-20 left-32">
          <div
            className="absolute w-[611px] h-[572px] top-0 left-px  bg-cover bg-[50%_50%]"
            style={{ backgroundImage: `url(${img1})` }}
          />

          <div className="absolute w-[420px] h-[238px] top-[334px] left-0 bg-[#2c8bc0bf]">
            <p className="top-[59px] left-[66px] font-h-3 font-[number:var(--h-3-font-weight)] text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] absolute text-white [font-style:var(--h-3-font-style)]">
              Top Product Of <br />
              the Week
            </p>

            <button className="all-[unset] box-border inline-flex flex-col items-center gap-2.5 px-10 py-[15px] absolute top-36 left-[66px] rounded-[5px] overflow-hidden border border-solid border-light-text-color">
              <div className="relative w-fit mt-[-1.00px] font-btn-text font-[number:var(--btn-text-font-weight)] text-light-text-color text-[length:var(--btn-text-font-size)] tracking-[var(--btn-text-letter-spacing)] leading-[var(--btn-text-line-height)] whitespace-nowrap [font-style:var(--btn-text-font-style)]">
                EXPLORE ITEMS
              </div>
            </button>
          </div>
        </div>

        <div className="absolute w-[558px] h-[289px] top-20 left-[754px]">
          <div
            className="h-[289px] absolute w-[557px] top-0 left-px bg-cover bg-[50%_50%]"
            style={{ backgroundImage: `url(${img2})` }}
          />

          <div className="w-[347px] h-[173px] top-[116px] absolute left-0 bg-[#2c8bc0bf]">
            <p className="top-[39px] left-9 font-h-4 font-[number:var(--h-4-font-weight)] text-[length:var(--h-4-font-size)] tracking-[var(--h-4-letter-spacing)] leading-[var(--h-4-line-height)] whitespace-nowrap absolute text-white [font-style:var(--h-4-font-style)]">
              Top Product Of the Week
            </p>

            <button className="all-[unset] box-border top-[92px] inline-flex flex-col items-center gap-2.5 px-10 py-[15px] absolute left-9 rounded-[5px] overflow-hidden border border-solid border-light-text-color">
              <div className="relative w-fit mt-[-1.00px] font-btn-text font-[number:var(--btn-text-font-weight)] text-light-text-color text-[length:var(--btn-text-font-size)] tracking-[var(--btn-text-letter-spacing)] leading-[var(--btn-text-line-height)] whitespace-nowrap [font-style:var(--btn-text-font-style)]">
                EXPLORE ITEMS
              </div>
            </button>
          </div>
        </div>

        <div className="absolute w-[558px] h-[261px] top-[391px] left-[754px]">
          <div
            className="h-[261px] absolute w-[557px] top-0 left-px bg-cover bg-[50%_50%]"
            style={{ backgroundImage: `url(${img3})` }}
          />

          <div className="w-[360px] h-[153px] top-[108px] absolute left-0 bg-[#2c8bc0bf]">
            <p className="top-[27px] left-9 font-h-4 font-[number:var(--h-4-font-weight)] text-[length:var(--h-4-font-size)] tracking-[var(--h-4-letter-spacing)] leading-[var(--h-4-line-height)] whitespace-nowrap absolute text-white [font-style:var(--h-4-font-style)]">
              Top Product Of the Week
            </p>

            <button className="all-[unset] box-border top-[78px] inline-flex flex-col items-center gap-2.5 px-10 py-[15px] absolute left-9 rounded-[5px] overflow-hidden border border-solid border-light-text-color">
              <div className="relative w-fit mt-[-1.00px] font-btn-text font-[number:var(--btn-text-font-weight)] text-light-text-color text-[length:var(--btn-text-font-size)] tracking-[var(--btn-text-letter-spacing)] leading-[var(--btn-text-line-height)] whitespace-nowrap [font-style:var(--btn-text-font-style)]">
                EXPLORE ITEMS
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDesktop;
