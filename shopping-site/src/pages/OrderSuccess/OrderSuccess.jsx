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

        <div className="container py-5 text-center">

          <h2>No Order Found</h2>

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

      <div className="container py-5">

        <div
          className="card shadow-lg mx-auto"
          style={{ maxWidth: "750px" }}
        >

          <div className="card-body p-5 text-center">

            <i
              className="bi bi-check-circle-fill text-success"
              style={{ fontSize: "5rem" }}
            ></i>

            <h2 className="mt-3 fw-bold">
              Order Placed Successfully!
            </h2>

            <p className="text-muted">
              Thank you for shopping with us.
            </p>

            <hr className="my-4" />

            <div className="row text-start">

              <div className="col-md-6 mb-3">

                <h6 className="text-secondary">
                  Order ID
                </h6>

                <p className="fw-semibold">
                  #{latestOrder.orderId}
                </p>

              </div>

              <div className="col-md-6 mb-3">

                <h6 className="text-secondary">
                  Order Date
                </h6>

                <p className="fw-semibold">
                  {latestOrder.orderDate}
                </p>

              </div>

            </div>

            <hr />

            <div className="text-start">

              <h5 className="mb-3">
                Delivery Address
              </h5>

              <p className="mb-1 fw-semibold">
                {latestOrder.address.name}
              </p>

              <p className="mb-1">
                {latestOrder.address.street}
              </p>

              <p className="mb-1">
                {latestOrder.address.city},{" "}
                {latestOrder.address.state}
              </p>

              <p className="mb-1">
                {latestOrder.address.country} -{" "}
                {latestOrder.address.pincode}
              </p>

              <p>
                Phone : {latestOrder.address.phone}
              </p>

            </div>

            <hr />

            <div className="text-start">

              <h5 className="mb-3">
                Order Items
              </h5>

              {latestOrder.items.map((item) => (
                <div
                  key={item.id}
                  className="d-flex justify-content-between mb-2"
                >
                  <span>
                    {item.title} × {item.quantity}
                  </span>

                  <strong>
                    ₹{item.price * item.quantity}
                  </strong>
                </div>
              ))}

            </div>

            <hr />

            <div className="d-flex justify-content-between fs-5">

              <span>Total Items</span>

              <strong>{latestOrder.totalItems}</strong>

            </div>

            <div className="d-flex justify-content-between fs-5 mt-2">

              <span>Total Amount</span>

              <strong className="text-success">
                ₹{latestOrder.totalPrice}
              </strong>

            </div>

            <div className="d-flex justify-content-center gap-3 mt-5">

              <Link
                to="/products"
                className="btn btn-dark"
              >
                Continue Shopping
              </Link>

              <Link
                to="/profile"
                className="btn btn-outline-dark"
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