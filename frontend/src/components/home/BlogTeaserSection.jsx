import SectionHeading from './SectionHeading.jsx'

export default function BlogTeaserSection() {
  return (
    <section id="blog" className="scroll-mt-24 bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Insights"
          title="From the Lab & Field"
          subtitle="Deep dives on robotics, embedded firmware, and deployment lessons — publishing soon."
        />
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 rounded-2xl border border-dashed border-slate-300 bg-white/80 px-6 py-10 text-center">
          <p className="text-slate-600">
            Case studies, architecture notes, and build logs are on the way. Want early access? Reach out via{' '}
            <a href="#contact" className="font-semibold text-indigo-600 underline-offset-2 hover:underline">
              contact
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
