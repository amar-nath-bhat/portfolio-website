"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useRef, useState, useEffect } from "react";

const Skills: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [skills, setSkills] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/skills");
        const data = await res.json();
        setSkills(data);
      } catch (error) {
        console.error("Error fetching skills:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="bg-[#0B0C10] text-[#66FCF1] px-6 md:px-12 lg:px-48 overflow-hidden">
      <div className="relative flex items-center w-full overflow-hidden mt-5">
        {/* Carousel Container */}
        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent
            ref={carouselRef}
            className="flex gap-4 md:gap-6 lg:gap-8 px-4 transition-transform duration-300 ease-in-out"
          >
            {skills.map((skill) => (
              <CarouselItem
                key={skill.title}
                className="flex-none w-24 sm:w-28 md:w-36 lg:w-48"
              >
                <div className="flex flex-col items-center p-4 hover:scale-105 transition-transform">
                  <Image
                    src={`/images/${skill.img}`}
                    alt={skill.title}
                    width={64}
                    height={64}
                    className="mb-4"
                  />
                  <p className="text-sm md:text-lg font-semibold">
                    {skill.title}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Skills;
