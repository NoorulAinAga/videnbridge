export default function AboutPrinciples({ items }) {
  return (
    <section className="section section-muted">
      <div className="container">
        <div className="section-heading centered">
          <p className="eyebrow">HOW WE THINK</p>
          <h2 className="section-title">A considered path from questions to insight.</h2>
          <p className="section-lead">The principles below reflect the research-driven approach described in our service overview.</p>
        </div>
        <div className="principle-grid">
          {items.map((item) => (
            <article className="principle-card" key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
