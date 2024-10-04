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
        // console.log("Data fetched", data);
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
    // console.log("Projects fetched", projects);
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <section
      id="projects"
      className="text flex flex-col items-start justify-center px-48 overflow-hidden min-h-[75vh] top-0 gap-5"
    >
      <p className="heading">Projects</p>
      <Carousel>
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index} className="p-10">
              <ProjectCard project={project} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-black text-white" />
        <CarouselNext className="bg-black text-white" />
      </Carousel>
    </section>
  );
};

export default Projects;
