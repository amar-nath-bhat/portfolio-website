import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="screen header shadow-sm shadow-cyan-800">
      <nav>
        <ul className="flex justify-around  w-full">
          <li className="w-full">
            <Link href="/" className="dark-text">
              Home
            </Link>
          </li>
          <ul className="flex justify-evenly w-full gap-5">
            <li>
              <Link className="dark-text" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="dark-text" href="/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link className="dark-text" href="/contact">
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
