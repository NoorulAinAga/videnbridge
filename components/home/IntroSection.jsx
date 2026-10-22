export default function IntroSection({ intro }) {
  return (
    <section className="section intro-section">
      <div className="container intro-grid">
        <div>
          <p className="eyebrow">{intro.eyebrow}</p>
          <h2 className="section-title">{intro.title}</h2>
        </div>
        <div className="intro-copy">
          <p>{intro.body}</p>
          <p>{intro.closing}</p>
          <a className="text-link" href="/about">Discover VidenBridge <span>↗</span></a>
        </div>
      </div>
      <div className="container insight-strip">
        <div className="insight-strip-icon">✳</div>
        <div>
          <strong>From information to insight</strong>
          <p>Patent analysis, market intelligence, and technology monitoring — connected to your business questions.</p>
        </div>
      </div>
    </section>
  );
}
