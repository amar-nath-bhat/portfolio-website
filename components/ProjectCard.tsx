import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  liveUrl: string;
  sourceCodeUrl: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <section className="max-w-sm rounded-lg shadow-lg shadow-gray-800 overflow-hidden bg-[#0B0C10] hover:scale-105 transition-transform duration-300 ">
      {/* Project Image */}
      <img
        className="w-full h-48 object-cover"
        src={project.imageUrl}
        alt="Project Thumbnail"
      />

      {/* Project Content */}
      <div className="p-6">
        <h3 className="font-semibold text-2xl mb-2 text-[#66FCF1]">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4">{project.description}</p>

        {/* Buttons */}
        <div className="flex gap-4">
          <Button className="px-4 py-2 bg-[#66FCF1] text-black rounded-lg hover:bg-[#45A29E] transition-colors">
            <Link href={project.liveUrl}>View Project</Link>
          </Button>
          <Button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors">
            <Link href={project.sourceCodeUrl}>Source Code</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
