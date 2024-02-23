export default function CardAboutMe({ image, number, desc }) {
  return (
    <div className="d-flex gap-3">
      <div>
        <img src={image} alt="" width={50} height={50} />
      </div>
      <div>
        <p className="fw-bold fs-2">{number} <br/><span className="fs-6 fw-divght">{desc}</span></p>
      </div>
    </div>
  );
}
