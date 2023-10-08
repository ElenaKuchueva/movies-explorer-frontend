import React from "react";
import "./AboutMe.css";
import foto from "../../images/foto.jpg";

function AboutMe() {
  return (
    <section className="aboutMe">
      <h2 className="aboutMe__title">Студент</h2>
      <div className="aboutMe__block">
        <div className="aboutMe__about">
          <h3 className="aboutMe__subtitle">Елена</h3>
          <p className="aboutMe__description">Фронтенд-разработчик, 32 года</p>
          <p className="aboutMe__text">
            Я родилася и живу в Ростове-на-Дону, закончила медицинский
            университет, но решила продолжать учиться новому. Прошла курсы
            перподготовки на преподавателя физкультуры , а затем и курсы по
            йоге. Вела группу по йоге в течении нескольких лет. У меня есть сын.
            Я люблю слушать музыку, читать фентази, а ещё увлекаюсь баскетболом
            с юношеских лет. Недавно заитнтересовало программироввние. Прошла
            курсы по веб технологиям в местном техническом колледже, чтобы
            убедиться что тема для меня интерестна. А после взялась за более
            углебленное изучение веб-технологий в Янддекс Практикуме на курсе
            Веб программист. После прохождения курса начала искать работу по
            данной специальности и паралельно заниматься pet-проетками для
            портфолио.
          </p>
          <a
            className="aboutMe__link"
            href="https://github.com/ElenaKuchueva"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img src={foto} className="aboutMe__foto" alt="Фото студента." />
      </div>
    </section>
  );
}

export default AboutMe;
