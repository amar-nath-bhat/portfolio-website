
"use client";

import type React from "react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { useState, useEffect, useRef } from "react";

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});

// Social links configuration
const socialLinks = [
  {
    href: "https://x.com/amarbhat2011",
    img: "/images/twitter.png",
    alt: "Twitter",
    label: "Twitter",
  },
  {
    href: "https://github.com/amar-nath-bhat",
    img: "/images/github.png",
    alt: "GitHub",
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/amarnath-bhat",
    img: "/images/linkedin.png",
    alt: "LinkedIn",
    label: "LinkedIn",
  },
];

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={contactRef}
      className={`text-[#66FCF1] flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 xl:px-36 py-20 mb-10 min-h-[85vh] gap-5 ${poppins.className}`}
    >
      <div
        className={`glass-panel p-10 w-full max-w-lg rounded-3xl shadow-lg shadow-[#66FCF1]/10 text-xl hover:scale-105 transition-all duration-500 ease-in-out hover:shadow-[#66FCF1]/30 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
      >
        <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-lg font-semibold">
              Name:
            </Label>
            <Input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Enter your name"
              className="bg-white/5 backdrop-blur-sm text-[#66FCF1] border-white/10 focus:border-[#66FCF1] focus:ring-1 focus:ring-[#66FCF1] transition-colors duration-300"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-lg font-semibold">
              Email:
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
              className="bg-white/5 backdrop-blur-sm text-[#66FCF1] border-white/10 focus:border-[#66FCF1] focus:ring-1 focus:ring-[#66FCF1] transition-colors duration-300"
            />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-lg font-semibold">
              Message:
            </Label>
            <Textarea
              id="message"
              name="message"
              required
              placeholder="Enter your message"
              className="bg-white/5 backdrop-blur-sm text-[#66FCF1] border-white/10 focus:border-[#66FCF1] focus:ring-1 focus:ring-[#66FCF1] transition-colors duration-300 min-h-[100px]"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full retro-btn px-5 py-5 rounded-full text-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <p className="text-green-400 text-center">
              Message sent successfully! 🎉
            </p>
          )}
          {submitStatus === "error" && (
            <p className="text-red-400 text-center">
              Failed to send message. Please try again.
            </p>
          )}
        </form>

        {/* Social Links */}
        <div className="flex space-x-6 justify-center items-center mt-10">
          {socialLinks.map((link) => (
            <Link
              key={link.alt}
              href={link.href}
              aria-label={`Visit ${link.label}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-all duration-300 rounded-full bg-[#66FCF1] p-3 hover:bg-[#45A29E] group"
            >
              <Image
                src={link.img || "/placeholder.svg"}
                alt={link.alt}
                width={32}
                height={32}
                className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
