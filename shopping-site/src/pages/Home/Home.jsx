import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  const categories = [
    {
      id: 1,
      name: "Men",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600",
    },
    {
      id: 2,
      name: "Women",
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600",
    },
    {
      id: 3,
      name: "Kids",
      image:
        "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600",
    },
    {
      id: 4,
      name: "Electronics",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
    },
    {
      id: 5,
      name: "Home",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="container py-5">
        <div className="row g-4 mb-5">
          {categories.map((category) => (
            <div className="col-lg col-md-4 col-6" key={category.id}>
              <Link
                to={`/products?category=${category.name}`}
                className="text-decoration-none text-dark"
              >
                <div className="card border-0 shadow-sm">
                  <img
                    src={category.image}
                    className="card-img-top"
                    style={{
                      height: "110px",
                      objectFit: "cover",
                    }}
                  />

                  <div className="card-body text-center py-2">
                    <h6 className="fw-semibold mb-0">{category.name}</h6>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div
          className="rounded overflow-hidden position-relative mb-5"
          style={{ height: "500px" }}
        >
          <img
            src="/images/hero-banner.png"
            alt="Hero Banner"
            className="w-100 h-100"
            style={{
              objectFit: "cover",
            }}
          />
          {/* hero section */}
          <div
            className="position-absolute top-50 start-0 translate-middle-y ps-5"
            style={{ maxWidth: "500px" }}
          >
            <span className="badge bg-dark mb-3 fs-6">New Collection 2026</span>

            <h1 className="display-4 fw-bold">
              Discover Your
              <br />
              Perfect Style
            </h1>

            <p className="lead text-secondary">
              Shop premium fashion, electronics and home essentials with
              exciting offers.
            </p>

            <Link to="/products" className="btn btn-dark btn-lg px-5 mt-2">
              Shop Now
            </Link>
          </div>
        </div>

        <div className="row g-4">
          {[1, 2].map((item) => (
            <div className="col-lg-6" key={item}>
              <div className="card border-0 bg-secondary-subtle p-4">
                <div className="row align-items-center">
                  <div className="col-4">
                    <img
                      src={
                        item === 1
                          ? "public/images/new-arrival.png"
                          : "public/images/summer-collection.png"
                      }
                      className="img-fluid rounded"
                      alt=""
                      style={{
                        height: "170px",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  <small className="text-uppercase text-muted">
                    {item === 1 ? "Summer Sale" : "New Arrivals"}
                  </small>

                  <h2 className="fw-bold mt-3">
                    {item === 1 ? "Summer Collection" : "Latest Fashion"}
                  </h2>

                  <p className="text-secondary">
                    {item === 1
                      ? "Refresh your wardrobe with stylish summer outfits at exclusive discounts."
                      : "Explore the newest arrivals in fashion, footwear and accessories  at exclusive discounts."}
                  </p>

                  <Link
                    to={item === 1 ? "/products?category=Women" : "/products"}
                    className="btn btn-dark mt-2"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
