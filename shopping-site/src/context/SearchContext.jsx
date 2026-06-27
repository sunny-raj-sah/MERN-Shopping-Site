import { createContext, useContext, useReducer } from "react";
import {
  initialSearchState,
  searchReducer,
} from "../reducers/searchReducer";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    searchReducer,
    initialSearchState
  );

  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSearch = () => useContext(SearchContext);