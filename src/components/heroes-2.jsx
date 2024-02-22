export default function Heroes2() {
  return (
    <div>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-lg-6">
            <h2 className="fw-bold text-body-emphasis lh-1 mb-3">
            The unseen of spending three years at Pixelgrade
            </h2>
            <p className="" style={{ fontSize:12, }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
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
              src="src\assets\hero-2.png"
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
