import technology1 from "../icons/technology-1.png";

import { User, Search, ShoppingCart, Logs } from "lucide-react";

const Header = () => {
  const handleClick = () => {
    alert("Resme tıkladınız!");
  };
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center relative bg-light-background-color">
        <div className="relative w-[414px] h-[532px] bg-light-background-color">
          <div className="absolute w-8 h-8 top-8 left-[35px]">
            <div className="[font-family:'Montserrat-Bold',Helvetica] font-bold text-text-color text-2xl tracking-[0.10px] leading-8 whitespace-nowrap">
              Bandage
            </div>
          </div>
          <User
            className="absolute w-8 h-8 top-8 left-[200px]"
            onClick={handleClick}
          />
          <Search
            className="absolute w-8 h-8 top-8 left-[248px]"
            onClick={handleClick}
          />
          <ShoppingCart
            className="absolute w-8 h-8 top-8 left-[296px]"
            onClick={handleClick}
          />
          <Logs
            className="absolute w-8 h-8 top-8 left-[352px]"
            onClick={handleClick}
          />

          <div className="inline-flex flex-col items-center gap-[30px] absolute top-[164px] left-[145px]">
            <button
              onClick={handleClick}
              className="relative w-fit mt-[-1.00px] font-mobile-menu font-[number:var(--mobile-menu-font-weight)] text-second-text-color text-[length:var(--mobile-menu-font-size)] text-center tracking-[var(--mobile-menu-letter-spacing)] leading-[var(--mobile-menu-line-height)] whitespace-nowrap [font-style:var(--mobile-menu-font-style)]"
            >
              Home
            </button>

            <button
              onClick={handleClick}
              className="relative w-fit font-mobile-menu font-[number:var(--mobile-menu-font-weight)] text-second-text-color text-[length:var(--mobile-menu-font-size)] text-center tracking-[var(--mobile-menu-letter-spacing)] leading-[var(--mobile-menu-line-height)] whitespace-nowrap [font-style:var(--mobile-menu-font-style)]"
            >
              Product
            </button>

            <button
              onClick={handleClick}
              className="relative w-fit font-mobile-menu font-[number:var(--mobile-menu-font-weight)] text-second-text-color text-[length:var(--mobile-menu-font-size)] text-center tracking-[var(--mobile-menu-letter-spacing)] leading-[var(--mobile-menu-line-height)] whitespace-nowrap [font-style:var(--mobile-menu-font-style)]"
            >
              Pricing
            </button>

            <button
              onClick={handleClick}
              className="relative w-fit font-mobile-menu font-[number:var(--mobile-menu-font-weight)] text-second-text-color text-[length:var(--mobile-menu-font-size)] text-center tracking-[var(--mobile-menu-letter-spacing)] leading-[var(--mobile-menu-line-height)] whitespace-nowrap [font-style:var(--mobile-menu-font-style)]"
            >
              Contact
            </button>
          </div>
        </div>

        <div className="inline-flex flex-col h-[902px] items-center justify-center relative rounded-[20px] overflow-hidden [background:linear-gradient(180deg,rgb(150,232.82,251)_0%,rgb(171,236,214)_100%)]">
          <div className="flex flex-col w-[388px] h-[904px] items-center gap-[66px] pt-20 pb-0 px-0 relative mt-[-1.00px] overflow-hidden">
            <div className="flex flex-col w-[394.33px] items-center gap-[32.78px] relative flex-[0_0_auto] ml-[-3.17px] mr-[-3.17px]">
              <div className="relative w-fit mt-[-0.94px] font-h-5 font-[number:var(--h-5-font-weight)] text-hover-text-color text-[length:var(--h-5-font-size)] tracking-[var(--h-5-letter-spacing)] leading-[var(--h-5-line-height)] whitespace-nowrap [font-style:var(--h-5-font-style)]">
                SUMMER 2020
              </div>

              <div className="relative w-fit font-h-2 font-[number:var(--h-2-font-weight)] text-text-color text-[length:var(--h-2-font-size)] text-center tracking-[var(--h-2-letter-spacing)] leading-[var(--h-2-line-height)] [font-style:var(--h-2-font-style)]">
                NEW <br />
                COLLECTION
              </div>

              <p className="relative w-fit font-h-4 font-[number:var(--h-4-font-weight)] text-second-text-color text-[length:var(--h-4-font-size)] text-center tracking-[var(--h-4-letter-spacing)] leading-[var(--h-4-line-height)] [font-style:var(--h-4-font-style)]">
                We know how large objects <br />
                will act, but things on a <br />
                small scale.
              </p>

              <div className="all-[unset] box-border inline-flex items-start gap-2.5 relative flex-[0_0_auto]">
                <div className="inline-flex flex-col items-center gap-2.5 px-10 py-[15px] relative flex-[0_0_auto] bg-primary-color rounded-[5px] overflow-hidden">
                  <button className="relative w-fit mt-[-1.00px] font-h-3 font-[number:var(--h-3-font-weight)] text-light-text-color text-[length:var(--h-3-font-size)] text-center tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] whitespace-nowrap [font-style:var(--h-3-font-style)]">
                    SHOP NOW
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col h-[453px] items-center justify-center relative self-stretch w-full">
              <div className="relative w-[384.33px] h-[372.16px]">
                <div className="relative w-[381px] h-[376px] top-[-34px] -left-0.5">
                  <div className="absolute w-[294px] h-[294px] top-[34px] left-[37px] bg-light-background-color rounded-[147.18px]" />

                  <div className="absolute w-[47px] h-[47px] top-[41px] left-0.5 bg-light-background-color rounded-[23.53px]" />

                  <img
                    className="absolute w-[381px] h-[376px] top-0 left-0"
                    alt="Technology"
                    src={technology1}
                  />

                  <div className="absolute w-[18px] h-[18px] top-[184px] left-[339px] bg-light-background-color rounded-[9.2px]" />

                  <div className="absolute w-[9px] h-[9px] top-[108px] left-[353px] bg-[#977df4] rounded-[4.49px]" />

                  <div className="absolute w-[9px] h-[9px] top-[282px] left-4 bg-[#977df4] rounded-[4.49px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
