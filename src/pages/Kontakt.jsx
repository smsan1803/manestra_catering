import { useState } from "react";

export default function Kontakt() {
  const [form, setForm] = useState({
    ime: "",
    email: "",
    telefon: "",
    vrstaEventa: "Vjenčanje",
    datum: "",
    brGostiju: "",
    poruka: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* PAGE HEADER */}
      <div className="page-header">
        <div className="container">
          <p className="eyebrow">Kontakt</p>
          <h1>Kontektajte nas</h1>
          <div className="section-divider"></div>
          <p style={{ color: "var(--text-muted)", maxWidth: 420 }}>
            Saslušat ćemo vaše žeje i složiti ponudu ka će odgovarati vašon posebnon događaju.
          </p>
        </div>
      </div>

      {/* CONTACT CONTENT */}
      <section className="section-pad section-dark">
        <div className="container">
          <div className="row g-4">
            {/* Contact info */}
            <div className="col-md-4">
              <div className="contact-info-card">
                <h3>Kontakt podaci</h3>

                <div className="contact-detail">
                  <p className="label">E-mail</p>
                  <p className="value">
                    <a href="mailto:info@manestra-catering.hr">info@manestra-catering.hr</a>
                  </p>
                </div>

                <div className="contact-detail">
                  <p className="label">Telefon</p>
                  <p className="value">+385 91 123 4567</p>
                </div>

                <div className="contact-detail">
                  <p className="label">Adresa</p>
                  <p className="value">Istra, Hrvatska</p>
                </div>

                <div className="contact-detail">
                  <p className="label">Radno vrijeme</p>
                  <p className="value">
                    Pon – Pet: 9:00 – 18:00
                    <br />
                    Subota: 10:00 – 14:00
                  </p>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="col-md-8">
              <div className="form-card">
                <h3>Pošaljite upit</h3>

                {sent ? (
                  <div
                    style={{
                      textAlign: "center",
                      padding: "3rem 1rem",
                      color: "var(--gold)",
                    }}
                  >
                    <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>✓</div>
                    <h4 style={{ fontFamily: "Playfair Display, serif", color: "var(--gold)" }}>
                      Upit je poslan!
                    </h4>
                    <p style={{ color: "var(--text-muted)", marginTop: "0.5rem" }}>
                      Javit ćemo vam se u najkraćem mogućem roku.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      {/* Name */}
                      <div className="col-md-6">
                        <label className="form-label-custom">Ime i prezime / Tvrtka</label>
                        <input
                          type="text"
                          name="ime"
                          className="form-control-custom"
                          placeholder="Vaše ime"
                          value={form.ime}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Email */}
                      <div className="col-md-6">
                        <label className="form-label-custom">E-mail adresa</label>
                        <input
                          type="email"
                          name="email"
                          className="form-control-custom"
                          placeholder="vas@email.hr"
                          value={form.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Phone */}
                      <div className="col-md-6">
                        <label className="form-label-custom">Telefon</label>
                        <input
                          type="tel"
                          name="telefon"
                          className="form-control-custom"
                          placeholder="+385 91 ..."
                          value={form.telefon}
                          onChange={handleChange}
                        />
                      </div>

                      {/* Event type */}
                      <div className="col-md-6">
                        <label className="form-label-custom">Vrsta događaja</label>
                        <select
                          name="vrstaEventa"
                          className="form-control-custom"
                          value={form.vrstaEventa}
                          onChange={handleChange}
                        >
                          <option>Vjenčanje</option>
                          <option>Poslovni domjenak</option>
                          <option>Fešta / svečanost</option>
                          <option>Krštenje</option>
                          <option>Obljetnica</option>
                          <option>Ostalo</option>
                        </select>
                      </div>

                      {/* Date */}
                      <div className="col-md-6">
                        <label className="form-label-custom">Planirani datum</label>
                        <input
                          type="date"
                          name="datum"
                          className="form-control-custom"
                          value={form.datum}
                          onChange={handleChange}
                        />
                      </div>

                      {/* Guests */}
                      <div className="col-md-6">
                        <label className="form-label-custom">Broj gostiju</label>
                        <input
                          type="number"
                          name="brGostiju"
                          className="form-control-custom"
                          placeholder="npr. 80"
                          value={form.brGostiju}
                          onChange={handleChange}
                        />
                      </div>

                      {/* Message */}
                      <div className="col-12">
                        <label className="form-label-custom">Vaša poruka / žeje</label>
                        <textarea
                          name="poruka"
                          className="form-control-custom"
                          placeholder="Opišite vaš event i što očekujete od nas..."
                          value={form.poruka}
                          onChange={handleChange}
                        />
                      </div>

                      {/* Submit */}
                      <div className="col-12 text-end">
                        <button type="submit" className="btn-gold">
                          Pošalji upit
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
