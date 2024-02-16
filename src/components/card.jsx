import 'bootstrap/dist/css/bootstrap.min.css';

export default function Card() {
  return (
    <div className="" style={{ width: "18rem" }}>
      <img src="src\assets\icon1.png" className="card-img-top" alt="..." style={{ width:80 }}/>
      <div className="card-body">
        <h5 className="card-title">Membership Organisations</h5>
        <p className="card-text fs-6">
        Our membership management software provides full automation of membership renewals and payments
        </p>
      </div>
    </div>
  );
}
