import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./NotFound.scss";

export default function NotFound() {
  return (
    <main className="not-found">
      <Helmet>
        <title>Η σελίδα δεν βρέθηκε | Δρ. Βολωνάκης</title>
        <meta
          name="description"
          content="Η σελίδα που αναζητάτε δεν είναι διαθέσιμη."
        />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="not-found__content">
        <span className="not-found__eyebrow">Σφάλμα 404</span>

        <h1>404</h1>

        <h2>Η σελίδα δεν βρέθηκε.</h2>

        <p>
          Η σελίδα που αναζητάτε ίσως μετακινήθηκε ή δεν είναι πλέον διαθέσιμη.
          Μπορείτε να επιστρέψετε στην αρχική σελίδα και να συνεχίσετε την
          περιήγησή σας.
        </p>

        <Link to="/" className="not-found__button">
          <span aria-hidden="true">←</span>
          Επιστροφή στην αρχική
        </Link>
      </div>

      <div className="not-found__decoration" aria-hidden="true">
        404
      </div>
    </main>
  );
}
