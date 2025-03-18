import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedProduct } from "../redux/actions/productActions"; // ✅ Redux Action'ı ekledik
import { slugify } from "../utils/slugify";

const ProductCard = ({ product }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleCardClick = () => {
    dispatch(setSelectedProduct(product)); // ✅ Ürünü Redux'a kaydet

    const category = product.category_id;
    const gender = "unisex"; // Eğer varsa gerçek değeriyle değiştir
    const categoryName = "fashion"; // Eğer varsa gerçek değeriyle değiştir
    const productNameSlug = slugify(product.name);

    history.push(
      `/shop/${gender}/${categoryName}/${category}/${productNameSlug}/${product.id}`
    );
  };

  return (
    <div
      onClick={handleCardClick}
      className="flex flex-col items-center flex-1 min-w-[250px] max-w-[295px] bg-white shadow-md p-4 rounded-lg cursor-pointer hover:shadow-lg transition-shadow hover:scale-105"
    >
      <img
        src={product.images?.[0]?.url || "https://via.placeholder.com/295"}
        alt={product.name || "Product"}
        className="w-full h-[360px] object-cover rounded-lg"
      />
      <h3 className="text-gray-900 font-bold text-lg mt-4 text-center">
        {product.name || "Product Name"}
      </h3>
      <p className="text-gray-500 text-sm text-center">
        {product.description || "Product Description"}
      </p>
      <div className="flex gap-2 mt-2">
        <span className="text-gray-400 line-through">
          $
          {product.oldPrice ||
            (product.price ? (product.price * 1.2).toFixed(2) : "N/A")}
        </span>
        <span className="text-green-500 font-bold">
          ${product.price || "N/A"}
        </span>
      </div>
      <div className="mt-3 w-full text-center text-gray-600 text-sm">
        <p>
          <strong>Stock:</strong> {product.stock ?? "Unknown"}
        </p>
        <p>
          <strong>Rating:</strong> ⭐{" "}
          {product.rating ? product.rating.toFixed(1) : "N/A"}
        </p>
        <p>
          <strong>Sold:</strong> {product.sell_count ?? "Unknown"} pcs
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
