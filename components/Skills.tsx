"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";

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

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (carouselRef.current) {
  //       const items = carouselRef.current.children;
  //       // Move the first item to the end of the list
  //       if (items.length > 0) {
  //         const firstItem = items[0];
  //         carouselRef.current.appendChild(firstItem);
  //       }
  //     }
  //   }, 2000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <section className="py-12 pb-20 bg-[#0B0C10] text-[#66FCF1] justify-center px-48 overflow-hidden">
      <div className="relative flex items-center w-full">
        {/* Carousel Container */}
        <Carousel className="w-full max-w-6xl mx-auto carousel">
          <CarouselContent
            ref={carouselRef}
            className="flex gap-8 px-4 transition-transform duration-300 ease-in-out"
          >
            {skills.map((skill) => (
              <CarouselItem key={skill.title} className="flex-none w-48">
                <div className="flex flex-col items-center rounded-full p-4 hover:scale-105 transition-transform">
                  <Image
                    src={`/images/${skill.img}`}
                    alt={skill.title}
                    width={64}
                    height={64}
                    className="mb-4"
                  />
                  <p className="text-lg font-semibold">{skill.title}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-black text-white" />
          <CarouselNext className="bg-black text-white" />
        </Carousel>
      </div>
    </section>
  );
};

export default Skills;
