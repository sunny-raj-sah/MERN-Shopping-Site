import { toast } from "react-toastify";
import { useAddress } from "../../context/AddressContext";

const AddressCard = ({ address, showActions = true, onEdit }) => {
  const { state: addressState, dispatch: addressDispatch } = useAddress();

  const isSelected = addressState.selectedAddress?.id === address.id;

  return (
    <div
      className={`card shadow-sm mb-4 ${
        isSelected ? "border border-3 border-primary" : ""
      }`}
    >
      <div className="card-body">
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="radio"
            name="selectedAddress"
            checked={isSelected}
            onChange={() => {
              addressDispatch({
                type: "SELECT_ADDRESS",
                payload: address,
              });

              toast.success("Address selected successfully");
            }}
          />

          <label className="form-check-label fw-bold">Deliver Here</label>
        </div>

        <h5 className="fw-bold">{address.name}</h5>

        <p className="mb-1">{address.street}</p>

        <p className="mb-1">
          {address.city}, {address.state}
        </p>

        <p className="mb-1">
          {address.country} - {address.pincode}
        </p>

        <p>
          <strong>Phone :</strong> {address.phone}
        </p>

        {showActions && (
          <div className="d-flex gap-2 mt-3">
            <button
              className="btn btn-outline-primary"
              onClick={() => {
                onEdit(address);
                toast.success("Edit the Address");
              }}
            >
              Edit
            </button>

            <button
              className="btn btn-outline-danger"
              onClick={() => {
                addressDispatch({
                  type: "DELETE_ADDRESS",
                  payload: address.id,
                });
                toast.success("Address deleted successfully");
              }}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddressCard;
