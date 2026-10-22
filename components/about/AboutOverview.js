export default function AboutOverview({ overview }) {
  return (
    <section className="section">
      <div className="container about-overview-grid">
        <div className="about-overview-label">
          <p className="eyebrow">{overview.eyebrow}</p>
          <img
            src="/image/logo-1.png"
            alt="VidenBridge logo"
            className="large-logo-img"
          />
        </div>
        <div>
          <h2 className="section-title">{overview.title}</h2>
          <p className="body-large">{overview.body}</p>
          <p className="section-lead">{overview.secondBody}</p>
        </div>
      </div>
    </section>
  );
}
