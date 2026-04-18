export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden scroll-mt-20 border-b border-slate-800/60 bg-linear-to-br from-slate-950 via-slate-900 to-red-950"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(220, 38, 38, 0.35), transparent 45%), radial-gradient(circle at 80% 0%, rgba(248, 113, 113, 0.22), transparent 40%)',
        }}
      />
      <div className="relative mx-auto max-w-5xl px-4 py-24 text-center sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-300/90">
          Technotran
        </p>
        <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Engineering Projects &amp; Industrial Solutions That Actually Work
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-slate-300 sm:text-xl">
          From academic projects to real-world robotics, AI, and embedded systems — we design,
          develop, and deliver complete solutions.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
          <a
            href="#quote"
            className="inline-flex w-full min-w-[200px] items-center justify-center rounded-xl bg-red-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-red-950/35 transition hover:-translate-y-0.5 hover:bg-red-700 sm:w-auto"
          >
            Get Your Project
          </a>
          <a
            href="#contact"
            className="inline-flex w-full min-w-[200px] items-center justify-center rounded-xl border border-white/25 bg-white/5 px-8 py-3.5 text-base font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10 sm:w-auto"
          >
            Talk to Expert
          </a>
        </div>
      </div>
    </section>
  )
}
