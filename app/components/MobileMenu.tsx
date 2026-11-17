"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navigation = [
  { label: "Αρχική", href: "/" },
  { label: "Παθήσεις", href: "/services" },
  { label: "Βιογραφικό", href: "/biography" },
  { label: "Επικοινωνία", href: "/contact" },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Hamburger */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Άνοιγμα μενού"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-haspopup="dialog"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E5ECE9] text-foreground transition hover:bg-[#EAF4F1] md:hidden"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
        </svg>
      </button>

      {/* Fullscreen menu */}
      <div
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Κύρια πλοήγηση"
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`mobile-menu fixed inset-0 z-[100] flex h-dvh w-full flex-col overflow-x-hidden bg-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
          isOpen
            ? "translate-x-0 visible"
            : "translate-x-full invisible pointer-events-none"
        }`}
      >
        {/* Menu header */}
        <div className="flex h-20 shrink-0 items-center justify-between border-b border-border bg-white px-6">
          <Link
            href="/"
            onClick={closeMenu}
            tabIndex={isOpen ? 0 : -1}
            className="flex flex-col"
          >
            <span className="text-xl font-semibold tracking-tight text-foreground">
              Δρ. Βολωνάκης
            </span>
            <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#6F858B]">
              Ορθοπεδικός Χειρουργός
            </span>
          </Link>

          {/* Close button */}
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Κλείσιμο μενού"
            tabIndex={isOpen ? 0 : -1}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E5ECE9] text-foreground transition hover:bg-[#EAF4F1]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path
                d="M18 6 6 18M6 6l12 12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex min-h-0 flex-1 flex-col justify-center overflow-y-auto bg-white px-8 py-8">
          <span className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Μενού
          </span>

          <div className="flex flex-col">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                tabIndex={isOpen ? 0 : -1}
                className="group flex items-center justify-between border-b border-border py-6 text-2xl font-medium tracking-tight text-foreground transition-colors hover:text-accent"
              >
                <span>{item.label}</span>
                <span className="text-lg text-subtle transition-transform group-hover:translate-x-2">
                  →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12">
            <p className="mb-5 text-sm leading-6 text-[#718187]">
              Για πληροφορίες και προγραμματισμό ραντεβού.
            </p>

            <Link
              href="/contact"
              onClick={closeMenu}
              tabIndex={isOpen ? 0 : -1}
              className="flex w-full items-center justify-center rounded-full bg-primary px-6 py-5 text-base font-semibold text-white transition hover:bg-primary-hover"
            >
              Κλείστε Ραντεβού
              <span className="ml-3">→</span>
            </Link>
          </div>
        </nav>

        {/* Footer */}
        <div className="shrink-0 border-t border-border bg-white px-8 py-6">
          <span className="text-xs text-subtle">©2026 Δρ. Βολωνάκης</span>
        </div>
      </div>
    </>
  );
}
