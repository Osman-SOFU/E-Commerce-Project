import { blogs } from "../data/blogs";

const BlogCard = () => {
  return (
    <div className="flex flex-col items-center py-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 w-full max-w-5xl">
        {blogs.slice(0, 2).map(
          (
            card,
            index // Sadece ilk 2 blog gösterilecek
          ) => (
            <div
              key={index}
              className="flex flex-col md:flex-row bg-white shadow-lg rounded-xl overflow-hidden w-full max-w-[600px] border border-gray-200"
            >
              <div className="relative md:w-1/2">
                <img
                  src={card.image}
                  alt={card.title || "Blog Image"}
                  className="w-full h-56 md:h-full object-cover rounded-l-xl"
                />
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {card.tags[1]}
                </span>
                <div className="absolute bottom-2 left-2 flex gap-2">
                  <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition">
                    ❤️
                  </button>
                  <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition">
                    🛒
                  </button>
                  <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition">
                    👁️
                  </button>
                </div>
              </div>

              <div className="p-6 flex flex-col gap-3 md:w-1/2">
                <div className="flex justify-between items-center">
                  <span className="text-blue-500 font-bold text-sm">
                    {card.department}
                  </span>
                  <div className="flex items-center gap-1 text-white text-sm bg-[#252B42] px-2 py-1 rounded-full">
                    ⭐ {card.rating}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-800">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  We focus on ergonomics and meeting you where you work. It's
                  only a keystroke away.
                </p>
                <div className="flex items-center gap-4 text-gray-600 text-sm">
                  <span>📥 {card.sales}</span>
                  <span className="line-through">{card.oldPrice}</span>
                  <span className="text-green-600 font-bold">
                    {card.newPrice}
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-2 text-gray-600 text-sm">
                  <img
                    src={card.Icon_akar_icons}
                    alt="Calendar Icon"
                    className="w-4 h-4"
                  />
                  <span>{card.date}</span>
                  <img
                    src={card.Icon_ant_design_area}
                    alt="Chart Icon"
                    className="w-4 h-4"
                  />
                  <span>{card.comments}</span>
                </div>
                <div className="flex gap-2">
                  {card.colors.map((color, i) => (
                    <div
                      key={i}
                      className={`w-4 h-4 rounded-full ${color}`}
                    ></div>
                  ))}
                </div>
                <button className="mt-4 bg-blue-500 text-white py-2 rounded-lg text-sm flex items-center justify-center gap-2 hover:bg-blue-600 transition w-full md:w-auto">
                  Learn More
                  <img
                    src={card.Icon_arrow_next}
                    alt="Arrow Icon"
                    className="w-4 h-4"
                  />
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default BlogCard;
