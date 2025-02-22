import { Heart, ShoppingCart, Eye, Star } from "lucide-react";
import productData from "../data/productData";

const ProductInfoSection = () => {
  const { price } = productData;

  return (
    <div className="w-full md:w-1/2 flex flex-col justify-between md:self-start md:mt-0 mt-8">
      <div className="w-full md:ml-4 md:pl-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Floating Phone
        </h1>
        <div className="flex items-center gap-2 mb-4">
          {[...Array(4)].map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 text-yellow-500"
              fill="currentColor"
            />
          ))}
          <Star
            className="w-5 h-5 text-yellow-500"
            fill="currentColor"
            style={{ clipPath: "inset(0 50% 0 0)" }}
          />
          <span className="text-sm text-gray-500">10 Reviews</span>
        </div>
        <p className="text-3xl font-bold text-gray-800 mb-2">{price}</p>
        <p className="text-sm text-gray-500 mb-4">
          Availability:{" "}
          <span className="text-blue-600 font-semibold">In Stock</span>
        </p>
        <p className="text-sm text-gray-500 leading-6 mb-6">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </p>
        <hr className="w-full mb-6" />
        <div className="flex gap-4 mb-6">
          <button className="w-8 h-8 rounded-full bg-blue-500" />
          <button className="w-8 h-8 rounded-full bg-green-500" />
          <button className="w-8 h-8 rounded-full bg-orange-500" />
          <button className="w-8 h-8 rounded-full bg-gray-800" />
        </div>
        <div className="flex flex-wrap gap-4">
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md">
            Select Options
          </button>
          <button className="p-2 rounded-full border border-gray-300 hover:border-blue-500">
            <Heart className="w-6 h-6" />
          </button>
          <button className="p-2 rounded-full border border-gray-300 hover:border-blue-500">
            <ShoppingCart className="w-6 h-6" />
          </button>
          <button className="p-2 rounded-full border border-gray-300 hover:border-blue-500">
            <Eye className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoSection;
