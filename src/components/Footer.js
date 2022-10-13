import React from "react";
import { StyledFooter } from "./styles/Footer.styled";

import { FaPalette } from "react-icons/fa";
import { BiCodeAlt, BiInfoCircle, BiCopyright, BiData } from "react-icons/bi";

const Footer = () => {
  return (
    <StyledFooter className="footer">
      <ul className="footer__list">
        <li className="footer__item">
          <a
            className="footer__link"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiInfoCircle />
            about
          </a>
        </li>
        <li className="footer__item">
          <a
            className="footer__link"
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiCodeAlt />
            github
          </a>
        </li>
        <li className="footer__item">
          <a
            className="footer__link"
            href="https://kontests.net/api"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiData />
            api
          </a>
        </li>
      </ul>
      <ul className="footer__list">
        <li className="footer__item">
          <a
            className="footer__link"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPalette />
            theme
          </a>
        </li>
        <li className="footer__item">
          <a
            className="footer__link"
            href="https://github.com/neglux"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiCopyright />
            neglux
          </a>
        </li>
      </ul>
    </StyledFooter>
  );
};

export default Footer;
