import Navbar from "../../components/Navbar/Navbar";
import CartItem from "../../components/CartItem/CartItem";
import PriceDetails from "../../components/PriceDetails/PriceDetails";

import { useCart } from "../../context/CartContext";

const Cart = () => {
  const { state: cartState } = useCart();

  return (
    <>
      <Navbar />

      <div className="container py-5">
        <h2 className="text-center fw-bold mb-5">
          My Cart ({cartState.cart.length})
        </h2>

        {cartState.cart.length === 0 ? (
          <div className="text-center py-5">
            <h3>Your Cart is Empty</h3>
          </div>
        ) : (
          <div className="row">
            <div className="col-lg-8">
              {cartState.cart.map((product) => (
                <CartItem key={product._id} product={product} />
              ))}
            </div>

            <div className="col-lg-4">
              <PriceDetails />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
