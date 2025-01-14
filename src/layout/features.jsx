import iconCoolIcon125 from "../icons/icon-cool-icon-125.svg";
import iconCoolIcon153 from "../icons/icon-cool-icon-153.svg";
import iconCoolIcon1153 from "../icons/icon-cool-icon-1153.svg";

const Features = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-[414px] items-center gap-20 px-0 py-20 relative">
        <div className="items-center inline-flex flex-col relative flex-[0_0_auto]">
          <div className="inline-flex flex-col items-center gap-2.5 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-h-4 font-[number:var(--h-4-font-weight)] text-second-text-color text-[length:var(--h-4-font-size)] text-center tracking-[var(--h-4-letter-spacing)] leading-[var(--h-4-line-height)] whitespace-nowrap [font-style:var(--h-4-font-style)]">
              Featured Products
            </div>

            <div className="relative w-fit [font-family:'Montserrat-Bold',Helvetica] font-bold text-text-color text-2xl text-center tracking-[0.10px] leading-8 whitespace-nowrap">
              THE BEST SERVICES
            </div>

            <p className="relative w-fit font-paragraph font-[number:var(--paragraph-font-weight)] text-second-text-color text-[length:var(--paragraph-font-size)] text-center tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]">
              Problems trying to resolve <br />
              the conflict between
            </p>
          </div>
        </div>

        <div className="items-start justify-center gap-[30px] inline-flex flex-col relative flex-[0_0_auto]">
          <div className="flex flex-col w-[328px] items-center relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-center gap-5 px-10 py-[35px] relative flex-[0_0_auto]">
              <img
                className="relative w-[72px] h-[72px]"
                alt="Icon cool icon"
                src={iconCoolIcon1153}
              />

              <div className="relative w-[235px] font-h-3 font-[number:var(--h-3-font-weight)] text-text-color text-[length:var(--h-3-font-size)] text-center tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
                Easy Wins
              </div>

              <p className="relative w-[225px] font-paragraph font-[number:var(--paragraph-font-weight)] text-second-text-color text-[length:var(--paragraph-font-size)] text-center tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]">
                Get your best looking smile now!
              </p>
            </div>
          </div>

          <div className="flex flex-col w-[328px] items-center relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-center gap-5 px-10 py-[35px] relative flex-[0_0_auto]">
              <img
                className="relative w-[72px] h-[72px]"
                alt="Icon cool icon"
                src={iconCoolIcon153}
              />

              <div className="relative w-[235px] font-h-3 font-[number:var(--h-3-font-weight)] text-text-color text-[length:var(--h-3-font-size)] text-center tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
                Concrete
              </div>

              <p className="relative w-[232px] font-paragraph font-[number:var(--paragraph-font-weight)] text-second-text-color text-[length:var(--paragraph-font-size)] text-center tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]">
                Defalcate is most focused in helping you discover your most
                beautiful smile
              </p>
            </div>
          </div>

          <div className="flex flex-col w-[329px] items-center relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-center gap-5 px-10 py-[35px] relative flex-[0_0_auto]">
              <img
                className="relative w-[72px] h-[72px]"
                alt="Icon cool icon"
                src={iconCoolIcon125}
              />

              <div className="relative w-[235px] font-h-3 font-[number:var(--h-3-font-weight)] text-text-color text-[length:var(--h-3-font-size)] text-center tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
                Hack Growth
              </div>

              <p className="relative w-[225px] font-paragraph font-[number:var(--paragraph-font-weight)] text-second-text-color text-[length:var(--paragraph-font-size)] text-center tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]">
                Overcame any hurdle or any other problem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
