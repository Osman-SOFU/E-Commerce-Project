import iconAkarIconsCalendar from "../icons/icon-akar-icons-calendar.png";
import iconAntDesignAreaChartOutlined from "../icons/icon-ant-design-area-chart-outlined.svg";
import iconArrowNext from "../icons/icon-arrow-next.svg";
import img1 from "../icons/unsplash-mBQIfKlvowM.png";

const ContentCardDown = () => {
  return (
    <div className="inline-flex flex-col items-start relative bg-light-background-color border border-solid border-black">
      <div
        className="relative self-stretch w-full h-[300px] bg-cover bg-[50%_50%]"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="h-6 px-2.5 rounded-[3px] justify-start items-center inline-flex overflow-hidden">
          <div className="px-2.5 left-[20px] top-[20px] absolute bg-[#e64040] rounded-[3px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.10)] justify-start items-center inline-flex overflow-hidden">
            <div className="text-center text-white text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">
              NEW
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start gap-2.5 pt-[25px] pb-[35px] px-[25px] self-stretch w-full relative flex-[0_0_auto]">
        <div className="inline-flex items-center gap-[15px] relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] font-small font-[number:var(--small-font-weight)] text-disabled-element-color text-[length:var(--small-font-size)] tracking-[var(--small-letter-spacing)] leading-[var(--small-line-height)] whitespace-nowrap [font-style:var(--small-font-style)]">
            Google
          </div>

          <div className="relative w-fit mt-[-1.00px] font-small font-[number:var(--small-font-weight)] text-[#727272] text-[length:var(--small-font-size)] tracking-[var(--small-letter-spacing)] leading-[var(--small-line-height)] whitespace-nowrap [font-style:var(--small-font-style)]">
            Trending
          </div>

          <div className="relative w-fit mt-[-1.00px] font-small font-[number:var(--small-font-weight)] text-[#727272] text-[length:var(--small-font-size)] tracking-[var(--small-letter-spacing)] leading-[var(--small-line-height)] whitespace-nowrap [font-style:var(--small-font-style)]">
            New
          </div>
        </div>

        <p className="relative w-[247px] font-h-4 font-[number:var(--h-4-font-weight)] text-text-color text-[length:var(--h-4-font-size)] tracking-[var(--h-4-letter-spacing)] leading-[var(--h-4-line-height)] [font-style:var(--h-4-font-style)]">
          Loudest à la Madison #1 <br />
          (L&#39;integral)
        </p>

        <p className="relative w-[280px] font-paragraph font-[number:var(--paragraph-font-weight)] text-second-text-color text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]">
          We focus on ergonomics and meeting <br />
          you where you work. It&#39;s only a <br />
          keystroke away.
        </p>

        <div className="flex items-center justify-between px-0 py-[15px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex items-center gap-[5px] relative flex-[0_0_auto]">
            <img
              className="relative w-4 h-4"
              alt="Icon akar icons"
              src={iconAkarIconsCalendar}
            />

            <div className="relative w-fit mt-[-1.00px] font-small font-[number:var(--small-font-weight)] text-[#727272] text-[length:var(--small-font-size)] tracking-[var(--small-letter-spacing)] leading-[var(--small-line-height)] whitespace-nowrap [font-style:var(--small-font-style)]">
              22 April 2021
            </div>
          </div>

          <div className="inline-flex items-center gap-[5px] relative flex-[0_0_auto]">
            <img
              className="relative w-4 h-[14.67px]"
              alt="Icon ant design area"
              src={iconAntDesignAreaChartOutlined}
            />

            <div className="relative w-fit mt-[-1.00px] font-small font-[number:var(--small-font-weight)] text-second-text-color text-[length:var(--small-font-size)] tracking-[var(--small-letter-spacing)] leading-[var(--small-line-height)] whitespace-nowrap [font-style:var(--small-font-style)]">
              10 comments
            </div>
          </div>
        </div>

        <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] font-h-6 font-[number:var(--h-6-font-weight)] text-[#727272] text-[length:var(--h-6-font-size)] tracking-[var(--h-6-letter-spacing)] leading-[var(--h-6-line-height)] whitespace-nowrap [font-style:var(--h-6-font-style)]">
            Learn More
          </div>

          <img
            className="relative w-[9px] h-4"
            alt="Icon arrow next"
            src={iconArrowNext}
          />
        </div>
      </div>
    </div>
  );
};

export default ContentCardDown;
