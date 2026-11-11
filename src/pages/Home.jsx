export default function Home({ navigate }) {
  return (
    <>
      {/* HERO */}
      <section className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <h1 className="hero-title">Kus Istre</h1>
              <h2 className="hero-subtitle">na vašen banku</h2>
              <p className="hero-desc">
                Tradicija, gušt i specijalna hrana za vaše najlipše ženidbe, fešte i druge svečanosti.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <button className="btn-gold" onClick={() => navigate("kontakt")}>
                  Išći ponudu
                </button>
                <button className="btn-outline-gold" onClick={() => navigate("ca-nudimo")}>
                  Ča nudimo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ČA NUDIMO */}
      <section className="section-pad section-dark">
        <div className="container">
          <h2 className="text-center gold-text mb-2" style={{ fontFamily: "Playfair Display, serif", fontSize: "2.2rem" }}>
            Ča nudimo
          </h2>
          <div className="section-divider centered"></div>

          <div className="row g-4 mt-2">
            {/* Ženidbe */}
            <div className="col-md-4">
              <div className="service-card">
                <img
                  src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80"
                  alt="Ženidbe"
                />
                <div className="service-card-body">
                  <h3>Ženidbe</h3>
                  <p>
                    Okusi ke nećete zabiti na vaš najvažniji dan. Od teplih predjeli do štabelega
                    slatkega, sve posloženo jušto kako rabi.
                  </p>
                  <button className="btn-outline-gold" onClick={() => navigate("ca-nudimo")}>
                    Te intereša više
                  </button>
                </div>
              </div>
            </div>

            {/* Domjenki */}
            <div className="col-md-4">
              <div className="service-card">
                <img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80"
                  alt="Domjenki na delu"
                />
                <div className="service-card-body">
                  <h3>Domjenki na delu</h3>
                  <p>
                    Pokažite se u najboljen svitlu prid vašima partnerima i klijentima s vrhunskim
                    tradicionalnim zalogaji uz kapljicu najbolje malvazije.
                  </p>
                  <button className="btn-outline-gold" onClick={() => navigate("ca-nudimo")}>
                    Te intereša više
                  </button>
                </div>
              </div>
            </div>

            {/* Fešte */}
            <div className="col-md-4">
              <div className="service-card">
                <img
                  src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&q=80"
                  alt="Fešte"
                />
                <div className="service-card-body">
                  <h3>Fešte</h3>
                  <p>
                    Opušteni partyji i fešte uz bogatu istarsku trpezu. Pravi gušti za pravo
                    društvo.
                  </p>
                  <button className="btn-outline-gold" onClick={() => navigate("ca-nudimo")}>
                    Te intereša više
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NAŠA ŠTORIJA */}
      <section className="story-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-md-5">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80"
                alt="Naša kuhinja"
                style={{ width: "100%", height: "420px", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-7">
              <p className="eyebrow">Naša štorija</p>
              <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "2.5rem", color: "var(--gold)", marginBottom: "0.5rem" }}>
                Catering z dušon
              </h2>
              <div className="section-divider"></div>
              <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>
                Maneštra Catering ni samo delo, to je ljubav prema istarskoj užanci i guštima ki nas
                hrane kolinima i kolinima.
              </p>
              <button className="btn-outline-gold" onClick={() => navigate("ki-smo-mi")}>
                Ki smo mi
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
