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
      <main className="savedMovies">
        <SearchForm />
        <MoviesCardList />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
