import { papers } from "../data/content";

export default function PapersPage() {
  return (
    <section className="stack-md">
      <h2>Papers</h2>
      <p>Published work focused on computer vision and AI for ice hockey analysis.</p>
      <div className="stack-sm">
        {papers.map((paper) => (
          <article key={`${paper.title}-${paper.year}`} className="card">
            <p className="eyebrow">
              {paper.year} • {paper.venue}
            </p>
            <h3>{paper.title}</h3>
            <p>{paper.note}</p>
            <a href={paper.link} target="_blank" rel="noreferrer" className="text-link">
              Open publication
            </a>
          </article>
        ))}
      </div>
      <p className="muted">
        Profile: https://scholar.google.com/citations?user=QHp7CtQAAAAJ&hl=en
      </p>
    </section>
  );
}
