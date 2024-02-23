export default function Heroes3() {
  return (
    <div>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-lg-6">
            <h2 className="fw-bold text-body-emphasis lh-1 mb-3">
              How to design your site footer like we did{" "}
            </h2>
            <p className="" style={{ fontSize: 12 }}>
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-success btn-lg px-4 me-md-2"
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="src\assets\hero-3.png"
              className="d-block mx-lg-auto img-fluid"
              alt="Ilustration Image"
              width="391"
              height=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
