import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";
import ProductCard from "../components/productCard";
import { Grid, List } from "lucide-react";

const FilterRowWithProducts = () => {
  const dispatch = useDispatch();

  // 🔥 Redux Store'dan Ürünleri Çekiyoruz!
  const { productList } = useSelector((state) => state.product);

  const [view, setView] = useState("grid");
  const [sortOption, setSortOption] = useState("popularity");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  useEffect(() => {
    dispatch(fetchProducts()); // ✅ API’den ürünleri çekiyoruz.
  }, [dispatch]);

  // ✅ Ürünleri fiyat ve popülariteye göre sıralama
  const sortedProducts = [...productList].sort((a, b) => {
    if (sortOption === "price-low-high") return a.price - b.price;
    if (sortOption === "price-high-low") return b.price - a.price;
    return 0;
  });

  // ✅ Sayfalama (Pagination) Mantığı
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const totalPages = Math.ceil(productList.length / productsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const colorOptions = ["#1DA1F2", "#2AA198", "#E67E22", "#2AA198"];

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Filter Row */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-between items-center py-6 rounded-lg shadow-sm gap-4 text-center sm:text-left">
        <div className="text-gray-700 font-medium w-full sm:w-auto">
          Showing all {sortedProducts.length} results
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto justify-center">
          <span className="text-gray-700 font-medium">Views:</span>
          <div className="flex gap-2">
            <button
              className={`w-10 h-10 flex items-center justify-center rounded-md border ${
                view === "grid"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => setView("grid")}
            >
              <Grid size={20} />
            </button>
            <button
              className={`w-10 h-10 flex items-center justify-center rounded-md border ${
                view === "list"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => setView("list")}
            >
              <List size={20} />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto justify-center">
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="w-full sm:w-[160px] h-[50px] border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 focus:outline-none"
          >
            <option value="popularity">Popularity</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
          </select>
          <button className="bg-blue-500 text-white px-5 py-2.5 rounded-md hover:bg-blue-600 w-full sm:w-auto">
            Filter
          </button>
        </div>
      </div>

      {/* Product Display */}
      {view === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {paginatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-6 mt-8">
          {paginatedProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col sm:flex-row items-center gap-6 p-4 rounded-lg"
            >
              <img
                src={
                  product.images?.[0]?.url || "https://via.placeholder.com/150"
                }
                alt={product.name}
                className="w-[150px] h-[150px] object-cover rounded-md"
              />
              <div className="flex flex-col items-center sm:items-start">
                <h3 className="text-gray-900 font-bold text-lg text-center sm:text-left">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm text-center sm:text-left">
                  {product.description}
                </p>
                <div className="flex gap-2 mt-2">
                  <span className="text-gray-400 line-through">
                    ${product.oldPrice || (product.price * 1.2).toFixed(2)}
                  </span>
                  <span className="text-green-500 font-bold">
                    ${product.price}
                  </span>
                </div>
                <div className="flex gap-2 mt-3">
                  {colorOptions.map((color, idx) => (
                    <button
                      key={idx}
                      className="w-5 h-5 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      style={{ backgroundColor: color }}
                      onClick={() => alert(`Selected color: ${color}`)}
                      aria-label={`Select color ${color}`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center items-center flex-wrap gap-2 mt-10">
        <button
          className={`px-4 py-2 border rounded-md ${
            currentPage === 1
              ? "text-gray-400"
              : "text-gray-700 hover:bg-gray-100"
          }`}
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        >
          First
        </button>
        {[...Array(totalPages)].map((_, pageIndex) => (
          <button
            key={pageIndex}
            className={`px-4 py-2 border rounded-md ${
              currentPage === pageIndex + 1
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => handlePageChange(pageIndex + 1)}
          >
            {pageIndex + 1}
          </button>
        ))}
        <button
          className={`px-4 py-2 border rounded-md ${
            currentPage === totalPages
              ? "text-gray-400"
              : "text-gray-700 hover:bg-gray-100"
          }`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FilterRowWithProducts;
