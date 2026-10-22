"use client";

import { useEffect, useState } from "react";

export default function HeroCarousel({ slides }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!slides || slides.length < 2) return;
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [slides]);

  if (!slides?.length) return null;
  const slide = slides[active];

  return (
    <section className="hero-carousel" aria-label="Featured information">
      {slides.map((item, index) => (
        <div
          key={item.title}
          className={`hero-background ${index === active ? "is-active" : ""}`}
          style={{ backgroundImage: `linear-gradient(90deg, rgba(3, 25, 48, .97) 0%, rgba(3, 35, 62, .82) 48%, rgba(3, 35, 62, .18) 100%), url("${item.image}")` }}
          role="img"
          aria-label={item.imageAlt}
        />
      ))}
      <div className="container hero-content-wrap">
        <div className="hero-content" key={slide.title}>
          <p className="eyebrow eyebrow-light"><span />{slide.eyebrow}</p>
          <h1>{slide.title}</h1>
          <p className="hero-description">{slide.description}</p>
          <div className="hero-actions">
            <a className="button" href={slide.primaryCta.href}>{slide.primaryCta.label} <span>↗</span></a>
            <a className="button button-outline-light" href={slide.secondaryCta.href}>{slide.secondaryCta.label}</a>
          </div>
          <p className="hero-signoff">Make informed decisions. Anticipate change. Stay ahead.</p>
        </div>
        <div className="carousel-controls" aria-label="Choose banner">
          <span className="carousel-count">0{active + 1} <i /> 0{slides.length}</span>
          <div className="carousel-dots">
            {slides.map((item, index) => (
              <button
                key={item.title}
                type="button"
                className={index === active ? "active" : ""}
                onClick={() => setActive(index)}
                aria-label={`Show banner ${index + 1}`}
                aria-pressed={index === active}
              />
            ))}
          </div>
          <div className="carousel-arrows">
            <button type="button" onClick={() => setActive((active - 1 + slides.length) % slides.length)} aria-label="Previous banner">←</button>
            <button type="button" onClick={() => setActive((active + 1) % slides.length)} aria-label="Next banner">→</button>
          </div>
        </div>
      </div>
    </section>
  );
}
