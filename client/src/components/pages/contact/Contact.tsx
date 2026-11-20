import { useState, type FormEvent } from "react";
import { Helmet } from "react-helmet-async";
import "./Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("");
    setIsSubmitting(true);

    try {
      // TODO: Σύνδεση με το API endpoint σου.
      // await fetch("/api/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // });

      console.log(formData);

      setStatus("Το μήνυμά σας καταχωρήθηκε επιτυχώς.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch {
      setStatus("Παρουσιάστηκε κάποιο πρόβλημα. Παρακαλούμε δοκιμάστε ξανά.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Επικοινωνία | Δρ. Βολωνάκης</title>
        <meta
          name="description"
          content="Επικοινωνήστε με τον Δρ. Βολωνάκη, Ορθοπεδικό Χειρουργό – Παιδορθοπεδικό, για πληροφορίες και προγραμματισμό ραντεβού."
        />
      </Helmet>

      <main className="contact">
        <section className="contact__intro">
          <div className="container">
            <span className="contact__eyebrow">ΕΠΙΚΟΙΝΩΝΙΑ</span>

            <h1>
              Είμαστε εδώ
              <span>για εσάς.</span>
            </h1>

            <p>
              Για πληροφορίες ή για να προγραμματίσετε ένα ραντεβού, μπορείτε να
              επικοινωνήσετε μαζί μας μέσω τηλεφώνου ή συμπληρώνοντας την
              παρακάτω φόρμα.
            </p>
          </div>
        </section>

        <section className="contact__main">
          <div className="container contact__grid">
            {/* Contact information */}
            <aside className="contact__info">
              <div>
                <span className="contact__section-label">
                  ΣΤΟΙΧΕΙΑ ΕΠΙΚΟΙΝΩΝΙΑΣ
                </span>

                <h2>Ας μιλήσουμε.</h2>

                <p>
                  Είμαστε στη διάθεσή σας για οποιαδήποτε πληροφορία σχετικά με
                  τις υπηρεσίες και τον προγραμματισμό του ραντεβού σας.
                </p>
              </div>

              <div className="contact__details">
                <div className="contact__detail">
                  <span className="contact__detail-icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 3h4l2 5-2.5 1.5a14 14 0 006 6L16 13l5 2v4c0 1.1-.9 2-2 2C10 21 3 14 3 5c0-1.1.9-2 2-2z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  <div>
                    <span>Τηλέφωνο</span>
                    <a href="tel:+302100000000">210 000 0000</a>
                  </div>
                </div>

                <div className="contact__detail">
                  <span className="contact__detail-icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="14"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="m3 7 9 6 9-6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>

                  <div>
                    <span>Email</span>
                    <a href="mailto:info@example.gr">info@example.gr</a>
                  </div>
                </div>

                <div className="contact__detail">
                  <span className="contact__detail-icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1116 0z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <circle
                        cx="12"
                        cy="10"
                        r="2.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </span>

                  <div>
                    <span>Διεύθυνση Ιατρείου</span>
                    <p>Διεύθυνση ιατρείου, Αθήνα</p>
                  </div>
                </div>
              </div>

              <div className="contact__note">
                <span>Χρειάζεστε άμεση επικοινωνία;</span>
                <p>
                  Για τον προγραμματισμό ραντεβού, μπορείτε να καλέσετε
                  απευθείας στο ιατρείο.
                </p>
              </div>
            </aside>

            {/* Contact form */}
            <div className="contact__form-wrapper">
              <div className="contact__form-heading">
                <span className="contact__section-label">
                  ΦΟΡΜΑ ΕΠΙΚΟΙΝΩΝΙΑΣ
                </span>
                <h2>Στείλτε μας ένα μήνυμα.</h2>
                <p>
                  Συμπληρώστε τα στοιχεία σας και θα επικοινωνήσουμε μαζί σας το
                  συντομότερο δυνατό.
                </p>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form__row">
                  <div className="contact-form__field">
                    <label htmlFor="name">Ονοματεπώνυμο *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Το ονοματεπώνυμό σας"
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="name"
                      required
                      maxLength={100}
                    />
                  </div>

                  <div className="contact-form__field">
                    <label htmlFor="email">Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="example@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      required
                      maxLength={254}
                    />
                  </div>
                </div>

                <div className="contact-form__row">
                  <div className="contact-form__field">
                    <label htmlFor="phone">Τηλέφωνο</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Το τηλέφωνό σας"
                      value={formData.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                      maxLength={30}
                    />
                  </div>

                  <div className="contact-form__field">
                    <label htmlFor="subject">Θέμα *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Επιλέξτε θέμα
                      </option>
                      <option value="appointment">
                        Προγραμματισμός ραντεβού
                      </option>
                      <option value="information">Πληροφορίες</option>
                      <option value="other">Άλλο</option>
                    </select>
                  </div>
                </div>

                <div className="contact-form__field">
                  <label htmlFor="message">Το μήνυμά σας *</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Πώς μπορούμε να σας βοηθήσουμε;"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    maxLength={2000}
                  />
                </div>

                <p className="contact-form__privacy">
                  Παρακαλούμε μην συμπεριλάβετε ευαίσθητα προσωπικά δεδομένα ή
                  ιατρικές πληροφορίες στη φόρμα.
                </p>

                <button
                  type="submit"
                  className="button button--primary contact-form__submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Αποστολή..." : "Αποστολή μηνύματος"}
                  <span aria-hidden="true">→</span>
                </button>

                {status && (
                  <p className="contact-form__status" role="status">
                    {status}
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
