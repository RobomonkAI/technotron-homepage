import SectionHeading from './SectionHeading.jsx'

const PROJECTS = [
  {
    title: 'Soil Investigation Robot',
    description:
      'Autonomous soil profiling with sensor fusion and ruggedized drive mechanics for repeatable field surveys.',
  },
  {
    title: 'AI Surveillance System',
    description:
      'Edge inference pipelines with alerting, audit trails, and low-light performance tuned for real sites.',
  },
  {
    title: 'Smart Agriculture System',
    description:
      'Moisture, weather, and actuation loops with dashboards that operators can trust during peak seasons.',
  },
  {
    title: 'Industrial Automation Setup',
    description:
      'PLC integration, HMIs, and line retrofits with downtime-minimized cutovers and documented runbooks.',
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Our Recent Work" />

        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-0.5 hover:border-red-200 hover:shadow-lg"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-red-500/10 blur-2xl transition group-hover:bg-red-500/20" />
              <h3 className="relative text-xl font-semibold text-slate-900">{project.title}</h3>
              <p className="relative mt-3 text-slate-600 leading-relaxed">{project.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
