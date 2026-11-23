import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./Home.scss";
import { services } from "@/constants";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Δρ. Βολωνάκης | Ορθοπεδικός Χειρουργός</title>
        <meta
          name="description"
          content="Ανακαλύψτε σύγχρονες ορθοπεδικές προσεγγίσεις, ενημερωθείτε για τις παθήσεις και βρείτε τη θεραπευτική φροντίδα που ανταποκρίνεται στις ανάγκες σας."
        />
        <meta
          property="og:title"
          content="Δρ. Βολωνάκης | Ορθοπεδικός Χειρουργός"
        />
        <meta
          property="og:description"
          content="Βρείτε τη φροντίδα που χρειάζεστε, με επίκεντρο τη δική σας υγεία και ποιότητα ζωής."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="home">
        {/* Hero */}
        <section className="hero">
          <div className="hero__decoration" />

          <div className="container hero__inner">
            <div className="hero__content">
              <div className="eyebrow">
                <span />Η δική σας ορθοπεδική φροντίδα
              </div>

              <h1>
                Η κίνηση είναι
                <span>ζωή.</span>
              </h1>

              <p className="hero__description">
                Βρείτε σύγχρονες ορθοπεδικές λύσεις προσαρμοσμένες στις δικές
                σας ανάγκες. Ενημερωθείτε για τις παθήσεις, τις διαθέσιμες
                θεραπείες και τις δυνατότητες αποκατάστασης που μπορούν να
                βελτιώσουν την καθημερινότητά σας.
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
                  Γνωρίστε τον γιατρό σας
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
                <strong>Η δική σας φροντίδα</strong>
                <span>με βάση τις ανάγκες σας</span>
              </div>

              <div className="hero-visual__info hero-visual__info--bottom">
                <strong>Σύγχρονη γνώση</strong>
                <span>για τη δική σας υγεία</span>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="introduction">
          <div className="container introduction__inner">
            <div>
              <span className="section-label">Καλώς ήρθατε</span>

              <h2>
                Βάλτε την υγεία του μυοσκελετικού σας συστήματος σε
                προτεραιότητα.
              </h2>
            </div>

            <div className="introduction__content">
              <p>
                Οι δικές σας ανάγκες είναι μοναδικές. Ενημερωθείτε σωστά,
                κατανοήστε την κατάστασή σας και ανακαλύψτε τις θεραπευτικές
                επιλογές που ανταποκρίνονται στη δική σας καθημερινότητα, με
                στόχο την καλύτερη δυνατή αποκατάσταση.
              </p>

              <Link to="/biography" className="text-link">
                Γνωρίστε τον γιατρό σας →
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

                <h2>Βρείτε τη φροντίδα που χρειάζεστε.</h2>
              </div>

              <Link to="/services" className="text-link">
                Ανακαλύψτε όλες τις υπηρεσίες →
              </Link>
            </div>

            <div className="services__grid">
              {services
                .filter((service) => Number(service.number) < 4)
                .map((service) => (
                  <Link
                    key={service.number}
                    to={service.href}
                    className="service-card"
                  >
                    <span className="service-card__number">
                      {service.number}
                    </span>

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

              <h2>Κάντε το πρώτο βήμα για τη φροντίδα της υγείας σας.</h2>

              <p>
                Έχετε απορίες ή χρειάζεστε περισσότερες πληροφορίες;
                Επικοινωνήστε για να προγραμματίσετε το ραντεβού σας.
              </p>
            </div>

            <Link to="/contact" className="button button--light button--large">
              Επικοινωνήστε μαζί μας
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
