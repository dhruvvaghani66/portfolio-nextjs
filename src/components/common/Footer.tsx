import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative w-full px-6 py-5 mt-auto transition-all duration-300 ease-in-out border-t border-gray-800 bgwhite/5 backdrop-blur-xl md:px-10 z-[101] pb20"
      // Increased z-index and padding-bottom
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-sm tracking-wide text-gray-200">
              © {currentYear}{" "}
              <span className="font-medium text-white">Dhruv Vaghani</span>. All
              rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="z-20 text-gray-500 transition-colors duration-200 hover:text-gray-100"
              aria-label="GitHub"
            >
              <Github
                size={24}
                className="transition-transform duration-200 hover:scale-110"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/dhruv-vaghani-745222219/"
              target="_blank"
              rel="noopener noreferrer"
              className="z-20 text-gray-500 transition-colors duration-200 hover:text-gray-100"
              aria-label="LinkedIn"
            >
              <Linkedin
                size={24}
                className="transition-transform duration-200 hover:scale-110"
              />
            </a>
            <a
              href="mailto:dhruvvaghani6080@gmail.com"
              className="z-20 text-gray-500 transition-colors duration-200 hover:text-gray-100"
              aria-label="Email"
            >
              <Mail
                size={24}
                className="transition-transform duration-200 hover:scale-110"
              />
            </a>

            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="z-20 text-gray-500 transition-colors duration-200 hover:text-gray-100"
              aria-label="Twitter"
            >
              <FaXTwitter
                size={24}
                className="transition-transform duration-200 hover:scale-110"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
