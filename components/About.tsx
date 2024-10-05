import Spline from "@splinetool/react-spline";
import Skills from "./Skills";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="px-6 md:px-12 lg:px-48 sm:min-h-[100vh] flex flex-col items-center justify-center bg-[#0B0C10] mt-10"
    >
      <div className="flex flex-col md:flex-row items-center justify-center w-full">
        {/* About Me Text Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h2 className="heading text-3xl md:text-4xl font-bold mb-6">
            About Me
          </h2>
          <p
            className={`text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] leading-7 mb-4 text ${poppins.className}`}
          >
            Hey there! I&apos;m <strong>Amarnath Bhat</strong>, a passionate
            developer with a love for turning ideas into reality through code
            💻. With a focus on <strong>M.E.R.N Stack</strong>, I enjoy building
            innovative solutions that solve real-world problems 🌐.
          </p>
          <p
            className={`text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] leading-7 mb-4 text ${poppins.className}`}
          >
            I&apos;ve worked on projects ranging from <em>Websites</em> to{" "}
            <em>CLI Tools</em>, always pushing the boundaries of what&apos;s
            possible. I believe in writing clean, efficient, and scalable code
            that not only works but makes an impact ✨.
          </p>
          <p
            className={`text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] leading-7 text ${poppins.className}`}
          >
            When I&apos;m not coding, you&apos;ll likely find me{" "}
            <strong>binge-watching web-series 🍿, listening to music </strong>{" "}
            or searching for ideas to build <strong>new projects 💡</strong>.
            Let&apos;s connect and build something amazing together!
          </p>
        </div>

        {/* Spline 3D Model */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-[70vh] hidden lg:block">
          <Spline scene={process.env.NEXT_PUBLIC_THREED_ICON || ""} />
        </div>
      </div>

      {/* Skills Section */}
      <Skills />
    </section>
  );
};

export default About;
