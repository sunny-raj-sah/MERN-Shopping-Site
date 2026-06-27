const Loading = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "70vh" }}
    >
      <div className="text-center">

        <div
          className="spinner-border text-dark"
          role="status"
        >
          <span className="visually-hidden">
            Loading...
          </span>
        </div>

        <p className="mt-3 fs-5">
          Loading Products...
        </p>

      </div>
    </div>
  );
};

export default Loading;