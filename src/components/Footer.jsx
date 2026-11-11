export default function Footer({ navigate }) {
  const navItems = [
    { label: "Doma", page: "home" },
    { label: "Ki smo mi", page: "ki-smo-mi" },
    { label: "Ča nudimo", page: "ca-nudimo" },
    { label: "Naša trpeza", page: "nasa-trpeza" },
    { label: "Kontakt", page: "kontakt" },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* Brand */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h4>Maneštra Catering</h4>
            <p>Istarska užanca i specijalna hrana za vaše posebne momente.</p>
          </div>

          {/* Navigation */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h4>Navigacija</h4>
            {navItems.map((item) => (
              <button
                key={item.page}
                className="footer-link btn p-0 border-0 bg-transparent d-block text-start mb-1"
                onClick={() => navigate(item.page)}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Contact */}
          <div className="col-md-4">
            <h4>Kontakt</h4>
            <p className="mb-1">
              <a href="mailto:info@manestra-catering.hr" className="footer-link">
                info@manestra-catering.hr
              </a>
            </p>
            <p className="mb-1" style={{ color: "var(--text-muted)" }}>+385 91 123 4567</p>
            <p style={{ color: "var(--text-muted)" }}>Istra, Hrvatska</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Izradila Sandra. Sva prava pridržana.</p>
        </div>
      </div>
    </footer>
  );
}
