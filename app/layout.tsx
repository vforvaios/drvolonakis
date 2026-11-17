import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin", "greek", "greek-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Δρ. Βολονάκης | Ορθοπεδικός Χειρουργός",
    template: "%s | Δρ. Βολονάκης",
  },
  description:
    "Δρ. Βολονάκης, Ορθοπεδικός Χειρουργός. Ενημερωθείτε για τις ορθοπεδικές παθήσεις, τις σύγχρονες θεραπευτικές προσεγγίσεις και τις διαθέσιμες υπηρεσίες.",
  openGraph: {
    type: "website",
    locale: "el_GR",
    siteName: "Δρ. Βολονάκης",
    title: "Δρ. Βολονάκης | Ορθοπεδικός Χειρουργός",
    description: "Σύγχρονη ορθοπεδική προσέγγιση με επίκεντρο τον άνθρωπο.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="el" className={`${notoSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
