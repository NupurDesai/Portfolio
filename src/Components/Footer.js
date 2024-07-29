import React from "react";
import { FaGithub, FaHeart, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4>
        <FaHeart /> Nupur Desai{" "}
        <h9>&nbsp;&nbsp;nupurdesai70@gmail.com&nbsp;&nbsp; </h9>
      </h4>
      <div className="footerLinks">
        <a
          href="https://github.com/NupurDesai"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/nupur-desai70"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailTo:nupurdesai70@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <GrMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
