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
  const [cartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen((prev) => !prev);
  };

  const history = useHistory();
  const dispatch = useDispatch();

  const menuRef = useRef(null);

  const user = useSelector((state) => state.auth.user); // Redux state'inden user al
  const { categories } = useSelector((state) => state.categories);

  const cart = useSelector((state) => state.shoppingCart.cart);

  useEffect(() => {
    dispatch(loadUserFromLocalStorage());
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    if (cart.length > 0) {
      setCartOpen(true);
    }
  }, [cart]);

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

  const handleCreateOrder = () => {
    history.push("/create-order");
  };

  const handleViewCart = () => {
    history.push("/cart");
  };

  const gravatarUrl = user
    ? `https://www.gravatar.com/avatar/${md5(user.email)}`
    : "";

  // Kadın ve Erkek Kategorilerini Filtreleme
  const womenCategories = categories.filter((cat) => cat.gender === "k");
  const menCategories = categories.filter((cat) => cat.gender === "e");

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

          <button onClick={toggleCart} className="relative">
            <Icon icon="mdi:cart" className="w-6 h-6 cursor-pointer" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                {cart.reduce((total, item) => total + item.count, 0)}
              </span>
            )}
          </button>

          <Icon icon="mdi:heart" className="w-6 h-6 cursor-pointer" />
        </div>
        <div className="lg:hidden flex items-center space-x-4">
          <User className="w-6 h-6 cursor-pointer" onClick={handleLoginClick} />
          <Search className="w-6 h-6 cursor-pointer" />

          {/* Sepet Butonu - Hem Masaüstü Hem Mobilde */}
          <button onClick={toggleCart} className="relative">
            <ShoppingCart className="w-6 h-6 cursor-pointer" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                {cart.reduce((total, item) => total + item.count, 0)}
              </span>
            )}
          </button>

          <Menu
            className="w-6 h-6 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </nav>

      {/* 🛒 Shopping Cart Açılır Penceresi */}
      <div
        className={`fixed right-0 top-0 w-80 sm:w-96 h-full bg-white shadow-lg transform transition-transform ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ zIndex: 9999 }}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h3 className="font-bold">Sepet ({cart.length} Ürün)</h3>
          <button onClick={toggleCart} className="text-gray-600 text-xl">
            ✖
          </button>
        </div>

        <div className="p-4">
          {cart.length === 0 ? (
            <p className="text-gray-500">Sepetiniz boş</p>
          ) : (
            cart.map((item) => (
              <div
                key={item.product.id}
                className="flex items-center justify-between border-b py-2"
              >
                <img
                  src={item.product.images[0]?.url}
                  alt={item.product.name}
                  className="w-12 h-12 rounded-md"
                />
                <div className="flex-1 ml-2">
                  <h4 className="font-semibold text-sm">{item.product.name}</h4>
                  <p className="text-xs">Adet: {item.count}</p>
                  <p className="text-sm font-bold">
                    ${(item.product.price * item.count).toFixed(2)}
                  </p>
                </div>
              </div>
            ))
          )}
          {/* Butonlar */}
          <div className="flex justify-between mt-3">
            <button
              onClick={handleViewCart}
              className="border border-gray-500 text-gray-700 px-4 py-2 rounded w-1/2 mr-2"
            >
              Sepete Git
            </button>
            <button
              onClick={handleCreateOrder}
              className="bg-orange-500 text-white px-4 py-2 rounded w-1/2"
            >
              Siparişi Tamamla
            </button>
          </div>
        </div>
      </div>

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
