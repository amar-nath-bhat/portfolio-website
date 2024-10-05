import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  liveUrl: string;
  sourceCodeUrl: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <section
      className={`max-w-sm w-full min-h-[500px] rounded-lg shadow-lg shadow-gray-800 overflow-hidden bg-[#0B0C10] hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-[#66FCF1]/50 mx-auto md:mx-0 ${poppins.className}`}
    >
      {/* Project Image */}
      <img
        className="w-full h-48 object-cover"
        src={project.imageUrl}
        alt="Project Thumbnail"
      />

      {/* Project Content */}
      <div className="p-4 md:p-6 flex flex-col justify-between h-full">
        <div>
          <h3 className="font-semibold text-xl md:text-2xl mb-2 text-[#66FCF1]">
            {project.title}
          </h3>
          <p className="text-gray-300 text-sm md:text-base mb-4">
            {project.description}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-auto">
          <Button className="px-3 md:px-4 py-2 bg-[#66FCF1] text-black rounded-lg hover:bg-[#45A29E] transition-colors">
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </Link>
          </Button>
          <Button className="px-3 md:px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors">
            <Link
              href={project.sourceCodeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
