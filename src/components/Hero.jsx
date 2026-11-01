 
export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="wrap hero-grid">

        {/* Left Content */}
        <div>
          <h1>
            Electric Vehicle Market Performance &amp; Insights
          </h1>

          <p className="lead">
            An interactive look at how electric vehicle manufacturers
            compare on price, battery capacity, driving range and
            country of origin, built on a published Tableau Public dashboard.
          </p>

          <div className="actions">
            <a className="btn primary" href="#dashboard">
              Explore Dashboard
            </a>

            <a className="btn ghost" href="#story">
              Explore Story
            </a>
          </div>
        </div>

        {/* Right Side Electric Car Image */}
        <img
          src="/ev-supercar.jpg"
          alt="Futuristic Electric Sports Car"
          className="hero-car"
        />

      </div>
    </section>
  );
}
