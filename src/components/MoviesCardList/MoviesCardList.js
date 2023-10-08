import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard.js";

function MoviesCardList({
  cards,
  isNotFoundMovie,
  shownCardsMovies,
  onLike,
  onDelete,
  isSaveFilms
}) {
  function savedMovieCard(isSaveFilms, card) {
    return isSaveFilms.find((savedFilm) => savedFilm.movieId === card.id);
  }

  return (
    <section className="moviesCardList">
      {cards.length > 0 ? (
        <ul className="moviesCardList__items">
          {cards.slice(0, shownCardsMovies).map((card) => (
            <MoviesCard
            key={card.id || card._id}
            card={card}
            onLike={onLike}
            onDelete={onDelete}
            isSaveFilms={isSaveFilms}
            onSaved={savedMovieCard(isSaveFilms, card)}
            />
          ))}
        </ul>
      ) : (
        <p className="moviesCardList__text-error">
          {isNotFoundMovie || "По вашему запросу ничего не найдено"}
        </p>
      )}
    </section>
  );
}

export default MoviesCardList;
