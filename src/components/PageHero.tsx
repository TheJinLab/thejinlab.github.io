import './PageHero.css'

interface Props {
  title: string
  subtitle?: string
  eyebrow?: string
}

export default function PageHero({ title, subtitle, eyebrow }: Props) {
  return (
    <section className="page-hero">
      {eyebrow && <p className="page-hero-eyebrow">{eyebrow}</p>}
      <h1 className="page-hero-title">{title}</h1>
      {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
    </section>
  )
}
