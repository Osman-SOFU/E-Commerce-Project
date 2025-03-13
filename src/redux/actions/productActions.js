import api from "../../services/api";

// Ürünleri yükleme action'ı
export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_FETCH_STATE", payload: "LOADING" });

    const response = await api.get("/products"); // API'ye istek
    dispatch({ type: "SET_PRODUCT_LIST", payload: response.data.products });
    dispatch({ type: "SET_TOTAL", payload: response.data.total });

    dispatch({ type: "SET_FETCH_STATE", payload: "SUCCESS" });
  } catch (error) {
    console.error("Error fetching products:", error);
    dispatch({ type: "SET_FETCH_STATE", payload: "ERROR" });
  }
};

export const fetchProductsByCategory = (categoryId) => async (dispatch) => {
  try {
    const response = await api.get(`/products?category_id=${categoryId}`);
    dispatch({ type: "SET_PRODUCT_LIST", payload: response.data.products });
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};
