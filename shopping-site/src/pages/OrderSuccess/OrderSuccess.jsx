//  import { Link } from "react-router-dom";
// import Navbar from "../../components/Navbar/Navbar";
// import { useOrder } from "../../context/OrderContext";

// const OrderSuccess = () => {
//   const { state: orderState } = useOrder();

//   const latestOrder =
//     orderState.orders[orderState.orders.length - 1];

//   // Prevent direct access without placing an order
//   if (!latestOrder) {
//     return (
//       <>
//         <Navbar />

//         <div className="container py-5 text-center">

//           <h2>No Order Found</h2>

//           <p className="text-muted">
//             You haven't placed any order yet.
//           </p>

//           <Link
//             to="/products"
//             className="btn btn-dark mt-3"
//           >
//             Continue Shopping
//           </Link>

//         </div>
//       </>
//     );
//   }

//   return (
//     <>
//       <Navbar />

//       <div className="container py-5">

//         <div
//           className="card shadow-lg mx-auto"
//           style={{ maxWidth: "750px" }}
//         >

//           <div className="card-body p-5 text-center">

//             <i
//               className="bi bi-check-circle-fill text-success"
//               style={{ fontSize: "5rem" }}
//             ></i>

//             <h2 className="mt-3 fw-bold">
//               Order Placed Successfully!
//             </h2>

//             <p className="text-muted">
//               Thank you for shopping with us.
//             </p>

//             <hr className="my-4" />

//             <div className="row text-start">

//               <div className="col-md-6 mb-3">

//                 <h6 className="text-secondary">
//                   Order ID
//                 </h6>

//                 <p className="fw-semibold">
//                   #{latestOrder.orderId}
//                 </p>

//               </div>

//               <div className="col-md-6 mb-3">

//                 <h6 className="text-secondary">
//                   Order Date
//                 </h6>

//                 <p className="fw-semibold">
//                   {latestOrder.orderDate}
//                 </p>

//               </div>

//             </div>

//             <hr />

//             <div className="text-start">

//               <h5 className="mb-3">
//                 Delivery Address
//               </h5>

//               <p className="mb-1 fw-semibold">
//                 {latestOrder.address.name}
//               </p>

//               <p className="mb-1">
//                 {latestOrder.address.street}
//               </p>

//               <p className="mb-1">
//                 {latestOrder.address.city},{" "}
//                 {latestOrder.address.state}
//               </p>

//               <p className="mb-1">
//                 {latestOrder.address.country} -{" "}
//                 {latestOrder.address.pincode}
//               </p>

//               <p>
//                 Phone : {latestOrder.address.phone}
//               </p>

//             </div>

//             <hr />

//             <div className="text-start">

//               <h5 className="mb-3">
//                 Order Items
//               </h5>

//               {latestOrder.items.map((item) => (
//                 <div
//                   key={item.id}
//                   className="d-flex justify-content-between mb-2"
//                 >
//                   <span>
//                     {item.title} × {item.quantity}
//                   </span>

//                   <strong>
//                     ₹{item.price * item.quantity}
//                   </strong>
//                 </div>
//               ))}

//             </div>

//             <hr />

//             <div className="d-flex justify-content-between fs-5">

//               <span>Total Items</span>

//               <strong>{latestOrder.totalItems}</strong>

//             </div>

//             <div className="d-flex justify-content-between fs-5 mt-2">

//               <span>Total Amount</span>

//               <strong className="text-success">
//                 ₹{latestOrder.totalPrice}
//               </strong>

//             </div>

//             <div className="d-flex justify-content-center gap-3 mt-5">

//               <Link
//                 to="/products"
//                 className="btn btn-dark"
//               >
//                 Continue Shopping
//               </Link>

//               <Link
//                 to="/profile"
//                 className="btn btn-outline-dark"
//               >
//                 View Orders
//               </Link>

//             </div>

//           </div>

//         </div>

//       </div>
//     </>
//   );
// };

// export default OrderSuccess;


// -----------------------------------------------------------------------------------------

import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useOrder } from "../../context/OrderContext";

const OrderSuccess = () => {
  const { state: orderState } = useOrder();

  const latestOrder =
    orderState.orders[orderState.orders.length - 1];

  // Prevent direct access without placing an order
  if (!latestOrder) {
    return (
      <>
        <Navbar />

        <div className="container py-4 py-md-5 text-center">
          <h2 className="fs-3 fs-md-2">No Order Found</h2>

          <p className="text-muted">
            You haven't placed any order yet.
          </p>

          <Link
            to="/products"
            className="btn btn-dark mt-3"
          >
            Continue Shopping
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="container py-4 py-md-5">

        <div
          className="card shadow-lg mx-auto w-100"
          style={{ maxWidth: "750px" }}
        >
          <div className="card-body p-3 p-sm-4 p-md-5 text-center">

            {/* Success Icon */}
            <i
              className="bi bi-check-circle-fill text-success"
              style={{
                fontSize: "clamp(3.5rem, 10vw, 5rem)",
              }}
            ></i>

            {/* Heading */}
            <h2 className="mt-3 fw-bold fs-4 fs-sm-3">
              Order Placed Successfully!
            </h2>

            <p className="text-muted mb-0">
              Thank you for shopping with us.
            </p>

            <hr className="my-4" />

            {/* Order Information */}
            <div className="row text-start">

              <div className="col-12 col-md-6 mb-3 mb-md-0">
                <h6 className="text-secondary">
                  Order ID
                </h6>

                <p className="fw-semibold mb-0 text-break">
                  #{latestOrder.orderId}
                </p>
              </div>

              <div className="col-12 col-md-6">
                <h6 className="text-secondary">
                  Order Date
                </h6>

                <p className="fw-semibold mb-0">
                  {latestOrder.orderDate}
                </p>
              </div>

            </div>

            <hr />

            {/* Delivery Address */}
            <div className="text-start">

              <h5 className="mb-3">
                Delivery Address
              </h5>

              <p className="mb-1 fw-semibold text-break">
                {latestOrder.address.name}
              </p>

              <p className="mb-1 text-break">
                {latestOrder.address.street}
              </p>

              <p className="mb-1 text-break">
                {latestOrder.address.city},{" "}
                {latestOrder.address.state}
              </p>

              <p className="mb-1 text-break">
                {latestOrder.address.country} -{" "}
                {latestOrder.address.pincode}
              </p>

              <p className="mb-0 text-break">
                Phone : {latestOrder.address.phone}
              </p>

            </div>

            <hr />

            {/* Order Items */}
            <div className="text-start">

              <h5 className="mb-3">
                Order Items
              </h5>

              {latestOrder.items.map((item) => (
                <div
                  key={item.id}
                  className="d-flex justify-content-between align-items-start gap-3 mb-3"
                >

                  <span className="text-break flex-grow-1">
                    {item.title} × {item.quantity}
                  </span>

                  <strong className="text-nowrap">
                    ₹{item.price * item.quantity}
                  </strong>

                </div>
              ))}

            </div>

            <hr />

            {/* Total Items */}
            <div className="d-flex justify-content-between align-items-center gap-3">
              <span>Total Items</span>

              <strong>
                {latestOrder.totalItems}
              </strong>
            </div>

            {/* Total Amount */}
            <div className="d-flex justify-content-between align-items-center gap-3 mt-2 fs-5">
              <span>Total Amount</span>

              <strong className="text-success text-nowrap">
                ₹{latestOrder.totalPrice}
              </strong>
            </div>

            {/* Action Buttons */}
            <div className="d-flex flex-column flex-sm-row justify-content-center gap-2 gap-sm-3 mt-4 mt-md-5">

              <Link
                to="/products"
                className="btn btn-dark w-100 w-sm-auto"
              >
                Continue Shopping
              </Link>

              <Link
                to="/profile"
                className="btn btn-outline-dark w-100 w-sm-auto"
              >
                View Orders
              </Link>

            </div>

          </div>
        </div>

      </div>
    </>
  );
};

export default OrderSuccess;


