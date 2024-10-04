import AboutMe from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Hero from "../components/Hero";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <AboutMe />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default HomePage;
