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
                to="/products"
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

                    <h6 className="fw-semibold mb-0">
                      {category.name}
                    </h6>

                  </div>

                </div>

              </Link>

            </div>

          ))}

        </div>

        <div
          className="bg-secondary-subtle rounded mb-5"
          style={{ height: "500px" }}
        ></div>

        <div className="row g-4">

          {[1, 2].map((item) => (

            <div className="col-lg-6" key={item}>

              <div className="card border-0 bg-secondary-subtle p-4">

                <div className="row align-items-center">

                  <div className="col-4">

                    <div
                      className="bg-white rounded"
                      style={{ height: "170px" }}
                    ></div>

                  </div>

                  <div className="col-8">

                    <small className="text-uppercase">
                      New Arrivals
                    </small>

                    <h2 className="fw-bold mt-4">
                      Summer Collection
                    </h2>

                    <p className="mb-0">
                      Check out our best winter collection to stay
                      warm in style this season.
                    </p>

                  </div>

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