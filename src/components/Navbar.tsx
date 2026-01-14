import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PiMediumLogoLight } from "react-icons/pi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header
      className={`fixed w-full flex justify-between items-center p-4 bg-[#000000bf] text-white z-50`}
    >
      <p className="font-baybin text-5xl cursor-default tracking-tight">
        <Link to="/">UW</Link>
      </p>

      <nav>
        <ul className="flex items-center gap-4">
          <li className="font-poppins text-lg">
            <Link to="/blog">My Writings</Link>
          </li>
          <span className="sm:block hidden">
            <li
              className="cursor-pointer border-2 border-gray-400 p-1 rounded-md hover:scale-110 transition-all duration-300"
              title="Github"
            >
              <a
                href="http://www.github.com/wineshuga"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="w-5 h-5" />
              </a>
            </li>
            <li
              className="cursor-pointer border-2 border-gray-400 p-1 rounded-md hover:scale-110 transition-all duration-300"
              title="Linkedin"
            >
              <a
                href="http://www.linkedin.com/in/wineshuga"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
            </li>
            <li
              className="cursor-pointer border-2 border-gray-400 p-1 rounded-md hover:scale-110 transition-all duration-300"
              title="Medium"
            >
              <a
                href="http://www.medium.com/@wineshuga"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PiMediumLogoLight className="w-5 h-5" />
              </a>
            </li>
          </span>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
