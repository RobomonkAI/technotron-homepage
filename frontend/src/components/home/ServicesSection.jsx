import SectionHeading from './SectionHeading.jsx'

const SERVICES = [
  {
    title: 'Academic Projects',
    description:
      'Turn coursework into credible builds — documentation, demos, and reproducible hardware/software stacks.',
  },
  {
    title: 'Industrial Solutions',
    description:
      'Reliable systems for factories and field deployments: sensing, control, safety, and maintainability first.',
  },
  {
    title: 'Product Development',
    description:
      'From concept to prototype to pilot: requirements, architecture, firmware, and validation in one loop.',
  },
  {
    title: 'PCB & Manufacturing',
    description:
      'Schematic to layout, DFM checks, bring-up, and test fixtures so your boards ship ready for scale.',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Our Core Services" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((item) => (
            <article
              key={item.title}
              className="group flex flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/10"
            >
              <div className="mb-4 h-1 w-10 rounded-full bg-indigo-500 transition group-hover:w-14" />
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
