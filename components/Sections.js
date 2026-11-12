import config from '../lib/config';

export function Nav() {
  const links = [
    ['About', '#about'],
    ['Skills', '#skills'],
    ['Experience', '#experience'],
    ['Projects', '#projects'],
    config.mentoring?.enabled && ['Mentoring', '#mentoring'],
    config.blog?.enabled && ['Blog', '#blog'],
    ['Contact', '#contact'],
  ].filter(Boolean);
  return (
    <nav className="site-nav">
      <a className="brand" href="#top">{config.name}</a>
      <ul>
        {links.map(([label, href]) => (
          <li key={href}><a href={href}>{label}</a></li>
        ))}
      </ul>
    </nav>
  );
}

export function Hero() {
  return (
    <header id="top" className="hero">
      <img className="avatar" src={config.photo} alt={config.name} width={160} height={160} />
      <h1>{config.name}</h1>
      <p className="title">{config.title}</p>
      <p className="tagline">{config.tagline}</p>
      <div className="actions">
        <a className="btn primary" href="#contact">Contact me</a>
        {config.mentoring?.enabled && <a className="btn" href="#mentoring">Book a session</a>}
      </div>
    </header>
  );
}

export function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export function About() {
  return (
    <Section id="about" title="About">
      {config.about.map((p, i) => <p key={i}>{p}</p>)}
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <ul className="chips">
        {config.skills.map((s) => <li key={s}>{s}</li>)}
      </ul>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      {config.experience.map((job, i) => (
        <article className="card" key={i}>
          <h3>{job.role}</h3>
          <p className="meta">{job.company} · {job.period}</p>
          <ul>{job.details.map((d, j) => <li key={j}>{d}</li>)}</ul>
        </article>
      ))}
      <h3 className="sub">Education</h3>
      {config.education.map((e, i) => (
        <article className="card" key={i}>
          <h3>{e.degree}</h3>
          <p className="meta">{e.school} · {e.period}</p>
        </article>
      ))}
      {config.certifications?.length > 0 && (
        <>
          <h3 className="sub">Certifications</h3>
          <ul className="chips">
            {config.certifications.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </>
      )}
    </Section>
  );
}

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid">
        {config.projects.map((p, i) => (
          <article className="card" key={i}>
            {p.image && <img src={p.image} alt={p.title} />}
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            {p.link && <a href={p.link} target="_blank" rel="noopener noreferrer">View project</a>}
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Mentoring() {
  const m = config.mentoring;
  if (!m?.enabled) return null;
  return (
    <Section id="mentoring" title={m.headline}>
      <p>{m.description}</p>
      {m.topmateUrl && (
        <a className="btn primary" href={m.topmateUrl} target="_blank" rel="noopener noreferrer">
          Book a session on Topmate
        </a>
      )}
    </Section>
  );
}

export function Blog() {
  const b = config.blog;
  if (!b?.enabled) return null;
  return (
    <Section id="blog" title="Blog">
      {b.posts.map((post, i) => (
        <article className="card" key={i}>
          <h3>{post.title}</h3>
          <p className="meta">{post.date}</p>
          {post.body.split(/\n\s*\n/).map((para, j) => <p key={j}>{para}</p>)}
        </article>
      ))}
    </Section>
  );
}

export function Contact() {
  const c = config.contact;
  const s = config.social;
  const socials = [
    ['LinkedIn', s.linkedin],
    ['GitHub', s.github],
    ['X / Twitter', s.twitter],
  ].filter(([, url]) => url);
  return (
    <Section id="contact" title="Contact">
      {c.email && <p>Email: <a href={`mailto:${c.email}`}>{c.email}</a></p>}
      {c.phone && <p>Phone: {c.phone}</p>}
      {c.location && <p>Location: {c.location}</p>}
      <ul className="chips">
        {socials.map(([label, url]) => (
          <li key={label}><a href={url} target="_blank" rel="noopener noreferrer">{label}</a></li>
        ))}
      </ul>
    </Section>
  );
}
