// src/pages/HomePage.js
import { useEffect, useState } from "react";

import Header from "../layout/header";
import PageContent from "../layout/pageContent";
import Footer from "../layout/footer";
import Client from "../layout/client";
import Features from "../layout/features";
import Blog from "../layout/blog";
import Product from "../layout/product";
import Shop from "../layout/shop";
import HeaderDesktop from "../layout/headerDesktop"; // Masaüstü header'ı
import ClientDesktop from "../layout/clientDesktop";
import ShopDesktop from "../layout/shopDesktop";
import ProductDesktop from "../layout/productDesktop";

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // İlk yüklemede cihazı kontrol et
    handleResize();

    // Pencere boyut değişikliklerini dinle
    window.addEventListener("resize", handleResize);

    // Cleanup işlemi
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {isMobile ? <Header /> : <HeaderDesktop />}
      {isMobile ? <Client /> : <ClientDesktop />}
      {isMobile ? <Shop /> : <ShopDesktop />}
      {isMobile ? <Product /> : <ProductDesktop />}

      <PageContent />
      <Features />
      <Blog />
      <Footer />
    </div>
  );
};

export default HomePage;
