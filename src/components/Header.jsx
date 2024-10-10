import "../styles/Header.css";

import LogoImpulsa from "../assets/images/impulsa-logo.png";
import Separator from "../assets/images/separator.png";

export const Header = () => {
  return (
    <header>
      <div className="header-logo">
        <img src={LogoImpulsa} alt="Logo Impulsa" />
      </div>
      <div className="header-menu">
        <nav>
          <ul>
            <a>
              <li>
                <span className="header-menu__img">
                  <img src={Separator} alt="Icon Impulsa" />
                </span>
                ¿Quiénes somos?
              </li>
            </a>
            <a>
              <li>
                <span className="header-menu__img">
                  <img src={Separator} alt="Icon Impulsa" />
                </span>
                Agenda
              </li>
            </a>
            <a>
              <li>
                <span className="header-menu__img">
                  <img src={Separator} alt="Icon Impulsa" />
                </span>
                Conferencistas
              </li>
            </a>
            <a>
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
