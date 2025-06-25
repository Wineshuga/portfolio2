import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PiMediumLogoLight } from "react-icons/pi";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      if (hero) {
        const heroHeight = hero.offsetHeight;
        if (window.scrollY > heroHeight / 2) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`flex justify-between items-center p-4 bg-black text-white transition-all duration-300 z-50 ${
        isSticky ? "fixed top-0 left-0 w-full shadow-lg" : "relative"
      }`}
    >
      <p className="font-baybin text-5xl cursor-default tracking-tight">UW</p>

      <nav>
        <ul className="flex gap-4">
          <li
            className="cursor-pointer border-[1px] border-white p-1 rounded-sm hover:scale-110 transition-all duration-300"
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
            className="cursor-pointer border-[1px] border-white p-1 rounded-sm hover:scale-110 transition-all duration-300"
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
            className="cursor-pointer border-[1px] border-white p-1 rounded-sm hover:scale-110 transition-all duration-300"
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
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
