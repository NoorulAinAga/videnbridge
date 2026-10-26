export default function ServicesQuickNav({ heading, services, extraLink }) {
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
              href={service.external ? service.href : `#${service.anchorId}`}
            >
              <span className="service-icon">{service.icon}</span>
              <span className="services-quick-copy">
                <strong>{service.title}</strong>
                <small>{service.subtitle}</small>
              </span>
              <span className="services-quick-arrow">{service.external ? "↗" : "↓"}</span>
            </a>
          ))}
          {extraLink && (
            <a className="services-quick-link services-quick-link-accent" href={extraLink.href}>
              <span className="service-icon">{extraLink.icon}</span>
              <span className="services-quick-copy">
                <strong>{extraLink.title}</strong>
                <small>{extraLink.subtitle}</small>
              </span>
              <span className="services-quick-arrow">↗</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
