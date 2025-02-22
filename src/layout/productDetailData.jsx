import ProductCard from "../components/productCard";
import { products } from "../data/products";

const ProductDetailData = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-screen-xl">
        <h1 className="text-3xl font-bold my-6 lg:ml-32 text-center lg:text-left">
          BESTSELLER PRODUCTS
        </h1>
        <hr className="w-full mb-6 mx-6" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 mx-10">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailData;
