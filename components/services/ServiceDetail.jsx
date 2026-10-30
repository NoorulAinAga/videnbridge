import Icon from "@/components/Icon";

export default function ServiceDetail({ service, alternate, copy }) {
  return (
    <section
      id={service.anchorId}
      className={`section service-detail-section ${alternate ? "section-brand" : ""}`}
    >
      <div className="container service-detail-grid">
        <div className="service-detail-copy">
          <div className="service-detail-top">
            <span className="service-icon"><Icon name={service.icon} /></span>
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
          <ul className="service-detail-offer">
            {service.points.map((point) =>
              typeof point === "string" ? (
                <li key={point} className="offer-plain">
                  {point}
                </li>
              ) : (
                <li
                  key={point.title}
                  className={`offer-item${point.items?.length ? " has-more" : ""}`}
                  tabIndex={0}
                >
                  <div className="offer-head">
                    <span className="offer-icon"><Icon name={point.icon} /></span>
                    <strong>{point.title}</strong>
                    {point.items?.length ? (
                      <span className="offer-toggle" aria-hidden="true">
                        ▾
                      </span>
                    ) : null}
                  </div>
                  {point.items?.length ? (
                    <ul className="offer-sub">
                      {point.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
