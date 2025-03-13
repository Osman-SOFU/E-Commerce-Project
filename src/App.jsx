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
      console.log("Token bulundu, ancak doğrulama isteği yapılmayacak.");
      //dispatch(verifyToken()); // Header'a otomatik eklenecek
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
            <Route exact path="/shop" component={ShopPage} />
            <Route path="/product/:productId" component={ProductDetailPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/team" component={TeamPage} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/signup" component={SignUpForm} />
            <Route path="/login" component={LoginForm} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </div>
  );
};

export default App;
