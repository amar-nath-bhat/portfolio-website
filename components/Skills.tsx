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
  const [currentIndex, setCurrentIndex] = useState(0);

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

  useEffect(() => {
    if (skills.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 3000); // Change every 3 seconds

      return () => clearInterval(interval);
    }
  }, [skills.length]);

  useEffect(() => {
    if (carouselRef.current && skills.length > 0) {
      const itemWidth = carouselRef.current.scrollWidth / (skills.length * 2);
      const totalItems = skills.length * 2;
      const offset = (currentIndex % totalItems) * itemWidth;
      carouselRef.current.style.transition = "transform 300ms ease-in-out";
      carouselRef.current.style.transform = `translateX(-${offset}px)`;

      if (currentIndex % skills.length === 0) {
        setTimeout(() => {
          carouselRef.current!.style.transition = "none";
          carouselRef.current!.style.transform = `translateX(-${
            (currentIndex % skills.length) * itemWidth
          }px)`;
        }, 300);
      }
    }
  }, [currentIndex, skills.length]);

  return (
    <section className="bg-[#0B0C10] text-[#66FCF1] px-6 md:px-12 lg:px-36 overflow-hidden">
      <div className="relative flex items-center w-full overflow-hidden mt-5">
        {/* Carousel Container */}
        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent
            ref={carouselRef}
            className="flex gap-4 md:gap-6 lg:gap-8 px-4 transition-transform duration-300 ease-in-out"
          >
            {[...skills, ...skills].map((skill, index) => (
              <CarouselItem
                key={`${skill.title}-${index}`}
                className={`flex-none w-24 sm:w-28 md:w-36 lg:w-48`}
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
