 import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import { useAuth } from "../../context/AuthContext";

const Register = () => {
  const navigate = useNavigate();

  const { register } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await register(userData);

      alert("Registration Successful");

      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <Navbar />

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card shadow">

              <div className="card-body p-4">

                <h2 className="text-center mb-4">

                  Register

                </h2>

                <form onSubmit={handleSubmit}>

                  <div className="mb-3">

                    <label className="form-label">

                      Name

                    </label>

                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Enter your name"
                      value={userData.name}
                      onChange={handleChange}
                      required
                    />

                  </div>

                  <div className="mb-3">

                    <label className="form-label">

                      Email

                    </label>

                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter your email"
                      value={userData.email}
                      onChange={handleChange}
                      required
                    />

                  </div>

                  <div className="mb-4">

                    <label className="form-label">

                      Password

                    </label>

                    <div className="input-group">

                      <input
                        type={
                          showPassword
                            ? "text"
                            : "password"
                        }
                        name="password"
                        className="form-control"
                        placeholder="Enter password"
                        value={userData.password}
                        onChange={handleChange}
                        required
                      />

                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={() =>
                          setShowPassword(!showPassword)
                        }
                      >
                        <i
                          className={`bi ${
                            showPassword
                              ? "bi-eye-slash"
                              : "bi-eye"
                          }`}
                        ></i>
                      </button>

                    </div>

                  </div>

                  <button
                    className="btn btn-dark w-100"
                    type="submit"
                  >
                    Register
                  </button>

                </form>

                <p className="text-center mt-4 mb-0">

                  Already have an account?

                  {" "}

                  <Link to="/login">

                    Login

                  </Link>

                </p>

              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;