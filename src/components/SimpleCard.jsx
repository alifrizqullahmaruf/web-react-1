export default function SimpleCard({ title }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title text-center">{title}</h5>
        <p className="text-center pt-3 text-success fw-bold">Read More <span className="bi bi-arrow-right "></span></p>
      </div>
    </div>
  );
}
