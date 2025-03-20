import "./App.css";

import { useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Stil dosyasını import et

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { useDispatch } from "react-redux";
import { loadUserFromLocalStorage } from "./redux/actions/authActions";
import { verifyToken } from "./redux/actions/authActions";

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

const App = () => {
  const dispatch = useDispatch();

  // useEffect ile sayfa yüklendiğinde toast göstermek
  useEffect(() => {
    // Sayfa yüklendiğinde toast bildirimini göster
    toast.success("Sayfa başarıyla yüklendi!");
    // Kullanıcı bilgilerini localStorage'dan yükle
    dispatch(loadUserFromLocalStorage());
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(verifyToken()); // Header'a otomatik eklenecek
    }
  }, [dispatch]); // Boş bir array, sayfa yüklendiğinde sadece bir kere çalışmasını sağlar.

  return (
    <div className="App">
      <ToastContainer />
      <div className="flex flex-col">
        <Router>
          <Header /> {/* Router içinde olmalı */}
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

            <Route path="/team" component={TeamPage} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/signup" component={SignUpForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/cart" component={ShoppingCart} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </div>
  );
};

export default App;
