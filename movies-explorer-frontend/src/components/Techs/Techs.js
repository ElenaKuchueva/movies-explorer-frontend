import React from "react";
import "./Techs.css";
  
function Techs() {
  return (
    <section className="techs">
      <div className="techs__block">
        <h2 className="techs__title">Технологии</h2>

        <div className="techs__text">
          <h3 className="techs__subtitle">7 технологий</h3>
          <p className="techs__description">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
        </div>

        <div className="techs__col">
          <p className="techs__el">HTML</p>
          <p className="techs__el">CSS</p>
          <p className="techs__el">JS</p>
          <p className="techs__el">React</p>
          <p className="techs__el">Git</p>
          <p className="techs__el">Express.js</p>
          <p className="techs__el">mongoDB</p>
        </div>
      </div>
    </section>
  );
}

export default Techs;
