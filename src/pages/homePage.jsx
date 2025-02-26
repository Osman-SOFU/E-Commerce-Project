// src/pages/HomePage.js

import Header from "../layout/header";
import PageContent from "../layout/pageContent";
import Client from "../layout/client";
import Features from "../layout/features";
import Blog from "../layout/blog";
import Product from "../layout/product";
import Shop from "../layout/shop";

const HomePage = () => {
  return (
    <div className="font-[Montserrat]">
      <Header />
      <Client />
      <Shop />
      <Product />
      <PageContent />
      <Features />
      <Blog />
    </div>
  );
};

export default HomePage;
