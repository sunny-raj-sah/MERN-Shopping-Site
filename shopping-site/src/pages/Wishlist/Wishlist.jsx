 import Navbar from "../../components/Navbar/Navbar";
import WishlistCard from "../../components/WishlistCard/WishlistCard";

import { useWishlist } from "../../context/WishlistContext";

const Wishlist = () => {
  const {
    state: wishlistState,
  } = useWishlist();

  return (
    <>
      <Navbar />

      <div className="container py-5">
        <h2 className="fw-bold text-center mb-5">
          My Wishlist ({wishlistState.wishlist.length})
        </h2>

        {wishlistState.wishlist.length === 0 ? (
          <div className="text-center py-5">
            <h3>Your Wishlist is Empty</h3>
          </div>
        ) : (
          <div className="row g-4">
            {wishlistState.wishlist.map((product) => (
              <div
                className="col-lg-3 col-md-6"
                key={product._id}
              >
                <WishlistCard product={product} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Wishlist;