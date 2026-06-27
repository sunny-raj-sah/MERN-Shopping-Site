export const initialOrderState = {
  orders: [],
};

export const orderReducer = (state, action) => {
  switch (action.type) {
    case "PLACE_ORDER":
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };

    case "CLEAR_ORDERS":
      return {
        ...state,
        orders: [],
      };

    default:
      return state;
  }
};