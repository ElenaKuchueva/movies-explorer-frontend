import React from "react";
import "./AboutProject.css";
 
function AboutProject() {
  return (
    <section className="aboutProject" id="about-project">
      <h2 className="aboutProject__title">О проекте</h2>
      <div className="aboutProject__block">
        <div className="aboutProject__col">
          <h3 className="aboutProject__subtitle">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="aboutProject__description">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>

        <div className="aboutProject__col">
          <h3 className="aboutProject__subtitle">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="aboutProject__description">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>

      <div className="aboutProject__time-work">
        <div className="aboutProject__time-work aboutProject__time-work_first-week">
          <p className="aboutProject__time-work aboutProject__time-work_text aboutProject__time-work_text-green">1 неделя</p>
          <p className="aboutProject__time-work aboutProject__time-work_description">Back-end</p>
        </div>

        <div className="aboutProject__time-work aboutProject__time-work_last-weeks">
          <p className="aboutProject__time-work aboutProject__time-work_text aboutProject__time-work_text-grey">4 недели</p>
          <p className="aboutProject__time-work aboutProject__time-work_description">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
