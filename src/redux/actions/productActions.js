import api from "../../services/api";

// Ürünleri yükleme action'ı
export const fetchProducts =
  (queryParams = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: "SET_FETCH_STATE", payload: "LOADING" });

      const response = await api.get(`/products?${queryParams}`);

      dispatch({ type: "SET_PRODUCT_LIST", payload: response.data.products });
      dispatch({ type: "SET_TOTAL", payload: response.data.total });

      dispatch({ type: "SET_FETCH_STATE", payload: "SUCCESS" });
    } catch (error) {
      console.error("Error fetching products:", error);
      dispatch({ type: "SET_FETCH_STATE", payload: "ERROR" });
    }
  };

export const fetchProductById = (productId) => async (dispatch) => {
  try {
    dispatch({ type: "SET_FETCH_STATE", payload: "LOADING" });

    const response = await api.get(`/products/${productId}`);
    dispatch({ type: "SET_PRODUCT_DETAIL", payload: response.data });

    dispatch({ type: "SET_FETCH_STATE", payload: "SUCCESS" });
  } catch (error) {
    console.error("Error fetching product:", error);
    dispatch({ type: "SET_FETCH_STATE", payload: "ERROR" });
  }
};

// Belirli bir kategorideki ürünleri çek
export const fetchProductsByCategory = (categoryId) => async (dispatch) => {
  try {
    dispatch({ type: "SET_FETCH_STATE", payload: "LOADING" });

    const response = await api.get(`/products?category_id=${categoryId}`, {
      headers: { Authorization: localStorage.getItem("token") },
    });

    dispatch({
      type: "SET_PRODUCT_LIST",
      payload: [...response.data.products],
    });

    dispatch({ type: "SET_FETCH_STATE", payload: "SUCCESS" });
  } catch (error) {
    console.error("Error fetching products:", error);
    dispatch({ type: "SET_FETCH_STATE", payload: "ERROR" });
  }
};

export const setSelectedProduct = (product) => ({
  type: "SET_SELECTED_PRODUCT",
  payload: product,
});
