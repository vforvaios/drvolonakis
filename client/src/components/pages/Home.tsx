import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./Home.scss";

const services = [
  {
    number: "01",
    title: "Παθήσεις Σπονδυλικής Στήλης",
    description:
      "Διάγνωση και αντιμετώπιση παθήσεων που επηρεάζουν τη σπονδυλική στήλη.",
    href: "/services/spine",
  },
  {
    number: "02",
    title: "Παθήσεις Άνω Άκρων",
    description:
      "Εξειδικευμένη προσέγγιση σε προβλήματα ώμου, αγκώνα, καρπού και χεριού.",
    href: "/services/upper-limbs",
  },
  {
    number: "03",
    title: "Παθήσεις Κάτω Άκρων",
    description:
      "Αξιολόγηση και θεραπεία παθήσεων ισχίου, γόνατος, ποδοκνημικής και άκρου ποδός.",
    href: "/services/lower-limbs",
  },
];

const navigation = [
  { label: "Αρχική", href: "/" },
  { label: "Παθήσεις", href: "/services" },
  { label: "Βιογραφικό", href: "/biography" },
  { label: "Επικοινωνία", href: "/contact" },
];

export default function Home() {
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
      <Helmet>
        <title>Δρ. Βολωνάκης | Ορθοπεδικός Χειρουργός</title>
        <meta
          name="description"
          content="Δρ. Βολωνάκης, Ορθοπεδικός Χειρουργός. Ενημερωθείτε για τις ορθοπεδικές παθήσεις, τις σύγχρονες θεραπευτικές προσεγγίσεις και τις διαθέσιμες υπηρεσίες."
        />
        <meta
          property="og:title"
          content="Δρ. Βολωνάκης | Ορθοπεδικός Χειρουργός"
        />
        <meta
          property="og:description"
          content="Σύγχρονη ορθοπεδική προσέγγιση με επίκεντρο τον άνθρωπο."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="home">
        {/* Header */}
        <header className="home-header">
          <div className="home-header__inner">
            <Link to="/" className="home-logo">
              <span className="home-logo__name">Δρ. Βολωνάκης</span>
              <span className="home-logo__subtitle">
                Ορθοπεδικός Χειρουργός
              </span>
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
              <span className="home-logo__subtitle">
                Ορθοπεδικός Χειρουργός
              </span>
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

        {/* Hero */}
        <section className="hero">
          <div className="hero__decoration" />

          <div className="container hero__inner">
            <div className="hero__content">
              <div className="eyebrow">
                <span />
                Ορθοπεδική Φροντίδα
              </div>

              <h1>
                Η κίνηση είναι
                <span>ζωή.</span>
              </h1>

              <p className="hero__description">
                Σύγχρονη ορθοπεδική προσέγγιση με επίκεντρο τον άνθρωπο.
                Ενημερωθείτε για τις παθήσεις, τις διαθέσιμες θεραπείες και τις
                δυνατότητες αποκατάστασης.
              </p>

              <div className="hero__actions">
                <Link
                  to="/services"
                  className="button button--primary button--large"
                >
                  Ανακαλύψτε τις παθήσεις
                  <span aria-hidden="true">→</span>
                </Link>

                <Link to="/biography" className="button-text">
                  Γνωρίστε τον γιατρό
                </Link>
              </div>
            </div>

            {/* Abstract visual */}
            <div className="hero-visual" aria-hidden="true">
              <div className="hero-visual__circle hero-visual__circle--outer" />
              <div className="hero-visual__circle hero-visual__circle--middle" />
              <div className="hero-visual__circle hero-visual__circle--inner" />

              <div className="hero-visual__center">
                <svg viewBox="0 0 100 100" fill="none">
                  <path
                    d="M50 12 C39 20 61 27 48 35 C35 43 62 50 48 59 C36 68 60 76 50 88"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M38 19 C62 16 64 29 39 33 M38 42 C62 39 64 52 39 56 M38 65 C62 62 64 75 39 79"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className="hero-visual__info hero-visual__info--top">
                <strong>Εξατομικευμένη</strong>
                <span>ιατρική προσέγγιση</span>
              </div>

              <div className="hero-visual__info hero-visual__info--bottom">
                <strong>Σύγχρονη γνώση</strong>
                <span>και επιστημονική φροντίδα</span>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="introduction">
          <div className="container introduction__inner">
            <div>
              <span className="section-label">Καλώς ήρθατε</span>

              <h2>Η υγεία του μυοσκελετικού συστήματος στο επίκεντρο.</h2>
            </div>

            <div className="introduction__content">
              <p>
                Κάθε ασθενής είναι διαφορετικός. Στόχος είναι η σωστή διάγνωση,
                η πλήρης ενημέρωση και η επιλογή της κατάλληλης θεραπευτικής
                προσέγγισης, με βάση τις ανάγκες και την καθημερινότητα κάθε
                ανθρώπου.
              </p>

              <Link to="/biography" className="text-link">
                Περισσότερα για τον γιατρό →
              </Link>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="services">
          <div className="container">
            <div className="services__header">
              <div>
                <span className="section-label">Ιατρικές Υπηρεσίες</span>

                <h2>Πώς μπορούμε να σας βοηθήσουμε;</h2>
              </div>

              <Link to="/services" className="text-link">
                Όλες οι παθήσεις →
              </Link>
            </div>

            <div className="services__grid">
              {services.map((service) => (
                <Link
                  key={service.number}
                  to={service.href}
                  className="service-card"
                >
                  <span className="service-card__number">{service.number}</span>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <span className="service-card__link">
                    Μάθετε περισσότερα
                    <span aria-hidden="true">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Appointment CTA */}
        <section className="appointment">
          <div className="container appointment__inner">
            <div>
              <span className="section-label section-label--light">
                Επικοινωνία
              </span>

              <h2>Η σωστή ενημέρωση είναι το πρώτο βήμα.</h2>

              <p>Επικοινωνήστε για πληροφορίες και προγραμματισμό ραντεβού.</p>
            </div>

            <Link to="/contact" className="button button--light button--large">
              Επικοινωνήστε μαζί μας
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="home-footer">
          <div className="container home-footer__inner">
            <div>
              <strong>Δρ. Βολωνάκης</strong>
              <span>Ορθοπεδικός Χειρουργός</span>
            </div>

            <span>
              © {new Date().getFullYear()} Όλα τα δικαιώματα διατηρούνται.
            </span>
          </div>
        </footer>
      </main>
    </>
  );
}
