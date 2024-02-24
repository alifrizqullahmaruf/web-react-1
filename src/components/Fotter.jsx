export default function FooterPage() {
    return (
      <div style={{ backgroundColor: "#263238", color: "#ffffff" }}>
        <div className="container">
          <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 pt-5 mt-5 border-top">
            <div className="col mb-3">
              <div className="d-flex">
                <img src="src\assets\Icon.png" alt="" width={35} height={35} />
                <p className="fs-3 fw-medium ps-2" style={{ color: "#ffffff" }}>Nexcent</p>
              </div>
              <p className="text-body-secondary" style={{ color: "#ffffff" }}>
                Copyright © 2020 Nexcent ltd.
              </p>
              <p className="text-body-secondary" style={{ color: "#ffffff" }}>
                All rights reserved
              </p>
            </div>
  
            <div className="col mb-3"></div>
  
            <div className="col mb-3">
              <h5 style={{ color: "#ffffff" }}>Company</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2" style={{ color: "#ffffff" }}>
                  <a
                    href="#"
                    className="nav-link p-0 text-body-secondary"
                    style={{ color: "#ffffff" }}
                  >
                    About us
                  </a>
                </li>
                <li className="nav-item mb-2" style={{ color: "#ffffff" }}>
                  <a
                    href="#"
                    className="nav-link p-0 text-body-secondary"
                    style={{ color: "#ffffff" }}
                  >
                    Blog
                  </a>
                </li>
                <li className="nav-item mb-2" style={{ color: "#ffffff" }}>
                  <a
                    href="#"
                    className="nav-link p-0 text-body-secondary"
                    style={{ color: "#ffffff" }}
                  >
                    Contact us
                  </a>
                </li>
                <li className="nav-item mb-2" style={{ color: "#ffffff" }}>
                  <a
                    href="#"
                    className="nav-link p-0 text-body-secondary"
                    style={{ color: "#ffffff" }}
                  >
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2" style={{ color: "#ffffff" }}>
                  <a
                    href="#"
                    className="nav-link p-0 text-body-secondary"
                    style={{ color: "#ffffff" }}
                  >
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>
  
            <div className="col mb-3">
              <h5 style={{ color: "#ffffff" }}>Support</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2" style={{ color: "#ffffff" }}>
                  <a
                    href="#"
                    className="nav-link p-0 text-body-secondary"
                    style={{ color: "#ffffff" }}
                  >
                    Help center
                  </a>
                </li>
                <li className="nav-item mb-2" style={{ color: "#ffffff" }}>
                  <a
                    href="#"
                    className="nav-link p-0 text-body-secondary"
                    style={{ color: "#ffffff" }}
                  >
                    Terms of service
                  </a>
                </li>
                <li className="nav-item mb-2" style={{ color: "#ffffff" }}>
                  <a
                    href="#"
                    className="nav-link p-0 text-body-secondary"
                    style={{ color: "#ffffff" }}
                  >
                    Legal
                  </a>
                </li>
                <li className="nav-item mb-2" style={{ color: "#ffffff" }}>
                  <a
                    href="#"
                    className="nav-link p-0 text-body-secondary"
                    style={{ color: "#ffffff" }}
                  >
                    Privacy policy
                  </a>
                </li>
                <li className="nav-item mb-2" style={{ color: "#ffffff" }}>
                  <a
                    href="#"
                    className="nav-link p-0 text-body-secondary"
                    style={{ color: "#ffffff" }}
                  >
                    Status
                  </a>
                </li>
              </ul>
            </div>
  
            <div className="col mb-3">
              <h5 style={{ color: "#ffffff" }}>Stay up to date</h5>
              <div className="input-group">
                <input type="text" className="form-control" />
                <div className="input-group-append">
                  <span className="bi bi-cursor" style={{ color: "#ffffff" }}></span>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
  