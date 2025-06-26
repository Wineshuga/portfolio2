import { FaWhatsapp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  return (
    <section className="text-[#E9E6E1] py-10 my-10">
      <h3 className="md:text-4xl text-2xl text-center font-semibold font-mono">
        Contact
      </h3>
      <section className="mx-auto my-10 font-poppins">
        <p className="text-center ">
          I am always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions. Feel free to reach out!
        </p>
        <section className="flex items-center gap-4 justify-center flex-wrap mt-10">
          <div className="p-3 border-2 hover:border-gray-500 border-gray-700 transition-all duration-300 rounded-md w-80 text-center">
            <a href="mailto:uzochukwuwinnie@gmail.com">
              <IoMdMail className="mx-auto w-5 h-5" />
              uzochukwuwinnie@gmail.com
            </a>
          </div>
          <div className="p-3 border-2 hover:border-gray-500 border-gray-700 transition-all duration-300 rounded-md w-80 text-center">
            <a
              href="https://wa.me/2348100244073"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="mx-auto w-5 h-5" />
              +234 810 024 4073
            </a>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Contact;
