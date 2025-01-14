import ContentCardDown from "../components/contentCardDown";
import ContentCardUp from "../components/contentCardUp";

const Blog = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[414px] h-[1402px] bg-white overflow-hidden">
        <div className="flex flex-col w-[414px] items-center gap-20 px-0 py-20 relative">
          <div className="items-center inline-flex flex-col relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-center gap-2.5 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#23a6f0] text-sm text-center tracking-[0.20px] leading-6 whitespace-nowrap">
                Practice Advice
              </div>

              <div className="relative w-fit font-h-2 font-[number:var(--h-2-font-weight)] text-[#252b42] text-[length:var(--h-2-font-size)] text-center tracking-[var(--h-2-letter-spacing)] leading-[var(--h-2-line-height)] whitespace-nowrap [font-style:var(--h-2-font-style)]">
                Featured Posts
              </div>
            </div>
          </div>

          <div className="items-start justify-center gap-[30px] inline-flex flex-col relative flex-[0_0_auto]">
            <div className="flex flex-col w-[328px] items-center relative flex-[0_0_auto]">
              <ContentCardUp />
            </div>

            <div className="flex flex-col w-[329px] items-center relative flex-[0_0_auto]">
              <ContentCardDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
