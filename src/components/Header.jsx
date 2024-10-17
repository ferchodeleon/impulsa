import { useState } from "react";

import "../styles/Header.css";

import LogoImpulsa from "../assets/images/impulsa-logo.png";
import Separator from "../assets/images/separator.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const onCloseMenu = () => setIsMenuOpen(false);
  const isOpen = isMenuOpen ? "open" : "";

  return (
    <header>
      <div className="header-logo">
        <img src={LogoImpulsa} alt="Logo Impulsa" />
        <button
          className={`burger ${isOpen}`}
          aria-label="Botón para abrir y cerrar el menú"
          onClick={toggleMenu}
        ></button>
      </div>
      <div className={`header-background ${isOpen}`}></div>
      <div className={`header-menu ${isOpen}`}>
        <nav>
          <ul>
            <a style={{ animationDelay: `0.${2}s` }}>
              <li onClick={onCloseMenu}>
                <span className="header-menu__img">
                  <img src={Separator} alt="Icon Impulsa" />
                </span>
                ¿Quiénes somos?
              </li>
            </a>
            <a style={{ animationDelay: "0.3s" }}>
              <li>
                <span className="header-menu__img">
                  <img src={Separator} alt="Icon Impulsa" />
                </span>
                Agenda
              </li>
            </a>
            <a style={{ animationDelay: "0.4s" }}>
              <li>
                <span className="header-menu__img">
                  <img src={Separator} alt="Icon Impulsa" />
                </span>
                Conferencistas
              </li>
            </a>
            <a style={{ animationDelay: "0.5s" }}>
              <li>
                <span className="header-menu__img">
                  <img src={Separator} alt="Icon Impulsa" />
                </span>
                Quiero ser expositor
              </li>
            </a>
          </ul>
        </nav>
      </div>
    </header>
  );
};
