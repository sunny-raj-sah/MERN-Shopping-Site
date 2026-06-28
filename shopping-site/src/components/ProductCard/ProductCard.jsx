import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const { state: wishlistState, addWishlist, removeWishlist } = useWishlist();

  const { state: cartState, dispatch: cartDispatch } = useCart();

  const isWishlist = wishlistState.wishlist.some(
    (item) => item._id === product._id,
  );

  const isCart = cartState.cart.some((item) => item._id === product._id);

  // ==========================
  // Wishlist Handler
  // ==========================
  const handleWishlist = async () => {
    if (isWishlist) {
      await removeWishlist(product._id);
      toast.success("Removed product from wishlist");
    } else {
      await addWishlist(product._id);
      toast.success("Added product from wishlist");
    }
  };

  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="position-relative bg-light">
        <Link to={`/products/${product._id}`}>
          <img
            src={product.image}
            alt={product.title}
            className="card-img-top p-4"
            style={{
              height: "320px",
              objectFit: "contain",
            }}
          />
        </Link>

        {/* Wishlist Button */}
        <button
          className="btn btn-light rounded-circle position-absolute top-0 end-0 m-3 shadow-sm"
          onClick={handleWishlist}
        >
          <i
            className={`bi ${
              isWishlist ? "bi-heart-fill text-danger" : "bi-heart"
            } fs-5`}
          ></i>
        </button>
      </div>

      <div className="card-body text-center">
        <h5 className="fw-normal">{product.title}</h5>
        <div className="mb-2">
          <span className="badge bg-success px-3 py-2 fs-6">
            ⭐ {product.rating}
          </span>
        </div>
        <h2 className="fw-bold">₹{product.price}</h2>
      </div>

      <div className="card-footer bg-white border-0 p-0">
        {isCart ? (
          <Link to="/cart" className="btn btn-primary w-100 rounded-0">
            Go To Cart
          </Link>
        ) : (
          <button
            className="btn btn-secondary w-100 rounded-0"
            onClick={() => {
              cartDispatch({
                type: "ADD_TO_CART",
                payload: product,
              });
              toast.success("ADD_TO_CART successfully");
            }}
          >
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
