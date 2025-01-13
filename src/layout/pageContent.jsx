import image from "../icons/image.png";
import unsplashLks7VeiEag from "../icons/unsplash-lks7vei-eag.png";

const PageContent = () => {
  return (
    <div className="relative w-[414px] h-[910px] bg-light-background-color">
      <div className="inline-flex flex-col items-center px-0 py-20 relative left-5">
        <div className="flex flex-col w-[373px] items-center gap-[50px] relative flex-[0_0_auto]">
          <div className="flex-col w-[280px] gap-4 flex items-start relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-h-5 font-[number:var(--h-5-font-weight)] text-primary-text-color text-[length:var(--h-5-font-size)] tracking-[var(--h-5-letter-spacing)] leading-[var(--h-5-line-height)] whitespace-nowrap [font-style:var(--h-5-font-style)]">
              Featured Products
            </div>

            <p className="relative w-[246px] font-h-2 font-[number:var(--h-2-font-weight)] text-text-color text-[length:var(--h-2-font-size)] tracking-[var(--h-2-letter-spacing)] leading-[var(--h-2-line-height)] [font-style:var(--h-2-font-style)]">
              We love what we do
            </p>

            <p className="relative w-[258px] font-paragraph font-[number:var(--paragraph-font-weight)] text-second-text-color text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: <br />
              Newtonian mechanics <br />
              <br />
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: <br />
              Newtonian mechanics
            </p>
          </div>

          <div className="w-[374.5px] gap-[21.9px] ml-[-0.75px] mr-[-0.75px] flex items-start relative flex-[0_0_auto]">
            <div className="relative w-[374.21px] h-[363.55px] overflow-hidden">
              <img
                className="absolute w-[158px] h-[364px] top-0 left-px object-cover"
                alt="Unsplash eag"
                src={unsplashLks7VeiEag}
              />

              <img
                className="absolute w-[204px] h-[364px] top-0 left-[170px] object-cover"
                alt="Unsplash eag"
                src={image}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageContent;
