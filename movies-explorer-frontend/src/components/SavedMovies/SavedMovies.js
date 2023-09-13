import React from "react";
import "./SavedMovies.css";
import Header from "../Header/Header.js";
import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import Footer from "../Footer/Footer";

function SavedMovies({ isloggedIn }) {
  return (
    <>
      <Header isloggedIn={isloggedIn} />
      <div className="savedMovies">
        <SearchForm />
        <MoviesCardList />
      </div>
      <Footer />
    </>
  );
}

export default SavedMovies;
