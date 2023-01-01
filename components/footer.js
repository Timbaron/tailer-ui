import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Footer = () => {
  return (
    <footer className="flex flex-row justify-center w-full flex-1 px-20 text-center gap-10">
      <div className="flex flex-col justify-center w-full flex-1 px-20 text-center gap-5 mb-4">
        <p>Proudly developed by Akiode Timothy</p>

        <div className="flex flex-row justify-center w-full gap-5">
          {/* anchor tag */}
          <a
            href="https://github.com/timbaron"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={25} className="text-lg" />
          </a>

          <a
            href="https:twitter.com/akiode_timothy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={25} className="text-lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/timothy-akiode-7b772a164/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={25} className="text-lg" />
          </a>
          <a
            href="mailto:akiodetimothy2017@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdEmail size={25} className="text-lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};
