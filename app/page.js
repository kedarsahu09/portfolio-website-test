import { Nav, Hero, About, Skills, Experience, Projects, Mentoring, Blog, Contact } from '../components/Sections';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Mentoring />
        <Blog />
        <Contact />
      </main>
    </>
  );
}
