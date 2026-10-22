export default function AboutHero({ hero }) {
  return (
    <section className="page-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(3, 25, 48, .96), rgba(3, 35, 62, .60)), url("${hero.image}")` }}>
      <div className="container page-hero-content">
        <p className="eyebrow eyebrow-light"><span />{hero.eyebrow}</p>
        <h1>{hero.title}</h1>
        <p>{hero.body}</p>
        <a className="button" href="/contact-us">Talk to Our Team <span>↗</span></a>
      </div>
    </section>
  );
}
