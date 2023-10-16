import React, { useEffect } from 'react';
import './SavedMovies.css';
import Header from '../Header/Header.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Footer from '../Footer/Footer';
import { searchMovies } from '../../utils/filter.js';
import * as api from '../../utils/MainApi.js';

function SavedMovies({ isloggedIn, onDelete }) {
  const [isSaveFilms, setIsSaveFilms] = React.useState([]);
  // const [filteredMovies, setFilteredMovies] = React.useState([]);

  const [isShortFilm, setIsShortFilm] = React.useState(false);
  const [isNotFoundMovie, setisNotFoundMovie] = React.useState('');
  const [isSearchValueInput, setIsSearchValueInput] = React.useState('');

  useEffect(() => {
    api
      .getCardsMovies()
      .then((data) => {
        setIsSaveFilms(data);
        localStorage.setItem('saveMovies', JSON.stringify(data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleSubmit(query) {
    const store = localStorage.getItem('saveMovies');
    if (store) {
      const filterMovies = searchMovies(JSON.parse(store), query, isShortFilm);
      setIsSaveFilms(filterMovies);
      if (filterMovies.length === 0) {
        setisNotFoundMovie('По вашему запросу ничего не найдено');
      } else {
        setisNotFoundMovie('');
      }
    }
  }

  function toggleCheckbox(evt) {
    const checkbox = evt.target.checked;
    setIsShortFilm(checkbox);
    const store = localStorage.getItem('saveMovies');
    if (store) {
      const search = searchMovies(JSON.parse(store), isSearchValueInput, checkbox);
      setIsSaveFilms(search);
    }
  }

  return (
    <>
      <Header isloggedIn={!isloggedIn} />
      <main className="savedMovies">
        <SearchForm
          onSearch={handleSubmit}
          onChange={toggleCheckbox}
          isMovieShort={isShortFilm}
          isSearchValueInput={isSearchValueInput}
          setIsSearchValueInput={setIsSearchValueInput}
        />
        <MoviesCardList
          onDelete={onDelete}
          cards={isSaveFilms}
          isSaveFilms={isSaveFilms}
          setIsSaveFilms={setIsSaveFilms}
          isNotFoundMovie={isNotFoundMovie}
        />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
