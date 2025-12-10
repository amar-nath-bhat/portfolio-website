"use client";
import { useEffect, useRef, useState } from "react";
import type React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [skills, setSkills] = useState<any[]>([]);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await fetch("/api/skills");
        const data = await res.json();
        setSkills(data);
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };
    fetchSkills();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={skillsRef} className="w-full mt-16">
      <h3 className="heading text-3xl md:text-4xl font-bold mb-12">
        Skills & Technologies
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={skill.title}
            className={`skill-card group relative bg-[#1F2833] rounded-xl p-4 hover:bg-[#45A29E]/20 transition-all duration-300 ease-out hover:scale-110 hover:shadow-lg hover:shadow-[#66FCF1]/30 border border-gray-700 hover:border-[#66FCF1]/50 cursor-pointer transform ${isVisible
                ? "translate-y-0 opacity-100 rotate-0 skill-enter"
                : "translate-y-8 opacity-0 rotate-3"
              }`}
            style={{
              transitionDelay: `${index * 10}ms`,
              animationDelay: `${index * 10}ms`,
            }}
          >
            {/* Skill Icon */}
            <div className="flex flex-col items-center justify-center space-y-3">
              <div className="skill-icon relative w-12 h-12 md:w-16 md:h-16 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={`/images/${skill.img}`}
                  alt={skill.title}
                  fill
                  className="object-contain filter group-hover:brightness-110 transition-all duration-300"
                />
              </div>

              {/* Skill Title */}
              <h4
                className={`text-sm md:text-base font-semibold text-center text-[#66FCF1] group-hover:text-white transition-colors duration-300 ${poppins.className}`}
              >
                {skill.title}
              </h4>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#66FCF1]/10 to-[#45A29E]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

            {/* Floating Animation */}
            <div className="absolute inset-0 rounded-xl bg-[#66FCF1]/5 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse -z-20"></div>

            {/* Floating Particles */}
            <div className="floating-particle absolute top-2 right-2 w-1 h-1 bg-[#66FCF1] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div
              className="floating-particle absolute bottom-2 left-2 w-1 h-1 bg-[#45A29E] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="flex justify-center mt-12">
        <div className="flex space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full bg-[#66FCF1] transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
                }`}
              style={{ transitionDelay: `${skills.length * 50 + i * 200}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;