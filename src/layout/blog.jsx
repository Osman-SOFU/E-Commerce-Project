import BlogCard from "../components/blogCard";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Blog = () => {
  const sliderRef = useRef(null); // Slider'ı kontrol etmek için referans

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
  };

  // Mouse tekerleği ile kaydırma fonksiyonu
  const handleWheel = (e) => {
    e.preventDefault();
    if (e.deltaY > 0) {
      sliderRef.current.slickNext(); // Aşağı kaydırma
    } else {
      sliderRef.current.slickPrev(); // Yukarı kaydırma
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div
        className="relative w-full max-w-8xl bg-white overflow-hidden"
        onWheel={handleWheel} // onWheel olayını dış kapsayıcıya ekliyoruz
      >
        <div className="flex flex-col items-center py-10 px-4">
          <div className="w-full max-w-6xl bg-white overflow-hidden">
            {/* Başlık */}
            <div className="text-center mb-8">
              <h3 className="text-blue-500 font-bold text-2xl">
                Practice Advice
              </h3>
              <h3 className="text-gray-800 text-5xl mt-2 font-bold">
                Featured Posts
              </h3>
            </div>
          </div>

          {/* Slider bileşeni */}
          <Slider ref={sliderRef} {...sliderSettings} className="w-full">
            {[...Array(2)].map((_, index) => (
              <div key={index} className="px-4 flex justify-center">
                <BlogCard />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Blog;
