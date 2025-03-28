import img from "../icons/aboutUsFooterImg.png";

const AboutUsFooter = () => {
  return (
    <div className="w-full bg-[#2e77c4] py-16 flex flex-col lg:flex-row justify-between items-center px-10 lg:px-20 text-white">
      {/* Metin Alanı */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <p className="text-sm font-semibold uppercase">WORK WITH US</p>
        <h2 className="text-3xl lg:text-4xl font-extrabold my-4">
          Now Let’s grow Yours
        </h2>
        <p className="text-sm leading-relaxed mb-6 max-w-md mx-auto lg:mx-0">
          The gradual accumulation of information about atomic and small-scale
          behavior during the first quarter of the 20th century.
        </p>
        <button className="px-6 py-2 border border-white rounded-md font-semibold">
          Button
        </button>
      </div>

      {/* Görsel Alanı (sadece desktop) */}
      <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center hidden lg:flex">
        <img
          src={img}
          alt="Testimonial Image"
          className="rounded-lg object-cover max-w-full"
        />
      </div>
    </div>
  );
};

export default AboutUsFooter;
