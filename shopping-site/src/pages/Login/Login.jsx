 import { useState } from "react";
import { Link,  useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
    const navigate = useNavigate();

const {
  login,
  state: authState,
} = useAuth();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

   const handleSubmit = async (e) => {

  e.preventDefault();

  const result = await login(loginData);

  if (result.success) {

    navigate("/");

  } else {

    alert(result.message);

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

                  Login

                </h2>

                <form onSubmit={handleSubmit}>

                  <div className="mb-3">

                    <label className="form-label">

                      Email

                    </label>

                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter your email"
                      value={loginData.email}
                      onChange={handleChange}
                      required
                    />

                  </div>

                  <div className="mb-3">

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
                        value={loginData.password}
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


                       {
  authState.error && (

    <div className="alert alert-danger">

      {authState.error}

    </div>

  )
}

                  <button
  className="btn btn-dark w-100"
  type="submit"
  disabled={authState.loading}
>

  {
    authState.loading
      ? "Logging In..."
      : "Login"
  }

</button>

                </form>

                <p className="text-center mt-4 mb-0">

                  Don't have an account?

                  {" "}

                  <Link to="/register">

                    Register

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

export default Login;