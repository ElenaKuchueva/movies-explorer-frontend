import React from 'react';
import { useLocation } from 'react-router-dom';
import './SearchForm.css';

function SearchForm({ onSearch, onChange, isMovieShort, isSearchValueInput, setIsSearchValueInput }) {
  const location = useLocation();
  const [isErrorMessege, setIsErrorMessege] = React.useState(false);

  function hundleSubmit(evt) {
    evt.preventDefault();
    if (isSearchValueInput.trim().length === 0) {
      setIsErrorMessege(true);
    } else {
      setIsErrorMessege(false);
      onSearch(isSearchValueInput);
    }
  }

  React.useEffect(() => {
    if (location.pathname === '/movies') {
      const query = localStorage.getItem('query');
      if (query) {
        setIsSearchValueInput(query);
      }
    }
  }, []);

  return (
    <div className="searchForm">
      <form className="searchForm__form" onSubmit={hundleSubmit}>
        <input
          className="searchForm__input"
          type="text"
          name="password"
          id="searchForm__input"
          tabIndex="1"
          placeholder="Фильм"
          onChange={(e) => setIsSearchValueInput(e.target.value)}
          value={isSearchValueInput}></input>
        <button className="searchForm__button">Найти</button>
      </form>
      {isErrorMessege && <span className="searchForm__error-message">Нужно ввести ключевое слово</span>}
      <div className="searchForm__toggle-switch">
        <label className="switch">
          <input className="checkbox" type="checkbox" id="checkbox" onChange={onChange} checked={isMovieShort} />
          <span className="slider">{/* Короткометражки */}</span>
        </label>

        <p className="searchForm__text">Короткометражки</p>
      </div>
    </div>
  );
}

export default SearchForm;
