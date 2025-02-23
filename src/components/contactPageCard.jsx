import { Icon } from "@iconify/react";

const ContactCard = ({ icon, email1, email2, dark }) => {
  return (
    <div
      className={`flex flex-col items-center gap-4 px-10 py-12 w-full max-w-sm rounded-md shadow-md ${
        dark
          ? "bg-dark-background-color text-light-text-color"
          : "bg-white text-text-color"
      }`}
    >
      <Icon icon={icon} className="w-16 h-16 text-primary-color" />

      <div className="text-center">
        <p className="font-medium">{email1}</p>
        <p className="font-medium">{email2}</p>
      </div>

      <p className="font-semibold text-lg">Get Support</p>

      <button className="px-6 py-2 border border-primary-color rounded-md text-primary-color font-medium hover:bg-primary-color hover:text-white transition">
        Submit Request
      </button>
    </div>
  );
};

const ContactPageCard = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-20 bg-light-background-color">
      <div className="text-center mb-12">
        <h5 className="text-sm font-semibold text-text-color">
          VISIT OUR OFFICE
        </h5>
        <h2 className="text-3xl lg:text-4xl font-bold text-text-color leading-snug mt-2">
          We help small businesses <br className="hidden lg:block" /> with big
          ideas
        </h2>
      </div>

      {/* Mobile Layout */}
      <div className="flex flex-col gap-8 lg:hidden">
        <ContactCard
          icon="mdi:phone"
          email1="georgia.young@example.com"
          email2="georgia.young@ple.com"
        />
        <ContactCard
          icon="mdi:map-marker"
          email1="georgia.young@example.com"
          email2="georgia.young@ple.com"
          dark
        />
        <ContactCard
          icon="mdi:email"
          email1="georgia.young@example.com"
          email2="georgia.young@ple.com"
        />
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex justify-center gap-10">
        <ContactCard
          icon="mdi:phone"
          email1="georgia.young@example.com"
          email2="georgia.young@ple.com"
        />
        <ContactCard
          icon="mdi:map-marker"
          email1="georgia.young@example.com"
          email2="georgia.young@ple.com"
          dark
        />
        <ContactCard
          icon="mdi:email"
          email1="georgia.young@example.com"
          email2="georgia.young@ple.com"
        />
      </div>
    </div>
  );
};

export default ContactPageCard;
