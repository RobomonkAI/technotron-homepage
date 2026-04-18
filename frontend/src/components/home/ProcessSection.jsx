import SectionHeading from './SectionHeading.jsx'

const STEPS = [
  'Share Your Requirement',
  'Get Detailed Proposal',
  'Development & Implementation',
  'Testing & Validation',
  'Final Delivery & Support',
]

export default function ProcessSection() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Our Process" />

        <ol className="flex flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-0 lg:rounded-2xl lg:border lg:border-slate-200 lg:bg-white lg:p-2 lg:shadow-sm">
          {STEPS.map((label, index) => (
            <li
              key={label}
              className={`relative flex flex-1 flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-indigo-200 hover:shadow-md lg:rounded-none lg:border-0 lg:bg-transparent lg:shadow-none lg:hover:shadow-none ${
                index > 0 ? 'lg:border-l lg:border-slate-200' : ''
              }`}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white shadow-md ring-4 ring-indigo-50">
                {index + 1}
              </span>
              <p className="font-semibold leading-snug text-slate-900">{label}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
