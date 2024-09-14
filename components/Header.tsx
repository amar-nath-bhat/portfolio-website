import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="screen header shadow-sm shadow-cyan-800">
      <nav>
        <ul className="flex justify-between items-center w-full">
          <li className="w-full">
            <Link href="/">
              <span className="navbar-text font-extrabold text-2xl">
                Amarnath
              </span>{" "}
              <span className="navbar-sub-text font-extrabold text-2xl">
                Bhat
              </span>
            </Link>
          </li>
          <ul className="flex justify-end w-full gap-10">
            <li>
              <Link href="/" className="navbar-text font-bold text-xl">
                Home
              </Link>
            </li>
            <li>
              <Link className="navbar-text font-bold text-xl" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="navbar-text font-bold text-xl" href="/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link className="navbar-text font-bold text-xl" href="/contact">
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
