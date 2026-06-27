export const initialAddressState = {
  addresses: [],
  selectedAddress: null,
};

export const addressReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ADDRESS":
      return {
        ...state,
        addresses: [...state.addresses, action.payload],
      };

    case "UPDATE_ADDRESS":
      return {
        ...state,
        addresses: state.addresses.map((address) =>
          address.id === action.payload.id
            ? action.payload
            : address
        ),
      };

    case "DELETE_ADDRESS":
      return {
        ...state,
        addresses: state.addresses.filter(
          (address) => address.id !== action.payload
        ),
      };

    case "SELECT_ADDRESS":
      return {
        ...state,
        selectedAddress: action.payload,
      };

    default:
      return state;
  }
};