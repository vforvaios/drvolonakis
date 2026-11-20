import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "./Services.scss";
import { services } from "@/constants";

const normalizeText = (value: string) =>
  value
    .toLocaleLowerCase("el")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

export default function Services() {
  const [search, setSearch] = useState("");

  const filteredServices = useMemo(() => {
    const query = normalizeText(search.trim());

    if (!query) return services;

    return services.filter((service) =>
      normalizeText(`${service.title} ${service.description}`).includes(query),
    );
  }, [search]);

  return (
    <main className="services-page">
      <Helmet>
        <title>Ιατρικές Υπηρεσίες | Δρ. Εμμανουήλ Ι. Βολωνάκης</title>
        <meta
          name="description"
          content="Ανακαλύψτε τις ορθοπεδικές υπηρεσίες και τις σύγχρονες θεραπευτικές προσεγγίσεις του Δρ. Εμμανουήλ Ι. Βολωνάκη."
        />
      </Helmet>

      <div className="container">
        <section className="services-page__intro">
          <span className="services-page__eyebrow">Ορθοπεδική φροντίδα</span>

          <h1>Ιατρικές Υπηρεσίες</h1>

          <p>
            Σύγχρονες διαγνωστικές και θεραπευτικές προσεγγίσεις με στόχο την
            αντιμετώπιση του πόνου, την αποκατάσταση της κινητικότητας και τη
            βελτίωση της ποιότητας ζωής.
          </p>
        </section>

        <section className="services-page__listing">
          <div className="services-page__toolbar">
            <div>
              <span className="services-page__count">
                {filteredServices.length} υπηρεσίες
              </span>
              <h2>Τομείς εξειδίκευσης</h2>
            </div>

            <div className="services-page__search">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle
                  cx="11"
                  cy="11"
                  r="7"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
                <path
                  d="m16 16 4 4"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>

              <input
                type="search"
                placeholder="Αναζήτηση υπηρεσίας..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                aria-label="Αναζήτηση υπηρεσίας"
              />
            </div>
          </div>

          {filteredServices.length > 0 ? (
            <div className="services-page__grid">
              {filteredServices.map((service) => (
                <Link
                  key={service.number}
                  to={service.href}
                  className="service-card"
                >
                  <span className="service-card__number">
                    {service.number.padStart(2, "0")}
                  </span>

                  <div className="service-card__content">
                    <h3>{service.title}</h3>

                    <p>{service.description}</p>

                    <span className="service-card__link">
                      Μάθετε περισσότερα
                      <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="services-page__empty">
              <h3>Δεν βρέθηκαν αποτελέσματα</h3>
              <p>Δοκιμάστε διαφορετικούς όρους αναζήτησης.</p>
              <button type="button" onClick={() => setSearch("")}>
                Καθαρισμός αναζήτησης
              </button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
