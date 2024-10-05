"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectCard from "./ProjectCard";
import { useState, useEffect } from "react";

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects");
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <section
      id="projects"
      className="flex flex-col items-start justify-center py-10 px-6 md:px-12 lg:px-24 xl:px-48 overflow-hidden sm:min-h-[100vh]"
    >
      <p className="heading text-4xl font-bold md:text-3xl lg:text-4xl mb-8">
        Projects
      </p>
      <Carousel className="w-full">
        <CarouselContent className="flex gap-4 md:gap-6 lg:gap-8 px-4 w-full transition-transform duration-300 ease-in-out">
          {projects.map((project, index) => (
            <CarouselItem
              key={index}
              className="w-full sm:w-[80%] md:w-[50%] max-w-xs md:max-w-md flex-grow p-4 md:p-6 lg:p-10"
            >
              <ProjectCard project={project} />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Hide carousel controls on small screens */}
        <div className="hidden md:flex justify-between w-full">
          <CarouselPrevious className="bg-black text-white" />
          <CarouselNext className="bg-black text-white" />
        </div>
      </Carousel>
    </section>
  );
};

export default Projects;
