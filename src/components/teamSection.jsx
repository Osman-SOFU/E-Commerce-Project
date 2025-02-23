import { Icon } from "@iconify/react";
import teamUser1 from "../icons/gokhanOzdemir.png";
import teamUser2 from "../icons/osmanSofu.png";
import teamUser3 from "../icons/brooklynSimmons.png";

const TeamCard = ({ image, name, profession }) => {
  return (
    <div className="rounded-lg overflow-hidden w-[316px] flex flex-col items-center">
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
              className="w-5 h-5 text-blue-400 hover:text-blue-500"
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              icon="mdi:instagram"
              className="w-5 h-5 text-blue-400 hover:text-blue-500"
            />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              icon="mdi:twitter"
              className="w-5 h-5 text-blue-400 hover:text-blue-500"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

const TeamSection = () => {
  return (
    <div className=" w-full py-20 flex flex-col items-center">
      <div className="text-center max-w-xl mb-12">
        <h2 className="text-3xl font-bold text-text-color">Meet Our Team</h2>
        <p className="text-sm text-second-text-color mt-2">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <TeamCard
          image={teamUser1}
          name="Gökhan Özdemir"
          profession="Project Manager"
        />
        <TeamCard
          image={teamUser2}
          name="Osman Sofu"
          profession="Full Stack Developer"
        />
        <TeamCard
          image={teamUser3}
          name="Brooklyn Simmons"
          profession="Software Engineer"
        />
      </div>
    </div>
  );
};

export default TeamSection;
