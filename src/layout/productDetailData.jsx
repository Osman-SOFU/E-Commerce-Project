import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";
import ProductCard from "../components/productCard";

const ProductDetailData = () => {
  const dispatch = useDispatch();

  // 🔥 Redux Store'dan Ürünleri Çekiyoruz!
  const { productList } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts()); // ✅ API’den ürünleri çekiyoruz.
  }, [dispatch]);

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-screen-xl">
        <h1 className="text-3xl font-bold my-6 lg:ml-32 text-center lg:text-left">
          BESTSELLER PRODUCTS
        </h1>
        <hr className="w-full mb-6 mx-6" />

        {/* Ürünleri Redux Store'dan Listeleme */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 mx-10">
          {productList.length > 0 ? (
            productList.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-4">
              Loading products...
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailData;
