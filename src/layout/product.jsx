import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../components/productCard";
import { fetchProducts } from "../redux/actions/productActions";

const Product = () => {
  const [showSlider, setShowSlider] = useState(false);
  const sliderRef = useRef(null); // Slider'ı kontrol etmek için referans
  const dispatch = useDispatch();

  // 🔥 Ürünleri Redux Store'dan çekiyoruz!
  const { productList, fetchState } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical: false,
    verticalSwiping: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "40px",
        },
      },
    ],
    autoplay: true,
  };

  const handleWheel = (e) => {
    e.preventDefault();
    if (e.deltaY > 0) {
      sliderRef.current.slickNext(); // Aşağı kaydırma
    } else {
      sliderRef.current.slickPrev(); // Yukarı kaydırma
    }
  };

  if (fetchState === "LOADING") {
    return <div className="text-center text-xl">Loading...</div>;
  }

  if (fetchState === "ERROR") {
    return (
      <div className="text-red-500 text-center">Failed to fetch products.</div>
    );
  }

  return (
    <div className="flex flex-col items-center max-w-[1300px] mx-auto px-4 py-10">
      <h2 className="text-center text-gray-500 mb-2">Featured Products</h2>
      <h2 className="text-xl font-bold text-center mb-2">
        BESTSELLER PRODUCTS
      </h2>
      <p className="text-center text-gray-500 mb-6">
        Problems trying to resolve the conflict between
      </p>

      {/* Grid Layout for Products */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {productList.slice(0, 10).map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      {/* Slider for Extra Products */}
      {showSlider && (
        <div className="mt-6 w-full max-w-[1300px]" onWheel={handleWheel}>
          <Slider {...sliderSettings} ref={sliderRef}>
            {productList.slice(11).map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </Slider>
        </div>
      )}

      {/* Load More Button */}
      <div className="text-center mt-12">
        <button
          onClick={() => setShowSlider(!showSlider)}
          className="border border-blue-500 text-blue-500 px-6 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition"
        >
          {showSlider ? "HIDE PRODUCTS" : "LOAD MORE PRODUCTS"}
        </button>
      </div>
    </div>
  );
};

export default Product;
