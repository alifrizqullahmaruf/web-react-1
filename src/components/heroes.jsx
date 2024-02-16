import 'bootstrap/dist/css/bootstrap.min.css';

export default function Heroes() {
  return (
    <div style={{ backgroundColor: "#E0E0E0" }}>
    <div className="container col-xxl-8 px-4 py-5" >
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img src="src\assets\Illustration.png" className="d-block mx-lg-auto img-fluid" alt="Ilustration Image" width="391" height="" loading="lazy" />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Lessons and insights <span className='text-success'>from 8 years</span></h1>
          <p className="lead">Where to grow your business as a photographer: site or social media?</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" className="btn btn-success btn-lg px-4 me-md-2">Primary</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
