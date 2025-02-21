import NavBar from "../layout/navBar";
import Footer from "../layout/footer";
import Client from "../layout/client";
import ShopPageCard from "../components/shopPageCard";
import FilterRowWithProducts from "../layout/filterRowWithProducts";

import { Link } from "react-router-dom";

const ShopPage = () => {
  return (
    <>
      <div className="w-full max-w-[1440px] mx-auto p-4 sm:px-6 lg:px-8 font-[Montserrat]">
        <NavBar />
        <div className="mt-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold mb-4 ml-6">Shop</h1>
          <nav className="text-gray-700">
            <Link
              to="/"
              className="breadcrumb-link text-3xl font-bold mb-4 hover:text-gray-500"
            >
              Home
            </Link>
            <span className="breadcrumb-separator text-3xl mb-4"> &gt; </span>
            <span className="breadcrumb-current text-3xl font-bold mb-4">
              Shop
            </span>
          </nav>
        </div>
      </div>
      <ShopPageCard />
      <FilterRowWithProducts />
      <Client />
      <Footer />
    </>
  );
};

export default ShopPage;
