import { Icon } from "@iconify/react";
import heroImage1 from "../icons/hero-image-1.png";
import heroImage2 from "../icons/hero-image-2.png";
import heroImage3 from "../icons/product-detail-image-1.png";
import heroImage4 from "../icons/product-detail-image-2.png";
import heroImage5 from "../icons/product-detail-image-3.png";
import teamUser1 from "../icons/gokhanOzdemir.png";
import teamUser2 from "../icons/osmanSofu.png";
import teamUser3 from "../icons/brooklynSimmons.png";

const TeamPageHeader = () => (
  <div className="flex flex-col items-center justify-center w-full py-12 bg-light-background-color">
    <p className="text-sm font-semibold text-second-text-color mb-2">
      WHAT WE DO
    </p>
    <h1 className="text-4xl font-bold text-text-color text-center mb-6">
      Innovation tailored for you
    </h1>
    <div className="flex items-center gap-2 text-sm">
      <a href="/" className="font-semibold text-text-color hover:underline">
        Home
      </a>
      <Icon
        icon="mdi:chevron-right"
        className="w-4 h-4 text-second-text-color"
      />
      <span className="text-second-text-color">Team</span>
    </div>
  </div>
);

const TeamPageSection = () => (
  <div className="w-full py-10 lg:py-20 bg-light-background-color">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full max-w-7xl mx-auto">
      <div className="lg:col-span-2">
        <img
          src={heroImage1}
          alt="Main Hero"
          className="w-full h-full object-cover rounded-md shadow-lg"
        />
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        <img
          src={heroImage2}
          alt="Hero 2"
          className="w-full h-full object-cover rounded-md"
        />
        <img
          src={heroImage3}
          alt="Hero 3"
          className="w-full h-full object-cover rounded-md"
        />
        <img
          src={heroImage4}
          alt="Hero 4"
          className="w-full h-full object-cover rounded-md"
        />
        <img
          src={heroImage5}
          alt="Hero 5"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    </div>
  </div>
);

const TeamCard = ({ image, name, profession }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden w-[316px] flex flex-col items-center">
    <img src={image} alt={name} className="w-full h-[231px] object-cover" />
    <div className="flex flex-col items-center gap-2.5 p-6">
      <h3 className="text-lg font-semibold text-text-color">{name}</h3>
      <p className="text-sm text-second-text-color">{profession}</p>
      <div className="flex gap-4 mt-2">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            icon="mdi:facebook"
            className="w-5 h-5 text-blue-600 hover:text-blue-700"
          />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            icon="mdi:instagram"
            className="w-5 h-5 text-blue-600 hover:text-blue-700"
          />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Icon
            icon="mdi:twitter"
            className="w-5 h-5 text-blue-600 hover:text-blue-700"
          />
        </a>
      </div>
    </div>
  </div>
);

const TeamSection = () => (
  <div className="bg-[#f9f9f9] w-full py-20 flex flex-col items-center">
    <div className="text-center max-w-xl mb-12">
      <h2 className="text-3xl font-bold text-text-color">Meet Our Team</h2>
      <p className="text-sm text-second-text-color mt-2">
        Problems trying to resolve the conflict between the two major realms of
        Classical physics: Newtonian mechanics
      </p>
    </div>
    <div className="flex flex-wrap justify-center gap-8">
      <TeamCard
        image={teamUser1}
        name="Jane Doe"
        profession="Marketing Manager"
      />
      <TeamCard
        image={teamUser2}
        name="John Smith"
        profession="Product Designer"
      />
      <TeamCard
        image={teamUser3}
        name="Emily Davis"
        profession="Software Engineer"
      />
    </div>
  </div>
);

const CtaSectionTeam = () => (
  <div className="w-full py-16 bg-light-background-color flex flex-col items-center justify-center">
    <h2 className="text-3xl lg:text-4xl font-bold text-text-color text-center">
      Start your <span className="text-primary-color">14 days free trial</span>
    </h2>
    <p className="text-sm text-second-text-color text-center max-w-md mt-4">
      Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT
      official consequent.
    </p>
    <button className="mt-8 px-8 py-3 bg-primary-color text-light-text-color rounded-md text-base font-medium hover:bg-blue-600 transition">
      Try it free now
    </button>
    <div className="flex gap-6 mt-10">
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <Icon
          icon="mdi:twitter"
          className="w-6 h-6 text-blue-700 hover:text-blue-800"
        />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <Icon
          icon="mdi:facebook"
          className="w-6 h-6 text-blue-700 hover:text-blue-800"
        />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <Icon
          icon="mdi:instagram"
          className="w-6 h-6 text-blue-700 hover:text-blue-800"
        />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <Icon
          icon="mdi:linkedin"
          className="w-6 h-6 text-blue-700 hover:text-blue-800"
        />
      </a>
    </div>
  </div>
);

const CombinedTeamPage = () => {
  return (
    <div className="w-full">
      <TeamPageHeader />
      <TeamPageSection />
      <TeamSection />
      <CtaSectionTeam />
    </div>
  );
};

export default CombinedTeamPage;
