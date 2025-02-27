import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchCategories } from "../redux/actions/categoryActions";
import { fetchProductsByCategory } from "../redux/actions/productActions";
import { slugify } from "../utils/slugify";

const CategoryList = () => {
  const { categoryId } = useParams();
  console.log("Category ID:", categoryId); // ✅ Kontrol
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  const { productList } = useSelector((state) => state.product);
  console.log("Fetched Products:", productList); // 🔎 Kontrol

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProductsByCategory(Number(categoryId))).then((res) => {
      console.log("Fetched Products:", res); // Ürünleri kontrol edin
    });
  }, [dispatch, categoryId]);

  if (!Array.isArray(productList)) {
    console.error("productList is not an array:", productList); // 🛑 Kontrol
    return <div>Error: Products not loaded properly.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Top 5 Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {[...categories] // Array’in kopyasını alın
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 5)
          .map((category) => (
            <Link
              key={category.id}
              to={`/shop/${category.gender}/${slugify(category.title)}/${
                category.id
              }`}
              className="relative rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={category.img}
                alt={category.title}
                className="w-full h-40 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-white">
                <h3 className="text-lg font-bold">{category.title}</h3>
              </div>
            </Link>
          ))}
      </div>

      <h2 className="text-2xl font-bold mb-6">Products</h2>
      {productList.length === 0 ? (
        <p className="text-center text-gray-500">No products found.</p>
      ) : (
        productList.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow-md hover:shadow-lg transition"
          >
            <img
              src={
                product.images?.[0]?.url || "https://via.placeholder.com/150"
              }
              alt={product.name}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-green-600 font-bold">{product.price} TL</p>
            <p className="text-yellow-500">Rating: {product.rating}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default CategoryList;
