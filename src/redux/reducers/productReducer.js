const initialState = {
  productList: [],
  productDetail: null,
  total: 0,
  fetchState: "NOT_FETCHED",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCT_LIST":
      if (
        JSON.stringify(state.productList) === JSON.stringify(action.payload)
      ) {
        return state; // 🔥 Eğer veri aynıysa, state değiştirme!
      }
      return {
        ...state,
        productList: [...action.payload], // 🔥 Yeni veri geldiyse state'i güncelle
      };
    case "SET_PRODUCT_DETAIL":
      return {
        ...state,
        productDetail: action.payload,
        selectedProduct: action.payload, // ✅ Ekle
      };

    case "SET_TOTAL":
      return { ...state, total: action.payload };
    case "SET_FETCH_STATE":
      return { ...state, fetchState: action.payload };
    case "SET_SELECTED_PRODUCT": // ✅ Seçili ürünü güncelle
      return { ...state, selectedProduct: action.payload };
    default:
      return state;
  }
};

export default productReducer;
