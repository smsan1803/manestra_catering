export default function NasaTrpeza({ navigate }) {
  const categories = [
    {
      label: "Predjela",
      sub: "Kusiči gušta za početak.",
      img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80",
    },
    {
      label: "Glavna jela",
      sub: "Pravi pijati istarske snage.",
      img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&q=80",
    },
    {
      label: "Deserti",
      sub: "Slatko na kraju za gušt.",
      img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&q=80",
    },
    {
      label: "Pijača",
      sub: "Vina i rakije za dobru voju.",
      img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&q=80",
    },
  ];

  const menuSections = [
    {
      title: "Predjela",
      items: [
        {
          name: "Istarski pijat Lepše",
          desc: "Domaći pršut, istarski sir (kozi i ovčji), pašteta od tartufa, domaće kobasice.",
        },
        {
          name: "Tartufata na kruhu",
          desc: "Svježi kruh s namazom od crnog tartufa i maslinovim uljem.",
        },
        {
          name: "Carpaccio od tune",
          desc: "Tanko narezana tuna, kapari, maslinovo ulje, limun i svježe začinsko bilje.",
        },
        {
          name: "Bruschette Lepše",
          desc: "Prepečeni kruh s rajčicom, bosiljkom i ekstra djevičanskim maslinovim uljem.",
        },
      ],
    },
    {
      title: "Glavna jela",
      items: [
        {
          name: "Fuži s tartufima",
          desc: "Domaći fuži priprani s crnim istarskim tartufom u elegantnom umaku.",
        },
        {
          name: "Pljukanci s bolonjezom",
          desc: "Ručno valjani pljukanci s domaćim mesom i rajčicom.",
        },
        {
          name: "Janjetina ispod peke",
          desc: "Sočna janjetina s povrćem, pripremana na tradicionalan istarski način.",
        },
        {
          name: "Riba na žaru",
          desc: "Svježa jadranska riba s maslinovim uljem i mediteranskim začinima.",
        },
      ],
    },
    {
      title: "Deserti & Pijača",
      items: [
        {
          name: "Fritule",
          desc: "Tradicionalni istarski kolačići s aromom rakije i limunom.",
        },
        {
          name: "Kroštule",
          desc: "Hrskave pečene kroštule, posute šećerom u prahu.",
        },
        {
          name: "Malvazija istarska",
          desc: "Suho bijelo vino karakteristično za Istarski poluotok.",
        },
        {
          name: "Domaća rakija (biska/medica)",
          desc: "Tradicionalna istarska rakija od imele ili meda.",
        },
      ],
    },
  ];

  return (
    <>
      {/* PAGE HEADER */}
      <div className="page-header">
        <div className="container">
          <p className="eyebrow">Naša trpeza</p>
          <h1>Istarski gušti na vašon trpeze</h1>
          <div className="section-divider"></div>
        </div>
      </div>

      {/* CATEGORY GRID */}
      <section className="section-dark" style={{ paddingTop: "3rem" }}>
        <div className="container">
          <div className="menu-categories">
            {categories.map((cat, i) => (
              <div key={i} className="menu-cat">
                <img src={cat.img} alt={cat.label} />
                <div className="menu-cat-label">
                  <h4>{cat.label}</h4>
                  <p>{cat.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MENU ITEMS */}
      <section className="section-dark" style={{ paddingBottom: "5rem" }}>
        <div className="container">
          <h2
            className="text-center mb-2"
            style={{ fontFamily: "Playfair Display, serif", fontSize: "2rem", color: "var(--gold)" }}
          >
            Izdvojeno iz ponude
          </h2>
          <div className="section-divider centered"></div>

          <div className="mt-4">
            {menuSections.map((section, si) => (
              <div key={si} className="mb-5">
                <p className="menu-section-title">{section.title}</p>
                <div className="row">
                  {section.items.map((item, ii) => (
                    <div key={ii} className="col-md-6">
                      <div className="menu-item">
                        <h5>{item.name}</h5>
                        <p>{item.desc}</p>
                        <span className="price-tag">Na upit</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="menu-note">
            Sve cijene su na upit jer prilagođavamo svaki meni vašim potrebama.
          </p>

          <div className="text-center">
            <button className="btn-gold" onClick={() => navigate("kontakt")}>
              Zatraži ponudu
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
