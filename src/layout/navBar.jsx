import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { User, Search, ShoppingCart, Menu } from "lucide-react";
import { Icon } from "@iconify/react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    // Check if user is logged in
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const handleLoginClick = () => {
    history.push("/signup");
  };

  return (
    <>
      {/* Üst Menü - Masaüstü Görünüm */}
      <div className="hidden lg:flex justify-between items-center px-6 py-3 bg-gray-900 text-white text-sm">
        <div className="flex items-center space-x-4">
          <Icon icon="mdi:phone" className="w-4 h-4" />
          <span>(225) 555-0118</span>
          <Icon icon="mdi:email" className="w-4 h-4" />
          <span>michelle.rivera@example.com</span>
        </div>
        <div>
          <span>Follow Us and get a chance to win 80% off</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>Bizi Takip Edin: </span>
          <Icon icon="mdi:instagram" className="w-5 h-5 cursor-pointer" />
          <Icon icon="mdi:youtube" className="w-5 h-5 cursor-pointer" />
          <Icon icon="mdi:facebook" className="w-5 h-5 cursor-pointer" />
          <Icon icon="mdi:twitter" className="w-5 h-5 cursor-pointer" />
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
            <Icon icon="mdi:chevron-down" className="w-3 h-3 ml-1" />
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
          {user ? (
            <span className="cursor-pointer">{user.name}</span>
          ) : (
            <Icon
              icon="mdi:user"
              className="w-6 h-6 cursor-pointer"
              onClick={handleLoginClick}
            />
          )}
          <Search className="w-6 h-6 cursor-pointer" />
          <Icon icon="mdi:cart" className="w-6 h-6 cursor-pointer" />
          <Icon icon="mdi:heart" className="w-6 h-6 cursor-pointer" />
        </div>
        <div className="lg:hidden flex items-center space-x-4">
          <User className="w-6 h-6 cursor-pointer" onClick={handleLoginClick} />
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
