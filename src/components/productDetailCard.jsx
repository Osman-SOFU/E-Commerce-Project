import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import productData from "../data/productData";
import ProductInfoSection from "../layout/productInfoSection";

const ProductDetailPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const { images } = productData;

  return (
    <div className="w-full flex flex-col items-center px-4 py-8 md:py-16 md:px-16">
      {/* Product Section */}
      <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl">
        {/* Images Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <div className="relative w-full aspect-w-4 aspect-h-3 bg-gray-200 rounded-lg overflow-hidden max-w-md">
            <img
              src={images[selectedImage]}
              alt="Product"
              className="w-full h-full object-cover"
            />
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
              onClick={() =>
                setSelectedImage((prev) =>
                  prev > 0 ? prev - 1 : images.length - 1
                )
              }
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
              onClick={() =>
                setSelectedImage((prev) =>
                  prev < images.length - 1 ? prev + 1 : 0
                )
              }
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex gap-3 mt-4">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setSelectedImage(index)}
                className={`w-16 h-12 rounded-md cursor-pointer object-cover border ${
                  selectedImage === index
                    ? "border-blue-500"
                    : "border-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Product Info Section */}
        <ProductInfoSection />
      </div>
    </div>
  );
};

export default ProductDetailPage;
