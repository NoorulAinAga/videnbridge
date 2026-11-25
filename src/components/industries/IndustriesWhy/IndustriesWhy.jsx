export default function IndustriesWhy({ why }) {
  return (
    <section className="section why-section-brand">
      <div className="container why-grid">
        <div className="why-intro">
          <p className="eyebrow"><span />{why.eyebrow}</p>
          <h2 className="section-title">{why.title}</h2>
          <p>{why.body}</p>
          <p>{why.body2}</p>
        </div>
        <div className="why-list">
          {why.points.map((point, index) => (
            <div className="why-item" key={point.title}>
              <span className="why-index">0{index + 1}</span>
              <div>
                <h3>{point.title}</h3>
                <p>{point.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
