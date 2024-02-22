export default function CardAboutMe({ image, number, desc }) {
  return (
    <li className="d-flex gap-3">
      <div>
        <img src={image} alt="" width={50} height={50} />
      </div>
      <div>
        <p className="fw-bold fs-2">{number} <br/><span className="fs-6 fw-light">{desc}</span></p>
      </div>
    </li>
  );
}
