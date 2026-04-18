export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const alignClass = align === 'left' ? 'text-left' : 'text-center'
  const mx = align === 'left' ? '' : 'mx-auto'

  return (
    <div className={`mb-10 max-w-3xl ${mx} ${alignClass}`}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-wider text-red-600">{eyebrow}</p>
      ) : null}
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      {subtitle ? <p className={`mt-3 text-lg text-slate-600 ${align === 'center' ? 'mx-auto max-w-2xl' : ''}`}>{subtitle}</p> : null}
    </div>
  )
}
