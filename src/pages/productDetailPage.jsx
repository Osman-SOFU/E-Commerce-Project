import NavBar from "../layout/navBar";
import Footer from "../layout/footer";
import Client from "../layout/client";
import ProductDetailCard from "../components/productDetailCard";
import ProductDetailDescription from "../layout/productDetailDescription";

import { Link } from "react-router-dom";
import ProductDetailData from "../layout/productDetailData";

const ProductDetailPage = () => {
  return (
    <>
      <NavBar />
      <div className="font-[Montserrat]">
        <div className="w-full max-w-[1440px] mx-auto p-4 sm:px-6 lg:px-8 font-[Montserrat]">
          <div className="mt-8 ml-6 items-start px-4 sm:px-6 lg:px-8">
            <nav className="text-gray-700">
              <Link
                to="/"
                className="breadcrumb-link text-3xl font-bold mb-4 hover:text-gray-500"
              >
                Home
              </Link>
              <span className="breadcrumb-separator text-3xl mb-4"> &gt; </span>
              <span className="breadcrumb-current text-3xl font-bold mb-4">
                Product
              </span>
            </nav>
          </div>
        </div>
        <div className="px-4 sm:px-6 lg:px-8">
          <ProductDetailCard />
          <ProductDetailDescription />
          <ProductDetailData />
        </div>
        <Client />
        <Footer />
      </div>
    </>
  );
};

export default ProductDetailPage;
