import React from "react";
import { BsInstagram, BsTelegram, BsGithub } from "react-icons/bs";
import { FaGitlab } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="flex w-full flex-col sm:flex-row items-center gap-3 justify-between px-6">
      <div className="font-bold text-md">alirg1999__@__2023</div>
      <div className="flex gap-5 text-xl">
        <button>
          <FaGitlab />
        </button>
        <button>
          <BsGithub />
        </button>
        <button>
          <BsTelegram />
        </button>
        <button>
          <BsInstagram />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
