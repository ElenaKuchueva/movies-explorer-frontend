import React from "react";
import "./SearchForm.css";

function SearchForm() {
  return (
    <div className="searchForm">
      <form className="searchForm__form">
        <input
          className="searchForm__input"
          type="text"
          name="password"
          id="searchForm__input"
          //  value={formValue.password}
          tabIndex="1"
          placeholder="Фильм"
        ></input>
        <button className="searchForm__button">Найти</button>
      </form>
      <div className="searchForm__toggle-switch">
        <label className="switch">
          <input className="checkbox"  type="checkbox" id="checkbox"/>
          <span className="slider">
              {/* Короткометражки */}
          </span>
        </label>

        <p className="searchForm__text">Короткометражки</p>
      </div>
    </div>
  );
}
 
export default SearchForm;
