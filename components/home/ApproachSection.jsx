export default function ApproachSection({ items }) {
  return (
    <section className="section approach-section" id="approach">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">OUR APPROACH</p>
          <h2 className="section-title">Understand. Research. Analyze. Deliver.</h2>
          <p className="section-lead">A structured process that turns your research questions into decision-ready intelligence.</p>
        </div>
        <div className="approach-grid">
          {items.map((item) => (
            <article className="approach-card" key={item.number}>
              <div className="approach-card-top">
                {/* <span className="approach-number">{item.number}</span> */}
                <span className="approach-icon" aria-hidden="true">{item.icon}</span>
              </div>
              <div className="approach-line" />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
