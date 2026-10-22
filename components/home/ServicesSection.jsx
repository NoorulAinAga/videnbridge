
"use client";

import { useEffect, useState } from "react";

export default function ServicesSection({ heading, services }) {
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    if (!selectedService) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedService(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedService]);

  return (
    <section className="section section-muted" id="services">
      <div className="container">
        <div className="section-heading centered">
          <p className="eyebrow">{heading.eyebrow}</p>
          <h2 className="section-title">{heading.title}</h2>
          <p className="section-lead">{heading.body}</p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-card-top">
                <span className="service-icon">{service.icon}</span>
                <span className="service-number">{service.number}</span>
              </div>

              <h3>{service.title}</h3>
              <h4>{service.subtitle}</h4>

              <p className="service-description">
                {service.description}
              </p>

              

              <button
                type="button"
                className="text-link service-read-more"
                onClick={() => setSelectedService(service)}
                aria-label={`Read more about ${service.title}`}
              >
                Read More <span aria-hidden="true">↗</span>
              </button>
            </article>
          ))}
        </div>
      </div>

      {selectedService && (
        <div
          className="service-modal-overlay"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedService(null);
            }
          }}
        >
          <div
            className="service-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
          >
            <div className="service-modal-header">
              <div>
                <span className="service-modal-eyebrow">
                  OUR SERVICES
                </span>
                <h2 id="service-modal-title">
                  {selectedService.title}
                </h2>
                <p>{selectedService.subtitle}</p>
              </div>

              <button
                type="button"
                className="service-modal-close"
                onClick={() => setSelectedService(null)}
                aria-label="Close popup"
              >
                &times;
              </button>
            </div>

            <div className="service-modal-body">
              <p className="service-modal-description">
                {selectedService.description}
              </p>

              {selectedService.points?.length > 0 && (
                <>
                  <h3>What We Offer</h3>
                  <ul className="service-modal-list">
                    {selectedService.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
