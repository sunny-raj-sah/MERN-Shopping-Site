import { Link } from "react-router-dom";
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";
const WishlistCard = ({ product }) => {


   const {
    
   
    removeWishlist,
  } = useWishlist();

  const {
    state: cartState,
    dispatch: cartDispatch,
  } = useCart();

  
   const isCart = cartState.cart.some(
    (item) => item._id === product._id
  );

const removeWishlistHandler = async () => {
    await removeWishlist(product._id);
};
    // const {
    //     dispatch: wishlistDispatch,
    // } = useWishlist();

    // const removeWishlistHandler = () => {

    //     wishlistDispatch({

    //         type: "REMOVE_FROM_WISHLIST",

    //         payload: product._id,

    //     });

    // };

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

                <button
                    className="btn btn-light rounded-circle position-absolute top-0 end-0 m-3 shadow-sm"
                    onClick={removeWishlistHandler}
                >

                    <i className="bi bi-heart-fill text-danger fs-5"></i>

                </button>

            </div>

            <div className="card-body text-center">

                <h5>

                    {product.title}

                </h5>

                <h3 className="fw-bold">

                    ₹{product.price}

                </h3>

            </div>
            

            <div className="card-footer border-0 bg-white">

               <div className="card-footer bg-white border-0 p-0">
        {isCart ? (
          <Link
            to="/cart"
            className="btn btn-primary w-100 rounded-0"
          >
            Go To Cart
          </Link>
        ) : (
          <button
            className="btn btn-secondary w-100 rounded-0"
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
             </div>
            </div>

        </div>

    );

};

export default WishlistCard;