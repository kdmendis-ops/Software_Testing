import type { FeatureItem } from '../data/content'

interface FeaturesProps {
  features: FeatureItem[]
}

export function Features({ features }: FeaturesProps) {
  return (
    <section className="features" id="features">
      {features.map((feature) => (
        <article className="card feature-card" key={feature.id} data-testid={`feature-${feature.id}`}>
          <span className="feature-icon">{feature.index}</span>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </article>
      ))}
    </section>
  )
}
