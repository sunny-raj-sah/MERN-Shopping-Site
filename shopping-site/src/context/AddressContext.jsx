import {
  createContext,
  useContext,
  useReducer,
} from "react";

import {
  addressReducer,
  initialAddressState,
} from "../reducers/addressReducer";

const AddressContext = createContext();

export const AddressProvider = ({ children }) => {

  const [state, dispatch] = useReducer(
    addressReducer,
    initialAddressState
  );

  return (
    <AddressContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAddress = () => {
  return useContext(AddressContext);
};