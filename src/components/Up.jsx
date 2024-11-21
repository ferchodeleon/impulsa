import { useState, useEffect } from "react";

import UpImage from "../assets/icons/up.png";

import "../styles/Up.css";

export const Up = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const scrolled = (scrollY / windowHeight) * 100;
      setShowButton(scrolled > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`up-container ${showButton ? "show" : ""}`}
      style={{ display: `${showButton ? "block" : "none"}` }}
    >
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <img
          src={UpImage}
          alt="Icono arriba para subir al inicio de la página"
        />
      </button>
    </section>
  );
};
