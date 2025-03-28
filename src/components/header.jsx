// filepath: e:\GitHub\E-Commerce-Project\src\components\header.jsx
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
import {
  setSelectedProduct,
  fetchProducts,
} from "../redux/actions/productActions";
import { slugify } from "../utils/slugify";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const productList = useSelector((state) => state.product.productList);

  const filteredResults = productList.filter((p) =>
    p.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  const toggleCart = () => {
    setCartOpen((prev) => !prev);
  };

  const history = useHistory();
  const dispatch = useDispatch();

  const menuRef = useRef(null);
  const cartRef = useRef(null);
  const searchRef = useRef(null);

  const user = useSelector((state) => state.auth.user); // Redux state'inden user al
  const { categories } = useSelector((state) => state.categories);

  const cart = useSelector((state) => state.shoppingCart.cart);

  useEffect(() => {
    dispatch(loadUserFromLocalStorage());
    dispatch(fetchCategories());
    dispatch(fetchProducts()); // tüm ürünleri getir (arama için)
  }, [dispatch]);

  useEffect(() => {
    if (cart.length > 0) {
      setCartOpen(true);
    }
  }, [cart]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setCartOpen(false);
      }
    };

    if (cartOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cartOpen]);

  useEffect(() => {
    const handleClickOutsideSearch = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchVisible(false);
      }
    };

    if (searchVisible) {
      document.addEventListener("mousedown", handleClickOutsideSearch);
    } else {
      document.removeEventListener("mousedown", handleClickOutsideSearch);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideSearch);
    };
  }, [searchVisible]);

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
      <nav className="relative flex items-center justify-between px-6 py-4">
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
              <Link to="/orders" className="hover:text-black">
                Siparişlerim
              </Link>
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
          <Search
            className="w-6 h-6 cursor-pointer"
            onClick={() => setSearchVisible(!searchVisible)}
          />

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
          <Search
            className="w-6 h-6 cursor-pointer"
            onClick={() => setSearchVisible(!searchVisible)}
          />

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
        {searchVisible && (
          <div
            ref={searchRef}
            className="absolute top-full left-0 w-full bg-white z-50 shadow-md px-6 py-4"
          >
            <input
              type="text"
              className="w-full border border-gray-300 px-4 py-2 rounded mb-3"
              placeholder="Ürün ara..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <div className="max-h-64 overflow-y-auto divide-y">
              {filteredResults.slice(0, 10).map((product) => (
                <div
                  key={product.id}
                  className="p-2 cursor-pointer hover:bg-gray-100 flex items-center gap-3"
                  onClick={() => {
                    dispatch(setSelectedProduct(product));
                    const productSlug = product.name
                      .toLowerCase()
                      .replace(/\s+/g, "-");
                    history.push(
                      `/shop/unisex/fashion/${product.category_id}/${productSlug}/${product.id}`
                    );
                    setSearchVisible(false);
                    setSearchInput("");
                  }}
                >
                  <img
                    src={product.images?.[0]?.url}
                    alt={product.name}
                    className="w-10 h-10 object-cover rounded"
                  />
                  <span>{product.name}</span>
                </div>
              ))}
              {filteredResults.length === 0 && (
                <div className="text-gray-500 text-sm py-2 px-1">
                  Sonuç bulunamadı.
                </div>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* 🛒 Shopping Cart Açılır Penceresi */}
      <div
        ref={cartRef}
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
          <Link to="/shop" className="text-gray-700">
            Product
          </Link>
          <Link to="/cart" className="text-gray-700">
            Pricing
          </Link>
          <Link to="/about-us" className="text-gray-700">
            Contact
          </Link>
          {user ? (
            <div className="flex flex-col items-center">
              <img
                src={gravatarUrl}
                alt="User Avatar"
                className="w-12 h-12 rounded-full"
              />
              <span className="mt-2">{user.name}</span>
              <Link
                to="/orders"
                className="text-blue-500 mt-2 text-sm underline hover:text-blue-700"
                onClick={() => setMenuOpen(false)}
              >
                Siparişlerim
              </Link>

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
