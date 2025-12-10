"use client";
import Link from "next/link";
import type React from "react";

import { Poppins } from "next/font/google";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import SplineLoader from "./SplineLoader";
import { Button } from "@/components/ui/button";

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});

const Hero: React.FC = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current!, {
      strings: [
        "Currently a student at MIT, Manipal.",
        "Aspiring Engineer and Developer.",
      ],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
      backDelay: 2000,
      startDelay: 1000,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const fallbackContent = (
    <div className="text-center text-[#66FCF1]">
      <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-[#66FCF1] to-[#45A29E] rounded-full flex items-center justify-center opacity-20">
        <span className="text-4xl">💻</span>
      </div>
      <p className="text-lg">Interactive Experience</p>
    </div>
  );

  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-center px-6 md:px-12 lg:px-24 xl:px-36 sm:min-h-[85vh] pt-32 md:pt-40">
      {/* Text Section */}
      <div className="text-start flex flex-col w-auto top-0 mt-10 lg:mt-0 animate-fade-in-up">
        <span className="w-full heading text-3xl md:text-4xl lg:text-5xl font-bold">
          Hello Visitor! I am Amarnath
        </span>
        <h2
          className={`${poppins.className} font-normal sub-heading text-xl md:text-2xl lg:text-3xl mt-4`}
        >
          <span ref={typedRef}></span>
        </h2>
        <div className="flex gap-6 sm:gap-10 mt-8 sm:mt-16 text-lg sm:text-xl font-bold justify-start">
          <Button className="retro-btn px-6 py-4 sm:px-7 sm:py-7 rounded-full text-lg sm:text-xl">
            <Link href="#contact">Say Hi 👋</Link>
          </Button>
          <Button className="retro-btn px-6 py-4 sm:px-5 sm:py-7 rounded-full text-lg sm:text-xl">
            <Link href="#projects">Learn More</Link>
          </Button>
        </div>
      </div>

      {/* Spline Section */}
      <div className="w-full lg:h-[70vh] h-[50vh] lg:block">
        <SplineLoader
          scene={process.env.NEXT_PUBLIC_GLASS_BALLS || ""}
          className="w-full h-full"
          fallbackContent={fallbackContent}
        />
      </div>
    </section>
  );
};

export default Hero;
