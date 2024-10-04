"use client";
import Image from "next/image";
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
      typeSpeed: 50, // Speed of typing
      backSpeed: 25, // Speed of backspacing
      loop: true, // Loop the animation
      backDelay: 2000, // Delay before starting to backspace
      startDelay: 1000, // Delay before starting the typing effect
    });

    // Clean up the Typed.js instance on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="flex items-center justify-center px-48 overflow-hidden min-h-[85vh] top-0">
      <div className="text-start flex flex-col w-full top-0">
        <span className="w-full heading">Hello Visitor! I am Amarnath </span>
        <h2 className={`${poppins.className} font-normal sub-heading`}>
          <span ref={typedRef}></span>{" "}
        </h2>
        <div className="flex gap-10 mt-16 text-xl font-bold">
          <Button className="hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-[#45A29E] object-cover bg-[#66FCF1] px-7 py-7 text-black hover:text-white rounded-full text-xl ">
            Say Hi 👋
          </Button>
          <Button className="hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-[#45A29E] object-cover bg-[#66FCF1] px-5 py-7 text-black hover:text-white rounded-full text-xl">
            Learn More
          </Button>
        </div>
      </div>
      <div className="w-full h-[70vh] top-0">
        <Spline scene={process.env.NEXT_PUBLIC_GLASS_BALLS || ""} />
      </div>
    </section>
  );
};

export default Hero;
