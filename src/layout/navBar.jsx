import { useState } from "react";
import { Link } from "react-router-dom";
import { User, Search, ShoppingCart, Menu } from "lucide-react";
import headerVector from "../icons/headerVector.svg";
import headerUser from "../icons/headerUser.svg";
import headerShoppingCard from "../icons/headerShoppingCard.svg";
import headerFavori from "../icons/headerFavori.svg";
import phone from "../icons/phone.svg";
import mail from "../icons/mail.svg";
import instagram from "../icons/instagram.svg";
import youtube from "../icons/youtube.svg";
import facebook from "../icons/facebook.svg";
import twitter from "../icons/twitter.svg";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
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
          <Link to="/" className="hover:text-black">
            Home
          </Link>
          <Link to="/shop" className="hover:text-black flex items-center">
            Shop
            <img src={headerVector} alt="Dropdown" className="w-3 h-3 ml-1" />
          </Link>
          <Link to="/team" className="hover:text-black">
            About
          </Link>
          <a href="#" className="hover:text-black">
            Blog
          </a>
          <Link to="/contact" className="hover:text-black">
            Contact
          </Link>
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
          <Link to="/" className="text-gray-700">
            Home
          </Link>
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
    </>
  );
};

export default NavBar;
