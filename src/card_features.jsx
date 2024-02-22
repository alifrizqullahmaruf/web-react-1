import Card from "./components/card";
import { CARD_HERO } from "./data";

export default function CardFeatures() {
  return (
    <section className="container my-5 px-4">
      <div className="d-flex row justify-content-evenly">
        {CARD_HERO.map((conceptItem) => (
          <Card key={conceptItem.title} {...conceptItem} />
        ))}
      </div>
    </section>
  );
}
