import { Helmet } from "react-helmet-async";
import "./Biography.scss";

const Biography = () => {
  return (
    <>
      <Helmet>
        <title>Βιογραφικό | Εμμανουήλ Ι. Βολωνάκης</title>
        <meta
          name="description"
          content="Γνωρίστε τον Εμμανουήλ Ι. Βολωνάκη, Ορθοπεδικό Χειρουργό – Παιδορθοπεδικό, την εκπαίδευση και την ιατρική του φιλοσοφία."
        />
      </Helmet>

      <main className="biography">
        <section className="biography__hero">
          <div className="container">
            <span className="biography__eyebrow">ΤΟ ΒΙΟΓΡΑΦΙΚΟ ΜΟΥ</span>

            <h1>
              Εμμανουήλ Ι.
              <span>Βολωνάκης</span>
            </h1>

            <p className="biography__specialty">
              Ορθοπεδικός Χειρουργός
              <span>Παιδορθοπεδικός</span>
            </p>

            <div className="biography__divider" />

            <div className="biography__education">
              <div className="biography__education-item">
                <span className="biography__index">01</span>
                <div>
                  <h2>Ιατρική Εκπαίδευση</h2>
                  <p>Απόφοιτος Ιατρικής Αθηνών (ΕΚΠΑ)</p>
                </div>
              </div>

              <div className="biography__education-item">
                <span className="biography__index">02</span>
                <div>
                  <h2>Μετεκπαίδευση</h2>
                  <p>
                    Επείγουσα Προνοσοκομειακή Ιατρική
                    <span>(Ε.Π.Ι. – ΕΚΑΒ)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="biography__philosophy">
          <div className="container">
            <span className="biography__eyebrow">Η ΙΑΤΡΙΚΗ ΜΟΥ ΦΙΛΟΣΟΦΙΑ</span>

            <div className="biography__quote">
              <span className="biography__quote-mark">“</span>

              <blockquote>
                Η ορθοπεδική επιστήμη υπηρετεί την ποιότητα της ζωής σας σε κάθε
                ηλικία. Από την έγκαιρη διάγνωση και τη συντηρητική αντιμετώπιση
                στο ιατρείο, έως την απαιτητική χειρουργική αποκατάσταση, στόχος
                μου είναι να λάβετε ασφαλή, εξατομικευμένη και επιστημονικά
                τεκμηριωμένη φροντίδα, βασισμένη σε διεθνή πρωτόκολλα
                (Evidence-Based Medicine).
              </blockquote>
            </div>

            <p className="biography__closing">
              Επιστημονική γνώση. Εξατομικευμένη φροντίδα. Η δική σας καλύτερη
              ποιότητα ζωής.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Biography;
