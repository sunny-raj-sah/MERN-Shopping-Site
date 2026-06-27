import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";

import AddressCard from "../../components/AddressCard/AddressCard";
import AddressForm from "../../components/AddressForm/AddressForm";

import { useAddress } from "../../context/AddressContext";
import { useOrder } from "../../context/OrderContext";

const Profile = () => {

  const [activeTab, setActiveTab] = useState("profile");

  const [showForm, setShowForm] = useState(false);

  const { state: addressState } = useAddress();

  const { state: orderState } = useOrder();

  return (
    <>
      <Navbar />

      <div className="container py-5">

        <h2 className="mb-4">

          My Account

        </h2>

        {/* Tabs */}

        <ul className="nav nav-pills mb-4">

          <li className="nav-item">

            <button
              className={`nav-link ${
                activeTab === "profile"
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setActiveTab("profile")
              }
            >
              Personal Info
            </button>

          </li>

          <li className="nav-item">

            <button
              className={`nav-link ${
                activeTab === "orders"
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setActiveTab("orders")
              }
            >
              Orders
            </button>

          </li>

          <li className="nav-item">

            <button
              className={`nav-link ${
                activeTab === "addresses"
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setActiveTab("addresses")
              }
            >
              Addresses
            </button>

          </li>

        </ul>

        {/* PERSONAL INFO */}

        {activeTab === "profile" && (

          <div className="card shadow-sm">

            <div className="card-body">

              <h4 className="mb-4">

                Personal Information

              </h4>

              <p>

                <strong>Name :</strong>
                {" "}
                Sunny Raj

              </p>

              <p>

                <strong>Email :</strong>
                {" "}
                sunnyraj@gmail.com

              </p>

              <p>

                <strong>Phone :</strong>
                {" "}
                9876543210

              </p>

            </div>

          </div>

        )}

        {/* ORDER HISTORY */}

        {activeTab === "orders" && (

          <div>

            {

              orderState.orders.length === 0 ?

              (

                <div className="alert alert-warning">

                  No Orders Found.

                </div>

              )

              :

              orderState.orders.map((order) => (

                <div
                  className="card shadow-sm mb-3"
                  key={order.orderId}
                >

                  <div className="card-body">

                    <h5>

                      Order #{order.orderId}

                    </h5>

                    <p>

                      Date :
                      {" "}
                      {order.orderDate}

                    </p>

                    <p>

                      Items :
                      {" "}
                      {order.totalItems}

                    </p>

                    <h6>

                      ₹{order.totalPrice}

                    </h6>

                  </div>

                </div>

              ))

            }

          </div>

        )}

        {/* ADDRESS */}

        {activeTab === "addresses" && (

          <>

            <button
              className="btn btn-dark mb-4"
              onClick={() =>
                setShowForm(true)
              }
            >
              + Add Address
            </button>

            {

              showForm && (

                <AddressForm
                  onClose={() =>
                    setShowForm(false)
                  }
                />

              )

            }

            {

              addressState.addresses.length === 0 ?

              (

                <div className="alert alert-warning">

                  No Address Added.

                </div>

              )

              :

              addressState.addresses.map((address) => (

                <AddressCard
                  key={address.id}
                  address={address}
                />

              ))

            }

          </>

        )}

      </div>

    </>
  );
};

export default Profile;