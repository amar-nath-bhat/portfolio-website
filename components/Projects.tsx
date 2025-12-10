"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectCard from "./ProjectCard";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";

const Projects = () => {
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

  return (
    <section
      id="projects"
      className="flex flex-col items-start justify-center py-10 px-6 md:px-12 lg:px-24 xl:px-36 overflow-hidden sm:min-h-[100vh]"
    >
      <p className="heading text-4xl font-bold md:text-3xl lg:text-4xl mb-8">
        Projects
      </p>
      {loading ? (
        <div className="w-full flex gap-4 md:gap-6 lg:gap-8 overflow-hidden">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="w-full sm:w-[80%] md:w-[50%] max-w-xs md:max-w-md flex-grow p-4 md:p-6 lg:p-10"
            >
              <div className="glass-panel rounded-xl h-[400px] w-full animate-pulse border border-white/5 p-6 flex flex-col gap-4">
                <div className="w-full h-48 bg-gray-700/50 rounded-lg" />
                <div className="h-8 w-3/4 bg-gray-700/50 rounded" />
                <div className="h-4 w-full bg-gray-700/50 rounded" />
                <div className="h-4 w-5/6 bg-gray-700/50 rounded" />
                <div className="flex gap-2 mt-auto">
                  <div className="h-10 w-24 bg-gray-700/50 rounded-full" />
                  <div className="h-10 w-24 bg-gray-700/50 rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Carousel
          className="w-full"
          opts={{ align: "start", loop: true }}
          plugins={[Autoplay({ delay: 3000 })]}
        >
          <CarouselContent className="flex gap-4 md:gap-6 lg:gap-8 px-4 w-full">
            {projects.map((project, index) => (
              <CarouselItem
                key={index}
                className="w-full sm:w-[80%] md:w-[50%] max-w-xs md:max-w-md flex-grow p-4 md:p-6 lg:p-10"
              >
                <ProjectCard project={project} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="hidden md:flex justify-between w-full">
            <CarouselPrevious className="bg-black text-white" />
            <CarouselNext className="bg-black text-white" />
          </div>
        </Carousel>
      )}
    </section>
  );
};

export default Projects;
