import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";
import { useHistory } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  // Redux Store'dan Ürünleri Çek
  const { fetchState } = useSelector((state) => state.product);

  // API'den Ürünleri Çek
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Eğer ürünler yükleniyorsa
  if (fetchState === "LOADING") {
    return <div className="text-center text-xl">Loading...</div>;
  }

  // Eğer hata varsa
  if (fetchState === "ERROR") {
    return (
      <div className="text-red-500 text-center">Failed to fetch products.</div>
    );
  }

  return (
    <div
      onClick={() => history.push(`/product/${product.id}`)}
      className="flex flex-col items-center flex-1 min-w-[250px] max-w-[295px] bg-white shadow-md p-4 rounded-lg"
    >
      {/* Ürün Resmi */}
      <img
        src={product.images?.[0]?.url || "https://via.placeholder.com/295"}
        alt={product.name || "Ürün"}
        className="w-full h-[360px] object-cover rounded-lg"
      />

      {/* Ürün İsmi */}
      <h3 className="text-gray-900 font-bold text-lg mt-4 text-center">
        {product.name || "Ürün adı yok"}
      </h3>

      {/* Açıklama */}
      <p className="text-gray-500 text-sm text-center">
        {product.description || "Açıklama bulunamadı"}
      </p>

      {/* Fiyatlandırma */}
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

      {/* Ek Bilgiler */}
      <div className="mt-3 w-full text-center text-gray-600 text-sm">
        <p>
          <strong>Stock:</strong> {product.stock ?? "Bilinmiyor"}
        </p>
        <p>
          <strong>Rating:</strong> ⭐{" "}
          {product.rating ? product.rating.toFixed(1) : "N/A"}
        </p>
        <p>
          <strong>Sold:</strong> {product.sell_count ?? "Bilinmiyor"} pcs
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
