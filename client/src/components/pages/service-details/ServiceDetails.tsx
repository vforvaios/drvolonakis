import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowLeft,
  ArrowUpRight,
  Activity,
  Crosshair,
  Clock3,
} from "lucide-react";

import "./ServiceDetails.scss";

const serviceDetails = {
  "large-joint-surgery": {
    title: "Προηγμένη Χειρουργική Μεγάλων Αρθρώσεων",
    subtitle: "Ισχίου και Γόνατος",
    description:
      "Η προχωρημένη οστεοαρθρίτιδα περιορίζει δραματικά την καθημερινότητα του ασθενούς. Η απόφαση για χειρουργική επέμβαση βασίζεται στην αποτυχία της συντηρητικής θεραπείας και απαιτεί υψηλή χειρουργική ακρίβεια.",
    approach: [
      {
        number: "01",
        icon: Activity,
        title: "Υψηλό Επίπεδο Χειρουργικής Τριβής",
        description:
          "Έχοντας βρεθεί στο χειρουργικό τραπέζι σε περισσότερες από 2.500 επεμβάσεις μεγάλων αρθρώσεων, διαθέτουμε την απαραίτητη κλινική εμπειρία για να σχεδιάσουμε την επέμβασή σας με απόλυτη εξατομίκευση.",
        details:
          "Κάθε πλάνο αντιμετώπισης βασίζεται σε αυτή τη μακροχρόνια, ζωντανή τριβή με το αντικείμενο, επιλέγοντας την καταλληλότερη μέθοδο για τη δική σας ανατομία και τις καθημερινές σας ανάγκες.",
      },
      {
        number: "02",
        icon: Crosshair,
        title: "Ελάχιστα Επεμβατικές Τεχνικές (MIS)",
        description:
          "Εξατομικευμένη αρθροπλαστική γόνατος MIS, αρθροπλαστική γόνατος με πλοήγηση, ελάχιστα επεμβατική αρθροπλαστική ισχίου ALMIS με ή χωρίς πλοήγηση (navigation).",
        details:
          "Χρήση προσπελάσεων που σέβονται τα μαλακά μόρια (μύες και τένοντες), ελαχιστοποιώντας τον μετεγχειρητικό πόνο και την απώλεια αίματος.",
      },
      {
        number: "03",
        icon: Clock3,
        title: "Πρωτόκολλα Ταχείας Αποκατάστασης (Fast-Track)",
        description:
          "Εφαρμογή σύγχρονων διεθνών τάσεων που επιτρέπουν στον ασθενή να κινητοποιηθεί και να σταθεί στα πόδια του λίγες μόλις ώρες μετά το χειρουργείο.",
        details:
          "Στόχος είναι η μείωση του χρόνου παραμονής στην κλινική και η ταχύτερη επιστροφή στις καθημερινές δραστηριότητες.",
      },
    ],
  },
};

const ServiceDetails = () => {
  const { slug } = useParams();

  const service = serviceDetails[slug as keyof typeof serviceDetails];

  if (!service) {
    return (
      <main className="service-details service-details--not-found">
        <div className="container">
          <h1>Η υπηρεσία δεν βρέθηκε</h1>
          <Link to="/services" className="service-details__back">
            <ArrowLeft size={18} />
            Όλες οι υπηρεσίες
          </Link>
        </div>
      </main>
    );
  }

  return (
    <>
      <Helmet>
        <title>{service.title} | Δρ. Εμμανουήλ Ι. Βολωνάκης</title>
        <meta name="description" content={service.description} />
      </Helmet>

      <main className="service-details">
        <section className="service-details__hero">
          <div className="container">
            <Link to="/services" className="service-details__back">
              <ArrowLeft size={17} />
              Όλες οι υπηρεσίες
            </Link>

            <div className="service-details__hero-content">
              <span className="service-details__eyebrow">
                ΟΡΘΟΠΕΔΙΚΗ ΦΡΟΝΤΙΔΑ
              </span>

              <h1>
                {service.title}
                <span>{service.subtitle}</span>
              </h1>

              <div className="service-details__divider" />

              <p className="service-details__intro">{service.description}</p>
            </div>

            <span className="service-details__hero-index">ORTHOPEDIC CARE</span>
          </div>
        </section>

        <section className="service-details__approach">
          <div className="container">
            <div className="service-details__section-heading">
              <div>
                <span className="service-details__eyebrow">
                  Η ΠΡΟΣΕΓΓΙΣΗ ΜΑΣ
                </span>
                <h2>Η χειρουργική μας προσέγγιση</h2>
              </div>

              <p>
                Κάθε θεραπευτική απόφαση χρειάζεται να λαμβάνει υπόψη τις δικές
                σας ανάγκες και τα ιδιαίτερα χαρακτηριστικά της περίπτωσής σας.
              </p>
            </div>

            <div className="service-details__cards">
              {service.approach.map((item) => {
                const Icon = item.icon;

                return (
                  <article className="service-details__card" key={item.number}>
                    <div className="service-details__card-top">
                      <span className="service-details__number">
                        {item.number}
                      </span>

                      <div className="service-details__icon">
                        <Icon size={23} strokeWidth={1.6} />
                      </div>
                    </div>

                    <h3>{item.title}</h3>

                    <p>{item.description}</p>

                    <p className="service-details__card-details">
                      {item.details}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="service-details__cta">
          <div className="container">
            <div className="service-details__cta-content">
              <span className="service-details__eyebrow">ΕΠΙΚΟΙΝΩΝΙΑ</span>

              <h2>Ενημερωθείτε για τις θεραπευτικές επιλογές σας.</h2>

              <p>
                Επικοινωνήστε με το ιατρείο για να συζητήσετε τις ανάγκες σας
                και να προγραμματίσετε το ραντεβού σας.
              </p>

              <Link to="/contact" className="service-details__cta-button">
                Κλείστε ραντεβού
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ServiceDetails;
