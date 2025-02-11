import { contens } from "../data/contents";

const PageContent = () => {
  return (
    <div className="p-10 md:p-20 flex justify-center items-center min-h-screen">
      <div className="flex flex-col md:flex-row items-center md:items-center max-w-6xl mx-auto gap-16">
        {/* Image Section */}
        <div className="flex gap-6">
          {contens.map((content, index) => (
            <img
              key={`img-${index}`}
              src={content.image}
              alt={`Image ${index + 1}`}
              className="w-40 md:w-80 object-cover rounded-lg"
            />
          ))}
        </div>
        {/* Content Section */}
        <div className="text-center md:text-left md:flex md:flex-col md:justify-center max-w-md">
          <p className="text-[#23A6F0] font-bold text-lg">Featured Products</p>
          <h2 className="text-4xl font-bold text-[#252B42] leading-snug">
            We love what we do
          </h2>
          <p className="text-gray-600 mt-4 text-sm leading-6">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics.
          </p>
          <p className="text-gray-600 mt-4 text-sm leading-6">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageContent;
