import { User, Search, ShoppingCart, Menu } from "lucide-react";

import headerDesktopImg from "../icons/headerDesktopImg.svg";
import phone from "../icons/phone.svg";
import mail from "../icons/mail.svg";
import instagram from "../icons/instagram.svg";
import youtube from "../icons/youtube.svg";
import facebook from "../icons/facebook.svg";
import twitter from "../icons/twitter.svg";
import headerVector from "../icons/headerVector.svg";
import headerUser from "../icons/headerUser.svg";
import headerShoppingCard from "../icons/headerShoppingCard.svg";
import headerFavori from "../icons/headerFavori.svg";

import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full max-w-[1440px] mx-auto p-4 sm:px-6 lg:px-8 bg-white shadow-md">
      {/* Üst Menü - Masaüstü Görünüm */}
      <div className="hidden lg:flex justify-between items-center px-6 py-3 bg-gray-900 text-white text-sm">
        <div className="flex items-center space-x-4">
          <img src={phone} alt="Phone" className="w-4 h-4" />
          <span>(225) 555-0118</span>
          <img src={mail} alt="Mail" className="w-4 h-4" />
          <span>michelle.rivera@example.com</span>
        </div>
        <div>
          <span>Follow Us and get a chance to win 80% off</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>Bizi Takip Edin: </span>
          <img
            src={instagram}
            alt="Instagram"
            className="w-5 h-5 cursor-pointer"
          />
          <img src={youtube} alt="YouTube" className="w-5 h-5 cursor-pointer" />
          <img
            src={facebook}
            alt="Facebook"
            className="w-5 h-5 cursor-pointer"
          />
          <img src={twitter} alt="Twitter" className="w-5 h-5 cursor-pointer" />
        </div>
      </div>

      {/* Ana Menü */}
      <nav className="flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold">Bandage</div>
        <div className="hidden lg:flex space-x-6 items-center text-gray-700 font-medium">
          <a href="#" className="hover:text-black">
            Home
          </a>
          <a href="#" className="hover:text-black flex items-center">
            Shop{" "}
            <img src={headerVector} alt="Dropdown" className="w-3 h-3 ml-1" />
          </a>
          <a href="#" className="hover:text-black">
            About
          </a>
          <a href="#" className="hover:text-black">
            Blog
          </a>
          <a href="#" className="hover:text-black">
            Contact
          </a>
          <a href="#" className="hover:text-black">
            Pages
          </a>
        </div>
        <div className="hidden lg:flex items-center space-x-4 text-blue-500">
          <img src={headerUser} alt="User" className="w-6 h-6 cursor-pointer" />
          <span className="cursor-pointer">Login / Register</span>
          <Search className="w-6 h-6 cursor-pointer" />
          <img
            src={headerShoppingCard}
            alt="Shopping Cart"
            className="w-14 h-14 cursor-pointer"
          />
          <img
            src={headerFavori}
            alt="Favorites"
            className="w-14 h-14 cursor-pointer"
          />
        </div>
        <div className="lg:hidden flex items-center space-x-4">
          <User className="w-6 h-6 cursor-pointer" />
          <Search className="w-6 h-6 cursor-pointer" />
          <ShoppingCart className="w-6 h-6 cursor-pointer" />
          <Menu
            className="w-6 h-6 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </nav>

      {/* Mobil Menü */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col items-center py-4 space-y-4 bg-white shadow-md">
          <a href="#" className="text-gray-700">
            Home
          </a>
          <a href="#" className="text-gray-700">
            Product
          </a>
          <a href="#" className="text-gray-700">
            Pricing
          </a>
          <a href="#" className="text-gray-700">
            Contact
          </a>
        </div>
      )}

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
            SHOP NOW
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
