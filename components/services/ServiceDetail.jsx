export default function ServiceDetail({ service, alternate, copy }) {
  return (
    <section
      id={service.anchorId}
      className={`section service-detail-section ${alternate ? "section-muted" : ""}`}
    >
      <div className="container service-detail-grid">
        <div className="service-detail-copy">
          <div className="service-detail-top">
            <span className="service-icon">{service.icon}</span>
            <span className="service-number">{service.number}</span>
          </div>
          <h2>{service.title}</h2>
          <h3 className="service-detail-subtitle">{service.subtitle}</h3>
          <p>{service.description}</p>
          <a className="button" href="/contact-us">
            {copy.ctaLabel} <span>↗</span>
          </a>
        </div>
        <div className="service-detail-points">
          <h4>{copy.offeringsLabel}</h4>
          <ul className="check-list service-detail-list">
            {service.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
