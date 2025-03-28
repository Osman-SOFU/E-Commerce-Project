import { useSelector } from "react-redux";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductInfoSection from "../layout/productInfoSection";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchProductById } from "../redux/actions/productActions";
import { useDispatch } from "react-redux";

const ProductDetailCard = () => {
  const selectedProduct = useSelector((state) => state.product.selectedProduct);
  const [selectedImage, setSelectedImage] = useState(0);
  const { productId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!selectedProduct && productId) {
      dispatch(fetchProductById(productId));
    }
  }, [dispatch, selectedProduct, productId]);

  if (!selectedProduct) return <p>Loading product...</p>;

  return (
    <div className="w-full flex flex-col items-center px-4 py-8 md:py-16 md:px-16">
      <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl">
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <div className="relative w-full aspect-w-4 aspect-h-3 bg-gray-200 rounded-lg overflow-hidden max-w-md">
            <img
              src={selectedProduct.images[selectedImage]?.url}
              alt={selectedProduct.name}
            />
            <button
              onClick={() =>
                setSelectedImage((prev) =>
                  prev > 0 ? prev - 1 : selectedProduct.images.length - 1
                )
              }
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() =>
                setSelectedImage((prev) =>
                  prev < selectedProduct.images.length - 1 ? prev + 1 : 0
                )
              }
            >
              <ChevronRight />
            </button>
          </div>
          <div className="flex gap-3 mt-4">
            {selectedProduct.images.map((img, index) => (
              <img
                key={index}
                src={img.url}
                alt="Thumbnail"
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
        </div>
        <ProductInfoSection />
      </div>
    </div>
  );
};

export default ProductDetailCard;
