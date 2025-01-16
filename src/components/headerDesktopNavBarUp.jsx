import phone from "../icons/phone.svg";
import mail from "../icons/mail.svg";
import instagram from "../icons/instagram.svg";
import youtube from "../icons/youtube.svg";
import facebook from "../icons/facebook.svg";
import twitter from "../icons/twitter.svg";

const headerDesktopNavBarUp = () => {
  return (
    <div className="w-[1438px] h-[46px] bg-black">
      <div className="flex w-[1438px] items-start justify-around gap-2.5 relative">
        <div className="flex w-[1438px] items-start justify-between px-6 py-0 relative">
          <div className="inline-flex h-[46px] items-center gap-2.5 relative flex-[0_0_auto] overflow-hidden">
            <div className="inline-flex items-center gap-[5px] p-2.5 relative flex-[0_0_auto] rounded-[5px] overflow-hidden">
              <img
                className="relative w-4 h-4"
                alt="Icn settings icn xs"
                src={phone}
              />
              <div className="relative w-fit mt-[-1.00px] font-h-6 font-[number:var(--h-6-font-weight)] text-light-text-color text-[length:var(--h-6-font-size)] tracking-[var(--h-6-letter-spacing)] leading-[var(--h-6-line-height)] whitespace-nowrap [font-style:var(--h-6-font-style)]">
                (225) 555-0118
              </div>
            </div>

            <div className="inline-flex items-center gap-[5px] p-2.5 relative flex-[0_0_auto] rounded-[5px] overflow-hidden">
              <img
                className="relative w-4 h-4"
                alt="Icn settings icn xs"
                src={mail}
              />
              <div className="relative w-fit mt-[-1.00px] font-h-6 font-[number:var(--h-6-font-weight)] text-light-text-color text-[length:var(--h-6-font-size)] tracking-[var(--h-6-letter-spacing)] leading-[var(--h-6-line-height)] whitespace-nowrap [font-style:var(--h-6-font-style)]">
                michelle.rivera@example.com
              </div>
            </div>
          </div>

          <div className="inline-flex items-start gap-2.5 p-2.5 relative flex-[0_0_auto]">
            <p className="relative w-fit mt-[-1.00px] font-h-6 font-[number:var(--h-6-font-weight)] text-light-text-color text-[length:var(--h-6-font-size)] tracking-[var(--h-6-letter-spacing)] leading-[var(--h-6-line-height)] whitespace-nowrap [font-style:var(--h-6-font-style)]">
              Follow Us&nbsp;&nbsp;and get a chance to win 80% off
            </p>
          </div>

          <div className="inline-flex h-[46px] items-start gap-2.5 p-2.5 relative">
            <div className="relative w-fit mt-[-1.00px] font-h-6 font-[number:var(--h-6-font-weight)] text-light-text-color text-[length:var(--h-6-font-size)] tracking-[var(--h-6-letter-spacing)] leading-[var(--h-6-line-height)] whitespace-nowrap [font-style:var(--h-6-font-style)]">
              Follow Us&nbsp;&nbsp;:
            </div>
            <div className="relative w-[120px] h-[26px]">
              <img
                className="left-0 absolute w-[26px] h-[26px] top-0"
                alt="Social media"
                src={instagram}
              />
              <img
                className="left-8 absolute w-[26px] h-[26px] top-0"
                alt="Social media"
                src={youtube}
              />
              <img
                className="left-[62px] absolute w-[26px] h-[26px] top-0"
                alt="Social media"
                src={facebook}
              />
              <img
                className="left-[94px] absolute w-[26px] h-[26px] top-0"
                alt="Social media"
                src={twitter}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default headerDesktopNavBarUp;
