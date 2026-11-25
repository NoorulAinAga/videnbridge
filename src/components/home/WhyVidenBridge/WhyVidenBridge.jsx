export default function WhyVidenBridge({ items }) {
  return (
    <section className="section why-section">
      <div className="container why-grid">
        <div className="why-intro">
          <p className="eyebrow eyebrow-light">WHY VIDENBRIDGE?</p>
          <h2 className="section-title">Clarity for your next move.</h2>
          <p>Research-led intelligence designed around your objectives, your markets, and the changes that matter.</p>
          <a className="button button-light" href="/about">Learn About Us <span>↗</span></a>
        </div>
        <div className="why-list">
          {items.map((item, index) => (
            <article className="why-item" key={item.title}>
              <span className="why-index">0{index + 1}</span>
              <div><h3>{item.title}</h3><p>{item.body}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
