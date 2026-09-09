// import { useState } from "react";
// import { useAddress } from "../../context/AddressContext";
// import { toast } from "react-toastify";
// const AddressForm = ({ onClose,editAddress = null, }) => {
//   const { dispatch: addressDispatch } = useAddress();

//   // const [formData, setFormData] = useState({
//   //   // eslint-disable-next-line react-hooks/purity
//   //   id: Date.now(),
//   //   name: "",
//   //   phone: "",
//   //   street: "",
//   //   city: "",
//   //   state: "",
//   //   country: "",
//   //   pincode: "",
//   // });
//   const [formData, setFormData] = useState( editAddress || { 
//     // eslint-disable-next-line react-hooks/purity
//     id: Date.now(),
//      name: "", 
//      phone: "",
//      street: "", 
//      city: "",
//      state: "", 
//      country: "", 
//      pincode: "", } );

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     addressDispatch({
//       // type: "ADD_ADDRESS",
//       // payload: formData,

//       type: editAddress
//        ? "UPDATE_ADDRESS"  
//       : "ADD_ADDRESS", 
//       payload: formData,
//     });

//      toast.success(
//     editAddress
//       ? "Address updated successfully"
//       : "Address added successfully"
//   );
//     onClose();
//   };

//   return (
//     <div className="card shadow-sm mb-4">

//       <div className="card-body">

//         <h4 className="mb-4">

//           {editAddress 
//           ? "Edit Address" 
//           : "Add New Address"}  

//         </h4>

//         <form onSubmit={handleSubmit}>

//           <div className="row">

//             <div className="col-md-6 mb-3">

//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Full Name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />

//             </div>

//             <div className="col-md-6 mb-3">

//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Phone Number"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//               />

//             </div>

//           </div>

//           <div className="mb-3">

//             <textarea
//               className="form-control"
//               rows="3"
//               placeholder="Street Address"
//               name="street"
//               value={formData.street}
//               onChange={handleChange}
//               required
//             />

//           </div>

//           <div className="row">

//             <div className="col-md-6 mb-3">

//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="City"
//                 name="city"
//                 value={formData.city}
//                 onChange={handleChange}
//                 required
//               />

//             </div>

//             <div className="col-md-6 mb-3">

//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="State"
//                 name="state"
//                 value={formData.state}
//                 onChange={handleChange}
//                 required
//               />

//             </div>

//           </div>

//           <div className="row">

//             <div className="col-md-6 mb-3">

//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Country"
//                 name="country"
//                 value={formData.country}
//                 onChange={handleChange}
//                 required
//               />

//             </div>

//             <div className="col-md-6 mb-3">

//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Pincode"
//                 name="pincode"
//                 value={formData.pincode}
//                 onChange={handleChange}
//                 required
//               />

//             </div>

//           </div>

//           <div className="d-flex gap-3">

//             <button
//               className="btn btn-dark"
//               type="submit"
//             >
//              {editAddress 
//              ? "Update Address" 
//              : "Save Address"}

               
//             </button>

//             <button
//               type="button"
//               className="btn btn-outline-secondary"
//               onClick={onClose}
//             >
//               Cancel
//             </button>

//           </div>

//         </form>

//       </div>

//     </div>
//   );
// };

// export default AddressForm;

// -------------------------------------------------------------


 
import { useState } from "react";
import { useAddress } from "../../context/AddressContext";
import { toast } from "react-toastify";

const AddressForm = ({ onClose, editAddress = null }) => {
  const { dispatch: addressDispatch } = useAddress();

  const [formData, setFormData] = useState(
    editAddress || {
      // eslint-disable-next-line react-hooks/purity
      id: Date.now(),
      name: "",
      phone: "",
      street: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
    }
  );

  const handleChange = (event) => {
    const { name, value } = event.target;

    // Allow only numbers for phone and pincode
    if (name === "phone") {
      const onlyNumbers = value.replace(/\D/g, "");

      // Maximum 10 digits
      if (onlyNumbers.length <= 10) {
        setFormData((prev) => ({
          ...prev,
          [name]: onlyNumbers,
        }));
      }

      return;
    }

    if (name === "pincode") {
      const onlyNumbers = value.replace(/\D/g, "");

      // Maximum 6 digits
      if (onlyNumbers.length <= 6) {
        setFormData((prev) => ({
          ...prev,
          [name]: onlyNumbers,
        }));
      }

      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate phone number
    if (formData.phone.length !== 10) {
      toast.error("Phone number must be exactly 10 digits");
      return;
    }

    // Validate pincode
    if (formData.pincode.length !== 6) {
      toast.error("Pincode must be exactly 6 digits");
      return;
    }

    addressDispatch({
      type: editAddress ? "UPDATE_ADDRESS" : "ADD_ADDRESS",
      payload: formData,
    });

    toast.success(
      editAddress
        ? "Address updated successfully"
        : "Address added successfully"
    );

    onClose();
  };

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <h4 className="mb-4">
          {editAddress ? "Edit Address" : "Add New Address"}
        </h4>

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                inputMode="numeric"
                maxLength="10"
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <textarea
              className="form-control"
              rows="3"
              placeholder="Street Address"
              name="street"
              value={formData.street}
              onChange={handleChange}
              required
            />
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="State"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Pincode"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                inputMode="numeric"
                maxLength="6"
                required
              />
            </div>
          </div>

          <div className="d-flex gap-3">
            <button className="btn btn-dark" type="submit">
              {editAddress ? "Update Address" : "Save Address"}
            </button>

            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddressForm;
