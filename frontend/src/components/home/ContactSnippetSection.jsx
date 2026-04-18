import SectionHeading from './SectionHeading.jsx'

const PHONE_LINKS = [
  { label: '+91 90597 15757', tel: '+919059715757', wa: '919059715757' },
  { label: '+91 97030 47292', tel: '+919703047292', wa: '919703047292' },
]

export default function ContactSnippetSection() {
  return (
    <section id="contact" className="scroll-mt-24 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Contact Us"
          subtitle="Reach out for general enquiries, project discussions, or internship-related questions."
        />

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:border-indigo-200 hover:shadow-md md:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-wide text-indigo-600">Email Us</h3>
            <p className="mt-2 text-sm text-slate-600">General Enquiries:</p>
            <a
              href="mailto:info@robomonk.ai"
              className="mt-1 block break-all text-base font-semibold text-slate-900 underline-offset-2 hover:text-indigo-600 hover:underline"
            >
              info@robomonk.ai
            </a>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:border-indigo-200 hover:shadow-md md:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-wide text-indigo-600">Call or WhatsApp</h3>
            <ul className="mt-3 space-y-3">
              {PHONE_LINKS.map(({ label, tel, wa }) => (
                <li key={label} className="flex flex-col gap-1.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-2">
                  <a
                    href={`tel:${tel}`}
                    className="font-semibold text-slate-900 underline-offset-2 hover:text-indigo-600 hover:underline"
                  >
                    {label}
                  </a>
                  <span className="hidden text-slate-300 sm:inline" aria-hidden>
                    ·
                  </span>
                  <a
                    href={`https://wa.me/${wa}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-emerald-700 underline-offset-2 hover:underline"
                  >
                    WhatsApp
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:border-indigo-200 hover:shadow-md md:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-wide text-indigo-600">Working Hours</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              <span className="font-semibold text-slate-900">Monday – Saturday:</span> 9:00 AM to 7:00 PM
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              <span className="font-semibold text-slate-900">Sunday:</span> Closed / Special Sessions Only
            </p>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-slate-500">
          Prefer to start with scope and pricing?{' '}
          <a href="#quote" className="font-semibold text-indigo-600 underline-offset-2 hover:underline">
            Jump to project enquiry
          </a>
          .
        </p>
      </div>
    </section>
  )
}
