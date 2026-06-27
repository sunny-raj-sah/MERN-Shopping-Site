 import { Link, useParams } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";

import { useProducts } from "../../context/ProductContext";
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";

const ProductDetails = () => {
  const { productId } = useParams();

  const {
    state: productState,
  } = useProducts();

  const {
    state: wishlistState,
    addWishlist,
    removeWishlist,
  } = useWishlist();

  const {
    state: cartState,
    dispatch: cartDispatch,
  } = useCart();

  // Find Product
  const product = productState.products.find(
    (item) => item._id === productId
  );

  // Loading
  if (productState.loading) {
    return (
      <>
        <Navbar />

        <div className="container py-5 text-center">
          <h3>Loading Product...</h3>
        </div>
      </>
    );
  }

  // Error
  if (productState.error) {
    return (
      <>
        <Navbar />

        <div className="container py-5 text-center">
          <h3>{productState.error}</h3>
        </div>
      </>
    );
  }

  // Product Not Found
  if (!product) {
    return (
      <>
        <Navbar />

        <div className="container py-5 text-center">
          <h2>Product Not Found</h2>
        </div>
      </>
    );
  }

  const isWishlist = wishlistState.wishlist.some(
    (item) => item._id === product._id
  );

  const isCart = cartState.cart.some(
    (item) => item._id === product._id
  );

  // Wishlist Handler
  const handleWishlist = async () => {
    if (isWishlist) {
      await removeWishlist(product._id);
    } else {
      await addWishlist(product._id);
    }
  };

  return (
    <>
      <Navbar />

      <div className="container py-5">
        <div className="row">
          <div className="col-md-5">
            <div className="bg-light p-4 rounded">
              <img
                src={product.image}
                alt={product.title}
                className="img-fluid"
              />
            </div>
          </div>

          <div className="col-md-7">
            <h2>{product.title}</h2>

            <p className="text-muted">
              {product.description}
            </p>

            <h3 className="fw-bold">
              ₹{product.price}
            </h3>

            <p>
              ⭐ {product.rating}
            </p>

            <p>
              Category: {product.category}
            </p>

            <div className="d-flex gap-3 mt-4">
              {isCart ? (
                <Link
                  to="/cart"
                  className="btn btn-dark"
                >
                  Go To Cart
                </Link>
              ) : (
                <button
                  className="btn btn-dark"
                  onClick={() =>
                    cartDispatch({
                      type: "ADD_TO_CART",
                      payload: product,
                    })
                  }
                >
                  Add To Cart
                </button>
              )}

              <button
                className={`btn ${
                  isWishlist
                    ? "btn-danger"
                    : "btn-outline-danger"
                }`}
                onClick={handleWishlist}
              >
                {isWishlist
                  ? "Remove Wishlist"
                  : "Add Wishlist"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;