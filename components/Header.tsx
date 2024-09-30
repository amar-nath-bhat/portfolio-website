import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="px-48 py-8 header shadow-sm shadow-cyan-800">
      <nav>
        <ul className="flex justify-between items-center w-full">
          <li className="w-full">
            <Link href="/" className="glow-text">
              <span className="text-[#66FCF1] font-extrabold text-3xl">
                Amarnath
              </span>{" "}
              <span className="text-white font-extrabold text-3xl">Bhat</span>
            </Link>
          </li>
          <ul className="flex justify-end w-full gap-10 ">
            <li>
              <Link
                href="/"
                className="navbar-text glow-text font-bold text-xl"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="navbar-text glow-text font-bold text-xl"
                href="#about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="navbar-text glow-text font-bold text-xl"
                href="#projects"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="navbar-text glow-text font-bold text-xl"
                href="#contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
