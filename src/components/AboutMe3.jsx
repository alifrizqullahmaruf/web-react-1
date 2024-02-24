import { SIMPLE_CARD } from "../data";
import SimpleCard from "./SimpleCard";

export default function AboutMe3() {
  return (
    <div className="container p-5">
      <div className="row ">
        <div className="col-12 justify-content-center pb-5">
          <h2 className="text-center">Caring is the new marketing</h2>
          <p className="text-center">
            The Nexcent blog is the best place to read about the latest
            membership insights, trends and more. See whos joining the
            community, read about how our community are increasing their
            membership income and lots more.
          </p>
        </div>
        <div className="row justify-content-center pb-5">
          <div className="col-4 text-center">
            {" "}
            {/* Tambahkan kelas text-center di sini */}
            <SimpleCard key={SIMPLE_CARD[0].title} {...SIMPLE_CARD[0]} />
          </div>
          <div className="col-4 text-center">
            {" "}
            {/* Tambahkan kelas text-center di sini */}
            <SimpleCard key={SIMPLE_CARD[1].title} {...SIMPLE_CARD[1]} />
          </div>
          <div className="col-4 text-center">
            {" "}
            {/* Tambahkan kelas text-center di sini */}
            <SimpleCard key={SIMPLE_CARD[2].title} {...SIMPLE_CARD[2]} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 ">
          <h2 className="display-5 text-center fw-medium">
            Pellentesque suscipit <br />
            fringilla libero eu.
          </h2>
          <div className="text-center pt-5">
            <button className="btn btn-success">
              Get a Demo <span className="bi bi-arrow-right"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
