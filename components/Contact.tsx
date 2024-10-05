import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});

// Social links configuration
const socialLinks = [
  {
    href: "https://x.com/amarbhat2011",
    img: "/images/x.svg",
    alt: "Twitter",
  },
  {
    href: "https://github.com/amar-nath-bhat",
    img: "/images/github.png",
    alt: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/amarnath-bhat",
    img: "/images/linkedin.png",
    alt: "LinkedIn",
  },
];

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className={`text-[#66FCF1] flex flex-col items-center justify-center px-10 md:px-48 overflow-hidden min-h-[85vh] gap-5 ${poppins.className}`}
    >
      <div className="bg-[#030304] p-10 w-full max-w-lg rounded-3xl shadow-lg shadow-gray-800 text-xl hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-[#66FCF1]/50">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>

        <form
          action={`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`}
          method="POST"
          className="space-y-6 "
        >
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
              className="bg-[#1F2833] text-[#66FCF1] border-[#45A29E]"
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
              className="bg-[#1F2833] text-[#66FCF1] border-[#45A29E]"
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
              className="bg-[#1F2833] text-[#66FCF1] border-[#45A29E]"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="hover:scale-105 transition-transform duration-300 ease-in-out bg-[#66FCF1] px-5 py-5 text-black hover:text-white rounded-full text-xl"
          >
            Send Message
          </Button>
        </form>

        {/* Social Links */}
        <div className="flex space-x-6 justify-center items-center mt-10">
          {socialLinks.map((link) => (
            <Link
              key={link.alt}
              href={link.href}
              aria-label={link.alt}
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:scale-105 transition-transform duration-300 rounded-full bg-[#66FCF1] p-2"
            >
              <img src={link.img} alt={link.alt} className="w-8 h-8" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
