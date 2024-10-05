"use client";
import Link from "next/link";
import { Poppins } from "next/font/google";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";
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

  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-center px-6 md:px-12 lg:px-24 xl:px-48 overflow-hidden sm:min-h-[85vh]">
      {/* Text Section */}
      <div className="text-start flex flex-col w-full lg:w-1/2 top-0 mt-10 lg:mt-0">
        <span className="w-full heading text-3xl md:text-4xl lg:text-5xl font-bold">
          Hello Visitor! I am Amarnath
        </span>
        <h2
          className={`${poppins.className} font-normal sub-heading text-xl md:text-2xl lg:text-3xl mt-4`}
        >
          <span ref={typedRef}></span>{" "}
        </h2>
        <div className="flex gap-6 sm:gap-10 mt-8 sm:mt-16 text-lg sm:text-xl font-bold justify-start">
          <Button className="hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-[#45A29E] bg-[#66FCF1] px-6 py-4 sm:px-7 sm:py-7 text-black hover:text-white rounded-full text-lg sm:text-xl">
            <Link href="#contact">Say Hi 👋</Link>
          </Button>
          <Button className="hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-[#45A29E] bg-[#66FCF1] px-6 py-4 sm:px-5 sm:py-7 text-black hover:text-white rounded-full text-lg sm:text-xl">
            <Link href="#projects">Learn More</Link>
          </Button>
        </div>
      </div>

      {/* Spline Section */}
      <div className="w-full hidden lg:h-[70vh] lg:w-1/2 lg:block">
        <Spline scene={process.env.NEXT_PUBLIC_GLASS_BALLS || ""} />
      </div>
    </section>
  );
};

export default Hero;
