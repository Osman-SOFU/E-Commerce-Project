import VideoSection from "../components/videoSection";

const ContentSection = () => (
  <div className="w-full py-16 px-4 flex flex-col items-center">
    <div className="max-w-5xl w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
      <div className="w-full lg:w-1/2">
        <p className="text-sm text-red-500 font-medium">Problems trying</p>
        <h2 className="text-2xl font-bold text-text-color mt-2">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        </h2>
      </div>
      <p className="w-full lg:w-1/2 text-sm text-second-text-color">
        Problems trying to resolve the conflict between the two major realms of
        Classical physics: Newtonian mechanics
      </p>
    </div>
  </div>
);

const StatsSection = () => (
  <div className="w-full py-12 bg-light-background-color flex flex-col items-center">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-5xl text-center">
      <div>
        <h3 className="text-3xl font-bold text-text-color">15K</h3>
        <p className="text-sm font-semibold text-second-text-color mt-2">
          Happy Customers
        </p>
      </div>
      <div>
        <h3 className="text-3xl font-bold text-text-color">150K</h3>
        <p className="text-sm font-semibold text-second-text-color mt-2">
          Monthly Visitors
        </p>
      </div>
      <div>
        <h3 className="text-3xl font-bold text-text-color">15</h3>
        <p className="text-sm font-semibold text-second-text-color mt-2">
          Countries Worldwide
        </p>
      </div>
      <div>
        <h3 className="text-3xl font-bold text-text-color">100+</h3>
        <p className="text-sm font-semibold text-second-text-color mt-2">
          Top Partners
        </p>
      </div>
    </div>
  </div>
);

const CombinedAboutUsPage = () => (
  <div className="w-full">
    <ContentSection />
    <StatsSection />
    <VideoSection />
  </div>
);

export default CombinedAboutUsPage;
