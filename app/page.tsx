import Link from "next/link";
import MobileMenu from "./components/MobileMenu";

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

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <Link href="/" className="flex flex-col">
            <span className="text-xl font-semibold tracking-tight">
              Δρ. Βολωνάκης
            </span>
            <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#6F858B]">
              Ορθοπεδικός Χειρουργός
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-9 text-sm font-medium text-[#52666D] md:flex">
            <Link href="/" className="transition hover:text-accent">
              Αρχική
            </Link>
            <Link href="/services" className="transition hover:text-accent">
              Παθήσεις
            </Link>
            <Link href="/biography" className="transition hover:text-accent">
              Βιογραφικό
            </Link>
            <Link href="/contact" className="transition hover:text-accent">
              Επικοινωνία
            </Link>
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden rounded-full bg-primary px-5 py-3 text-sm font-medium text-white transition hover:bg-primary-hover md:inline-flex"
          >
            Κλείστε Ραντεβού
          </Link>

          {/* Mobile menu */}
          <MobileMenu />
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full bg-[#EAF4F1] blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-36">
          <div>
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Ορθοπεδική Φροντίδα
              </span>
            </div>

            <h1 className="max-w-3xl text-5xl leading-[1.13] font-semibold tracking-tight md:text-6xl lg:text-7xl">
              Η κίνηση είναι
              <span className="block text-accent">ζωή.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-muted">
              Σύγχρονη ορθοπεδική προσέγγιση με επίκεντρο τον άνθρωπο.
              Ενημερωθείτε για τις παθήσεις, τις διαθέσιμες θεραπείες και τις
              δυνατότητες αποκατάστασης.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/services"
                className="rounded-full bg-primary px-7 py-4 text-sm font-semibold text-white transition hover:bg-primary-hover"
              >
                Ανακαλύψτε τις παθήσεις
                <span className="ml-3">→</span>
              </Link>

              <Link
                href="/biography"
                className="px-5 py-4 text-sm font-semibold text-[#314B57] transition hover:text-accent"
              >
                Γνωρίστε τον γιατρό
              </Link>
            </div>
          </div>

          {/* Abstract visual */}
          <div className="relative hidden min-h-[420px] items-center justify-center lg:flex">
            <div className="absolute h-[360px] w-[360px] rounded-full border border-subtle-2" />
            <div className="absolute h-[290px] w-[290px] rounded-full border border-subtle-2" />
            <div className="absolute h-[220px] w-[220px] rounded-full bg-[#EAF4F1]" />

            <div className="relative flex h-44 w-44 items-center justify-center rounded-full bg-primary text-white shadow-2xl shadow-primary/20">
              <svg
                viewBox="0 0 100 100"
                fill="none"
                className="h-24 w-24"
                aria-hidden="true"
              >
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

            <div className="absolute right-0 top-16 rounded-2xl border border-[#E7EFEC] bg-white px-5 py-4 shadow-lg shadow-foreground/5">
              <span className="block text-sm font-semibold">
                Εξατομικευμένη
              </span>
              <span className="text-sm text-[#71858A]">ιατρική προσέγγιση</span>
            </div>

            <div className="absolute bottom-12 left-0 rounded-2xl border border-[#E7EFEC] bg-white px-5 py-4 shadow-lg shadow-foreground/5">
              <span className="block text-sm font-semibold">
                Σύγχρονη γνώση
              </span>
              <span className="text-sm text-[#71858A]">
                και επιστημονική φροντίδα
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="border-y border-border bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-24">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Καλώς ήρθατε
            </span>
            <h2 className="mt-5 max-w-lg text-3xl leading-tight font-semibold tracking-tight md:text-4xl">
              Η υγεία του μυοσκελετικού συστήματος στο επίκεντρο.
            </h2>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-base leading-8 text-muted">
              Κάθε ασθενής είναι διαφορετικός. Στόχος είναι η σωστή διάγνωση, η
              πλήρης ενημέρωση και η επιλογή της κατάλληλης θεραπευτικής
              προσέγγισης, με βάση τις ανάγκες και την καθημερινότητα κάθε
              ανθρώπου.
            </p>
            <Link
              href="/biography"
              className="mt-6 w-fit text-sm font-semibold text-primary hover:underline"
            >
              Περισσότερα για τον γιατρό →
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Ιατρικές Υπηρεσίες
            </span>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
              Πώς μπορούμε να σας βοηθήσουμε;
            </h2>
          </div>

          <Link
            href="/services"
            className="text-sm font-semibold text-primary hover:underline"
          >
            Όλες οι παθήσεις →
          </Link>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.number}
              href={service.href}
              className="group rounded-2xl border border-[#E5ECE9] bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-[#B7D8D0] hover:shadow-xl hover:shadow-foreground/5"
            >
              <span className="text-sm font-semibold text-accent">
                {service.number}
              </span>

              <h3 className="mt-10 text-xl font-semibold tracking-tight">
                {service.title}
              </h3>

              <p className="mt-4 min-h-20 text-sm leading-7 text-[#718187]">
                {service.description}
              </p>

              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:gap-4">
                Μάθετε περισσότερα <span>→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="bg-[#173D46]">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-16 md:flex-row md:items-center lg:px-10 lg:py-20">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8DC8BB]">
              Επικοινωνία
            </span>
            <h2 className="mt-4 max-w-2xl text-3xl leading-tight font-semibold text-white md:text-4xl">
              Η σωστή ενημέρωση είναι το πρώτο βήμα.
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#C0D2D2]">
              Επικοινωνήστε για πληροφορίες και προγραμματισμό ραντεβού.
            </p>
          </div>

          <Link
            href="/contact"
            className="shrink-0 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#173D46] transition hover:bg-[#EAF4F1]"
          >
            Επικοινωνήστε μαζί μας →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-10 text-sm text-[#718187] md:flex-row md:items-center md:justify-between lg:px-10">
          <div>
            <span className="font-semibold text-foreground">Δρ. Βολωνάκης</span>
            <span className="ml-2">Ορθοπεδικός Χειρουργός</span>
          </div>
          <span>©2026 Όλα τα δικαιώματα διατηρούνται.</span>
        </div>
      </footer>
    </main>
  );
}
