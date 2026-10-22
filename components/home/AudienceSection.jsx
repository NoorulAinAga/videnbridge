export default function AudienceSection({ audiences }) {
  return (
    <section className="section audience-section">
      <div className="container audience-grid">
        <div>
          <p className="eyebrow">WHO WE SUPPORT</p>
          <h2 className="section-title">Intelligence for teams shaping what comes next.</h2>
          <p className="section-lead">Our services can be tailored to organizations and professionals seeking a clearer understanding of innovation, markets, and technological change.</p>
        </div>
        <div className="audience-list">
          {audiences.map((audience, index) => (
            <div className="audience-item" key={audience}>
              <span>0{index + 1}</span><strong>{audience}</strong><span className="audience-arrow">↗</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
