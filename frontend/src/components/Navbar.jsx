import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="text-lg font-semibold tracking-tight text-slate-900 transition hover:text-indigo-600"
        >
          Technotran
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="https://skillbuilder.robomonk.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-indigo-200 hover:bg-slate-50 hover:text-indigo-700 md:inline-flex"
          >
            Internships
          </a>
          <a
            href="#quote"
            className="hidden rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 md:inline-flex"
          >
            Get Quote
          </a>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border border-slate-200 p-2 text-slate-700 transition hover:bg-slate-50 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Toggle menu</span>
            {open ? (
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`border-t border-slate-100 bg-white md:hidden ${open ? "block" : "hidden"}`}
      >
        <ul className="flex flex-col px-4 py-3">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="https://skillbuilder.robomonk.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 block rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-center text-sm font-semibold text-slate-800 shadow-sm transition hover:border-indigo-200 hover:bg-slate-50"
              onClick={() => setOpen(false)}
            >
              Internships
            </a>
            <a
              href="#quote"
              className="block rounded-lg bg-indigo-600 px-3 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500"
              onClick={() => setOpen(false)}
            >
              Get Quote
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
