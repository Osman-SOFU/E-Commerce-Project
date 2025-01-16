import headerVector from "../icons/headerVector.svg";
import headerUser from "../icons/headerUser.svg";
import headerShoppingCard from "../icons/headerShoppingCard.svg";
import headerSource from "../icons/headerSource.svg";
import headerFavori from "../icons/headerFavori.svg";

const headerDesktopNavBarDown = () => {
  return (
    <div className="relative w-[1437px] h-[58px]">
      <div className="absolute w-[187px] h-[58px] top-0 left-[38px]">
        <div className="absolute top-3 left-0 font-h-3 font-[number:var(--h-3-font-weight)] text-text-color text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] whitespace-nowrap [font-style:var(--h-3-font-style)]">
          Bandage
        </div>
      </div>

      <div className="absolute w-[1155px] h-[58px] top-0 left-[265px] overflow-hidden">
        <div className="inline-flex items-start gap-[15px] absolute top-4 left-0">
          <div className="relative w-[43px] h-6">
            <div className="relative h-6">
              <button className="absolute -top-px left-0 [font-family:'Montserrat-Bold',Helvetica] font-bold text-second-text-color text-sm text-center tracking-[0.20px] leading-6 whitespace-nowrap">
                Home
              </button>
            </div>
          </div>

          <div className="inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto]">
            <div className="relative w-[43px] h-6">
              <div className="relative h-6">
                <button className="absolute -top-px left-0 [font-family:'Montserrat-Medium',Helvetica] font-medium text-text-color text-sm tracking-[0.20px] leading-6 whitespace-nowrap">
                  Shop
                </button>

                <img
                  className="absolute w-2.5 h-1.5 top-2.5 left-[40px]"
                  alt="Vector"
                  src={headerVector}
                />
              </div>
            </div>
          </div>

          <div className="relative w-[43px] h-6">
            <div className="relative h-6">
              <button className="absolute -top-px left-0 [font-family:'Montserrat-Bold',Helvetica] font-bold text-second-text-color text-sm text-center tracking-[0.20px] leading-6 whitespace-nowrap">
                About
              </button>
            </div>
          </div>

          <div className="relative w-[43px] h-6">
            <div className="relative h-6">
              <button className="absolute -top-px left-0 [font-family:'Montserrat-Bold',Helvetica] font-bold text-second-text-color text-sm text-center tracking-[0.20px] leading-6 whitespace-nowrap">
                Blog
              </button>
            </div>
          </div>

          <div className="relative w-[43px] h-6">
            <div className="relative h-6">
              <button className="absolute -top-px left-0 [font-family:'Montserrat-Bold',Helvetica] font-bold text-second-text-color text-sm text-center tracking-[0.20px] leading-6 whitespace-nowrap">
                Contact
              </button>
            </div>
          </div>

          <div className="relative w-[43px] h-6">
            <div className="relative h-6">
              <button className="absolute -top-px left-0 [font-family:'Montserrat-Bold',Helvetica] font-bold text-second-text-color text-sm text-center tracking-[0.20px] leading-6 whitespace-nowrap">
                Pages
              </button>
            </div>
          </div>
        </div>

        <div className="inline-flex items-center absolute top-0.5 left-[832px]">
          <div className="relative w-[166px] h-[54px]">
            <div className="h-[54px]">
              <div className="all-[unset] box-border inline-flex items-center gap-[5px] p-[15px] relative rounded-[37px] overflow-hidden">
                <img
                  className="relative w-3 h-3"
                  alt="Icn settings icn xs"
                  src={headerUser}
                />

                <button className="relative w-fit mt-[-1.00px] font-link font-[number:var(--link-font-weight)] text-primary-color text-[length:var(--link-font-size)] text-center tracking-[var(--link-letter-spacing)] leading-[var(--link-line-height)] whitespace-nowrap [font-style:var(--link-font-style)]">
                  Login / Register
                </button>
              </div>
            </div>
          </div>
          <button>
            <img
              className="relative w-[46px] h-[46px]"
              alt="Li"
              src={headerSource}
            />
          </button>
          <button>
            <img
              className="relative w-[46px] h-[46px]"
              alt="Icn settings icn xs"
              src={headerShoppingCard}
            />
          </button>
          <button>
            <img
              className="relative w-[46px] h-[46px]"
              alt="Icn settings icn xs"
              src={headerFavori}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default headerDesktopNavBarDown;
