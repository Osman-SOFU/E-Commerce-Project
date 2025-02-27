import api from "../../services/api";

export const setCategories = (categories) => ({
  type: "SET_CATEGORIES",
  payload: categories,
});

export const setTotal = (total) => ({
  type: "SET_TOTAL",
  payload: total,
});

export const setFetchState = (fetchState) => ({
  type: "SET_FETCH_STATE",
  payload: fetchState,
});

export const setLimit = (limit) => ({
  type: "SET_LIMIT",
  payload: limit,
});

export const setOffset = (offset) => ({
  type: "SET_OFFSET",
  payload: offset,
});

export const setFilter = (filter) => ({
  type: "SET_FILTER",
  payload: filter,
});

export const fetchProductsByCategory = (categoryId) => async (dispatch) => {
  try {
    const response = await api.get(`/products?category_id=${categoryId}`);
    dispatch({ type: "SET_PRODUCT_LIST", payload: response.data.products });
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};
