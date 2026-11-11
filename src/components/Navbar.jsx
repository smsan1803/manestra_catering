export default function Navbar({ currentPage, navigate, lang, setLang }) {
  const navItems = [
    { label: "Doma", page: "home" },
    { label: "Ki smo mi", page: "ki-smo-mi" },
    { label: "Ča nudimo", page: "ca-nudimo" },
    { label: "Naša trpeza", page: "nasa-trpeza" },
    { label: "Kontakt", page: "kontakt" },
  ];

  return (
    <nav className="navbar-custom">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          {/* Brand */}
          <button
            className="navbar-brand-custom btn p-0 border-0"
            onClick={() => navigate("home")}
          >
            <span className="brand-icon">∿</span>
            Maneštra Catering
          </button>

          {/* Nav links */}
          <div className="d-none d-md-flex align-items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.page}
                className={`nav-link btn border-0 bg-transparent ${currentPage === item.page ? "active" : ""}`}
                onClick={() => navigate(item.page)}
              >
                {item.label}
              </button>
            ))}

            {/* Lang switcher */}
            <div className="lang-switcher ms-3">
              {["IST", "HR", "EN"].map((l) => (
                <button
                  key={l}
                  className={`lang-btn ${lang === l ? "active" : ""}`}
                  onClick={() => setLang(l)}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
