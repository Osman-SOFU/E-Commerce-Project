// filepath: e:\GitHub\E-Commerce-Project\src\App.jsx
import "./App.css";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  loadUserFromLocalStorage,
  verifyToken,
} from "./redux/actions/authActions";
import {
  setCart,
  setPayment,
  setAddress,
  fetchAddresses,
} from "./redux/actions/shoppingCartActions";
import HomePage from "./pages/homePage.jsx";
import ShopPage from "./pages/shopPage";
import ProductDetailPage from "./pages/productDetailPage.jsx";
import ContactPage from "./pages/contactPage";
import TeamPage from "./pages/teamPage.jsx";
import AboutUs from "./pages/aboutUs.jsx";
import SignUpForm from "./pages/signUpForm.jsx";
import LoginForm from "./components/loginForm.jsx";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import ShoppingCart from "./components/shoppingCart";
import ProtectedRoute from "./components/protectedRoute";
import CreateOrderPage from "./pages/createOrderPage.jsx";
import PaymentPage from "./pages/paymentPage.jsx";
import OrdersPage from "./pages/ordersPage.jsx";
import ScrollToTop from "./components/scrollToTop";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    toast.success("Sayfa başarıyla yüklendi!");
    dispatch(loadUserFromLocalStorage());
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(verifyToken());
    }

    // Sepet verilerini yerel depolamadan yükle
    const cart = JSON.parse(localStorage.getItem("cart"));
    const payment = JSON.parse(localStorage.getItem("payment"));
    const address = JSON.parse(localStorage.getItem("address"));

    if (cart) {
      dispatch(setCart(cart));
    }
    if (payment) {
      dispatch(setPayment(payment));
    }
    if (address) {
      dispatch(setAddress(address));
    }

    // Adresleri yükle
    dispatch(fetchAddresses());
  }, [dispatch]);

  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <ScrollToTop /> {/* Sayfa değişikliklerinde en üste kaydır */}
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId"
            component={ProductDetailPage}
          />
          <Route exact path="/shop" component={ShopPage} />
          <Route
            path="/shop/:gender/:categoryName/:categoryId"
            component={ShopPage}
          />
          <Route path="/contact" component={ContactPage} />
          <ProtectedRoute path="/create-order" component={CreateOrderPage} />
          <ProtectedRoute path="/payment" component={PaymentPage} />
          <ProtectedRoute path="/orders" component={OrdersPage} />
          <Route path="/team" component={TeamPage} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/signup" component={SignUpForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/cart" component={ShoppingCart} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
