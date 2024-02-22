import "bootstrap/dist/css/bootstrap.min.css";

export default function OurClient() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-12">
          <p className="text-center fs-2 fw-bold">Our Clients</p>
          <p className="text-center">
            We have been working with some Fortune 500+ clients
          </p>
        </div>
        <div className="col-12 d-flex justify-content-around mt-3">
          <img
            src="src/assets/1.png"
            alt=""
            style={{ width: "48px", height: "48px" }}
          />
          <img
            src="src/assets/2.png"
            alt=""
            style={{ width: "48px", height: "48px" }}
          />
          <img
            src="src/assets/3.png"
            alt=""
            style={{ width: "48px", height: "48px" }}
          />
          <img
            src="src/assets/4.png"
            alt=""
            style={{ width: "48px", height: "48px" }}
          />
          <img
            src="src/assets/5.png"
            alt=""
            style={{ width: "48px", height: "48px" }}
          />
          <img
            src="src/assets/6.png"
            alt=""
            style={{ width: "48px", height: "48px" }}
          />
          <img
            src="src/assets/7.png"
            alt=""
            style={{ width: "48px", height: "48px" }}
          />
        </div>
        <div className="container">
          <div className="col-12 mt-5">
            <p
              className="text-center fs-2 fw-bold"
              style={{ lineHeight: "1.2" }}
            >
              Manage your entire community <br />
              in a single system
            </p>
            <p className="text-center">Who is Nextcent suitable for?</p>
          </div>
        </div>
      </div>
    </div>
  );
}
