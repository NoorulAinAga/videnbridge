export default function FinalCta({ content }) {
  return (
    <section className="final-cta">
      <div className="container final-cta-inner">
        <div>
          <p className="eyebrow eyebrow-light">{content.eyebrow}</p>
          <h2>{content.title}</h2>
          <p>{content.body}</p>
        </div>
        <a className="button" href="/contact-us">{content.buttonLabel} <span>↗</span></a>
      </div>
    </section>
  );
}
