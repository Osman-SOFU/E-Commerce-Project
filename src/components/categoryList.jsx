import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchCategories } from "../redux/actions/categoryActions";

const CategoryList = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => {
              history.push(
                `/shop/${category.gender}/${category.name}/${category.id}`
              );
              setTimeout(() => window.location.reload(), 100); // 🔥 Sayfa güncellensin
            }}
            className="cursor-pointer p-4 rounded-lg shadow-md hover:bg-gray-200 transition"
          >
            <img
              src={category.img}
              alt={category.title}
              className="w-full h-32 object-cover"
            />
            <h3 className="text-lg font-bold mt-2">{category.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
