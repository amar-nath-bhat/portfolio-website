import AboutMe from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const HomePage: React.FC = () => {
  return (
    <div>
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
