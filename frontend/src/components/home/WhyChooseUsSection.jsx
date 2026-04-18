import SectionHeading from './SectionHeading.jsx'

const POINTS = [
  'Expertise in robotics & embedded systems',
  'End-to-end execution',
  'Industry-level implementation',
  'Technical support',
  'Timely delivery',
]

export default function WhyChooseUsSection() {
  return (
    <section id="about" className="scroll-mt-24 border-y border-slate-200 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Why Technotran" />

        <ul className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          {POINTS.map((text) => (
            <li
              key={text}
              className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-4 transition hover:border-red-200 hover:bg-white hover:shadow-md"
            >
              <span
                className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500/15 text-red-600"
                aria-hidden
              >
                <svg className="h-3.5 w-3.5" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2.5 6l2.5 2.5L9.5 3.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="font-medium text-slate-900">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
