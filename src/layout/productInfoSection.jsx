import { Heart, ShoppingCart, Eye, Star } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/shoppingCartActions"; // Import the action

const ProductInfoSection = () => {
  const dispatch = useDispatch();
  const selectedProduct = useSelector((state) => state.product.selectedProduct);

  if (!selectedProduct) return <p>Loading product info...</p>;

  // ⭐ Yıldızları Dinamik Olarak Ayarla
  const rating = selectedProduct.rating || 0; // Null veya undefined olursa 0 yap
  const fullStars = Math.floor(rating); // Tam dolu yıldız sayısı
  const hasHalfStar = rating % 1 >= 0.5; // Yarım yıldız var mı?
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Boş yıldız sayısı

  const handleAddToCart = () => {
    dispatch(addToCart(selectedProduct));
  };

  return (
    <div className="w-full md:w-1/2 flex flex-col justify-between md:self-start md:mt-0 mt-8">
      <div className="w-full md:ml-4 md:pl-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          {selectedProduct.name}
        </h1>

        {/* ⭐ Dinamik Yıldız Sistemi */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(fullStars)].map((_, i) => (
            <Star
              key={`full-${i}`}
              className="w-5 h-5 text-yellow-500"
              fill="currentColor"
            />
          ))}
          {hasHalfStar && (
            <Star
              className="w-5 h-5 text-yellow-500"
              fill="currentColor"
              style={{ clipPath: "inset(0 50% 0 0)" }}
            />
          )}
          {[...Array(emptyStars)].map((_, i) => (
            <Star key={`empty-${i}`} className="w-5 h-5 text-gray-300" />
          ))}
          <span className="text-sm text-gray-500 ml-2">
            {selectedProduct.rating.toFixed(1)} / 5 (
            {selectedProduct.sell_count} Reviews)
          </span>
        </div>

        <p className="text-3xl font-bold text-gray-800 mb-2">
          ${selectedProduct.price}
        </p>
        <p className="text-sm text-gray-500 mb-4">
          Availability:{" "}
          <span className="text-blue-600 font-semibold">
            {selectedProduct.stock} In Stock
          </span>
        </p>

        <p className="text-sm text-gray-500 leading-6 mb-6">
          {selectedProduct.description}
        </p>

        <hr className="w-full mb-6" />

        <div className="flex gap-4 mb-6">
          <button className="w-8 h-8 rounded-full bg-blue-500" />
          <button className="w-8 h-8 rounded-full bg-green-500" />
          <button className="w-8 h-8 rounded-full bg-orange-500" />
          <button className="w-8 h-8 rounded-full bg-gray-800" />
        </div>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={handleAddToCart}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md w-full"
          >
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
