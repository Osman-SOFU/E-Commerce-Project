import iconCoolIcon125 from "../icons/icon-cool-icon-125.svg";
import iconCoolIcon153 from "../icons/icon-cool-icon-153.svg";
import iconCoolIcon1153 from "../icons/icon-cool-icon-1153.svg";

const Features = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-full max-w-5xl items-center gap-20 px-0 py-20 relative">
        <div className="items-center inline-flex flex-col relative flex-[0_0_auto]">
          <div className="inline-flex flex-col items-center gap-2.5 relative flex-[0_0_auto]">
            <div className="text-second-text-color text-center text-lg font-semibold">
              Featured Products
            </div>

            <div className="font-bold text-text-color text-2xl text-center">
              THE BEST SERVICES
            </div>

            <p className="text-second-text-color text-center">
              Problems trying to resolve <br />
              the conflict between
            </p>
          </div>
        </div>

        {/* Masaüstünde Yatay, Mobilde Dikey Hizalama */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 relative w-full">
          <div className="flex flex-col md:flex-1 items-center w-full">
            <div className="flex flex-col items-center gap-5 px-5 py-10 w-full">
              <img
                className="w-16 h-16"
                src={iconCoolIcon1153}
                alt="Easy Wins"
              />
              <div className="w-full text-center font-semibold text-text-color text-xl">
                Easy Wins
              </div>
              <p className="text-second-text-color text-center w-full">
                Get your best looking smile now!
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-1 items-center w-full">
            <div className="flex flex-col items-center gap-5 px-5 py-10 w-full">
              <img className="w-16 h-16" src={iconCoolIcon153} alt="Concrete" />
              <div className="w-full text-center font-semibold text-text-color text-xl">
                Concrete
              </div>
              <p className="text-second-text-color text-center w-full">
                Defalcate is most focused in helping you discover your most
                beautiful smile
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-1 items-center w-full">
            <div className="flex flex-col items-center gap-5 px-5 py-10 w-full">
              <img
                className="w-16 h-16"
                src={iconCoolIcon125}
                alt="Hack Growth"
              />
              <div className="w-full text-center font-semibold text-text-color text-xl">
                Hack Growth
              </div>
              <p className="text-second-text-color text-center w-full">
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
