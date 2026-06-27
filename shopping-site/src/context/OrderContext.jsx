import { createContext, useContext, useReducer } from "react";
import {
  orderReducer,
  initialOrderState,
} from "../reducers/orderReducer";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    orderReducer,
    initialOrderState
  );

  return (
    <OrderContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useOrder = () => {
  return useContext(OrderContext);
};