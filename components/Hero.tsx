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
    <section className="flex items-center justify-start py-36 px-28">
      <div className="text-start px-20 flex flex-col">
        <span className="w-full heading">Hey There! I am Amarnath Bhat. </span>
        <h2 className={`${poppins.className} font-normal sub-heading`}>
          <span ref={typedRef}></span>{" "}
        </h2>
      </div>
      {/* <div className="text-start px-20 flex flex-col rounded-full">
        <img
          src={"images/profile.jpeg" || "/person.jpg"}
          alt="Image"
          className="rounded-full shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-[#66FCF1] object-cover w-60 h-60 m-auto"
        />
      </div> */}
    </section>
  );
};

export default Hero;
