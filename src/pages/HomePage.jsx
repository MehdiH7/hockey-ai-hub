import { Link } from "react-router-dom";
import { heroStats, featuredDatasets, featuredModels } from "../data/content";

export default function HomePage() {
  return (
    <div className="stack-lg">
      <section className="hero">
        <p className="hero-tag">Ice Hockey Machine Learning</p>
        <h2>Research, data, and open tools for hockey analytics.</h2>
        <p>
          This hub brings together my latest ice hockey papers, Hugging Face datasets, model
          repositories, and interactive spaces.
        </p>
        <div className="hero-actions">
          <Link to="/papers" className="btn btn-primary">
            Read Papers
          </Link>
          <Link to="/datasets" className="btn btn-secondary">
            Browse Datasets
          </Link>
        </div>
      </section>

      <section className="grid stats-grid">
        {heroStats.map((item) => (
          <article key={item.label} className="card stat-card">
            <p>{item.label}</p>
            <h3>{item.value}</h3>
          </article>
        ))}
      </section>

      <section>
        <div className="section-title-row">
          <h3>Featured Datasets</h3>
          <Link to="/datasets" className="text-link">
            See all
          </Link>
        </div>
        <div className="grid card-grid">
          {featuredDatasets.map((dataset) => (
            <article key={dataset.name} className="card">
              <p className="eyebrow">{dataset.season}</p>
              <h4>{dataset.name}</h4>
              <p>{dataset.description}</p>
              <p className="pill">{dataset.status}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="section-title-row">
          <h3>Featured Models</h3>
          <Link to="/models" className="text-link">
            See all
          </Link>
        </div>
        <div className="grid card-grid">
          {featuredModels.map((model) => (
            <article key={model.name} className="card">
              <p className="eyebrow">{model.type}</p>
              <h4>{model.name}</h4>
              <p>{model.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
