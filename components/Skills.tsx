"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRef } from "react";

export const skills = [
  { title: "C", img: "C.png" },
  { title: "C++", img: "Cpp.png" },
  { title: "C#", img: "Cs.png" },
  { title: "Java", img: "Java.png" },
  { title: "Python", img: "Python.png" },
  { title: "JavaScript", img: "javascript.svg" },
  { title: "TypeScript", img: "typescript.svg" },
  { title: "Rust", img: "Rust.png" },
  { title: "HTML", img: "html.svg" },
  { title: "CSS", img: "css.svg" },
  { title: "React.js", img: "react.svg" },
  { title: "Express.js", img: "express.svg" },
  { title: "Node.js", img: "nodedotjs.svg" },
  { title: "MongoDB", img: "mongodb.svg" },
  { title: "OracleSQL", img: "oracle.svg" },
  { title: "MySQL", img: "MySQL.png" },
  { title: "TailwindCSS", img: "tailwind.png" },
  { title: "Bootstrap", img: "bootstrap.png" },
  { title: "Redux", img: "redux.svg" },
  { title: "Linux/Ubuntu", img: "Ubuntu.png" },
  { title: "Git", img: "Git.png" },
  { title: "Canva", img: "canva.svg" },
  { title: "Figma", img: "figma.svg" },
  { title: "ROS", img: "ros.svg" },
];

const Skills: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-[#0B0C10] text-[#66FCF1] px-6 md:px-12 lg:px-48 overflow-hidden">
      <div className="relative flex items-center w-full">
        {/* Carousel Container */}
        <Carousel className="w-full max-w-6xl mx-auto carousel">
          <CarouselContent
            ref={carouselRef}
            className="flex gap-4 md:gap-6 lg:gap-8 px-4 transition-transform duration-300 ease-in-out"
          >
            {skills.map((skill) => (
              <CarouselItem
                key={skill.title}
                className="flex-none w-28 md:w-36 lg:w-48"
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
          {/* Carousel Controls */}
          <CarouselPrevious className="bg-black text-white" />
          <CarouselNext className="bg-black text-white" />
        </Carousel>
      </div>
    </section>
  );
};

export default Skills;
