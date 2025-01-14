import { ContentCard } from "./ContentCard";

const BlogCard = () => {
  return (
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
            <ContentCard
              className="!mr-[-1.00px] !ml-[-1.00px] !flex-[0_0_auto] !shadow-light-drop-shadow !inline-flex !w-[unset]"
              divClassName="!text-[#727272]"
              fixedHeightClassName="bg-[url(/unsplash-xnfoy9sfcgi.png)]"
              hClassName="!text-[#727272]"
              iconAkarIconsClassName="bg-[url(/image.svg)]"
              iconAntDesignArea="icon-ant-design-area-chart-outlined-2.svg"
              iconArrowNext="icon-arrow-next-2.svg"
              padding={false}
              rounded={false}
              small={false}
              smallClassName="!text-[#727272]"
              smallClassNameOverride="!text-[#727272]"
              text={
                <>
                  Loudest à la Madison #1 <br />
                  (L&#39;integral)
                </>
              }
            />
          </div>

          <div className="flex flex-col w-[329px] items-center relative flex-[0_0_auto]">
            <ContentCard
              aClassName="!overflow-hidden"
              className="!mr-[-0.50px] !ml-[-0.50px] !flex-[0_0_auto] !shadow-light-drop-shadow !inline-flex !w-[unset]"
              divClassName="!text-[#727272]"
              fixedHeightClassName="bg-[url(/unsplash-mbqifklvowm.png)]"
              hClassName="!text-[#727272]"
              iconAntDesignArea="icon-ant-design-area-chart-outlined-3.svg"
              iconArrowNext="icon-arrow-next-3.svg"
              iconArrowNextClassName="!mt-[-8952.00px] !ml-[-1424.00px]"
              padding={false}
              rounded={false}
              small={false}
              smallClassName="!text-[#727272]"
              smallClassNameOverride="!text-[#727272]"
              text={
                <>
                  Loudest à la Madison #1 <br />
                  (L&#39;integral)
                </>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
