export default function WhyChooseUs({ content }) {
  if (!content) return null;

  return (
    <section className="section why-section why-section-brand">
      <div className="container why-grid">
        <div className="why-intro">
          <p className="eyebrow eyebrow-light">{content.eyebrow}</p>
          <h2 className="section-title">{content.title}</h2>
          <p>{content.body}</p>
          <a className="button button-light" href="/contact-us">
            Get a Free Consultation <span>↗</span>
          </a>
        </div>
        <div className="why-list">
          {content.points.map((item, index) => (
            <article className="why-item" key={item.title}>
              <span className="why-index">0{index + 1}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
