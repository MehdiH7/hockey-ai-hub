export default function ContactPage() {
  return (
    <section className="stack-md">
      <h2>Contact</h2>
      <p>Interested in collaboration, dataset contribution, or model benchmarking?</p>
      <article className="card">
        <p>You can reach me at:</p>
        <p>
          <a className="text-link" href="mailto:mehdihou@oslomet.no">
            mehdihou@oslomet.no
          </a>
        </p>
        <p>
          <a className="text-link" href="mailto:mehdi@forzasys.com">
            mehdi@forzasys.com
          </a>
        </p>
        <p className="muted">Profiles:</p>
        <p>
          <a
            className="text-link"
            href="https://scholar.google.com/citations?user=QHp7CtQAAAAJ&hl=en"
            target="_blank"
            rel="noreferrer"
          >
            Google Scholar
          </a>
        </p>
        <p>
          <a
            className="text-link"
            href="https://www.linkedin.com/in/mehdih7/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </article>
    </section>
  );
}
