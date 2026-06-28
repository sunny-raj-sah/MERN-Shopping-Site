import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
 
const CartItem = ({ product }) => {

    const {
        
        dispatch: cartDispatch,

    } = useCart();

     


    const {
    state: wishlistState,
    addWishlist,
    removeWishlist,
  } = useWishlist();

   
  const isWishlist = wishlistState.wishlist.some(
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

        <div className="card mb-4 shadow-sm border-0">

            <div className="row g-0">

                <div className="col-md-4 bg-light">

                    <img

                        src={product.image}

                        alt={product.title}

                        className="img-fluid p-3"

                        style={{

                            height: "250px",

                            objectFit: "contain",

                        }}

                    />

                </div>

                <div className="col-md-8">

                    <div className="card-body">

                        <h4>

                            {product.title}

                        </h4>

                        <h5 className="fw-bold">

                            ₹{product.price}

                        </h5>

                        <p className="text-decoration-line-through text-secondary">

                            {/* ₹{product.originalPrice} */}

                        </p>

                        <p className="text-success fw-bold">

                            50% OFF

                        </p>

                        <div className="d-flex align-items-center mb-3">

                            <span className="me-3">

                                Quantity

                            </span>

                            <button

                                className="btn btn-outline-dark btn-sm"

                                onClick={() =>

                                    cartDispatch({

                                        type: "DECREASE_QUANTITY",

                                        payload: product.id,

                                    })

                                }

                            >

                                -

                            </button>

                            <span className="mx-3">

                                {product.quantity}

                            </span>

                            <button

                                className="btn btn-outline-dark btn-sm"

                                onClick={() =>

                                    cartDispatch({

                                        type: "INCREASE_QUANTITY",

                                        payload: product.id,

                                    })

                                }

                            >

                                +

                            </button>

                        </div>

                        <div className="d-flex gap-3">

                            <button

                                className="btn btn-outline-secondary"

                                onClick={() =>

                                    cartDispatch({

                                        type: "REMOVE_FROM_CART",

                                        payload: product.id,

                                    })

                                }

                            >

                                Remove From Cart

                            </button>
                               

                               
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

        </div>

    );

};

export default CartItem;