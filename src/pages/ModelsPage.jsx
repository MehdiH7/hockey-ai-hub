import { featuredModels } from "../data/content";

export default function ModelsPage() {
  return (
    <section className="stack-md">
      <h2>Models</h2>
      <p>Model repositories for core ice hockey AI tasks.</p>
      <div className="grid card-grid">
        {featuredModels.map((model) => (
          <article key={model.name} className="card">
            <p className="eyebrow">{model.type}</p>
            <h3>{model.name}</h3>
            <p>{model.description}</p>
            <a href={model.link} target="_blank" rel="noreferrer" className="text-link">
              Open model
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
