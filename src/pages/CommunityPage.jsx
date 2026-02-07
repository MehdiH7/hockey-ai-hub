import { spaces } from "../data/content";

export default function CommunityPage() {
  return (
    <section className="stack-md">
      <h2>Community</h2>
      <p>
        The goal is to keep this as an open, practical hub for researchers and engineers working on
        ice hockey video understanding.
      </p>
      <div className="grid card-grid">
        <article className="card">
          <h3>Talk methods</h3>
          <p>Share findings on model design, evaluation strategy, and failure cases.</p>
        </article>
        <article className="card">
          <h3>Build together</h3>
          <p>Collaborate on datasets, baselines, and reproducible pipelines.</p>
        </article>
        <article className="card">
          <h3>Show results</h3>
          <p>Publish demos, tools, and analysis workflows that can be reused by others.</p>
        </article>
      </div>

      <section className="stack-sm">
        <h3>Hugging Face Spaces</h3>
        <div className="grid card-grid">
          {spaces.map((space) => (
            <article key={space.name} className="card">
              <h4>{space.name}</h4>
              <p>{space.description}</p>
              <a href={space.link} target="_blank" rel="noreferrer" className="text-link">
                Open space
              </a>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
