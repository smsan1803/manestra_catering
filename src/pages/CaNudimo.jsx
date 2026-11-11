export default function CaNudimo({ navigate }) {
  const services = [
    {
      number: "01 — USLUGA",
      title: "Ekskluzivna vjenčanja",
      desc1:
        "Za vaš najvažniji dan, nudimo kompletnu gastronomsku bajku. Od dobrodošlice uz domaće rakije i kusiće pršuta, preko toplih istarskih predjela (fuži, pljukanci), pa sve do glavnih jela pripremljenih s puno ljubavi i deserta ki će oduševiti vaše goste.",
      desc2: "Sve vaše žeje ćemo saslušati i složiti meni kega će gosti pamtiti.",
      img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=700&q=80",
      imgLeft: true,
    },
    {
      number: "02 — USLUGA",
      title: "Poslovni domjenci i eventi",
      desc1:
        "Impresionirajte vaše partnere i klijente vrhunskom istarskom trpezom. Bilo da se radi o manjem sastanku, velikoj konferenciji ili gala večeri, naš profesionalni tim će se pobrinuti da hrana bude vrhunska, a usluga besprijekorna.",
      desc2:
        "Nudimo hladno-topie buffete, finger food na istarski način, te pijaču ka odgovara svakoj prilike.",
      img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=80",
      imgLeft: false,
    },
    {
      number: "03 — USLUGA",
      title: "Svečanosti i fešte",
      desc1:
        "Obljetnice, krštenja, obiteljske fešte — za svaku prilike nudimo bogatu istarsku trpezu prilagođenu vašim željama i broju gostiju. Opuštena atmosfera, pravi gušti, pravo društvo.",
      desc2: "",
      img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=700&q=80",
      imgLeft: true,
    },
  ];

  return (
    <>
      {/* PAGE HEADER */}
      <div className="page-header">
        <div className="container">
          <p className="eyebrow">Ča nudimo</p>
          <h1>Naše usluge</h1>
          <div className="section-divider"></div>
        </div>
      </div>

      {/* SERVICES */}
      <section className="section-pad section-dark">
        <div className="container">
          {services.map((s, i) => (
            <div key={i} className="service-row">
              <div className="row align-items-center g-5">
                {s.imgLeft ? (
                  <>
                    <div className="col-md-5">
                      <img src={s.img} alt={s.title} />
                    </div>
                    <div className="col-md-7">
                      <p className="service-number">{s.number}</p>
                      <h3>{s.title}</h3>
                      <div className="section-divider"></div>
                      <p>{s.desc1}</p>
                      {s.desc2 && <p>{s.desc2}</p>}
                      <button className="btn-outline-gold" onClick={() => navigate("kontakt")}>
                        Zatraži ponudu
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-md-7">
                      <p className="service-number">{s.number}</p>
                      <h3>{s.title}</h3>
                      <div className="section-divider"></div>
                      <p>{s.desc1}</p>
                      {s.desc2 && <p>{s.desc2}</p>}
                      <button className="btn-outline-gold" onClick={() => navigate("kontakt")}>
                        Zatraži ponudu
                      </button>
                    </div>
                    <div className="col-md-5">
                      <img src={s.img} alt={s.title} />
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}

          <div className="text-center mt-5">
            <button className="btn-gold" onClick={() => navigate("kontakt")}>
              Zatražite individualnu ponudu
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
