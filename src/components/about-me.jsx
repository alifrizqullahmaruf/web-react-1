import { CARD_ABOUTME } from "../data";
import CardAboutMe from "./icon_about";

export default function AboutMe() {
  return (
    <div style={{ backgroundColor: "#E0E0E0" }}>
      <div className="container py-5">
        <div className="row">
          <div className="col gap-2">
            <p className="display-5 fw-bold">
              Helping a local <br />
              <span style={{ color: "#4CAF4F" }}>business reinvent itself</span>
            </p>
            <p>We reached here with our hard work and dedication</p>
          </div>
          <div className="col">
            <ul className="col-2">
              {CARD_ABOUTME.map((conceptItem)=>(
                <CardAboutMe key={conceptItem.desc} {...conceptItem}/>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
