export default function FooterPage() {
  return (
    <div style={{ backgroundColor: "#263238" }}>
      <div className="container">
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 pt-5 mt-5 border-top">
          <div className="col mb-3">
            <div className="d-flex">
              <img src="src\assets\Icon.png" alt="" width={35} height={35} />
              <p className="fs-3 fw-medium" style={{ color: "white" }}>
                Nexcent
              </p>
            </div>
            <div>
              <p className="text-light" style={{}}>
                Copyright © 2020 Nexcent ltd.
              </p>
              <p className="text-light" style={{}}>
                All rights reserved
              </p>
            </div>
            <div>
              <ul
                style={{ listStyle: "none",margin: "0", padding: "0"}}
                className="d-flex gap-3 justify-content-start"
              >
                <li
                  style={{ color: "white", backgroundColor: "gray" }}
                  className="p-1 rounded-circle"
                >
                  <i className="bi bi-instagram"></i>
                </li>
                <li
                  style={{ color: "white", backgroundColor: "gray" }}
                  className="p-1 rounded-circle"
                >
                  <i className="bi bi-dribbble"></i>
                </li>
                <li
                  style={{ color: "white", backgroundColor: "gray" }}
                  className="p-1 rounded-circle"
                >
                  <i className="bi bi-twitter"></i>
                </li>
                <li
                  style={{ color: "white", backgroundColor: "gray" }}
                  className="p-1 rounded-circle"
                >
                  <i className="bi bi-youtube"></i>
                </li>
              </ul>
            </div>
          </div>

          <div className="col mb-3"></div>

          <div className="col mb-3">
            <h5 className="text-light">Company</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2" style={{}}>
                <a
                  href="#"
                  className="nav-link p-0 "
                  style={{ color: "#F5F7FA" }}
                >
                  About us
                </a>
              </li>
              <li className="nav-item mb-2" style={{}}>
                <a
                  href="#"
                  className="nav-link p-0 "
                  style={{ color: "#F5F7FA" }}
                >
                  Blog
                </a>
              </li>
              <li className="nav-item mb-2" style={{}}>
                <a
                  href="#"
                  className="nav-link p-0 "
                  style={{ color: "#F5F7FA" }}
                >
                  Contact us
                </a>
              </li>
              <li className="nav-item mb-2" style={{}}>
                <a
                  href="#"
                  className="nav-link p-0 "
                  style={{ color: "#F5F7FA" }}
                >
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2" style={{}}>
                <a
                  href="#"
                  className="nav-link p-0 "
                  style={{ color: "#F5F7FA" }}
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          <div className="col mb-3">
            <h5 className="text-light">Support</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2" style={{}}>
                <a
                  href="#"
                  className="nav-link p-0 "
                  style={{ color: "#F5F7FA" }}
                >
                  Help center
                </a>
              </li>
              <li className="nav-item mb-2" style={{}}>
                <a
                  href="#"
                  className="nav-link p-0 "
                  style={{ color: "#F5F7FA" }}
                >
                  Terms of service
                </a>
              </li>
              <li className="nav-item mb-2" style={{}}>
                <a
                  href="#"
                  className="nav-link p-0 "
                  style={{ color: "#F5F7FA" }}
                >
                  Legal
                </a>
              </li>
              <li className="nav-item mb-2" style={{}}>
                <a
                  href="#"
                  className="nav-link p-0 "
                  style={{ color: "#F5F7FA" }}
                >
                  Privacy policy
                </a>
              </li>
              <li className="nav-item mb-2" style={{}}>
                <a
                  href="#"
                  className="nav-link p-0 "
                  style={{ color: "#F5F7FA" }}
                >
                  Status
                </a>
              </li>
            </ul>
          </div>

          <div className="col mb-3">
            <h5 className="text-light">Stay up to date</h5>
            <div
              className="input-group mb-3"
              style={{ backgroundColor: "#515B60" }}
            >
              <input
                type="text"
                className="form-control text-white"
                placeholder="Your email address"
                aria-label="Username"
                aria-describedby="basic-addon1"
                style={{
                  backgroundColor: "#515B60",
                  color: "white",
                }}
              />
              <span
                className="input-group-text"
                id="basic-addon1"
                style={{ backgroundColor: "#515B60" }}
              >
                <i className="bi bi-cursor" style={{ color: "white" }}></i>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
