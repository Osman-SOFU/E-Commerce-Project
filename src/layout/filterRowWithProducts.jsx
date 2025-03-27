import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import ReactPaginate from "react-paginate";
import {
  fetchProducts,
  fetchProductsByCategory,
} from "../redux/actions/productActions";
import ProductCard from "../components/productCard";

const FilterRowWithProducts = () => {
  const dispatch = useDispatch();
  const { categoryId } = useParams();
  const location = useLocation(); // 🔥 Mevcut URL bilgisini al

  const productList = useSelector((state) => state.product.productList);
  const totalProducts = useSelector((state) => state.product.total);

  const [sortOption, setSortOption] = useState("");
  const [filterText, setFilterText] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [productsPerPage] = useState(25);

  useEffect(() => {
    const offset = currentPage * productsPerPage;
    if (location.pathname === "/shop") {
      // 🔥 Eğer direkt shop sayfasındaysak, tüm ürünleri çek
      dispatch(fetchProducts(`limit=${productsPerPage}&offset=${offset}`));
    } else if (categoryId && productList.length === 0) {
      // 🔥 Eğer kategori sayfasındaysak, ilgili kategoriyi çek
      dispatch(
        fetchProductsByCategory(
          categoryId,
          `limit=${productsPerPage}&offset=${offset}`
        )
      );
    }
  }, [
    dispatch,
    categoryId,
    productList.length,
    location.pathname,
    currentPage,
    productsPerPage,
  ]); // 🔥 location.pathname eklendi

  // 🔥 API'den gelen ürünleri seçili kategoriye göre filtrele
  const filteredProducts = productList.filter(
    (product) =>
      (!categoryId || product.category_id == categoryId) &&
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

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center text-gray-500">No products found.</p>
        )}
      </div>

      {/* Pagination */}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={Math.ceil(totalProducts / productsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName="flex justify-center items-center space-x-2 mt-6"
        pageClassName="border rounded-md px-4 py-2 hover:bg-gray-200"
        pageLinkClassName="text-gray-700"
        previousClassName="border rounded-md px-4 py-2 hover:bg-gray-200"
        previousLinkClassName="text-gray-700"
        nextClassName="border rounded-md px-4 py-2 hover:bg-gray-200"
        nextLinkClassName="text-gray-700"
        breakClassName="px-4 py-2"
        activeClassName="bg-blue-500 text-white border-blue-500"
        disabledClassName="opacity-50 cursor-not-allowed"
      />
    </div>
  );
};

export default FilterRowWithProducts;
