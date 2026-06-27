export const initialSearchState = {
  search: "",
};

export const searchReducer = (state, action) => {
  switch (action.type) {
    case "SET_SEARCH":
      return {
        ...state,
        search: action.payload,
      };

    case "CLEAR_SEARCH":
      return {
        ...state,
        search: "",
      };

    default:
      return state;
  }
};