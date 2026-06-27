 export const initialWishlistState = {
  wishlist: [],
};

export const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_WISHLIST":
      return {
        ...state,
        wishlist: action.payload,
      };

    case "CLEAR_WISHLIST":
      return {
        ...state,
        wishlist: [],
      };

    default:
      return state;
  }
};