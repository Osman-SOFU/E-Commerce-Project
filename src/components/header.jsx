import { useState, useEffect, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { User, Search, ShoppingCart, Menu } from "lucide-react";
import { Icon } from "@iconify/react";
import { useSelector, useDispatch } from "react-redux";
import md5 from "md5";
import {
  logoutUser,
  loadUserFromLocalStorage,
} from "../redux/actions/authActions";
import { fetchCategories } from "../redux/actions/categoryActions";
import { slugify } from "../utils/slugify";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const menuRef = useRef(null);

  const user = useSelector((state) => state.auth.user); // Redux state'inden user al
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    console.log("NavBar user from Redux:", user); // ✅ Kontrol
  }, [user]);

  useEffect(() => {
    dispatch(loadUserFromLocalStorage());
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleLoginClick = () => {
    history.push("/login");
  };

  const handleSignUpClick = () => {
    history.push("/signup");
  };

  const handleLogoutClick = () => {
    dispatch(logoutUser());
    history.push("/login");
  };

  const gravatarUrl = user
    ? `https://www.gravatar.com/avatar/${md5(user.email)}`
    : "";

  // Kadın ve Erkek Kategorilerini Filtreleme
  const womenCategories = categories.filter((cat) => cat.gender === "k");
  const menCategories = categories.filter((cat) => cat.gender === "e");

  // Sayfa dışına tıklanınca menüyü kapatma
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

          {/* Shop Link & Chevron İle Açılır Menü */}
          <div className="relative space-x-1">
            <Link to="/shop" className="hover:text-black">
              Shop
            </Link>

            <button
              className="focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Icon icon="mdi:chevron-down" className="w-4 h-4" />
            </button>

            {/* Açılır Menü */}
            {menuOpen && (
              <div
                ref={menuRef}
                className="absolute left-0 mt-2 w-[400px] bg-white shadow-lg rounded-md z-50 p-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  {/* Kadın Kategorileri */}
                  <div>
                    <h3 className="text-lg font-bold border-b pb-1">Kadın</h3>
                    <ul className="mt-2 space-y-1">
                      {womenCategories.map((category) => (
                        <li key={category.id}>
                          <Link
                            to={`/shop/kadin/${slugify(category.title)}/${
                              category.id
                            }`}
                            className="block px-2 py-1 text-gray-700 hover:bg-gray-200 rounded"
                            onClick={() => setMenuOpen(false)}
                          >
                            {category.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Erkek Kategorileri */}
                  <div>
                    <h3 className="text-lg font-bold border-b pb-1">Erkek</h3>
                    <ul className="mt-2 space-y-1">
                      {menCategories.map((category) => (
                        <li key={category.id}>
                          <Link
                            to={`/shop/erkek/${slugify(category.title)}/${
                              category.id
                            }`}
                            className="block px-2 py-1 text-gray-700 hover:bg-gray-200 rounded"
                            onClick={() => setMenuOpen(false)}
                          >
                            {category.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
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
            <div className="flex items-center space-x-2">
              <img
                src={gravatarUrl}
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
              />
              <span className="cursor-pointer">{user.name}</span>
              <button
                onClick={handleLogoutClick}
                className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Icon
                icon="mdi:user"
                className="w-6 h-6 cursor-pointer"
                onClick={handleLoginClick}
              />
              <button
                onClick={handleSignUpClick}
                className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
              >
                Register{" "}
              </button>
            </div>
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
          <Link to="/product/:productId" className="text-gray-700">
            Product
          </Link>
          <a href="#" className="text-gray-700">
            Pricing
          </a>
          <a href="#" className="text-gray-700">
            Contact
          </a>
          {user ? (
            <div className="flex flex-col items-center">
              <img
                src={gravatarUrl}
                alt="User Avatar"
                className="w-12 h-12 rounded-full"
              />
              <span className="mt-2">{user.name}</span>
              <button
                onClick={handleLogoutClick}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 mt-2"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center space-y-2">
              <button
                onClick={handleLoginClick}
                className="text-blue-500 text-lg"
              >
                Login
              </button>
              <button
                onClick={handleSignUpClick}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Register
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Header;
