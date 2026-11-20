import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const navigation = [
    { label: "Αρχική", href: "/" },
    { label: "Παθήσεις", href: "/services" },
    { label: "Βιογραφικό", href: "/biography" },
    { label: "Επικοινωνία", href: "/contact" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Header */}
      <header className="home-header">
        <div className="home-header__inner">
          <Link to="/" className="home-logo">
            <span className="home-logo__name">Δρ. Βολωνάκης</span>
            <span className="home-logo__subtitle">Ορθοπεδικός Χειρουργός</span>
          </Link>

          {/* Desktop navigation */}
          <nav className="home-nav" aria-label="Κύρια πλοήγηση">
            {navigation.map((item) => (
              <Link key={item.href} to={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link to="/contact" className="button button--primary header-cta">
            Κλείστε Ραντεβού
          </Link>

          {/* Mobile menu trigger */}
          <button
            type="button"
            className="mobile-menu-trigger"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Άνοιγμα μενού"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      <div
        id="mobile-navigation"
        className={`mobile-menu ${isMenuOpen ? "mobile-menu--open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Κύρια πλοήγηση"
        aria-hidden={!isMenuOpen}
      >
        <div className="mobile-menu__header">
          <Link to="/" className="home-logo" onClick={closeMenu}>
            <span className="home-logo__name">Δρ. Βολωνάκης</span>
            <span className="home-logo__subtitle">Ορθοπεδικός Χειρουργός</span>
          </Link>

          <button
            type="button"
            className="mobile-menu__close"
            onClick={closeMenu}
            aria-label="Κλείσιμο μενού"
            tabIndex={isMenuOpen ? 0 : -1}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className="mobile-menu__nav">
          <span className="mobile-menu__label">Μενού</span>

          {navigation.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={closeMenu}
              tabIndex={isMenuOpen ? 0 : -1}
            >
              {item.label}
              <span aria-hidden="true">→</span>
            </Link>
          ))}

          <div className="mobile-menu__cta">
            <p>Για πληροφορίες και προγραμματισμό ραντεβού.</p>

            <Link
              to="/contact"
              className="button button--primary"
              onClick={closeMenu}
              tabIndex={isMenuOpen ? 0 : -1}
            >
              Κλείστε Ραντεβού
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </nav>

        <div className="mobile-menu__footer">
          © {new Date().getFullYear()} Δρ. Βολωνάκης
        </div>
      </div>
    </>
  );
};

export default Header;
