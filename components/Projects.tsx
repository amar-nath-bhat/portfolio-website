import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectCard from "./ProjectCard";



const Projects: React.FC = () => {
  return (
    <section id="projects" className="text">
      <h2>Projects</h2>
      <Carousel>
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default Projects;
