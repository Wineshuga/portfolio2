import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PiMediumLogoLight } from "react-icons/pi";

const Footer = () => {
  return (
    <section className="flex items-center justify-between p-4">
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
            <FaGithub className="w-5 h-5 text-white" />
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
            <FaLinkedin className="w-5 h-5 text-white" />
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
            <PiMediumLogoLight className="w-5 h-5 text-white" />
          </a>
        </li>
      </ul>
      <p className="text-center text-white mt-4">
        &copy; {new Date().getFullYear()} Uzochukwu Winnie.
      </p>
    </section>
  );
};

export default Footer;
