export default function ServicesQuickNav({ heading, services }) {
  return (
    <section className="services-intro">
      <div className="container">
        <div className="section-heading centered">
          <p className="eyebrow">{heading.eyebrow}</p>
          <h2 className="section-title">{heading.title}</h2>
          <p className="section-lead">{heading.lead}</p>
        </div>
        <div className="services-quick-nav">
          {services.map((service) => (
            <a
              key={service.anchorId}
              className="services-quick-link"
              href={`#${service.anchorId}`}
            >
              <span className="service-icon">{service.icon}</span>
              <span className="services-quick-copy">
                <strong>{service.title}</strong>
                <small>{service.subtitle}</small>
              </span>
              <span className="services-quick-arrow">↓</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
