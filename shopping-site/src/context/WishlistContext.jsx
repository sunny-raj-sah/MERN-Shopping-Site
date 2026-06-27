 import {
  createContext,
  useContext,
  useReducer,
  useEffect,
} from "react";

import {
  wishlistReducer,
  initialWishlistState,
} from "../reducers/wishlistReducer";

import {
  getWishlist,
  addToWishlist,
  removeFromWishlist,
} from "../api/wishlistApi";

import { useAuth } from "./AuthContext";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const { state: authState } = useAuth();

  const [state, dispatch] = useReducer(
    wishlistReducer,
    initialWishlistState
  );

  // ===========================
  // Load Wishlist
  // ===========================
  const loadWishlist = async () => {
    try {
      const response = await getWishlist();

      dispatch({
        type: "LOAD_WISHLIST",
        payload: response.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  // ===========================
  // Add To Wishlist
  // ===========================
  const addWishlist = async (productId) => {
    try {
      const response = await addToWishlist(productId);

      dispatch({
        type: "LOAD_WISHLIST",
        payload: response.data,
      });

      return true;
    } catch (error) {
      console.log(error.message);
      return false;
    }
  };

  // ===========================
  // Remove From Wishlist
  // ===========================
  const removeWishlist = async (productId) => {
    try {
      const response = await removeFromWishlist(productId);

      dispatch({
        type: "LOAD_WISHLIST",
        payload: response.data,
      });

      return true;
    } catch (error) {
      console.log(error.message);
      return false;
    }
  };

  // ===========================
  // Auto Load Wishlist
  // ===========================
  useEffect(() => {
    if (authState.isAuthenticated) {
      loadWishlist();
    }
  }, [authState.isAuthenticated]);

  return (
    <WishlistContext.Provider
      value={{
        state,
        dispatch,

        loadWishlist,
        addWishlist,
        removeWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useWishlist = () => useContext(WishlistContext);