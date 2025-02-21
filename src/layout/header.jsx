import { Link } from "react-router-dom";
import headerDesktopImg from "../icons/headerDesktopImg.svg";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="w-full max-w-[1440px] mx-auto p-4 sm:px-6 lg:px-8">
      <NavBar />
      {/* Banner Bölümü */}
      <div className="relative w-full max-w-[1360px] mx-auto bg-gradient-to-b from-blue-300 to-teal-300 p-10 lg:flex lg:items-center lg:justify-between rounded-2xl shadow-md">
        <div className="text-center lg:text-left lg:w-1/2">
          <p className="text-sm text-blue-900 font-semibold">SUMMER 2020</p>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mt-2">
            NEW COLLECTION
          </h1>
          <p className="text-gray-700 mt-3">
            We know how large objects will act, but things on a small scale.
          </p>
          <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
            <Link to="/shop" className="text-white">
              SHOP NOW
            </Link>
          </button>
        </div>

        {/* Görsel Bölümü */}
        <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center">
          <img
            src={headerDesktopImg}
            alt="New Collection"
            className="hidden lg:block w-[400px] rounded-2xl"
          />
          <img
            src={headerDesktopImg}
            alt="New Collection"
            className="lg:hidden w-[300px] rounded-2xl"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
