import React from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard.js";

function MoviesCardList() {
  const location = useLocation();
  return (
    <section className="moviesCardList">
      <div className="moviesCardList__items">
        <ul className="moviesCardList__item">
          <MoviesCard />
        </ul>
        <ul className="moviesCardList__item">
          <MoviesCard />
        </ul>
        <ul className="moviesCardList__item">
          <MoviesCard />
        </ul>
        <ul className="moviesCardList__item">
          <MoviesCard />
        </ul>
        <ul className="moviesCardList__item">
          <MoviesCard />
        </ul>
        <ul className="moviesCardList__item">
          <MoviesCard />
        </ul>
        <ul className="moviesCardList__item">
          <MoviesCard />
        </ul>
        <ul className="moviesCardList__item">
          <MoviesCard />
        </ul>
      </div>
      <div className="moviesCardList__block"> 
          <button className={`moviesCardList__button ${location.pathname === "/saved-movies" ? "moviesCardList__button_hidden" : ""}`}>Ещё</button>
        </div>
    </section>
  );
}

export default MoviesCardList;
