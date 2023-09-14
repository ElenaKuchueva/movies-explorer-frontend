import React from "react";
import "./MoviesCard.css";
import card from "../../images/card.png";

function MoviesCard() {
  return (
    <li className="moviesCard">
      <img src={card} className="moviesCard__card" alt="Карточка фильма." />
      <ul className="moviesCard__block">
        <li className="moviesCard__discription">33 слова о дизайне</li>
        <li 
        className="moviesCard__like  moviesCard__delate-movie"
        // className="moviesCard__like moviesCard__like_active moviesCard__like_inactive moviesCard__delate-movie"
         />
      </ul>
      <p className="moviesCard__timing">1ч42м</p>
    </li>
  );
}
 
export default MoviesCard;
