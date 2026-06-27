import { useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import AddressCard from "../../components/AddressCard/AddressCard";
import AddressForm from "../../components/AddressForm/AddressForm";

import { useAddress } from "../../context/AddressContext";

const Address = () => {
  const { state: addressState } = useAddress();

  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Navbar />

      <div className="container py-5">

        <div className="d-flex justify-content-between align-items-center mb-4">

          <h2>My Addresses</h2>

          <button
            className="btn btn-dark"
            onClick={() => setShowForm(true)}
          >
            + Add New Address
          </button>

        </div>

        {showForm && (
          <AddressForm
            onClose={() => setShowForm(false)}
          />
        )}

        {addressState.addresses.length === 0 ? (

          <div className="text-center mt-5">

            <h4>No Address Added</h4>

            <p className="text-muted">
              Click on "Add New Address" to save one.
            </p>

          </div>

        ) : (

          addressState.addresses.map((address) => (
            <AddressCard
              key={address.id}
              address={address}
            />
          ))

        )}

      </div>
    </>
  );
};

export default Address;