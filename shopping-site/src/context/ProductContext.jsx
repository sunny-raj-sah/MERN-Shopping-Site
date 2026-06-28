 import {
  createContext,
  useContext,
  // useEffect,
  useReducer,
} from "react";

import {
  initialProductState,
  productReducer,
} from "../reducers/productReducer";

import { getProducts } from "../api/productApi";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    productReducer,
    initialProductState
  );

  // useEffect(() => {
  //   // eslint-disable-next-line react-hooks/immutability
  //   fetchProducts();
  // }, []);

  const fetchProducts = async (query = "") => {
    dispatch({
      type: "FETCH_PRODUCTS_REQUEST",
    });

    try {
      const response = await getProducts(query);

      dispatch({
        type: "FETCH_PRODUCTS_SUCCESS",
        payload: response?.data?.products ||
        response?.data ||
        response,
      });
    } catch (error) {
      dispatch({
        type: "FETCH_PRODUCTS_FAILURE",
        payload: error.message,
      });
    }
  };

  return (
    <ProductContext.Provider
      value={{
        state,
        dispatch,
        fetchProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useProducts = () => useContext(ProductContext);