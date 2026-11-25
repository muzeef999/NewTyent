import Image from "next/image";
import "./whyTyent.css";
import Link from "next/link";

const Card = ({ img, title, desc }) => (
  <div className="why-card text-center">
    <div className="why-img-wrapper">
      <Image src={img} alt={title} fill sizes="(min-width: 768px) 33vw, 100vw" className="why-img" />
    </div>

    <h3 className="why-title">{title}</h3>
    <p className="why-desc">{desc}</p>
    <Link href="/benefits" className="why-link">Explore water ionizer benefits</Link>
  </div>
);

const Why_People_choose_Tyent_Water = () => {
  return (
    <section className="why-section">
      <div className="container">
        <h2 className="fw-bold subtitle-tight" style={{ textAlign: "center" }}>Why People choose Tyent Water</h2>

        <div className="row g-3 mt-3">
          <div className="col-md-4">
            <Card
              img="/whyTent/Increase_energy.jpg"
              title="Increase energy"
              desc="An abundance of molecular hydrogen adds noticeable energy boost"
            />
          </div>

          <div className="col-md-4">
            <Card
              img="/whyTent/Promotes_Weight_loss.webp"
              title="Promotes Weight loss"
              desc={<>Many of our customers report<br />increased weight loss.</>}
            />
          </div>

          <div className="col-md-4">
            <Card
              img="/whyTent/Faster_recovery_after_exercise.webp"
              title="Faster recovery after exercise"
              desc="Hydrogen water easily absorbs into your cells to neutralize lactic acid for faster recovery."
            />
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="why-feature-banner">
          <Image
            src="/whyTent/guy_drinking_water.webp"
            alt="Person drinking Tyent water"
            fill
            className="why-feature-image"
          />

          <div className="why-feature-content">
            <h3 className="why-feature-title">
              Over 3,000+ scientific studies on over 170+ health conditions
            </h3>

            <p className="why-feature-text">
              Backed by 3000+ scientific studies worldwide, hydrogen-rich water
              has shown benefits across 170+ health conditions including metabolism,
              inflammation, oxidative stress, gut health, skin, diabetes and
              cardiovascular wellness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why_People_choose_Tyent_Water;
