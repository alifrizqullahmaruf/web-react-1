
export default function Card({ image, title, description }  ) {
  return (
    <div className="d-flex row justify-content-center gap-2" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt={image} style={{ width:80 }}/>
      <h5 className="card-title fs-4 text-center">{title}</h5>
      <p className="card-text fs-6 text-center">
        {description}
      </p>
    </div>
  );
}
