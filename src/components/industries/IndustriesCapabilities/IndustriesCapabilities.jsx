import Icon from "@/components/Icon/Icon";

export default function IndustriesCapabilities({ heading, capabilities }) {
  return (
    <section className="section why-section industries-capabilities" id="capabilities">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow eyebrow-light"><span />{heading.eyebrow}</p>
          <h2 className="section-title">{heading.title}</h2>
          <p className="section-lead">{heading.lead}</p>
        </div>
        <div className="cap-grid">
          {capabilities.map((cap) => (
            <article className="cap-card" key={cap.number}>
              <div className="cap-top">
                <span className="why-index">{cap.number} / {cap.tag}</span>
                <span className="cap-icon"><Icon name={cap.icon} /></span>
              </div>
              <h3>{cap.title}</h3>
              <p>{cap.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
