import SectionHeading from './SectionHeading.jsx'

const DOMAINS = [
  'Robotics Systems',
  'Embedded Systems',
  'Artificial Intelligence',
  'IoT Solutions',
  'PCB Design & Hardware',
  'Automation Systems',
]

export default function DomainsSection() {
  return (
    <section className="border-y border-slate-200 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Technologies We Work With" />

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DOMAINS.map((label) => (
            <li key={label}>
              <div className="flex h-full items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/80 px-5 py-4 transition hover:border-indigo-300 hover:bg-white hover:shadow-md">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-xs font-bold text-white">
                  ✓
                </span>
                <span className="font-medium text-slate-900">{label}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
