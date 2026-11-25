export default function IndustriesOverview({ overview }) {
  return (
    <section className="section industries-overview">
      <div className="container intro-grid">
        <div className="intro-copy">
          <p className="eyebrow"><span />{overview.eyebrow}</p>
          <h2 className="section-title">{overview.title}</h2>
        </div>
        <div className="intro-copy">
          <p>{overview.body}</p>
          <p>{overview.closing}</p>
        </div>
      </div>
    </section>
  );
}
