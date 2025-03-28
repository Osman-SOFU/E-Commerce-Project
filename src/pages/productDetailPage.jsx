import Client from "../layout/client";
import ProductDetailCard from "../components/productDetailCard";
import ProductDetailDescription from "../layout/productDetailDescription";

import { Link } from "react-router-dom";
import ProductDetailData from "../layout/productDetailData";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../redux/actions/productActions";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const selectedProduct = useSelector((state) => state.product.selectedProduct);

  useEffect(() => {
    if (!selectedProduct || selectedProduct.id !== parseInt(productId)) {
      dispatch(fetchProductById(productId)); // API'den ürünü çek
    }
  }, [dispatch, selectedProduct, productId]);

  if (!selectedProduct) return <p>Loading product details...</p>;

  return (
    <>
      <div className="font-[Montserrat]">
        <div className="w-full max-w-[1440px] mx-auto p-4 sm:px-6 lg:px-8 font-[Montserrat]">
          <div className="mt-8 ml-6 items-start px-4 sm:px-6 lg:px-8">
            <nav className="text-gray-700">
              <Link
                to="/"
                className="breadcrumb-link text-3xl font-bold mb-4 hover:text-gray-500"
              >
                Home
              </Link>
              <span className="breadcrumb-separator text-3xl mb-4"> &gt; </span>
              <span className="breadcrumb-current text-3xl font-bold mb-4">
                Product
              </span>
            </nav>
          </div>
        </div>
        <div className="px-4 sm:px-6 lg:px-8">
          <ProductDetailCard />
          <ProductDetailDescription />
          <ProductDetailData />
        </div>
        <Client />
      </div>
      <div>
        <h1>{selectedProduct.name}</h1>
        <p>{selectedProduct.description}</p>
        <p>${selectedProduct.price}</p>
        {/* Diğer ürün detayları */}
      </div>
    </>
  );
};

export default ProductDetailPage;
