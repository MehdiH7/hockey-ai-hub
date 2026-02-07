import { featuredDatasets } from "../data/content";

export default function DatasetsPage() {
  return (
    <section className="stack-md">
      <h2>Datasets</h2>
      <p>Open ice hockey datasets from Hugging Face and broader NHL community sources.</p>
      <div className="grid card-grid">
        {featuredDatasets.map((dataset) => (
          <article key={dataset.name} className="card">
            <p className="eyebrow">{dataset.season}</p>
            <h3>{dataset.name}</h3>
            <p>{dataset.description}</p>
            <p className="pill">{dataset.status}</p>
            <a href={dataset.link} target="_blank" rel="noreferrer" className="text-link">
              Open dataset
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
