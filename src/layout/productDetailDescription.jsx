import { ChevronRight } from "lucide-react";
import { useSelector } from "react-redux";

const ProductDetailDescription = () => {
  const selectedProduct = useSelector((state) => state.product.selectedProduct);

  if (!selectedProduct) return <p>Loading product details...</p>;

  return (
    <div className="w-full flex flex-col items-center overflow-hidden">
      {/* Navbar Section */}
      <div className="w-full h-20 flex justify-center items-center">
        <span className="mx-4 text-lg font-semibold cursor-pointer">
          Description
        </span>
        <span className="mx-4 text-lg font-semibold cursor-pointer">
          Additional Information
        </span>
        <span className="mx-4 text-lg font-semibold cursor-pointer">
          Reviews ({selectedProduct.sell_count})
        </span>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 p-6 w-full max-w-7xl">
        {/* Image Section */}
        <div className="md:w-1/3 w-full flex justify-center">
          <div className="rounded-xl overflow-hidden w-full h-72 md:h-96">
            <img
              className="w-full h-full object-contain rounded-xl"
              src={
                selectedProduct.images?.[0]?.url ||
                "https://via.placeholder.com/400"
              }
              alt={selectedProduct.name}
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="md:w-1/3 w-full flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {selectedProduct.name}
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            {selectedProduct.description}
          </p>
        </div>

        {/* Chevron List Section */}
        <div className="md:w-1/3 w-full flex flex-col gap-10">
          {[1, 2].map((_, sectionIndex) => (
            <div key={sectionIndex} className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold text-gray-800">
                Product Features
              </h2>
              {[1, 2, 3, 4]
                .slice(0, sectionIndex === 0 ? 4 : 3)
                .map((_, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <ChevronRight className="w-4 h-4 text-gray-500" />
                    <p className="text-gray-600 text-sm">
                      High-quality fabric and elegant design
                    </p>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailDescription;
