// src/pages/HomePage.js
import Header from "../layout/header";
import PageContent from "../layout/pageContent";
import Footer from "../layout/footer";
import Client from "../layout/client";
import ShopCard from "../components/shopCard";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Client />
      <ShopCard />
      <PageContent />
      <Footer />
    </div>
  );
};

export default HomePage;
