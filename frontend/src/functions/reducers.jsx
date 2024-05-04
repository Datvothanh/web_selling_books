export function productsReducer(state, action) {
    switch (action.type) {
      case "PRODUCTS_REQUEST":
        return { ...state, loading: true, error: "" };
      case "PRODUCTS_SUCCESS":
        return {
          ...state,
          loading: false,
          products: action.payload,
          error: "",
        };
      case "PRODUCTS_ERROR":
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  }