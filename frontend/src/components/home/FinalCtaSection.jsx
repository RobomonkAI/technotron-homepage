export default function FinalCtaSection() {
  return (
    <section
      id="quote"
      className="scroll-mt-24 bg-linear-to-br from-indigo-700 via-indigo-800 to-slate-900 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Have a Project Idea? Let&apos;s Build It.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-indigo-100">
          Whether it&apos;s a student build or a production line upgrade, we scope honestly and ship deliberately.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
          <a
            href="#contact"
            className="inline-flex w-full min-w-[200px] items-center justify-center rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-indigo-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-100 sm:w-auto"
          >
            Get Your Project
          </a>
          <a
            href="mailto:info@robomonk.ai?subject=Technotran%20—%20Project%20Inquiry"
            className="inline-flex w-full min-w-[200px] items-center justify-center rounded-xl border border-white/30 bg-white/10 px-8 py-3.5 text-base font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15 sm:w-auto"
          >
            Contact Our Team
          </a>
        </div>
      </div>
    </section>
  )
}
