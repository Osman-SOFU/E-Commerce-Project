const initialState = {
  productList: [],
  total: 0,
  fetchState: "NOT_FETCHED", // "LOADING", "SUCCESS", "ERROR"
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCT_LIST":
      return {
        ...state,
        productList: Array.isArray(action.payload) ? action.payload : [],
      };
    case "SET_TOTAL":
      return { ...state, total: action.payload };
    case "SET_FETCH_STATE":
      return { ...state, fetchState: action.payload };
    default:
      return state;
  }
};

export default productReducer;
