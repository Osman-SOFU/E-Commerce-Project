import headerDesktopImg from "../icons/headerDesktopImg.svg";
import HeaderDesktopNavBarUp from "../components/headerDesktopNavBarUp";
import HeaderDesktopNavBarDown from "../components/headerDesktopNavBarDown";

const HeaderDesktop = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center relative bg-light-background-color">
        <div className="relative w-[1440px] h-[852px] bg-light-background-color">
          <div className="absolute w-[1439px] h-[136px] top-0 left-0 bg-white">
            <div className="w-[1439px] top-0 object-cover absolute h-[58px] left-0">
              <HeaderDesktopNavBarUp />
            </div>

            <div className="w-[1437px] top-[70px] absolute h-[58px] left-0">
              <HeaderDesktopNavBarDown />
            </div>
          </div>

          <div className="absolute w-[1292px] h-[622px] top-[178px] left-[59px] rounded-[20px] [background:linear-gradient(180deg,rgb(150,232.82,251)_0%,rgb(171,236,214)_100%)]">
            <div className="flex w-[1292px] items-center justify-center pl-[206px] pr-0 py-0 relative">
              <div className="flex flex-col w-[548px] items-start justify-center gap-[30px] relative ml-[-79.50px]">
                <div className="relative w-fit mt-[-1.00px] font-h-5 font-[number:var(--h-5-font-weight)] text-hover-text-color text-[length:var(--h-5-font-size)] tracking-[var(--h-5-letter-spacing)] leading-[var(--h-5-line-height)] whitespace-nowrap [font-style:var(--h-5-font-style)]">
                  SUMMER 2020
                </div>

                <div className="relative w-fit font-h-1 font-[number:var(--h-1-font-weight)] text-text-color text-[length:var(--h-1-font-size)] tracking-[var(--h-1-letter-spacing)] leading-[var(--h-1-line-height)] whitespace-nowrap [font-style:var(--h-1-font-style)]">
                  NEW COLLECTION
                </div>

                <p className="relative w-fit font-h-4 font-[number:var(--h-4-font-weight)] text-second-text-color text-[length:var(--h-4-font-size)] tracking-[var(--h-4-letter-spacing)] leading-[var(--h-4-line-height)] [font-style:var(--h-4-font-style)]">
                  We know how large objects will act, <br />
                  but things on a small scale.
                </p>

                <button className="all-[unset] box-border inline-flex items-start gap-2.5 relative flex-[0_0_auto]">
                  <div className="inline-flex flex-col items-center gap-2.5 px-10 py-[15px] relative flex-[0_0_auto] bg-primary-color rounded-[5px] overflow-hidden">
                    <div className="relative w-fit mt-[-1.00px] font-h-3 font-[number:var(--h-3-font-weight)] text-light-text-color text-[length:var(--h-3-font-size)] text-center tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] whitespace-nowrap [font-style:var(--h-3-font-style)]">
                      SHOP NOW
                    </div>
                  </div>
                </button>
              </div>

              <div className="relative w-[697px] h-[619px] mr-[-79.50px]">
                <div className="w-[696px] h-[619px] overflow-hidden">
                  <div className="relative w-[687px] h-[690px] top-[-70px] left-1.5">
                    <div className="relative w-[696px] h-[631px] top-[58px] left-[-5px]">
                      <div className="absolute w-[500px] h-[500px] top-0 left-32 bg-light-background-color rounded-[249.94px]" />

                      <div className="absolute w-20 h-20 top-3 left-[68px] bg-light-background-color rounded-[39.96px]" />

                      <img
                        className="absolute w-[696px] h-[619px] top-3 left-0"
                        alt="Technology"
                        src={headerDesktopImg}
                      />

                      <div className="absolute w-[31px] h-[31px] top-64 left-[640px] bg-light-background-color rounded-[15.62px]" />

                      <div className="absolute w-[15px] h-[15px] top-[126px] left-[663px] bg-[#977df4] rounded-[7.63px]" />

                      <div className="absolute w-[15px] h-[15px] top-[422px] left-[92px] bg-[#977df4] rounded-[7.63px]" />
                    </div>
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

export default HeaderDesktop;
