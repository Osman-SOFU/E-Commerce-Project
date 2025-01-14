// src/pages/HomePage.js
import Header from "../layout/header";
import PageContent from "../layout/pageContent";
import Footer from "../layout/footer";
import Client from "../layout/client";
import ShopCard from "../components/shopCard";
import ProductCard from "../components/productCard";
import FeaturesCard from "../components/featuresCard";
import BlogCard from "../components/blogCard";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Client />
      <ShopCard />
      <ProductCard />
      <PageContent />
      <FeaturesCard />
      <BlogCard />
      <Footer />
    </div>
  );
};

export default HomePage;
