import { Link } from "react-router-dom";
import { FaPalette } from "react-icons/fa";
import {
  BiCodeAlt,
  BiInfoCircle,
  BiCopyright,
  BiData,
  BiCrown,
} from "react-icons/bi";

import { StyledFooter } from "./Footer.styled";

const Footer = () => {
  return (
    <StyledFooter className="footer">
      <ul className="footer__list">
        <li className="footer__item">
          <Link className="footer__link" to="/about">
            <BiInfoCircle />
            about
          </Link>
        </li>
        <li className="footer__item">
          <Link className="footer__link" to="/">
            <BiCrown />
            competitions
          </Link>
        </li>
        <li className="footer__item">
          <a
            className="footer__link"
            href="https://github.com/neglux/contest"
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
          <a className="footer__link" href="#">
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
