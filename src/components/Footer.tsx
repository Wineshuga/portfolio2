import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PiMediumLogoLight } from "react-icons/pi";

const Footer = () => {
  return (
    <section className="flex flex-col bg-black sm:flex-row items-center justify-between p-4 py-10 border-t border-gray-700">
      <ul className="flex gap-4">
        <li
          className="cursor-pointer border-2 border-gray-400 p-1 rounded-md hover:scale-110 transition-all duration-300"
          title="Github"
        >
          <a
            href="http://www.github.com/wineshuga"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-5 h-5 text-[#E9E6E1]" />
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
            <FaLinkedin className="w-5 h-5 text-[#E9E6E1]" />
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
            <PiMediumLogoLight className="w-5 h-5 text-[#E9E6E1]" />
          </a>
        </li>
      </ul>
      <p className="text-center text-[#E9E6E1] mt-4">
        &copy; {new Date().getFullYear()} Uzochukwu Winnie.
      </p>
    </section>
  );
};

export default Footer;
