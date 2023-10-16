import React from 'react';
import { useLocation } from 'react-router-dom';
import './Movies.css';
import Header from '../Header/Header.js';
import SearchForm from '../SearchForm/SearchForm.js';
import Preloader from '../Preloader/Preloader.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Footer from '../Footer/Footer';
import { DECKTOP, TABLET, MOBILE } from '../../constants/constants';

function Movies({
  isloggedIn,
  cards,
  onSearch,
  onChange,
  isNotFoundMovie,
  onLike,
  compareId,
  isPreload,
  onDelete,
  isSaveFilms,
  isSearchValueInput,
  setIsSearchValueInput,
  isMovieShort,
  getSavedMovies,
}) {
  const location = useLocation();

  const [shownCardsMovies, setShownCardsMovies] = React.useState(0);

  function shownCountCards() {
    const display = window.innerWidth;
    if (display >= 1280) {
      setShownCardsMovies(16);
    } else if (display >= 801 && display <= 1100) {
      setShownCardsMovies(12);
    } else if (display >= 481 && display <= 800) {
      setShownCardsMovies(8);
    } else if (display <= 480) {
      setShownCardsMovies(5);
    }
  }

  React.useEffect(() => {
    shownCountCards();
    getSavedMovies();
  }, [isSearchValueInput]);

  React.useEffect(() => {
    window.addEventListener('resize', shownCountCards);
  });

  function showMore() {
    const display = window.innerWidth;
    if (display > 1100) {
      setShownCardsMovies(shownCardsMovies + DECKTOP);
    } else if (display > 801) {
      setShownCardsMovies(shownCardsMovies + TABLET);
    } else if (display <= 800) {
      setShownCardsMovies(shownCardsMovies + MOBILE);
    }
  }

  return (
    <>
      <Header isloggedIn={!isloggedIn} />
      <main className="movies">
        <SearchForm
          onSearch={onSearch}
          onChange={onChange}
          isMovieShort={isMovieShort}
          isSearchValueInput={isSearchValueInput}
          setIsSearchValueInput={setIsSearchValueInput}
        />

        {!isPreload ? (
          <MoviesCardList
            cards={cards}
            isNotFoundMovie={isNotFoundMovie}
            shownCardsMovies={shownCardsMovies}
            onLike={onLike}
            compareId={compareId}
            onDelete={onDelete}
            isSaveFilms={isSaveFilms}
          />
        ) : (
          <Preloader />
        )}
        <div className="moviesCardList__block">
          {shownCardsMovies > 0 && cards.length > shownCardsMovies ? (
            <button
              className={`moviesCardList__button ${location.pathname === '/saved-movies' ? 'moviesCardList__button_hidden' : ''}`}
              onClick={showMore}>
              Ещё
            </button>
          ) : (
            ''
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Movies;
