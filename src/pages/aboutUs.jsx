import Client from "../layout/client";
import TeamSection from "../components/teamSection";
import AboutUsPageHeader from "../layout/aboutUsPageHeader";
import CombinedAboutUsPage from "../layout/combinedAboutUsPage";
import AboutUsFooter from "../layout/aboutUsFooter";

const AboutUs = () => {
  return (
    <div>
      <AboutUsPageHeader />
      <CombinedAboutUsPage />
      <TeamSection />

      {/* Metin Bölümü - TeamSection ile Client arasında */}
      <div className="w-full py-12 text-center bg-white">
        <h2 className="text-3xl font-extrabold text-text-color">
          Big Companies Are Here
        </h2>
        <p className="mt-4 text-sm font-medium text-second-text-color">
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      <Client />
      <AboutUsFooter />
    </div>
  );
};

export default AboutUs;
