import arrow2 from "../icons/arrow-2.png";

const CtaSection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-16 bg-light-background-color relative">
      {/* Arrow Image */}
      <img
        src={arrow2}
        alt="Downward Arrow"
        className="w-16 h-16 mb-4 lg:mb-6 transform rotate-0"
      />

      {/* Headings */}
      <p className="text-sm font-semibold text-text-color text-center">
        WE Can't WAIT TO MEET YOU
      </p>
      <h2 className="text-4xl font-bold text-text-color text-center mt-2">
        Let’s Talk
      </h2>

      {/* Button */}
      <button className="mt-8 px-8 py-3 bg-primary-color text-light-text-color rounded-md text-base font-medium hover:bg-blue-600 transition">
        Try it free now
      </button>
    </div>
  );
};

export default CtaSection;
