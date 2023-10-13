import React from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

function MoviesCard({ card, onLike, onDelete, isSaveFilms, onSaved }) {
  const location = useLocation();
  const hours = Math.trunc(card.duration / 60);
  const minuts = card.duration % 60;

  const [isSavedMovie, setIsSavedMovie] = React.useState(onSaved);

  React.useEffect(() => {
    setIsSavedMovie(onSaved);
  }, [onSaved]);

  function handleButtonClick() {
    if (isSavedMovie) {
      onDelete(isSaveFilms.filter((m) => m.movieId === card.id)[0]);
    } else {
      onLike(card);
    }
  }

  function deleteMovie() {
    onDelete(card);
  }

  return (
    <li className="moviesCard">
      <a href={card.trailerLink} className="moviesCard__link" target="_blank" rel="noreferrer">
        <img
          className="moviesCard__card"
          alt={card.nameRU}
          src={location.pathname === '/movies' ? `https://api.nomoreparties.co${card.image.url}` : card.image}
        />
      </a>
      <ul className="moviesCard__block">
        <li className="moviesCard__discription">{card.nameRU}</li>
        <li>
          {location.pathname === '/movies' ? (
            <button
              type="button"
              className={`moviesCard__like ${isSavedMovie ? 'moviesCard__like_active' : 'moviesCard__like_inactive'}`}
              aria-label="Добавить в сохраненные фильмы"
              onClick={handleButtonClick}
            />
          ) : (
            <button
              type="button"
              className="moviesCard__like moviesCard__delate-movie"
              aria-label="Убрать из сохранненых фильмов"
              onClick={deleteMovie}
            />
          )}
        </li>
      </ul>
      <p className="moviesCard__timing">{`${hours}ч ${minuts}м`}</p>
    </li>
  );
}

export default MoviesCard;
