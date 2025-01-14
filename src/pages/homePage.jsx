// src/pages/HomePage.js
import Header from "../layout/header";
import PageContent from "../layout/pageContent";
import Footer from "../layout/footer";
import Client from "../layout/client";
import Features from "../layout/features";
import Blog from "../layout/blog";
import Product from "../layout/product";
import Shop from "../layout/shop";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Client />
      <Shop />
      <Product />
      <PageContent />
      <Features />
      <Blog />
      <Footer />
    </div>
  );
};

export default HomePage;
