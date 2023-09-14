import React from "react";
import "./Promo.css";
import promo from "../../images/promo.svg";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__block">
        <div className="promo__description">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <p className="promo__subtitle">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
        </div>
        <img src={promo} className="promo-logo" alt="Логотип промо." />
      </div>

      <a className="promo__more" href="#about-project">
        <p className="promo__more-text">Узнать больше</p>
        </a>
    </section>
  );
}

export default Promo;
