export default function KiSmoMi({ navigate }) {
  return (
    <>
      {/* PAGE HEADER */}
      <div className="page-header">
        <div className="container">
          <p className="eyebrow">Naša istarska priča</p>
          <h1>Ki smo mi</h1>
          <div className="section-divider"></div>
        </div>
      </div>

      {/* STORY */}
      <section className="section-pad section-dark">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-md-6">
              <h2
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "1.6rem",
                  fontStyle: "italic",
                  color: "var(--gold)",
                  marginBottom: "1.5rem",
                  lineHeight: 1.5,
                }}
              >
                Ketering Lepše nije samo posal, to je ljubav prema istarskoj grudi i guštima ki nas
                hrane generacijama.
              </h2>
              <p style={{ color: "var(--text-muted)", marginBottom: "1rem" }}>
                Počeli smo pred puno lit, u maloj kuhinji, s jednom idejon: doniti istinsku, svježu
                i domaću hranu na stolove naših judi za njihove najvažnije momente. Virujemo u
                jednostavnost namirnice, ali u složenost okusa kega samo tradicija zna priparati.
              </p>
              <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>
                Danas, s ponosom preporučujemo naša jela pripremljena po receptima naših nonica, ali
                s modernom elegancijon ka odgovara svakon svečanom događaju.
              </p>
              <button className="btn-gold" onClick={() => navigate("kontakt")}>
                Kontaktirajte nas
              </button>
            </div>
            <div className="col-md-6">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80"
                alt="Naša kuhinja"
                style={{ width: "100%", height: "380px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* VRIJEDNOSTI */}
      <section className="section-pad" style={{ background: "#0a0a0a" }}>
        <div className="container">
          <h2
            className="text-center mb-2"
            style={{ fontFamily: "Playfair Display, serif", fontSize: "2rem", color: "var(--gold)" }}
          >
            Naše vrijednosti
          </h2>
          <div className="section-divider centered"></div>

          <div className="row g-4 mt-3">
            <div className="col-md-4">
              <div className="value-card">
                <div className="value-icon">🌿</div>
                <h3>Svježe namirnice</h3>
                <p>Sve pripremamo od lokalnih, sezonskih namirnica iz Istre. Svaki dan svježe.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="value-card">
                <div className="value-icon">👩‍🍳</div>
                <h3>Tradicija kuhinje</h3>
                <p>Recepti naših nonica, pažljivo čuvani i preneseni u svaki naš pijat.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="value-card">
                <div className="value-icon">✨</div>
                <h3>Ekskluzivna usluga</h3>
                <p>Svaki event je jedinstven. Ponudu prilagođujemo vašim željama i prilike.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
