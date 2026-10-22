"use client";

import { useEffect, useState } from "react";

export default function ServicesBannerCarousel({ services }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!services || services.length < 2) return;
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % services.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [services]);

  if (!services?.length) return null;
  const service = services[active];

  return (
    <section className="hero-carousel services-hero-carousel" aria-label="Our services">
      {services.map((item) => (
        <div
          key={item.title}
          className={`hero-background ${item.title === service.title ? "is-active" : ""}`}
          style={{ backgroundImage: `linear-gradient(90deg, rgba(3, 25, 48, .97) 0%, rgba(3, 35, 62, .82) 48%, rgba(3, 35, 62, .18) 100%), url("${item.image}")` }}
          role="img"
          aria-label={item.imageAlt}
        />
      ))}
      <div className="container hero-content-wrap">
        <div className="hero-content" key={service.title}>
          <p className="eyebrow eyebrow-light"><span />OUR SERVICES — {service.number}</p>
          <h1>{service.title}</h1>
          <p className="hero-description">{service.description}</p>
          <div className="hero-actions">
            <a className="button" href={`#${service.anchorId}`}>
              Explore {service.title} <span>↓</span>
            </a>
            <a className="button button-outline-light" href="/contact-us">Request a Consultation</a>
          </div>
        </div>
        <div className="carousel-controls" aria-label="Choose service banner">
          <span className="carousel-count">0{active + 1} <i /> 0{services.length}</span>
          <div className="carousel-dots">
            {services.map((item, index) => (
              <button
                key={item.title}
                type="button"
                className={index === active ? "active" : ""}
                onClick={() => setActive(index)}
                aria-label={`Show ${item.title} banner`}
                aria-pressed={index === active}
              />
            ))}
          </div>
          <div className="carousel-arrows">
            <button type="button" onClick={() => setActive((active - 1 + services.length) % services.length)} aria-label="Previous banner">←</button>
            <button type="button" onClick={() => setActive((active + 1) % services.length)} aria-label="Next banner">→</button>
          </div>
        </div>
      </div>
    </section>
  );
}
