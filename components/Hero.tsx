"use client";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

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
    <section className="flex items-center justify-start pt-36 px-48">
      <div className="text-start flex flex-col">
        <span className="w-full heading">
          Hello Visitor! I am Amarnath Bhat.{" "}
        </span>
        <h2 className={`${poppins.className} font-normal sub-heading`}>
          <span ref={typedRef}></span>{" "}
        </h2>
        <div className="flex gap-10 mt-6 text-xl font-bold">
          <button className="rounded-full shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-[#45A29E] object-cover bg-[#66FCF1] px-5 py-3">
            Say Hi 👋
          </button>
          <button className="rounded-full shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-[#45A29E] object-cover bg-[#66FCF1] px-5 py-3">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
