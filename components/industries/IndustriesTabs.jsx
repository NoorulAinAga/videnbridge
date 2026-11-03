"use client";

import { useEffect, useState } from "react";
import Icon from "@/components/Icon";

export default function IndustriesTabs({ heading, industries }) {
  const [activeId, setActiveId] = useState(industries?.[0]?.anchorId);

  useEffect(() => {
    if (!industries?.length) return;

    const applyHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (industries.some((item) => item.anchorId === hash)) {
        setActiveId(hash);
      }
    };

    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, [industries]);

  if (!industries?.length) return null;

  const select = (anchorId) => {
    setActiveId(anchorId);
    history.replaceState(null, "", `#${anchorId}`);
  };

  const active =
    industries.find((item) => item.anchorId === activeId) || industries[0];

  return (
    <section className="section section-muted industries-section" id="industries">
      <div className="container">
        <div className="section-heading centered">
          <p className="eyebrow"><span />{heading.eyebrow}</p>
          <h2 className="section-title">{heading.title}</h2>
          <p className="section-lead">{heading.lead}</p>
        </div>
        <div className="industries-tabs">
          <article className="industry-tab-panel" id={active.anchorId} key={active.anchorId}>
            <div className="industry-card-top">
              <span className="industry-num">INDUSTRY {active.number}</span>
              <span className="industry-symbol"><Icon name={active.icon} /></span>
            </div>
            <h3>{active.title}</h3>
            <h4>{active.subtitle}</h4>
            <p>{active.description}</p>
            <p>{active.description2}</p>
            <div className="eyebrow industry-focus-label"><span />Our Focus Areas</div>
            <div className="industry-focus">
              {active.focus.map((area) => (
                <span key={area}>{area}</span>
              ))}
            </div>
          </article>
          <div className="industries-tab-list" role="tablist" aria-label="Select an industry">
            <p className="industry-tab-hint">Explore any industry — <span>click to view</span></p>
            {industries.map((item) => (
              <button
                key={item.anchorId}
                type="button"
                role="tab"
                aria-selected={item.anchorId === active.anchorId}
                className={`industry-tab ${item.anchorId === active.anchorId ? "active" : ""}`}
                onClick={() => select(item.anchorId)}
              >
                <span className="industry-tab-num">{item.number}</span>
                <span className="industry-tab-title">{item.title}</span>
                <span className="industry-tab-arrow">→</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
