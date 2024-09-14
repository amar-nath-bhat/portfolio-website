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
    <section className="flex items-center justify-center py-10">
      <div className="text-center px-20 flex flex-col">
        <span className="w-full heading">Hey There! I am Amarnath Bhat. </span>
        <h2 className={`${poppins.className} font-normal sub-heading`}>
          <span ref={typedRef}></span>{" "}
        </h2>
      </div>
    </section>
  );
};

export default Hero;
