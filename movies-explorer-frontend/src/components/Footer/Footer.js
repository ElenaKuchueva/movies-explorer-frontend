import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__caption">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__block">
        <p className="footer__date">&copy; 2023 Елена Кучуева</p>
        <nav className="footer__links">
          <a
            className="footer__link"
            href="https://practicum.yandex.ru"
            target="_blank"
            rel="noreferrer"
          >
            Яндекс.Практикум
          </a>
          <a
            className="footer__link"
            href="https://github.com/ElenaKuchueva"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
