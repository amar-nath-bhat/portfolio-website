import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://twitter.com/your_profile",
      alt: "Twitter",
      src: "/images/twitter.png",
    },
    {
      href: "https://github.com/your_profile",
      alt: "GitHub",
      src: "/images/github.png",
    },
    {
      href: "https://www.linkedin.com/in/your_profile/",
      alt: "LinkedIn",
      src: "/images/linkedin.png",
    },
  ];

  return (
    <footer className="bg-[#0B0C10] text-[#66FCF1]">
      <hr className="border-gray-600" />
      <div className="flex flex-col md:flex-row justify-between items-center text-xl py-10 px-48">
        {/* Footer Text */}
        <p className="font-bold text-center mb-4 md:mb-0">
          © {currentYear} AmarnathZ&apos;s Portfolio
        </p>
      </div>
    </footer>
  );
};

export default Footer;
