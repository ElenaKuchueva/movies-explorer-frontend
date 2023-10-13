import React, { useEffect } from 'react';
import './SavedMovies.css';
import Header from '../Header/Header.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Footer from '../Footer/Footer';

function SavedMovies({ isloggedIn, isSaveFilms, onDelete, searchMovies, getSavedMovies }) {
  const [filteredMovies, setFilteredMovies] = React.useState([]);

  const [isSearchSave, setIsSearchSave] = React.useState(false);
  const [isShortFilm, setIsShortFilm] = React.useState(false);
  const [isNotFoundMovie, setisNotFoundMovie] = React.useState('');
  const [isSearchValueInput, setIsSearchValueInput] = React.useState('');

  const shortMovies = !isSearchSave ? getCheckbox(isSaveFilms) : getCheckbox(filteredMovies);
  const enterMovies = isSearchSave ? filteredMovies : isSaveFilms;

  useEffect(() => {
    getSavedMovies();
  }, []);

  function handleSaveToggle(evt) {
    if (evt.target.checked) {
      setIsShortFilm(true);
    } else {
      setIsShortFilm(false);
    }
  }
  function handleSubmit(query) {
    setIsSearchSave(true);
    const filterMovies = searchMovies(isSaveFilms, query);
    setFilteredMovies(filterMovies);
    if (filterMovies.length === 0) {
      setisNotFoundMovie('По вашему запросу ничего не найдено');
    } else {
      setisNotFoundMovie('');
    }
  }

  // React.useEffect(() => {
  //   setFilteredMovies((state) => state.filter((movie) => isSaveFilms.find((film) => film._id === movie._id)));
  // }, [isSaveFilms]);

  function getCheckbox(movies) {
    return movies.filter((i) => i.duration <= 40);
  }

  return (
    <>
      <Header isloggedIn={!isloggedIn} />
      <main className="savedMovies">
        <SearchForm
          onSearch={handleSubmit}
          onChange={handleSaveToggle}
          isMovieShort={isShortFilm}
          isSearchValueInput={isSearchValueInput}
          setIsSearchValueInput={setIsSearchValueInput}
        />
        <MoviesCardList
          onDelete={onDelete}
          // cards={isSaveFilms}
          cards={isShortFilm ? shortMovies : enterMovies}
          isSaveFilms={isSaveFilms}
          isNotFoundMovie={isNotFoundMovie}
        />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
