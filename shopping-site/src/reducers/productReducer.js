export const initialProductState = {
   products: [],
  loading: false,
  error: null,

  search: "",

  selectedCategory: [],
  selectedSubCategory: [],
selectedBrand: [],
  selectedRating: 0,

  selectedPrice: 120000,

  sortBy: "",
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };

    case "SET_SEARCH":
      return {
        ...state,
        search: action.payload,
      };

    case "SET_CATEGORY":
      return {
        ...state,
        selectedCategory: action.payload,
      };

    case "SET_RATING":
      return {
        ...state,
        selectedRating: action.payload,
      };

    case "SET_PRICE":
      return {
        ...state,
        selectedPrice: action.payload,
      };

    case "SET_SORT":
      return {
        ...state,
        sortBy: action.payload,
      };

    case "CLEAR_FILTERS":
      return {
    ...state,
    search: "",
    selectedCategory: [],
    selectedSubCategory: [],
    selectedBrand: [],
    selectedRating: 0,
    selectedPrice: 120000,
    sortBy: "",
  };
      
case "FETCH_PRODUCTS_REQUEST":

return{

    ...state,

    loading:true,

    error:null

};

case "FETCH_PRODUCTS_SUCCESS":

return{

    ...state,

    loading:false,

    products:action.payload

};

case "FETCH_PRODUCTS_FAILURE":

return{

    ...state,

    loading:false,

    error:action.payload

};

case "SET_SUBCATEGORY":
  return {
    ...state,
    selectedSubCategory: action.payload,
  };

  case "SET_BRAND":
  return {
    ...state,
    selectedBrand: action.payload,
  };
  
    default:
      return state;
  }
};