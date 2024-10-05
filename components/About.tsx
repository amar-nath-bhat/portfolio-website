import Spline from "@splinetool/react-spline";
import Skills from "./Skills";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="px-48 min-h-[100vh] flex bg-[#0B0C10] flex-col items-center justify-center text mt-10"
    >
      <div className="flex items-center justify-center">
        <div className="w-1/2">
          <h2 className="heading text-3xl font-bold mb-6">About Me</h2>
          <p className="text-[1.5rem] leading-7 mb-4">
            Hey there! I'm <strong>Amarnath Bhat</strong>, a passionate
            developer with a love for turning ideas into reality through code
            💻. With a focus on <strong>M.E.R.N Stack</strong>, I enjoy building
            innovative solutions that solve real-world problems 🌐.
          </p>
          <p className="text-[1.5rem] leading-7 mb-4">
            I’ve worked on projects ranging from <em>Websites</em> to{" "}
            <em>CLI Tools</em>, always pushing the boundaries of what’s
            possible. I believe in writing clean, efficient, and scalable code
            that not only works but makes an impact ✨.
          </p>
          <p className="text-[1.5rem] leading-7">
            When I’m not coding, you’ll likely find me{" "}
            <strong>binge watching web-series 🍿, listening to music </strong>{" "}
            or searching ideas to build <strong>new projects 💡</strong>. Let’s
            connect and build something amazing together!
          </p>
        </div>

        <div className="w-1/2 h-[70vh]">
          <Spline scene={process.env.NEXT_PUBLIC_THREED_ICON || ""} />
        </div>
      </div>
      <Skills />
    </section>
  );
};

export default About;
