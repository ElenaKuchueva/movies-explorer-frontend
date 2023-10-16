import React from "react";
import "./Portfolio.css";
import arrow from "../../images/arrow.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <nav className="portfolio__block">
        <a
          className="portfolio__link"
          href="https://elenakuchueva.github.io/how-to-learn/"
          target="_blank"
          rel="noreferrer"
        >
            <p className="portfolio__text">Статичный сайт</p>
            <img src={arrow} className="portfolio__icon" alt="Стрелка." />
        </a>
        <a
          className="portfolio__link portfolio__link_border"
          href="https://elenakuchueva.github.io/russian-travel/"
          target="_blank"
          rel="noreferrer"
        >
            <p className="portfolio__text">Адаптивный сайт</p>
            <img src={arrow} className="portfolio__icon" alt="Стрелка." />
        </a>
        <a
          className="portfolio__link"
          href="https://elenakuchueva.github.io/react-mesto-auth/"
          target="_blank"
          rel="noreferrer"
        >
            <p className="portfolio__text">Одностраничное приложение</p>
            <img src={arrow} className="portfolio__icon" alt="Стрелка." />
        </a>
      </nav>
    </section>
  );
}

export default Portfolio;
