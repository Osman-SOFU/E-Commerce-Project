import { Icon } from "@iconify/react";
import technology1 from "../icons/contactHeaderImg.png";

export const ContactPageHeader = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-full min-h-screen bg-light-background-color p-10">
      {/* Sol Kısım - İletişim Bilgileri */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 w-full lg:w-1/2">
        <h5 className="text-sm font-semibold text-text-color">CONTACT US</h5>
        <h1 className="text-4xl font-bold text-text-color leading-tight">
          Get in touch <br className="hidden lg:block" /> today!
        </h1>
        <p className="text-base text-second-text-color max-w-md">
          We know how large objects will act, <br className="hidden lg:block" />{" "}
          but things on a small scale just do not act that way.
        </p>
        <div className="space-y-2">
          <p className="text-lg font-medium text-text-color">
            Phone : +451 215 215
          </p>
          <p className="text-lg font-medium text-text-color">
            Fax : +451 215 215
          </p>
        </div>
        <div className="flex gap-4 mt-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              icon="mdi:twitter"
              className="w-6 h-6 text-blue-700 hover:text-blue-800 cursor-pointer"
            />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              icon="mdi:facebook"
              className="w-6 h-6 text-blue-700 hover:text-blue-800 cursor-pointer"
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              icon="mdi:instagram"
              className="w-6 h-6 text-blue-700 hover:text-blue-800 cursor-pointer"
            />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              icon="mdi:linkedin"
              className="w-6 h-6 text-blue-700 hover:text-blue-800 cursor-pointer"
            />
          </a>
        </div>
      </div>

      {/* Sağ Kısım - Görsel ve Dekoratif Öğeler */}
      <div className="relative w-full lg:w-1/2 flex items-center justify-center mt-10 lg:mt-0">
        <div className="relative w-[320px] h-[400px] lg:w-[500px] lg:h-[650px]">
          <div className="absolute w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] top-10 left-10 bg-[#ffe9ea] rounded-full"></div>
          <div className="absolute w-[40px] h-[40px] top-0 left-0 bg-[#ffe9ea] rounded-full"></div>
          <img
            src={technology1}
            alt="Family Shopping"
            className="absolute w-full h-full object-cover rounded-lg"
          />
          <div className="absolute w-[15px] h-[15px] top-1/2 right-0 bg-[#ffe9ea] rounded-full"></div>
          <div className="absolute w-[9px] h-[9px] bottom-5 left-5 bg-[#977df4] rounded-full"></div>
          <div className="absolute w-[9px] h-[9px] top-1/4 right-5 bg-[#977df4] rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactPageHeader;
