import AboutMe from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
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

      <section id="skills">
        <Skills />
      </section>
    </div>
  );
};

export default HomePage;
