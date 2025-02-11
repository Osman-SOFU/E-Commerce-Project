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
    <div className="flex flex-col items-center">
      <div
        className="relative w-full max-w-4xl bg-white overflow-hidden"
        onWheel={handleWheel} // onWheel olayını dış kapsayıcıya ekliyoruz
      >
        <div className="flex flex-col w-full items-center gap-10 px-6 py-10 relative">
          <div className="items-center flex flex-col relative">
            <div className="flex flex-col items-center gap-2">
              <div className="text-blue-500 font-bold text-sm text-center">
                Practice Advice
              </div>
              <div className="text-2xl font-bold text-gray-800 text-center">
                Featured Posts
              </div>
            </div>
          </div>

          {/* Slider bileşeni */}
          <Slider
            ref={sliderRef}
            {...sliderSettings}
            className="w-full max-w-md"
          >
            {[...Array(2)].map((_, index) => (
              <div key={index} className="flex flex-col gap-6">
                <div className="flex flex-col items-center">
                  <BlogCard />
                </div>
                <div className="flex flex-col items-center">
                  <BlogCard />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Blog;
