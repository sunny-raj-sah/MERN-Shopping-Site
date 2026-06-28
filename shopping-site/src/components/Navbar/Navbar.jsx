 import { Link, useNavigate } from "react-router-dom";

import { useSearch } from "../../context/SearchContext";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();

  const { state, dispatch } = useSearch();

  const {
    state: cartState,
  } = useCart();

  const {
    state: wishlistState,
  } = useWishlist();

  const {
    state: authState,
    logout,
  } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light border-bottom py-3">
      <div className="container">

        {/* Logo */}
        <Link
          to="/"
          // className="navbar-brand fw-bold fs-3 text-secondary"
            className="navbar-brand d-flex align-items-center fw-bold fs-3 text-dark"
        >
          <img
    src="/Favicon-MP.png"
    alt="MyShoppingSite Logo"
    width="42"
    height="42"
    className="me-2 rounded-circle"
  />

  <span>MyShoppingSite</span>
        </Link>

        {/* Search */}
        <div className="w-50 d-none d-lg-block">

          <div className="input-group">

            <span className="input-group-text bg-white">
              <i className="bi bi-search"></i>
            </span>

            <input
              type="text"
              className="form-control"
              placeholder="Search Products..."
              value={state.search}
              onChange={(e) =>
                dispatch({
                  type: "SET_SEARCH",
                  payload: e.target.value,
                })
              }
            />

          </div>

        </div>

        {/* Right Side */}
        <div className="d-flex align-items-center gap-4">

          {/* Login / Profile */}

          {authState.isAuthenticated ? (

            <div className="dropdown">

              <button
                className="btn btn-outline-dark dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-person-circle me-2"></i>

                {authState.user?.name || "Profile"}
              </button>

              <ul className="dropdown-menu dropdown-menu-end">

                <li>

                  <Link
                    to="/profile"
                    className="dropdown-item"
                  >
                    <i className="bi bi-person me-2"></i>

                    Profile
                  </Link>

                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>

                  <button
                    className="dropdown-item text-danger"
                    onClick={handleLogout}
                  >
                    <i className="bi bi-box-arrow-right me-2"></i>

                    Logout
                  </button>

                </li>

              </ul>

            </div>

          ) : (

            <Link
              to="/login"
              className="btn btn-dark px-4"
            >
              Login
            </Link>

          )}

          {/* Wishlist */}

          <Link
            to="/wishlist"
            className="btn btn-light position-relative"
          >

            <i className="bi bi-heart fs-4"></i>

            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            >
              {wishlistState.wishlist.length}
            </span>

          </Link>

          {/* Cart */}

          <Link
            to="/cart"
            className="btn btn-light position-relative"
          >

            <i className="bi bi-cart3 fs-4"></i>

            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark"
            >
              {cartState.cart.length}
            </span>

          </Link>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;