import type React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { ExternalLink, Github } from "lucide-react";

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});

interface Project {
  id?: number;
  title: string;
  description: string;
  imageUrl: string;
  liveUrl: string;
  sourceCodeUrl: string;
  tags?: string[];
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div
      className={`glass-panel max-w-sm w-full min-h-[550px] rounded-xl shadow-lg shadow-[#66FCF1]/10 overflow-hidden hover:scale-105 transition-all duration-500 ease-in-out hover:shadow-xl hover:shadow-[#66FCF1]/30 mx-auto md:mx-0 border border-white/5 hover:border-[#66FCF1]/50 flex flex-col ${poppins.className}`}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <Image
          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
          src={project.imageUrl || "/placeholder.svg"}
          alt={`${project.title} thumbnail`}
          width={640}
          height={256}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Project Content */}
      <div className="flex flex-col justify-between flex-grow p-6">
        <div>
          <h3 className="font-semibold text-xl md:text-2xl mb-3 text-[#66FCF1] hover:text-[#45A29E] transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-gray-300 text-sm md:text-base mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Technology Tags */}
          {project.tags && (
            <div className="flex flex-wrap gap-2 mb-4 items-center">
              {project.tags.slice(0, 4).map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-[#66FCF1]/10 text-[#66FCF1] text-xs rounded-full border border-[#66FCF1]/30 hover:bg-[#66FCF1]/20 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
              {/* {project.tags.length > 3 && (
                <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                  +{project.tags.length - 3} more
                </span>
              )} */}
            </div>
          )}
        </div>

        {/* Buttons pinned to bottom */}
        <div className="flex gap-3 mt-auto pt-4">
          <Button className="flex-1 px-4 py-2 retro-btn rounded-lg group">
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full"
            >
              <ExternalLink
                size={16}
                className="group-hover:rotate-12 transition-transform duration-300"
              />
              Live Demo
            </Link>
          </Button>
          <Button className="flex-1 px-4 py-2 retro-btn rounded-lg group">
            <Link
              href={project.sourceCodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full"
            >
              <Github
                size={16}
                className="group-hover:rotate-12 transition-transform duration-300"
              />
              Code
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
