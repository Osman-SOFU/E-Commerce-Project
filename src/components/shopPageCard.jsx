import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { slugify } from "../utils/slugify";
import { fetchCategories } from "../redux/actions/categoryActions";

const ShopPageCard = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-center gap-4 py-8">
        {[...categories] // Array’in kopyasını alın
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 5)
          .map((category) => (
            <Link
              key={category.id}
              to={`/shop/${category.gender}/${slugify(category.title)}/${
                category.id
              }`}
              className="w-full sm:w-[300px] md:w-[300px] lg:w-[205px] relative"
            >
              <div className="w-full aspect-[3/4] relative rounded-lg overflow-hidden">
                <img
                  src={category.img}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-25" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                  <span className="text-lg font-bold">{category.title}</span>
                  <div className="flex items-center gap-1 text-white text-sm bg-[#252B42] px-2 py-1 rounded-full">
                    ⭐ {category.rating}
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default ShopPageCard;
