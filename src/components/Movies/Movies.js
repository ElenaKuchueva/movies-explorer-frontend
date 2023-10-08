import React from "react";
import { useLocation } from "react-router-dom";
import "./Movies.css";
import Header from "../Header/Header.js";
import SearchForm from "../SearchForm/SearchForm.js";
import Preloader from "../Preloader/Preloader.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import Footer from "../Footer/Footer";
import { useFilter } from "../../utils/useFilter";
import { DECKTOP, TABLET, MOBILE } from "../../constants/constants";

function Movies({
  isloggedIn,
  cards,
  onSearch,
  isNotFoundMovie,
  onLike,
  compareId,
  isPreload,
  onDelete,
  isSaveFilms
}) {
  const location = useLocation();

  const [isMovieShort, setisMovieShort] = React.useState(false);
  const filterMovies = useFilter(cards, isMovieShort);

  const [shownCardsMovies, setShownCardsMovies] = React.useState(0);

  function shownCountCards() {
    const display = window.innerWidth;
    if (display > 1180) {
      setShownCardsMovies(16);
    } else if (display > 1023) {
      setShownCardsMovies(12);
    } else if (display > 800) {
      setShownCardsMovies(8);
    } else if (display < 800) {
      setShownCardsMovies(5);
    }
  }

  React.useEffect(() => {
    shownCountCards();
  }, []);

  React.useEffect(() => {
    window.addEventListener("resize", shownCountCards);
  });

  function showMore() {
    const display = window.innerWidth;
    if (display > 1180) {
      setShownCardsMovies(shownCardsMovies + DECKTOP);
    } else if (display > 1023) {
      setShownCardsMovies(shownCardsMovies + TABLET);
    } else if (display < 1023) {
      setShownCardsMovies(shownCardsMovies + MOBILE);
    }
  }

  React.useEffect(() => {
    const toggle = JSON.parse(localStorage.getItem("toggle"));
    if (toggle) {
      setisMovieShort(true);
    }
  }, []);

  function handleToggle() {
    setisMovieShort((item) => !item);
    localStorage.setItem("toggle", !isMovieShort);

    setisMovieShort(!isMovieShort);
  }

  return (
    <>
      <Header isloggedIn={!isloggedIn} />
      <main className="movies">
        <SearchForm
          onSearch={onSearch}
          onChange={handleToggle}
          isMovieShort={isMovieShort}
        />

        {!isPreload ? (
          <MoviesCardList
            cards={filterMovies}
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
          {shownCardsMovies > 0 && filterMovies.length > shownCardsMovies ? (
            <button
              className={`moviesCardList__button ${
                location.pathname === "/saved-movies"
                  ? "moviesCardList__button_hidden"
                  : ""
              }`}
              onClick={showMore}
            >
              Ещё
            </button>
          ) : (
            ""
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Movies;
