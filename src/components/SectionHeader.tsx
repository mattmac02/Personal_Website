interface SectionHeaderProps {
  label: string
  title: string
  description?: string
  align?: 'center' | 'left'
  className?: string
}

const SectionHeader = ({ label, title, description, align = 'center', className = '' }: SectionHeaderProps) => {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`mb-14 sm:mb-16 max-w-3xl ${alignClass} ${className}`}>
      <p className={`section-label mb-4 ${align === 'center' ? 'justify-center w-full' : ''}`}>{label}</p>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed text-pretty">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeader
