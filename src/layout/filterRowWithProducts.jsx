import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductsByCategory } from "../redux/actions/productActions";
import ProductCard from "../components/productCard";

const FilterRowWithProducts = () => {
  const dispatch = useDispatch();
  const { categoryId } = useParams();

  const productList = useSelector((state) => state.product.productList);

  const [sortOption, setSortOption] = useState("");
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    if (categoryId && productList.length === 0) {
      dispatch(fetchProductsByCategory(categoryId));
    }
  }, [dispatch, categoryId, productList.length]); // 🔥 Sadece `productList.length` değiştiğinde çalıştır

  // 🔥 API'den gelen ürünleri seçili kategoriye göre filtrele
  const filteredProducts = productList.filter(
    (product) =>
      product.category_id === parseInt(categoryId) &&
      (product.name.toLowerCase().includes(filterText.toLowerCase()) ||
        product.description.toLowerCase().includes(filterText.toLowerCase()))
  );

  // 🔥 Sıralama işlemi
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "price:asc") return a.price - b.price;
    if (sortOption === "price:desc") return b.price - a.price;
    if (sortOption === "rating:asc") return a.rating - b.rating;
    if (sortOption === "rating:desc") return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4">
      {/* Filtreleme ve Sıralama */}
      <div className="flex flex-col sm:flex-row justify-between items-center py-6">
        <input
          type="text"
          placeholder="Filter products..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className="border px-3 py-2 rounded-md"
        />

        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border px-3 py-2 rounded-md"
        >
          <option value="">Sort by</option>
          <option value="price:asc">Price: Low to High</option>
          <option value="price:desc">Price: High to Low</option>
          <option value="rating:asc">Rating: Low to High</option>
          <option value="rating:desc">Rating: High to Low</option>
        </select>
      </div>

      {/* Ürün Listesi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default FilterRowWithProducts;
