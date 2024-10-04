import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0B0C10] text-[#66FCF1] ">
      <hr className="border-gray-600" />
      <div className="flex flex-col md:flex-row justify-between items-center text-xl py-10 px-48">
        {/* Footer Text */}
        <p className="font-bold text-center mb-4 md:mb-0">
          © {new Date().getFullYear()} Amarnath's Portfolio
        </p>

        {/* Social Links */}
        <div className="flex space-x-6">
          <Link
            href="https://twitter.com/your_profile"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/twitter.png" alt="" className="w-5 h-5" />
          </Link>

          <Link
            href="https://github.com/your_profile"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/github.png" alt="" className="w-5 h-5" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/your_profile/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/linkedin.png" alt="" className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
