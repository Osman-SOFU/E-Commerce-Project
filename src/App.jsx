import "./App.css";

import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Stil dosyasını import et

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./pages/homePage.jsx";
import ShopPage from "./pages/shopPage";
import ProductDetailPage from "./pages/productDetailPage.jsx";
import ContactPage from "./pages/contactPage";

const App = () => {
  // useEffect ile sayfa yüklendiğinde toast göstermek
  useEffect(() => {
    // Sayfa yüklendiğinde toast bildirimini göster
    toast.success("Sayfa başarıyla yüklendi!");
  }, []); // Boş bir array, sayfa yüklendiğinde sadece bir kere çalışmasını sağlar.

  return (
    <div className="App">
      <ToastContainer />
      <div className="flex flex-col">
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/product/:productId" component={ProductDetailPage} />
            <Route path="/contact" component={ContactPage} />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
